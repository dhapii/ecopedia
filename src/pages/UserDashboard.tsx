import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogOut, Megaphone, GraduationCap, Images, MessageSquare, Home, Edit2, Check, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function UserDashboard() {
  const { user, role, loading, signOut, updateProfile } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editUsername, setEditUsername] = useState(user?.username || "");
  const [editAvatar, setEditAvatar] = useState(user?.avatar || "");

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

  useEffect(() => {
    if (user) {
      setEditUsername(user.username);
      setEditAvatar(user.avatar);
    }
  }, [user]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const handleSaveProfile = () => {
    updateProfile(editUsername, editAvatar);
    setIsEditingProfile(false);
    toast({
      title: "Profile Updated",
      description: "Your profile has been updated successfully.",
    });
  };

  const handleCancelEdit = () => {
    setEditUsername(user?.username || "");
    setEditAvatar(user?.avatar || "");
    setIsEditingProfile(false);
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
    <div className="min-h-screen bg-gradient-to-br from-eco-primary/5 via-eco-secondary/5 to-eco-accent/5">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-eco-primary to-eco-secondary bg-clip-text text-transparent">
            User Dashboard
          </h1>
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={() => navigate("/")} className="gap-2">
              <Home className="h-4 w-4" />
              Kembali ke Beranda
            </Button>
            <Button variant="outline" onClick={handleSignOut} className="gap-2">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Profile Section */}
        <Card className="mb-8 border-2 border-eco-primary/20">
          <CardHeader className="bg-gradient-to-r from-eco-primary/10 to-eco-secondary/10">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-6">
                <Avatar className="h-24 w-24 border-4 border-background shadow-lg">
                  <AvatarImage src={isEditingProfile ? editAvatar : user.avatar} alt={user.username} />
                  <AvatarFallback className="text-2xl">{user.username.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  {isEditingProfile ? (
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="username" className="text-sm">Username</Label>
                        <Input
                          id="username"
                          value={editUsername}
                          onChange={(e) => setEditUsername(e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="avatar" className="text-sm">Avatar URL</Label>
                        <Input
                          id="avatar"
                          value={editAvatar}
                          onChange={(e) => setEditAvatar(e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-3xl font-bold text-foreground">{user.username}</h2>
                      <p className="text-muted-foreground">{user.email}</p>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center rounded-full bg-eco-secondary/10 px-3 py-1 text-sm font-medium text-eco-secondary">
                          Member
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                {isEditingProfile ? (
                  <>
                    <Button size="sm" onClick={handleSaveProfile} className="gap-2">
                      <Check className="h-4 w-4" />
                      Save
                    </Button>
                    <Button size="sm" variant="outline" onClick={handleCancelEdit} className="gap-2">
                      <X className="h-4 w-4" />
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button size="sm" variant="outline" onClick={() => setIsEditingProfile(true)} className="gap-2">
                    <Edit2 className="h-4 w-4" />
                    Edit Profile
                  </Button>
                )}
              </div>
            </div>
          </CardHeader>
        </Card>

        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Selamat Datang, {user.username}!</h2>
          <p className="text-muted-foreground">
            Lihat konten lingkungan yang tersedia di platform EcoHub
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Forum</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.forum}</div>
              <p className="text-xs text-muted-foreground">Pesan forum</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Kampanye</CardTitle>
              <Megaphone className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.campaigns}</div>
              <p className="text-xs text-muted-foreground">Kampanye aktif</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Edukasi</CardTitle>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.education}</div>
              <p className="text-xs text-muted-foreground">Materi edukasi</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
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

        <Card>
          <CardHeader>
            <CardTitle>Quick Access</CardTitle>
            <CardDescription>Akses cepat ke fitur-fitur EcoHub</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="h-auto py-4 justify-start" onClick={() => navigate("/products")}>
                <MessageSquare className="mr-3 h-5 w-5" />
                <div className="text-left">
                  <div className="font-semibold">Forum Chat</div>
                  <div className="text-sm text-muted-foreground">Diskusi dengan komunitas</div>
                </div>
              </Button>
              <Button variant="outline" className="h-auto py-4 justify-start" onClick={() => navigate("/education")}>
                <GraduationCap className="mr-3 h-5 w-5" />
                <div className="text-left">
                  <div className="font-semibold">Edukasi Lingkungan</div>
                  <div className="text-sm text-muted-foreground">Pelajari tentang lingkungan</div>
                </div>
              </Button>
              <Button variant="outline" className="h-auto py-4 justify-start" onClick={() => navigate("/campaigns")}>
                <Megaphone className="mr-3 h-5 w-5" />
                <div className="text-left">
                  <div className="font-semibold">Kampanye Hijau</div>
                  <div className="text-sm text-muted-foreground">Ikuti kampanye lingkungan</div>
                </div>
              </Button>
              <Button variant="outline" className="h-auto py-4 justify-start" onClick={() => navigate("/gallery")}>
                <Images className="mr-3 h-5 w-5" />
                <div className="text-left">
                  <div className="font-semibold">Galeri</div>
                  <div className="text-sm text-muted-foreground">Lihat dokumentasi lingkungan</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
