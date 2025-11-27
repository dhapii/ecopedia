import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
import banksampah from "@/assets/bank-sampah.jpeg";
import reboisasi from "@/assets/reboisasi.jpeg";
import hutan1 from "@/assets/hutan-1.jpeg";
import hutan2 from "@/assets/hutan-2.png";
import suropati from "@/assets/suropati.jpg";
import ujung from  "@/assets/ujung.jpg";
import kambas from "@/assets/kambas.jpg";
import tanjung from "@/assets/tanjung.jpeg";
import srengseng from "@/assets/srengseng.jpg";
import menteng from "@/assets/menteng.jpg";
import hutan3 from "@/assets/hutan-angga.jpg";

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
              image={educationImage}
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
              image={educationImage}
              items={[
                "Tips harian zero-waste",
                "Daur ulang kreatif",
                "DIY eco-friendly",
                "Kompos rumahan",
              ]}
              gradient="earth"
            />
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="group">
              <Link to="/education">
                Lihat Semua Materi
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
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
              image={hutan3}
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

          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline" className="group">
              <Link to="/campaigns">
                Jelajahi Semua Campaign
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 bg-gradient-primary rounded-2xl p-8 lg:p-12 text-center text-primary-foreground">
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
              asChild
            >
              <Link to="/volunteer">Daftar Volunteer</Link>
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
              image={banksampah}
              items={[
                "Peta interaktif",
                "Filter kategori",
                "Jam operasional",
                "Kontak lokasi",
              ]}
              gradient="earth"
            />
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="group">
              <Link to="/waste-management">
                Kelola Sampah Sekarang
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
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

          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline" className="group">
              <Link to="/green-space">
                Lihat Program Penghijauan
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
        </div>
      </section>

{/* EcoGallery Section */}
<section id="gallery" className="py-20 lg:py-32 bg-muted/30">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeader
      icon={Camera}
      title="EcoGallery"
      subtitle="Galeri Dokumentasi"
      centered
    />

    {/* Responsive Image Grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">

      {[
        srengseng,
        menteng,
        ujung,
        suropati,
        kambas,
        tanjung,
        hutan1,
        hutan2,
      ].map((src, index) => (
        <div
          key={index}
          className="relative w-full h-40 sm:h-48 md:h-56 lg:h-60 rounded-xl overflow-hidden shadow group"
        >
          <img
            src={src}
            alt={`eco-gallery-${index}`}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>

    <div className="text-center mt-12">
      <Button
        asChild
        size="lg"
        variant="outline"
        className="border-2 border-primary text-primary hover:bg-primary/10 group"
      >
        <Link to="/gallery">
          Lihat Semua Dokumentasi
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    </div>
  </div>
</section>


      {/* Forum Chat Section */}
      <section id="forum" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={ShoppingBag}
            title="Forum Chat"
            subtitle="Diskusi dan Berbagi tentang Lingkungan"
            centered
          />

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground mb-8">
              Bergabunglah dengan komunitas EcoHub untuk berdiskusi, berbagi pengalaman, 
              dan saling mendukung dalam perjalanan menuju gaya hidup yang lebih ramah lingkungan.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card rounded-xl p-6 border border-border">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Anggota Aktif</div>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <ShoppingBag className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">1000+</div>
                <div className="text-sm text-muted-foreground">Pesan Terkirim</div>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Selalu Online</div>
              </div>
            </div>

            <Button asChild size="lg" className="group">
              <Link to="/products">
                Buka Forum Chat
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
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
                <span className="text-xl font-bold">EcoPedia</span>
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
                  <a href="#gallery" className="hover:text-background">
                    EcoGallery
                  </a>
                </li>
                <li>
                  <a href="#forum" className="hover:text-background">
                    Forum Chat
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>Email: Echopedia@gmail.com</li>
                <li>Phone: +62 859-4380-4923</li>
                <li>Yogyakarta, Indonesia</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
            <p>© 2025 EcoPedia. All rights reserved. Built with 💚 for Earth.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
