import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft, Send, Plus } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { toast } from "sonner";

// Dummy messages data
const DUMMY_MESSAGES = [
  { id: "1", content: "Halo semua! Senang bisa bergabung di forum ini", user_id: "1", user_email: "admin@ecohub.com", created_at: "2024-01-15T10:30:00" },
  { id: "2", content: "Selamat datang! Mari kita diskusi tentang lingkungan", user_id: "2", user_email: "user@ecohub.com", created_at: "2024-01-15T10:35:00" },
  { id: "3", content: "Ada yang punya tips untuk mengurangi sampah plastik?", user_id: "2", user_email: "user@ecohub.com", created_at: "2024-01-15T10:40:00" },
  { id: "4", content: "Gunakan tas belanja yang bisa dipakai ulang dan hindari sedotan plastik", user_id: "1", user_email: "admin@ecohub.com", created_at: "2024-01-15T10:45:00" },
];

export default function Products() {
  const navigate = useNavigate();
  const { user, role } = useAuth();
  const [messages, setMessages] = useState(DUMMY_MESSAGES);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !user) return;

    const message = {
      id: String(messages.length + 1),
      content: newMessage,
      user_id: user.id,
      user_email: user.email,
      created_at: new Date().toISOString(),
    };

    setMessages([...messages, message]);
    setNewMessage("");
    toast.success("Pesan terkirim");
  };

  const getInitials = (email: string) => {
    return email.charAt(0).toUpperCase();
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Beranda
          </Button>
          <Card className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Forum Chat EcoHub</h2>
            <p className="text-muted-foreground mb-6">
              Anda harus login untuk mengakses forum chat
            </p>
            <Button onClick={() => navigate("/auth")}>
              Login / Daftar
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke Beranda
        </Button>

        <SectionHeader
          icon={Send}
          title="Forum Chat"
          subtitle="Diskusi dan Berbagi tentang Lingkungan"
          centered
        />

        <Card className="mt-8">
          <div className="p-4 border-b flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Chat Room EcoHub</h3>
              <p className="text-sm text-muted-foreground">
                {messages.length} pesan
              </p>
            </div>
            {role === "admin" && (
              <Button size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Moderasi
              </Button>
            )}
          </div>

          <ScrollArea className="h-[500px] p-4">
            {messages.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <p className="text-muted-foreground">
                  Belum ada pesan. Mulai percakapan!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${
                      message.user_id === user?.id
                        ? "flex-row-reverse"
                        : ""
                    }`}
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>
                        {getInitials(message.user_email || "U")}
                      </AvatarFallback>
                    </Avatar>
                    <div
                      className={`flex flex-col ${
                        message.user_id === user?.id
                          ? "items-end"
                          : "items-start"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium">
                          {message.user_email}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {formatTime(message.created_at)}
                        </span>
                      </div>
                      <div
                        className={`rounded-lg px-4 py-2 max-w-md ${
                          message.user_id === user?.id
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>

          <form
            onSubmit={handleSendMessage}
            className="p-4 border-t flex gap-2"
          >
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Ketik pesan..."
              className="flex-1"
            />
            <Button type="submit" size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
