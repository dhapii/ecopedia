import { ArrowLeft, Calendar, Target, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";

const Campaigns = () => {
  const navigate = useNavigate();

  const campaignFeatures = [
    {
      icon: Target,
      title: "Tantangan Hijau",
      description: "Ikuti berbagai tantangan ramah lingkungan"
    },
    {
      icon: Calendar,
      title: "Event Calendar",
      description: "Jadwal kegiatan lingkungan yang akan datang"
    },
    {
      icon: Users,
      title: "Komunitas",
      description: "Bergabung dengan komunitas peduli lingkungan"
    }
  ];

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

        <SectionHeader
          icon={Target}
          title="Green Campaign"
          subtitle="Kampanye Lingkungan"
          centered
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {campaignFeatures.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <item.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button onClick={() => navigate("/volunteer")} size="lg">
            Daftar Sebagai Volunteer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
