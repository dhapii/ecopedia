import { ArrowLeft, Camera, Image as ImageIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";

const Gallery = () => {
  const navigate = useNavigate();

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
          icon={Camera}
          title="EcoGallery"
          subtitle="Dokumentasi Lingkungan"
          centered
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <ImageIcon className="w-16 h-16 text-muted-foreground" />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">Gallery Item {item}</h3>
                <p className="text-sm text-muted-foreground">
                  Dokumentasi kegiatan lingkungan
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Galeri lengkap akan segera ditampilkan
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
