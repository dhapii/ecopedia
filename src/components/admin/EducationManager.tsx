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

type Education = {
  id: string;
  title: string;
  content: string | null;
  image_url: string | null;
  category: string | null;
  tags: string[] | null;
};

export default function EducationManager() {
  const [educationList, setEducationList] = useState<Education[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editingEducation, setEditingEducation] = useState<Education | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image_url: "",
    category: "",
    tags: "",
  });

  useEffect(() => {
    fetchEducation();
  }, []);

  const fetchEducation = async () => {
    const { data, error } = await supabase
      .from("education")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Gagal memuat edukasi");
    } else {
      setEducationList(data || []);
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const educationData = {
      title: formData.title,
      content: formData.content,
      image_url: formData.image_url,
      category: formData.category,
      tags: formData.tags ? formData.tags.split(",").map(t => t.trim()) : [],
    };

    if (editingEducation) {
      const { error } = await supabase
        .from("education")
        .update(educationData)
        .eq("id", editingEducation.id);

      if (error) {
        toast.error("Gagal mengupdate edukasi");
      } else {
        toast.success("Edukasi berhasil diupdate");
        fetchEducation();
        handleClose();
      }
    } else {
      const { error } = await supabase.from("education").insert([educationData]);

      if (error) {
        toast.error("Gagal menambah edukasi");
      } else {
        toast.success("Edukasi berhasil ditambahkan");
        fetchEducation();
        handleClose();
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Yakin ingin menghapus edukasi ini?")) {
      const { error } = await supabase.from("education").delete().eq("id", id);

      if (error) {
        toast.error("Gagal menghapus edukasi");
      } else {
        toast.success("Edukasi berhasil dihapus");
        fetchEducation();
      }
    }
  };

  const handleEdit = (education: Education) => {
    setEditingEducation(education);
    setFormData({
      title: education.title,
      content: education.content || "",
      image_url: education.image_url || "",
      category: education.category || "",
      tags: education.tags?.join(", ") || "",
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingEducation(null);
    setFormData({
      title: "",
      content: "",
      image_url: "",
      category: "",
      tags: "",
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
            <CardTitle>Kelola Edukasi</CardTitle>
            <CardDescription>Tambah, edit, dan hapus materi edukasi lingkungan</CardDescription>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => setEditingEducation(null)}>
                <Plus className="mr-2 h-4 w-4" />
                Tambah Edukasi
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>{editingEducation ? "Edit Edukasi" : "Tambah Edukasi Baru"}</DialogTitle>
                <DialogDescription>Isi form di bawah untuk mengelola edukasi</DialogDescription>
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
                  <Label htmlFor="content">Konten</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    rows={6}
                  />
                </div>
                <div>
                  <Label htmlFor="image_url">URL Gambar</Label>
                  <Input
                    id="image_url"
                    value={formData.image_url}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
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
                  <Label htmlFor="tags">Tags (pisahkan dengan koma)</Label>
                  <Input
                    id="tags"
                    value={formData.tags}
                    onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                    placeholder="daur ulang, sampah, plastik"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={handleClose}>
                    Batal
                  </Button>
                  <Button type="submit">
                    {editingEducation ? "Update" : "Tambah"}
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
              <TableHead>Tags</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {educationList.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-muted-foreground">
                  Belum ada materi edukasi
                </TableCell>
              </TableRow>
            ) : (
              educationList.map((education) => (
                <TableRow key={education.id}>
                  <TableCell>{education.title}</TableCell>
                  <TableCell>{education.category || "-"}</TableCell>
                  <TableCell>{education.tags?.join(", ") || "-"}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(education)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(education.id)}
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
