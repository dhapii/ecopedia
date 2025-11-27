import { createContext, useContext, useState, ReactNode } from "react";

type Role = "admin" | "user" | null;

interface User {
  id: string;
  email: string;
  username: string;
  avatar: string;
}

interface AuthContextType {
  user: User | null;
  role: Role;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  updateProfile: (username: string, avatar: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Dummy users stored locally
const USERS = [
  { 
    id: "1", 
    email: "admin@ecopedia.com", 
    password: "admin123", 
    role: "admin" as Role,
    username: "Admin EcoPedia",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=admin"
  },
  { 
    id: "2", 
    email: "user@ecopedia.com", 
    password: "user123", 
    role: "user" as Role,
    username: "User EcoPedia",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=user"
  },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<Role>(null);
  const [loading] = useState(false);

  const signIn = async (email: string, password: string) => {
    const foundUser = USERS.find((u) => u.email === email && u.password === password);
    if (foundUser) {
      setUser({ 
        id: foundUser.id, 
        email: foundUser.email,
        username: foundUser.username,
        avatar: foundUser.avatar
      });
      setRole(foundUser.role);
      return { error: null };
    } else {
      return { error: { message: "Invalid credentials" } };
    }
  };

  const signUp = async (email: string, password: string) => {
    // For dummy implementation, just add to local state
    const newUser = {
      id: String(USERS.length + 1),
      email,
      password,
      role: "user" as Role,
      username: `User ${USERS.length + 1}`,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${USERS.length + 1}`
    };
    USERS.push(newUser);
    setUser({ 
      id: newUser.id, 
      email: newUser.email,
      username: newUser.username,
      avatar: newUser.avatar
    });
    setRole(newUser.role);
    return { error: null };
  };

  const updateProfile = (username: string, avatar: string) => {
    if (user) {
      setUser({ ...user, username, avatar });
      // Update in USERS array
      const userIndex = USERS.findIndex(u => u.id === user.id);
      if (userIndex !== -1) {
        USERS[userIndex].username = username;
        USERS[userIndex].avatar = avatar;
      }
    }
  };

  const signOut = async () => {
    setUser(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ user, role, loading, signIn, signUp, signOut, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
