import { ArrowLeft, BookOpen, Video, Award, FileText, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";
import { useAuth } from "@/lib/auth";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";


import dummy1 from "@/assets/dummy-1.png";

const Education = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [showAddModal, setShowAddModal] = useState(false);

  const articles = [

    {
      id: 1,
      title: "Mengenal Konsep Zero Waste",
      category: "Daur Ulang",
      description: "Pelajari bagaimana menerapkan gaya hidup zero waste dalam kehidupan sehari-hari untuk mengurangi sampah plastik",
      image: dummy1,
      author: "Dr. Budi Santoso",
      date: "15 Jan 2024",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Dampak Perubahan Iklim",
      category: "Iklim",
      description: "Memahami dampak perubahan iklim global dan langkah-langkah mitigasi yang dapat dilakukan",
      image: dummy1,
      author: "Prof. Siti Rahayu",
      date: "12 Jan 2024",
      readTime: "8 min"
    },
    {
      id: 3,
      title: "Energi Terbarukan",
      category: "Energi",
      description: "Eksplorasi berbagai jenis energi terbarukan dan implementasinya di Indonesia",
      image: dummy1,
      author: "Ir. Ahmad Wijaya",
      date: "10 Jan 2024",
      readTime: "6 min"
    },
    {
      id: 4,
      title: "Konservasi Air Bersih",
      category: "Air",
      description: "Tips praktis menghemat penggunaan air dan menjaga kualitas sumber air",
      image: dummy1,
      author: "Dr. Maya Putri",
      date: "8 Jan 2024",
      readTime: "4 min"
    },
    {
      id: 5,
      title: "Biodiversitas Indonesia",
      category: "Konservasi",
      description: "Kekayaan keanekaragaman hayati Indonesia dan upaya pelestariannya",
      image: dummy1,
      author: "Prof. Hendra Kusuma",
      date: "5 Jan 2024",
      readTime: "7 min"
    },
    {
      id: 6,
      title: "Pertanian Organik",
      category: "Pertanian",
      description: "Mengenal metode pertanian organik yang ramah lingkungan dan berkelanjutan",
      image: dummy1,
      author: "Ir. Dewi Lestari",
      date: "3 Jan 2024",
      readTime: "5 min"
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
              Tambah Artikel
            </Button>
          )}
        </div>

        <SectionHeader
          icon={BookOpen}
          title="Eco Education"
          subtitle="Pembelajaran Berkelanjutan"
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="aspect-video bg-muted relative">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                <Badge className="absolute top-3 right-3 bg-primary">{article.category}</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{article.title}</CardTitle>
                <CardDescription className="text-sm">
                  {article.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{article.author}</span>
                  <span>{article.readTime} read</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">{article.date}</div>
                <Button className="w-full mt-4" variant="outline" size="sm">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Baca Artikel
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Video className="w-10 h-10 text-primary" />
              <div>
                <h3 className="text-xl font-bold">Video Tutorial</h3>
                <p className="text-sm text-muted-foreground">15 video tersedia</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Pelajari praktik ramah lingkungan melalui video tutorial interaktif
            </p>
            <Button variant="outline" className="w-full">Lihat Semua Video</Button>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Award className="w-10 h-10 text-primary" />
              <div>
                <h3 className="text-xl font-bold">Quiz & Sertifikat</h3>
                <p className="text-sm text-muted-foreground">8 quiz tersedia</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Uji pemahaman Anda dan dapatkan sertifikat digital
            </p>
            <Button variant="outline" className="w-full">Mulai Quiz</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Education;
