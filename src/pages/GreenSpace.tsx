import { ArrowLeft, Trees, Leaf, TrendingUp, Plus, MapPin, Droplets } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";
import { useAuth } from "@/lib/auth";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

import hutan2 from "@/assets/hutan-2.png";
import hutan1 from "@/assets/hutan-1.jpeg";
import hutan3 from "@/assets/hutan-3.jpg";
import suropati from "@/assets/suropati.jpg";
import ujung from  "@/assets/ujung.jpg";
import kambas from "@/assets/kambas.jpg";
import tanjung from "@/assets/tanjung.jpeg";
import srengseng from "@/assets/srengseng.jpg";
import menteng from "@/assets/menteng.jpg";

const GreenSpace = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [showAddModal, setShowAddModal] = useState(false);

  const greenSpaces = [
    {
      id: 1,
      name: "Taman Suropati",
      location: "Menteng, Jakarta Pusat",
      area: "16,000 m²",
      trees: 450,
      co2Absorbed: "32.5 ton/tahun",
      status: "Terkelola Baik",
      image: suropati,
      lastMaintenance: "15 Jan 2024"
    },
    {
      id: 2,
      name: "Hutan Kota Srengseng",
      location: "Kembangan, Jakarta Barat",
      area: "15 ha",
      trees: 3500,
      co2Absorbed: "252 ton/tahun",
      status: "Terkelola Baik",
      image: srengseng,
      lastMaintenance: "12 Jan 2024"
    },
    {
      id: 3,
      name: "Taman Menteng",
      location: "Menteng, Jakarta Pusat",
      area: "30,000 m²",
      trees: 890,
      co2Absorbed: "64.1 ton/tahun",
      status: "Terkelola Baik",
      image: menteng,
      lastMaintenance: "10 Jan 2024"
    },
    {
      id: 4,
      name: "Taman Nasional Tanjung Puting",
      location: "Teluk Pulai, Kumai",
      area: "7,800 m²",
      trees: 230,
      co2Absorbed: "16.6 ton/tahun",
      status: "Perlu Perhatian",
      image: tanjung,
      lastMaintenance: "5 Jan 2024"
    },
    {
      id: 5,
      name: "Taman Nasional Way Kambas",
      location: "Lampung Timur, Provinsi Lampung",
      area: "12,500 m²",
      trees: 340,
      co2Absorbed: "24.5 ton/tahun",
      status: "Terkelola Baik",
      image: kambas,
      lastMaintenance: "8 Jan 2024"
    },
    {
      id: 6,
      name: "Taman Nasional Ujung Kulon",
      location: "Ujung Barat Pulau Jawa",
      area: "8 ha",
      trees: 1800,
      co2Absorbed: "129.6 ton/tahun",
      status: "Terkelola Baik",
      image: ujung,
      lastMaintenance: "14 Jan 2024"
    }
  ];

  const totalTrees = greenSpaces.reduce((sum, space) => sum + space.trees, 0);
  const totalCO2 = greenSpaces.reduce((sum, space) => sum + parseFloat(space.co2Absorbed), 0);

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
              Tambah Area Hijau
            </Button>
          )}
        </div>

        <SectionHeader
          icon={Trees}
          title="Green Space"
          subtitle="Ruang Terbuka Hijau"
          centered
        />

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Area Hijau</p>
                <h3 className="text-2xl font-bold mt-1">{greenSpaces.length}</h3>
              </div>
              <Trees className="w-10 h-10 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground mt-2">Area terkelola</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Pohon</p>
                <h3 className="text-2xl font-bold mt-1">{totalTrees.toLocaleString()}</h3>
              </div>
              <Leaf className="w-10 h-10 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground mt-2">Pohon tertanam</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Penyerapan CO₂</p>
                <h3 className="text-2xl font-bold mt-1">{totalCO2.toFixed(1)}</h3>
              </div>
              <TrendingUp className="w-10 h-10 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground mt-2">Ton per tahun</p>
          </Card>
        </div>

        {/* Green Spaces Grid */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Daftar Ruang Terbuka Hijau</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {greenSpaces.map((space) => (
              <Card key={space.id} className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="aspect-video bg-muted relative">
                  <img src={space.image} alt={space.name} className="w-full h-full object-cover" />
                  <Badge className={`absolute top-3 right-3 ${
                    space.status === 'Terkelola Baik' ? 'bg-green-500' : 'bg-yellow-500'
                  }`}>
                    {space.status}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{space.name}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {space.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Luas Area</p>
                      <p className="font-bold">{space.area}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Jumlah Pohon</p>
                      <p className="font-bold text-primary">{space.trees}</p>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 rounded-lg p-3 mb-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Leaf className="h-4 w-4 text-primary" />
                      <span className="text-xs font-medium">Penyerapan CO₂</span>
                    </div>
                    <p className="text-lg font-bold text-primary">{space.co2Absorbed}</p>
                  </div>

                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                    <Droplets className="h-3 w-3" />
                    Pemeliharaan terakhir: {space.lastMaintenance}
                  </div>

                  <Button className="w-full mt-4" variant="outline" size="sm">
                    Lihat Detail
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Program Info */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <Trees className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Program Penghijauan</h3>
            <p className="text-muted-foreground mb-4">
              Bergabunglah dalam program penanaman pohon untuk meningkatkan kualitas udara dan lingkungan
            </p>
            <Button className="w-full">Ikut Program</Button>
          </Card>

          <Card className="p-6">
            <Leaf className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Adopsi Pohon</h3>
            <p className="text-muted-foreground mb-4">
              Adopsi dan rawat pohon Anda sendiri, pantau pertumbuhannya secara digital
            </p>
            <Button className="w-full">Adopsi Sekarang</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GreenSpace;
