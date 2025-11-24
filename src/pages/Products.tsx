import { ArrowLeft, ShoppingBag, Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";

const Products = () => {
  const navigate = useNavigate();

  const products = [
    { name: "Tas Ramah Lingkungan", price: "Rp 75.000" },
    { name: "Sedotan Bambu", price: "Rp 25.000" },
    { name: "Botol Minum Reusable", price: "Rp 50.000" },
    { name: "Lunch Box Ramah Lingkungan", price: "Rp 85.000" },
    { name: "Sabun Organik", price: "Rp 35.000" },
    { name: "Tote Bag Kanvas", price: "Rp 65.000" },
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
          icon={ShoppingBag}
          title="EcoProducts"
          subtitle="Produk Ramah Lingkungan"
          centered
        />

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-muted flex items-center justify-center">
                <Leaf className="w-16 h-16 text-primary" />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">{product.name}</h3>
                <p className="text-primary font-semibold">{product.price}</p>
                <Button className="w-full mt-4" size="sm">
                  Lihat Detail
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button onClick={() => navigate("/seller-registration")} size="lg">
            Daftar Sebagai Seller
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;
