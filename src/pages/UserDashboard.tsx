import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { LogOut, Megaphone, GraduationCap, Images, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function UserDashboard() {
  const { user, role, loading, signOut } = useAuth();
  const navigate = useNavigate();

  // Dummy stats
  const stats = {
    forum: 156,
    campaigns: 12,
    education: 45,
    gallery: 89,
  };

  useEffect(() => {
    if (!loading && (!user || role !== "user")) {
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

  if (!user || role !== "user") {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-eco-primary/5 to-eco-secondary/5">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-eco-primary">User Dashboard</h1>
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
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Selamat Datang!</h2>
          <p className="text-muted-foreground">
            Lihat konten lingkungan yang tersedia di platform EcoHub
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Forum</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.forum}</div>
              <p className="text-xs text-muted-foreground">Pesan forum</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Kampanye</CardTitle>
              <Megaphone className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.campaigns}</div>
              <p className="text-xs text-muted-foreground">Kampanye aktif</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Edukasi</CardTitle>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.education}</div>
              <p className="text-xs text-muted-foreground">Materi edukasi</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Galeri</CardTitle>
              <Images className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.gallery}</div>
              <p className="text-xs text-muted-foreground">Foto dokumentasi</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Button onClick={() => navigate("/")} variant="outline">
            Kembali ke Beranda
          </Button>
        </div>
      </main>
    </div>
  );
}
