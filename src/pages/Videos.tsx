import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Video, 
  Search, 
  Filter,
  MoreVertical,
  Play,
  Eye,
  Heart,
  MessageCircle,
  Trash2,
  Edit
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const videos = [
  { 
    id: 1,
    title: "Tutorial de dança #1", 
    thumbnail: "/placeholder.svg",
    status: "published", 
    publishedAt: "10 Jan 2024, 14:00",
    views: "12.5K",
    likes: "1.2K",
    comments: "89"
  },
  { 
    id: 2,
    title: "Unboxing novo produto", 
    thumbnail: "/placeholder.svg",
    status: "scheduled", 
    publishedAt: "15 Jan 2024, 10:00",
    views: "-",
    likes: "-",
    comments: "-"
  },
  { 
    id: 3,
    title: "Bastidores do evento", 
    thumbnail: "/placeholder.svg",
    status: "scheduled", 
    publishedAt: "15 Jan 2024, 18:00",
    views: "-",
    likes: "-",
    comments: "-"
  },
  { 
    id: 4,
    title: "Review completo do iPhone", 
    thumbnail: "/placeholder.svg",
    status: "published", 
    publishedAt: "08 Jan 2024, 16:00",
    views: "45.2K",
    likes: "5.8K",
    comments: "234"
  },
  { 
    id: 5,
    title: "Receita fácil de bolo", 
    thumbnail: "/placeholder.svg",
    status: "failed", 
    publishedAt: "09 Jan 2024, 12:00",
    views: "-",
    likes: "-",
    comments: "-"
  },
  { 
    id: 6,
    title: "Dia na minha vida", 
    thumbnail: "/placeholder.svg",
    status: "published", 
    publishedAt: "05 Jan 2024, 08:00",
    views: "8.9K",
    likes: "892",
    comments: "56"
  },
];

const statusColors = {
  published: "bg-success/20 text-success",
  scheduled: "bg-primary/20 text-primary",
  failed: "bg-destructive/20 text-destructive",
};

const statusLabels = {
  published: "Publicado",
  scheduled: "Agendado",
  failed: "Falhou",
};

const Videos = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Meus Vídeos</h1>
            <p className="text-muted-foreground">Gerencie todos os seus vídeos em um só lugar.</p>
          </div>
        </div>

        {/* Filters */}
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Buscar vídeos..." 
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter size={18} />
                Filtrar
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Video Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card key={video.id} className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all">
              {/* Thumbnail */}
              <div className="relative aspect-[9/16] bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Video size={48} className="text-muted-foreground" />
                </div>
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="hero" size="icon" className="rounded-full w-14 h-14">
                    <Play size={24} />
                  </Button>
                </div>
                <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[video.status as keyof typeof statusColors]}`}>
                  {statusLabels[video.status as keyof typeof statusLabels]}
                </span>
              </div>

              {/* Content */}
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">{video.title}</h3>
                    <p className="text-sm text-muted-foreground">{video.publishedAt}</p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="flex-shrink-0">
                        <MoreVertical size={18} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Edit size={16} className="mr-2" />
                        Editar
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 size={16} className="mr-2" />
                        Excluir
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {/* Stats */}
                {video.status === "published" && (
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Eye size={14} />
                      {video.views}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Heart size={14} />
                      {video.likes}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MessageCircle size={14} />
                      {video.comments}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Videos;
