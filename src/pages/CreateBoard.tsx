import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useMemo, useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface Tile { id: string; imageUrl: string; caption?: string }

const STORAGE_KEY = "visionTiles";

const CreateBoard = () => {
  const { toast } = useToast();
  const [imageUrl, setImageUrl] = useState("");
  const [caption, setCaption] = useState("");
  const [tiles, setTiles] = useState<Tile[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { setTiles(JSON.parse(saved)); } catch { /* noop */ }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tiles));
  }, [tiles]);

  const addTile = () => {
    if (!imageUrl) return;
    setTiles((t) => [{ id: crypto.randomUUID(), imageUrl, caption }, ...t]);
    setImageUrl("");
    setCaption("");
  };

  const removeTile = (id: string) => setTiles((t) => t.filter(x => x.id !== id));

  const hasTiles = useMemo(() => tiles.length > 0, [tiles.length]);

  return (
    <>
      <SEO
        title="Create Your Vision Board"
        description="Assemble your digital vision board with images and quotes. Simple, elegant, and saved to your device."
      />
      <main className="container mx-auto px-4 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Create Your Vision Board</h1>
          <p className="text-muted-foreground">Add images by URL and optional captions. Your board auto-saves to your browser.</p>
        </header>

        <section className="grid md:grid-cols-3 gap-6 items-end mb-10">
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="image">Image URL</Label>
            <Input id="image" placeholder="https://..." value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="caption">Caption (optional)</Label>
            <Input id="caption" placeholder="Write a short mantra" value={caption} onChange={(e) => setCaption(e.target.value)} />
          </div>
          <div className="md:col-span-3 flex gap-3">
            <Button variant="hero" onClick={() => { addTile(); toast({ title: "Tile added", description: "Your vision board has been updated." }); }}>Add to board</Button>
            <Button variant="outline" onClick={() => { setTiles([]); localStorage.removeItem(STORAGE_KEY); toast({ title: "Cleared", description: "Your board is now empty." }); }}>Clear board</Button>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Your Board</h2>
          {!hasTiles && (
            <div className="rounded-xl border p-6 text-center text-muted-foreground">No tiles yet. Add your first image above or pick a template.</div>
          )}
          {hasTiles && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tiles.map((tile) => (
                <figure key={tile.id} className="rounded-xl border overflow-hidden bg-card shadow-soft effect-lift">
                  <img src={tile.imageUrl} alt={tile.caption || "Vision board image"} className="w-full h-56 object-cover" loading="lazy" />
                  {tile.caption && (
                    <figcaption className="p-4 text-sm text-muted-foreground">{tile.caption}</figcaption>
                  )}
                  <div className="p-4 pt-0">
                    <Button variant="outline" size="sm" onClick={() => removeTile(tile.id)}>Remove</Button>
                  </div>
                </figure>
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default CreateBoard;