import { ArrowLeft, Store } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import SectionHeader from "@/components/SectionHeader";
import { toast } from "sonner";

const SellerRegistration = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Pendaftaran seller berhasil! Kami akan menghubungi Anda segera.");
  };

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
          icon={Store}
          title="Daftar Sebagai Seller"
          subtitle="Jual Produk Ramah Lingkungan"
          centered
        />

        <Card className="max-w-2xl mx-auto mt-12 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="storeName">Nama Toko</Label>
              <Input id="storeName" required />
            </div>

            <div>
              <Label htmlFor="ownerName">Nama Pemilik</Label>
              <Input id="ownerName" required />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>

            <div>
              <Label htmlFor="phone">Nomor Telepon</Label>
              <Input id="phone" type="tel" required />
            </div>

            <div>
              <Label htmlFor="description">Deskripsi Produk</Label>
              <Textarea id="description" rows={4} required />
            </div>

            <Button type="submit" className="w-full">
              Kirim Pendaftaran
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default SellerRegistration;
