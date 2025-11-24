import { ArrowLeft, Trash2, Coins, Recycle, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";

const WasteManagement = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Recycle,
      title: "Bank Sampah Digital",
      description: "Kelola sampah Anda secara digital dan dapatkan poin"
    },
    {
      icon: Coins,
      title: "Sistem Poin",
      description: "Tukar sampah dengan poin yang dapat ditukar hadiah"
    },
    {
      icon: MapPin,
      title: "Lokasi Drop Point",
      description: "Temukan titik pengumpulan sampah terdekat"
    },
    {
      icon: Trash2,
      title: "Jenis Sampah",
      description: "Pelajari jenis-jenis sampah yang dapat didaur ulang"
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
          icon={Trash2}
          title="Waste Management Center"
          subtitle="Kelola Sampah, Raih Poin"
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <item.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Fitur lengkap akan segera tersedia
          </p>
        </div>
      </div>
    </div>
  );
};

export default WasteManagement;
