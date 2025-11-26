import { ArrowLeft, Camera, Image as ImageIcon, Plus, MapPin, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";
import { useAuth } from "@/lib/auth";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

import hutan2 from "@/assets/hutan-2.png";
import hutan1 from "@/assets/hutan-1.jpeg";

const Gallery = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const categories = ["Semua", "Penghijauan", "Bersih Pantai", "Daur Ulang", "Event", "Before-After"];

  const galleryItems = [
    {
      id: 1,
      title: "Penanaman 500 Pohon",
      category: "Penghijauan",
      location: "Taman Kota Jakarta",
      date: "15 Jan 2024",
      image: hutan2,
      photographer: "Budi Santoso",
      likes: 234,
      description: "Kegiatan penanaman pohon massal di Taman Kota Jakarta melibatkan 200 volunteer"
    },
    {
      id: 2,
      title: "Aksi Bersih Pantai Ancol",
      category: "Bersih Pantai",
      location: "Pantai Ancol",
      date: "12 Jan 2024",
      image: hutan1,
      photographer: "Siti Nurhaliza",
      likes: 189,
      description: "Pembersihan sampah plastik di sepanjang Pantai Ancol mengumpulkan 2 ton sampah"
    },
    {
      id: 3,
      title: "Workshop Daur Ulang Plastik",
      category: "Daur Ulang",
      location: "Balai RW 05",
      date: "10 Jan 2024",
      image: hutan2,
      photographer: "Ahmad Wijaya",
      likes: 156,
      description: "Pelatihan membuat kerajinan dari limbah plastik"
    },
    {
      id: 4,
      title: "Car Free Day Jakarta",
      category: "Event",
      location: "Jl. Sudirman",
      date: "7 Jan 2024",
      image: hutan1,
      photographer: "Dewi Lestari",
      likes: 445,
      description: "Ribuan warga menikmati udara bersih di hari bebas kendaraan bermotor"
    },
    {
      id: 5,
      title: "Before: Sungai Ciliwung",
      category: "Before-After",
      location: "Ciliwung, Jakarta",
      date: "5 Jan 2024",
      image: hutan2,
      photographer: "Hendra Kusuma",
      likes: 312,
      description: "Dokumentasi kondisi Sungai Ciliwung sebelum pembersihan"
    },
    {
      id: 6,
      title: "After: Sungai Ciliwung Bersih",
      category: "Before-After",
      location: "Ciliwung, Jakarta",
      date: "15 Jan 2024",
      image: hutan1,
      photographer: "Hendra Kusuma",
      likes: 578,
      description: "Hasil pembersihan Sungai Ciliwung setelah program 2 minggu"
    },
    {
      id: 7,
      title: "Festival Eco Fair 2024",
      category: "Event",
      location: "GBK Senayan",
      date: "3 Jan 2024",
      image: hutan2,
      photographer: "Maya Putri",
      likes: 892,
      description: "Festival tahunan produk ramah lingkungan dan edukasi"
    },
    {
      id: 8,
      title: "Taman Vertikal Sekolah",
      category: "Penghijauan",
      location: "SD Negeri 01",
      date: "1 Jan 2024",
      image: hutan1,
      photographer: "Rina Safitri",
      likes: 267,
      description: "Pembuatan taman vertikal di sekolah untuk edukasi siswa"
    },
    {
      id: 9,
      title: "Kerajinan dari Botol Bekas",
      category: "Daur Ulang",
      location: "Komunitas RT 03",
      date: "28 Des 2023",
      image: hutan2,
      photographer: "Joko Widodo",
      likes: 198,
      description: "Hasil karya kerajinan ibu-ibu PKK dari botol plastik bekas"
    }
  ];

  const filteredItems = selectedCategory === "Semua" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

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
              Tambah Foto
            </Button>
          )}
        </div>

        <SectionHeader
          icon={Camera}
          title="EcoGallery"
          subtitle="Dokumentasi Lingkungan"
          centered
        />

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mt-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="aspect-video bg-muted relative group cursor-pointer">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="secondary" size="sm">
                    <ImageIcon className="mr-2 h-4 w-4" />
                    Lihat Detail
                  </Button>
                </div>
                <Badge className="absolute top-3 right-3 bg-primary">
                  {item.category}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription className="text-sm">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Camera className="h-4 w-4" />
                    <span>{item.photographer}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t">
                  <span className="text-sm text-muted-foreground">
                    ❤️ {item.likes} likes
                  </span>
                  <Button variant="ghost" size="sm">
                    Bagikan
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upload Section */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-primary/5 border-primary/20 max-w-2xl mx-auto">
            <Camera className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Bagikan Momen Hijau Anda</h3>
            <p className="text-muted-foreground mb-6">
              Dokumentasikan kegiatan lingkungan Anda dan inspirasi orang lain untuk ikut berkontribusi
            </p>
            <Button size="lg">
              <Plus className="mr-2 h-4 w-4" />
              Upload Foto
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
