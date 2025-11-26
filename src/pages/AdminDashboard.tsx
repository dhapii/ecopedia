import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogOut, MessageSquare, Megaphone, GraduationCap, Images, Home, Edit2, Check, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AdminDashboard() {
  const { user, role, loading, signOut, updateProfile } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editUsername, setEditUsername] = useState(user?.username || "");
  const [editAvatar, setEditAvatar] = useState(user?.avatar || "");

  useEffect(() => {
    if (!loading && (!user || role !== "admin")) {
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

  if (!user || role !== "admin") {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-eco-primary/5 via-eco-secondary/5 to-eco-accent/5">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-eco-primary to-eco-secondary bg-clip-text text-transparent">
            Admin Dashboard
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
                        <span className="inline-flex items-center rounded-full bg-eco-primary/10 px-3 py-1 text-sm font-medium text-eco-primary">
                          Administrator
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

        {/* Management Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="campaigns">
              <Megaphone className="mr-2 h-4 w-4" />
              Campaigns
            </TabsTrigger>
            <TabsTrigger value="education">
              <GraduationCap className="mr-2 h-4 w-4" />
              Education
            </TabsTrigger>
            <TabsTrigger value="gallery">
              <Images className="mr-2 h-4 w-4" />
              Gallery
            </TabsTrigger>
            <TabsTrigger value="forum">
              <MessageSquare className="mr-2 h-4 w-4" />
              Forum
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Campaigns</CardTitle>
                  <Megaphone className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">3 active campaigns</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Education Materials</CardTitle>
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">45</div>
                  <p className="text-xs text-muted-foreground">15 articles, 30 videos</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Gallery Items</CardTitle>
                  <Images className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">89</div>
                  <p className="text-xs text-muted-foreground">Photos & documentation</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Forum Messages</CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">156</div>
                  <p className="text-xs text-muted-foreground">24 today</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates across all modules</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { type: "campaign", title: "Beach Cleanup 2024", time: "2 hours ago" },
                    { type: "education", title: "Climate Change Basics", time: "5 hours ago" },
                    { type: "forum", title: "New discussion in forum", time: "1 day ago" },
                    { type: "gallery", title: "New photos uploaded", time: "2 days ago" },
                  ].map((activity, idx) => (
                    <div key={idx} className="flex items-center justify-between border-b pb-3 last:border-0">
                      <div>
                        <p className="font-medium">{activity.title}</p>
                        <p className="text-sm text-muted-foreground capitalize">{activity.type}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="campaigns">
            <Card>
              <CardHeader>
                <CardTitle>Manage Campaigns</CardTitle>
                <CardDescription>Create and manage environmental campaigns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Megaphone className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Campaign Management</h3>
                  <p className="text-muted-foreground mb-4">Manage environmental campaigns and initiatives</p>
                  <Button>Add New Campaign</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="education">
            <Card>
              <CardHeader>
                <CardTitle>Manage Education Content</CardTitle>
                <CardDescription>Create and manage educational materials</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <GraduationCap className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Education Management</h3>
                  <p className="text-muted-foreground mb-4">Manage articles, videos, and educational resources</p>
                  <Button>Add New Content</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery">
            <Card>
              <CardHeader>
                <CardTitle>Manage Gallery</CardTitle>
                <CardDescription>Upload and manage environmental documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Images className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Gallery Management</h3>
                  <p className="text-muted-foreground mb-4">Upload and organize environmental photos</p>
                  <Button>Upload Photos</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="forum">
            <Card>
              <CardHeader>
                <CardTitle>Forum Moderation</CardTitle>
                <CardDescription>Manage forum messages and discussions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <MessageSquare className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Forum Management</h3>
                  <p className="text-muted-foreground mb-4">Moderate and manage forum discussions</p>
                  <Button onClick={() => navigate("/products")}>
                    Open Forum
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
