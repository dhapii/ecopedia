import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  GraduationCap,
  Megaphone,
  Recycle,
  TreePine,
  Palmtree,
  Camera,
  ShoppingBag,
  Award,
  BookOpen,
  Users,
  MapPin,
  TrendingUp,
  Heart,
  Leaf,
} from "lucide-react";
import educationImage from "@/assets/education-icon.jpg";
import campaignImage from "@/assets/campaign-icon.jpg";
import wasteImage from "@/assets/waste-icon.jpg";
import travelImage from "@/assets/travel-icon.jpg";
import campagin1 from "@/assets/campaign-1.jpg";
import Pandu from "@/assets/pandu.jpg";
import sampah from "@/assets/baksampah.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* Eco Education Section */}
      <section id="education" className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={GraduationCap}
            title="Eco Education"
            subtitle="Edukasi Lingkungan"
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <FeatureCard
              icon={BookOpen}
              title="Portal Edukasi"
              description="Artikel, infografis, dan video tentang isu lingkungan global dan solusinya"
              image={educationImage}
              items={[
                "100+ artikel lengkap",
                "Infografis menarik",
                "Video pembelajaran",
              ]}
              gradient="primary"
            />
            <FeatureCard
              icon={Award}
              title="Modul & Quiz"
              description="Belajar interaktif dengan modul terstruktur dan dapatkan sertifikat"
              items={[
                "Modul belajar bertingkat",
                "Quiz interaktif",
                "Sertifikat otomatis",
                "Progress tracking",
              ]}
              gradient="secondary"
            />
            <FeatureCard
              icon={Recycle}
              title="Zero-Waste Lifestyle"
              description="Panduan praktis menerapkan gaya hidup tanpa sampah"
              items={[
                "Tips harian zero-waste",
                "Daur ulang kreatif",
                "DIY eco-friendly",
                "Kompos rumahan",
              ]}
              gradient="earth"
            />
          </div>
        </div>
      </section>

      {/* Green Campaign Section */}
      <section id="campaign" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={Megaphone}
            title="Green Campaign"
            subtitle="Kampanye Peduli Lingkungan"
            centered
          />

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            <FeatureCard
              icon={Heart}
              title="Kampanye Digital"
              description="Ikuti dan dukung kampanye lingkungan yang sedang berjalan"
              image={campaignImage}
              items={[
                "Poster kampanye gratis",
                "Konten media sosial",
                "Panduan aksi hijau",
              ]}
              gradient="primary"
            />
            <FeatureCard
              icon={Users}
              title="Gerakan Aksi Hijau"
              description="Bergabung dengan komunitas volunteer dan buat perubahan nyata"
              image={campagin1}
              items={[
                "Challenge harian",
                "Form volunteer",
                "Kalender event",
                "Komunitas aktif",
              ]}
              gradient="secondary"
            />
          </div>

          <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-center text-primary-foreground">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Siap Bergabung dengan Gerakan Hijau?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Daftar sekarang dan mulai kontribusi nyata untuk lingkungan
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-background text-primary hover:bg-background/90 shadow-medium"
            >
              Daftar Volunteer
            </Button>
          </div>
        </div>
      </section>

      {/* Waste Management Section */}
      <section id="waste" className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={Recycle}
            title="Waste Management Center"
            subtitle="Pengelolaan Limbah Digital"
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <FeatureCard
              icon={TrendingUp}
              title="Bank Sampah Digital"
              description="Setor sampah, kumpulkan poin, dan tukar dengan hadiah menarik"
              image={wasteImage}
              items={[
                "Sistem poin otomatis",
                "Riwayat transaksi",
                "Tukar poin hadiah",
              ]}
              gradient="primary"
            />
            <FeatureCard
              icon={Recycle}
              title="Panduan Pemilahan"
              description="Belajar cara memilah sampah dengan benar untuk daur ulang maksimal"
              image={sampah}
              items={[
                "Kategori sampah lengkap",
                "Video tutorial",
                "Tips praktis",
                "FAQ pemilahan",
              ]}
              gradient="secondary"
            />
            <FeatureCard
              icon={MapPin}
              title="Lokasi Drop Point"
              description="Temukan tempat pembuangan dan pengumpulan sampah terdekat"
              items={[
                "Peta interaktif",
                "Filter kategori",
                "Jam operasional",
                "Kontak lokasi",
              ]}
              gradient="earth"
            />
          </div>
        </div>
      </section>

      {/* Green Space Section */}
      <section id="greenspace" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={TreePine}
            title="Green Space"
            subtitle="Penghijauan & Konservasi"
            centered
          />

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <FeatureCard
              icon={Leaf}
              title="Program Penghijauan"
              description="Ikuti program penanaman pohon di sekolah, kampus, dan area publik"
              items={[
                "Peta area hijau",
                "Progress penanaman",
                "Data karbon tersimpan",
                "Laporan bulanan",
              ]}
              gradient="primary"
            />
            <FeatureCard
              icon={TreePine}
              title="Konservasi Wisata"
              description="Dukung pelestarian destinasi wisata alam Indonesia"
              items={[
                "Database flora fauna",
                "Status konservasi",
                "Cara berkontribusi",
                "Before-after restoration",
              ]}
              gradient="secondary"
            />
          </div>

          <div className="mt-16 mb-14 grid grid-cols-2 md:grid-cols-4 gap-6 text-center backdrop-blur-sm bg-blue-50 p-6 rounded-lg shadow-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl font-bold text-primary">
                <CountUp end={181} duration={4} />
              </div>
              <div className="text-muted-foreground">Siswa</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-primary">
                <CountUp end={10} duration={4} />
              </div>
              <div className="text-muted-foreground">Guru</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-4xl font-bold text-primary">
                <CountUp end={2461} duration={4.5} />
              </div>
              <div className="text-muted-foreground">Alumni</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-4xl font-bold text-primary">
                <CountUp end={30} duration={4} />
              </div>
              <div className="text-muted-foreground">Prestasi</div>
            </motion.div>
          </div>

          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "15K+", label: "Pohon Ditanam", icon: TreePine },
              { number: "50+", label: "Area Hijau", icon: MapPin },
              { number: "200+", label: "Volunteer", icon: Users },
              { number: "30+", label: "Ton CO₂ Diserap", icon: Leaf },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border text-center hover:border-primary/30 transition-all hover:shadow-soft"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EcoTravel Section */}
      <section id="travel" className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={Palmtree}
            title="EcoTravel"
            subtitle="Wisata Ramah Lingkungan"
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <FeatureCard
              icon={MapPin}
              title="Destinasi Eco-Friendly"
              description="Jelajahi tempat wisata yang menerapkan praktik ramah lingkungan"
              image={travelImage}
              items={[
                "Rating eco-score",
                "Fasilitas hijau",
                "Sertifikasi lingkungan",
              ]}
              gradient="primary"
            />
            <FeatureCard
              icon={Heart}
              title="Tips Perjalanan Hijau"
              description="Panduan traveling yang meminimalkan jejak karbon"
              items={[
                "Transportasi ramah lingkungan",
                "Akomodasi eco-certified",
                "Kegiatan berkelanjutan",
                "Etika wisata alam",
              ]}
              gradient="secondary"
            />
            <FeatureCard
              icon={Camera}
              title="Maps & Review"
              description="Peta interaktif dengan review dari traveler eco-conscious"
              items={[
                "Lokasi GPS akurat",
                "Review terpercaya",
                "Foto destinasi",
                "Tips dari traveler",
              ]}
              gradient="earth"
            />
          </div>
        </div>
      </section>

      {/* EcoGallery Section */}
      <section id="gallery" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={Camera}
            title="EcoGallery"
            subtitle="Galeri Dokumentasi"
            centered
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="aspect-square bg-gradient-primary rounded-xl overflow-hidden group cursor-pointer"
              >
                <div className="w-full h-full bg-muted/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Camera className="w-12 h-12 text-muted-foreground/30" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10"
            >
              Lihat Semua Dokumentasi
            </Button>
          </div>
        </div>
      </section>

      {/* EcoProducts Section */}
      <section id="products" className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={ShoppingBag}
            title="EcoProducts"
            subtitle="Produk Ramah Lingkungan"
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <FeatureCard
              icon={Leaf}
              title="Produk Eco-Friendly"
              description="Temukan produk ramah lingkungan dari brand terpercaya"
              items={[
                "Produk lokal berkualitas",
                "Sertifikat eco-label",
                "Deskripsi manfaat",
                "Inquiry langsung",
              ]}
              gradient="primary"
            />
            <FeatureCard
              icon={Recycle}
              title="Barang Daur Ulang"
              description="Produk kreatif dari bahan daur ulang"
              items={[
                "Kerajinan unik",
                "Fashion sustainable",
                "Furniture upcycle",
                "DIY materials",
              ]}
              gradient="secondary"
            />
            <FeatureCard
              icon={ShoppingBag}
              title="UMKM Berkelanjutan"
              description="Dukung usaha lokal yang peduli lingkungan"
              items={[
                "Produk organik",
                "Zero-waste packaging",
                "Fair trade products",
                "Supporting local",
              ]}
              gradient="earth"
            />
          </div>

          <div className="mt-12 bg-card rounded-2xl p-8 lg:p-12 border border-border">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Ingin Tampilkan Produk Anda?
              </h3>
              <p className="text-muted-foreground mb-6">
                Bergabunglah dengan marketplace eco-friendly kami dan jangkau
                konsumen yang peduli lingkungan
              </p>
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-medium"
              >
                Daftar Sebagai Seller
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-primary rounded-full p-2">
                  <Leaf className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">EcoHub</span>
              </div>
              <p className="text-background/70 text-sm">
                Portal lingkungan terpadu untuk edukasi, kampanye, dan aksi
                nyata peduli lingkungan.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Portal</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>
                  <a href="#education" className="hover:text-background">
                    Eco Education
                  </a>
                </li>
                <li>
                  <a href="#campaign" className="hover:text-background">
                    Green Campaign
                  </a>
                </li>
                <li>
                  <a href="#waste" className="hover:text-background">
                    Waste Management
                  </a>
                </li>
                <li>
                  <a href="#greenspace" className="hover:text-background">
                    Green Space
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>
                  <a href="#travel" className="hover:text-background">
                    EcoTravel
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-background">
                    EcoGallery
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-background">
                    EcoProducts
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>Email: info@ecohub.id</li>
                <li>Phone: +62 812-3456-7890</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
            <p>© 2025 EcoHub. All rights reserved. Built with 💚 for Earth.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
