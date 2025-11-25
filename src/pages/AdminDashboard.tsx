import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogOut, MessageSquare } from "lucide-react";

export default function AdminDashboard() {
  const { user, role, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && (!user || role !== "admin")) {
      navigate("/auth");
    }
  }, [user, role, loading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-eco-primary"></div>
      </div>
    );
  }

  if (!user || role !== "admin") {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-eco-primary/5 to-eco-secondary/5">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-eco-primary">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{user.email}</span>
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="forum" className="w-full">
          <TabsList className="grid w-full grid-cols-1">
            <TabsTrigger value="forum">
              <MessageSquare className="mr-2 h-4 w-4" />
              Forum Chat
            </TabsTrigger>
          </TabsList>

          <TabsContent value="forum" className="mt-6">
            <div className="text-center py-12">
              <MessageSquare className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">Forum Chat Management</h3>
              <p className="text-muted-foreground mb-4">Kelola pesan dan aktivitas forum</p>
              <Button onClick={() => navigate("/products")}>
                Buka Forum Chat
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
