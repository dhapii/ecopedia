import { ArrowLeft, Calendar, Target, Users, Plus, MapPin, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";
import { useAuth } from "@/lib/auth";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

import hutan from "@/assets/hutan-1.jpeg";
import pantai from "@/assets/pantai.jpg";
import car from "@/assets/car-freeday.jpg";
import workshop from "@/assets/workshop-1.jpeg";
import sungai from "@/assets/sungai.jpg";
import sekolah from "@/assets/sekolah-1.jpg";

const Campaigns = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [showAddModal, setShowAddModal] = useState(false);

  const campaigns = [
    {
      id: 1,
      title: "Tanam 1000 Pohon",
      description: "Mari bersama-sama menanam 1000 pohon untuk menghitamkan kota kita",
      image: hutan,
      location: "Taman Kota Yogyakarta",
      date: "25 Februari 2024",
      participants: 234,
      status: "Aktif",
      target: 1000,
      progress: 650
    },
    {
      id: 2,
      title: "Bersih-Bersih Pantai",
      description: "Aksi bersih-bersih pantai dari sampah plastik dan limbah",
      image: pantai,
      location: "Pantai Parangtritis",
      date: "3 Maret 2024",
      participants: 156,
      status: "Aktif",
      target: 500,
      progress: 320
    },
    {
      id: 3,
      title: "Car Free Day",
      description: "Hari bebas kendaraan bermotor untuk mengurangi polusi udara",
      image: car,
      location: "Sudirman - Thamrin",
      date: "Setiap Minggu",
      participants: 1250,
      status: "Rutin",
      target: 2000,
      progress: 1250
    },
    {
      id: 4,
      title: "Workshop Kompos",
      description: "Belajar membuat kompos dari sampah organik rumah tangga",
      image: workshop,
      location: "Balai RW 05",
      date: "10 Maret 2024",
      participants: 45,
      status: "Mendatang",
      target: 50,
      progress: 45
    },
    {
      id: 5,
      title: "Peduli Sungai Ciliwung",
      description: "Program pembersihan dan revitalisasi Sungai Ciliwung",
      image: sungai,
      location: "Sepanjang Ciliwung",
      date: "17 Maret 2024",
      participants: 89,
      status: "Aktif",
      target: 200,
      progress: 89
    },
    {
      id: 6,
      title: "Edukasi Sekolah",
      description: "Program edukasi lingkungan hidup di sekolah-sekolah",
      image: sekolah,
      location: "SD Negeri 01",
      date: "20 Maret 2024",
      participants: 120,
      status: "Mendatang",
      target: 150,
      progress: 120
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Beranda
          </Button>
          
          {user?.email === "admin@ecohub.com" && (
            <Button onClick={() => setShowAddModal(true)} size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Tambah Campaign
            </Button>
          )}
        </div>

        <SectionHeader
          icon={Target}
          title="Green Campaign"
          subtitle="Kampanye Lingkungan"
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="aspect-video bg-muted relative">
                <img src={campaign.image} alt={campaign.title} className="w-full h-full object-cover" />
                <Badge className={`absolute top-3 right-3 ${
                  campaign.status === 'Aktif' ? 'bg-green-500' : 
                  campaign.status === 'Mendatang' ? 'bg-blue-500' : 'bg-purple-500'
                }`}>
                  {campaign.status}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{campaign.title}</CardTitle>
                <CardDescription className="text-sm">
                  {campaign.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{campaign.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{campaign.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{campaign.participants} peserta terdaftar</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>Progress</span>
                    <span>{Math.round((campaign.progress / campaign.target) * 100)}%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all"
                      style={{ width: `${(campaign.progress / campaign.target) * 100}%` }}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {campaign.progress} / {campaign.target} target
                  </div>
                </div>

                <Button className="w-full mt-4" size="sm">
                  <Users className="mr-2 h-4 w-4" />
                  Daftar Sekarang
                </Button>
              </CardContent>
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
