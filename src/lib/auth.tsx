import { createContext, useContext, useState, ReactNode } from "react";

type Role = "admin" | "user" | null;

interface User {
  id: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  role: Role;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Dummy users stored locally
const USERS = [
  { id: "1", email: "admin@ecohub.com", password: "admin123", role: "admin" as Role },
  { id: "2", email: "user@ecohub.com", password: "user123", role: "user" as Role },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<Role>(null);
  const [loading] = useState(false);

  const signIn = async (email: string, password: string) => {
    const foundUser = USERS.find((u) => u.email === email && u.password === password);
    if (foundUser) {
      setUser({ id: foundUser.id, email: foundUser.email });
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
    };
    USERS.push(newUser);
    setUser({ id: newUser.id, email: newUser.email });
    setRole(newUser.role);
    return { error: null };
  };

  const signOut = async () => {
    setUser(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ user, role, loading, signIn, signUp, signOut }}>
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
