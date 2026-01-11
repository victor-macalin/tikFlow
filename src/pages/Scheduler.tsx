import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState, useRef } from "react";
import { Upload, Calendar, Clock, Video, X, Sparkles } from "lucide-react";
import { toast } from "sonner";

const Scheduler = () => {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [caption, setCaption] = useState("");
  const [scheduledDate, setScheduledDate] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("video/")) {
      setVideoFile(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideoFile(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoFile) {
      toast.error("Por favor, selecione um vídeo");
      return;
    }
    toast.success("Vídeo agendado com sucesso!");
    // Reset form
    setVideoFile(null);
    setCaption("");
    setScheduledDate("");
    setScheduledTime("");
  };

  const removeVideo = () => {
    setVideoFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Agendar Vídeo</h1>
          <p className="text-muted-foreground">Faça upload do seu vídeo e agende a publicação.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Upload Section */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload size={20} />
                  Upload do Vídeo
                </CardTitle>
                <CardDescription>
                  Arraste ou clique para selecionar seu vídeo
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!videoFile ? (
                  <div
                    className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
                      isDragging 
                        ? "border-primary bg-primary/10" 
                        : "border-border hover:border-primary/50 hover:bg-muted/50"
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="video/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                      <Video size={32} className="text-muted-foreground" />
                    </div>
                    <p className="font-medium mb-1">Arraste seu vídeo aqui</p>
                    <p className="text-sm text-muted-foreground mb-4">ou clique para selecionar</p>
                    <p className="text-xs text-muted-foreground">
                      MP4, MOV, AVI • Máximo 500MB
                    </p>
                  </div>
                ) : (
                  <div className="border border-border rounded-xl p-4 bg-muted/50">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 rounded-lg bg-gradient-primary/20 flex items-center justify-center flex-shrink-0">
                        <Video size={24} className="text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{videoFile.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {(videoFile.size / (1024 * 1024)).toFixed(2)} MB
                        </p>
                      </div>
                      <Button 
                        type="button"
                        variant="ghost" 
                        size="icon"
                        onClick={removeVideo}
                      >
                        <X size={18} />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Details Section */}
            <div className="space-y-6">
              {/* Caption */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles size={20} />
                    Legenda
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Escreva sua legenda aqui... Use #hashtags e @menções"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    rows={4}
                    className="resize-none"
                  />
                  <p className="text-xs text-muted-foreground mt-2 text-right">
                    {caption.length}/2200 caracteres
                  </p>
                </CardContent>
              </Card>

              {/* Schedule */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar size={20} />
                    Agendamento
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="flex items-center gap-2">
                        <Calendar size={14} />
                        Data
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={scheduledDate}
                        onChange={(e) => setScheduledDate(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time" className="flex items-center gap-2">
                        <Clock size={14} />
                        Horário
                      </Label>
                      <Input
                        id="time"
                        type="time"
                        value={scheduledTime}
                        onChange={(e) => setScheduledTime(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-end">
            <Button type="submit" variant="hero" size="lg">
              <Calendar size={18} className="mr-2" />
              Agendar Postagem
            </Button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default Scheduler;
