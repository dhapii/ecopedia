import { ArrowLeft, BookOpen, Video, Award, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";

const Education = () => {
  const navigate = useNavigate();

  const educationItems = [
    {
      icon: FileText,
      title: "Artikel Lingkungan",
      description: "Bacaan edukatif tentang pelestarian lingkungan dan keberlanjutan"
    },
    {
      icon: Video,
      title: "Video Tutorial",
      description: "Konten video interaktif tentang praktik ramah lingkungan"
    },
    {
      icon: Award,
      title: "Sertifikat",
      description: "Dapatkan sertifikat setelah menyelesaikan program edukasi"
    },
    {
      icon: BookOpen,
      title: "Kuis Interaktif",
      description: "Uji pengetahuan Anda tentang lingkungan hidup"
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
          icon={BookOpen}
          title="Eco Education"
          subtitle="Pembelajaran Berkelanjutan"
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {educationItems.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <item.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Konten pembelajaran akan segera ditambahkan
          </p>
          <Button onClick={() => navigate("/")}>
            Kembali ke Beranda
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Education;
