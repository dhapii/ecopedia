import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";

type Gallery = {
  id: string;
  title: string;
  description: string | null;
  image_url: string;
  category: string | null;
  location: string | null;
  captured_at: string | null;
};

export default function GalleryManager() {
  const [gallery, setGallery] = useState<Gallery[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editingGallery, setEditingGallery] = useState<Gallery | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image_url: "",
    category: "",
    location: "",
    captured_at: "",
  });

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    const { data, error } = await supabase
      .from("gallery")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Gagal memuat galeri");
    } else {
      setGallery(data || []);
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingGallery) {
      const { error } = await supabase
        .from("gallery")
        .update(formData)
        .eq("id", editingGallery.id);

      if (error) {
        toast.error("Gagal mengupdate galeri");
      } else {
        toast.success("Galeri berhasil diupdate");
        fetchGallery();
        handleClose();
      }
    } else {
      const { error } = await supabase.from("gallery").insert([formData]);

      if (error) {
        toast.error("Gagal menambah galeri");
      } else {
        toast.success("Galeri berhasil ditambahkan");
        fetchGallery();
        handleClose();
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Yakin ingin menghapus foto ini?")) {
      const { error } = await supabase.from("gallery").delete().eq("id", id);

      if (error) {
        toast.error("Gagal menghapus galeri");
      } else {
        toast.success("Galeri berhasil dihapus");
        fetchGallery();
      }
    }
  };

  const handleEdit = (item: Gallery) => {
    setEditingGallery(item);
    setFormData({
      title: item.title,
      description: item.description || "",
      image_url: item.image_url,
      category: item.category || "",
      location: item.location || "",
      captured_at: item.captured_at || "",
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingGallery(null);
    setFormData({
      title: "",
      description: "",
      image_url: "",
      category: "",
      location: "",
      captured_at: "",
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Kelola Galeri</CardTitle>
            <CardDescription>Tambah, edit, dan hapus foto dokumentasi lingkungan</CardDescription>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => setEditingGallery(null)}>
                <Plus className="mr-2 h-4 w-4" />
                Tambah Foto
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>{editingGallery ? "Edit Foto" : "Tambah Foto Baru"}</DialogTitle>
                <DialogDescription>Isi form di bawah untuk mengelola galeri</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="title">Judul</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="description">Deskripsi</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="image_url">URL Gambar</Label>
                  <Input
                    id="image_url"
                    value={formData.image_url}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="category">Kategori</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="location">Lokasi</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="captured_at">Tanggal Foto</Label>
                  <Input
                    id="captured_at"
                    type="date"
                    value={formData.captured_at}
                    onChange={(e) => setFormData({ ...formData, captured_at: e.target.value })}
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={handleClose}>
                    Batal
                  </Button>
                  <Button type="submit">
                    {editingGallery ? "Update" : "Tambah"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Judul</TableHead>
              <TableHead>Kategori</TableHead>
              <TableHead>Lokasi</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {gallery.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-muted-foreground">
                  Belum ada foto
                </TableCell>
              </TableRow>
            ) : (
              gallery.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.category || "-"}</TableCell>
                  <TableCell>{item.location || "-"}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(item)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
