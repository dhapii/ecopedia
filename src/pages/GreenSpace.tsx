import { ArrowLeft, Trees, Leaf, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";

const GreenSpace = () => {
  const navigate = useNavigate();

  const initiatives = [
    {
      icon: Trees,
      title: "Penghijauan",
      description: "Program penanaman pohon di berbagai lokasi"
    },
    {
      icon: Leaf,
      title: "Taman Kota",
      description: "Pengembangan dan pemeliharaan taman kota"
    },
    {
      icon: TrendingUp,
      title: "Monitoring CO2",
      description: "Lacak penyerapan karbon dari area hijau"
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
          icon={Trees}
          title="Green Space"
          subtitle="Ruang Terbuka Hijau"
          centered
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {initiatives.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <item.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Data lengkap akan segera ditampilkan
          </p>
        </div>
      </div>
    </div>
  );
};

export default GreenSpace;
