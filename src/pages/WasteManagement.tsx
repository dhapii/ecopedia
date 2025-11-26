import { ArrowLeft, Trash2, Coins, Recycle, MapPin, Plus, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";
import { useAuth } from "@/lib/auth";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const WasteManagement = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [showAddModal, setShowAddModal] = useState(false);

  const transactions = [
    {
      id: 1,
      user: "Budi Santoso",
      wasteType: "Plastik",
      weight: 5.2,
      points: 52,
      date: "18 Jan 2024",
      status: "Selesai"
    },
    {
      id: 2,
      user: "Siti Nurhaliza",
      wasteType: "Kertas",
      weight: 3.8,
      points: 38,
      date: "18 Jan 2024",
      status: "Selesai"
    },
    {
      id: 3,
      user: "Ahmad Wijaya",
      wasteType: "Botol Kaca",
      weight: 7.5,
      points: 75,
      date: "17 Jan 2024",
      status: "Selesai"
    },
    {
      id: 4,
      user: "Dewi Lestari",
      wasteType: "Kaleng",
      weight: 2.1,
      points: 21,
      date: "17 Jan 2024",
      status: "Proses"
    }
  ];

  const wasteTypes = [
    { type: "Plastik", price: "10 poin/kg", icon: "♻️", color: "bg-blue-500" },
    { type: "Kertas", price: "10 poin/kg", icon: "📄", color: "bg-yellow-500" },
    { type: "Botol Kaca", price: "10 poin/kg", icon: "🍾", color: "bg-green-500" },
    { type: "Kaleng", price: "10 poin/kg", icon: "🥫", color: "bg-orange-500" },
    { type: "Elektronik", price: "50 poin/kg", icon: "📱", color: "bg-purple-500" },
    { type: "Logam", price: "15 poin/kg", icon: "⚙️", color: "bg-gray-500" }
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
              Tambah Transaksi
            </Button>
          )}
        </div>

        <SectionHeader
          icon={Trash2}
          title="Waste Management Center"
          subtitle="Kelola Sampah, Raih Poin"
          centered
        />

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Transaksi</p>
                <h3 className="text-2xl font-bold mt-1">1,234</h3>
              </div>
              <Recycle className="w-10 h-10 text-primary" />
            </div>
            <div className="flex items-center gap-1 mt-2 text-sm text-green-500">
              <TrendingUp className="w-4 h-4" />
              <span>+12% bulan ini</span>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Sampah Terkumpul</p>
                <h3 className="text-2xl font-bold mt-1">2.5 Ton</h3>
              </div>
              <Trash2 className="w-10 h-10 text-primary" />
            </div>
            <div className="flex items-center gap-1 mt-2 text-sm text-green-500">
              <TrendingUp className="w-4 h-4" />
              <span>+8% bulan ini</span>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Poin</p>
                <h3 className="text-2xl font-bold mt-1">25,680</h3>
              </div>
              <Coins className="w-10 h-10 text-primary" />
            </div>
            <div className="flex items-center gap-1 mt-2 text-sm text-green-500">
              <TrendingUp className="w-4 h-4" />
              <span>+15% bulan ini</span>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Drop Points</p>
                <h3 className="text-2xl font-bold mt-1">24</h3>
              </div>
              <MapPin className="w-10 h-10 text-primary" />
            </div>
            <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
              <span>Lokasi aktif</span>
            </div>
          </Card>
        </div>

        {/* Waste Types */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Jenis Sampah & Harga</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {wasteTypes.map((waste, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className={`w-16 h-16 ${waste.color} rounded-full flex items-center justify-center text-3xl mx-auto mb-3`}>
                  {waste.icon}
                </div>
                <h3 className="font-bold mb-1">{waste.type}</h3>
                <p className="text-sm text-muted-foreground">{waste.price}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Transaksi Terbaru</h2>
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b bg-muted/50">
                    <tr>
                      <th className="text-left p-4 font-semibold">Pengguna</th>
                      <th className="text-left p-4 font-semibold">Jenis Sampah</th>
                      <th className="text-left p-4 font-semibold">Berat (kg)</th>
                      <th className="text-left p-4 font-semibold">Poin</th>
                      <th className="text-left p-4 font-semibold">Tanggal</th>
                      <th className="text-left p-4 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((transaction) => (
                      <tr key={transaction.id} className="border-b hover:bg-muted/30 transition-colors">
                        <td className="p-4">{transaction.user}</td>
                        <td className="p-4">{transaction.wasteType}</td>
                        <td className="p-4">{transaction.weight} kg</td>
                        <td className="p-4 font-bold text-primary">{transaction.points} pts</td>
                        <td className="p-4 text-muted-foreground">{transaction.date}</td>
                        <td className="p-4">
                          <Badge variant={transaction.status === "Selesai" ? "default" : "secondary"}>
                            {transaction.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="p-8 bg-primary/5 border-primary/20">
            <Recycle className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Mulai Kelola Sampah Anda</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Tukar sampah Anda dengan poin yang bisa ditukar dengan berbagai hadiah menarik
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg">
                Cari Drop Point Terdekat
              </Button>
              <Button size="lg" variant="outline">
                Lihat Hadiah
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WasteManagement;
