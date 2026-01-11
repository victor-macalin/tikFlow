import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Video, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  TrendingUp,
  Calendar,
  Plus
} from "lucide-react";

const stats = [
  { 
    label: "Vídeos Agendados", 
    value: "12", 
    icon: Clock, 
    change: "+3 esta semana",
    color: "text-primary"
  },
  { 
    label: "Publicados", 
    value: "48", 
    icon: CheckCircle, 
    change: "+8 este mês",
    color: "text-success"
  },
  { 
    label: "Falhas", 
    value: "2", 
    icon: AlertCircle, 
    change: "-1 vs semana passada",
    color: "text-destructive"
  },
  { 
    label: "Visualizações", 
    value: "24.5K", 
    icon: TrendingUp, 
    change: "+12% este mês",
    color: "text-accent"
  },
];

const recentVideos = [
  { title: "Tutorial de dança #1", status: "published", date: "Hoje, 14:00", views: "1.2K" },
  { title: "Unboxing novo produto", status: "scheduled", date: "Amanhã, 10:00", views: "-" },
  { title: "Bastidores do evento", status: "scheduled", date: "15/01, 18:00", views: "-" },
  { title: "Review completo", status: "failed", date: "Ontem, 16:00", views: "-" },
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

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Bem-vindo de volta! Aqui está o resumo da sua conta.</p>
          </div>
          <Button variant="hero" asChild>
            <Link to="/scheduler" className="flex items-center gap-2">
              <Plus size={18} />
              Agendar vídeo
            </Link>
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-muted flex items-center justify-center ${stat.color}`}>
                    <stat.icon size={20} />
                  </div>
                </div>
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-xs text-muted-foreground mt-2">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Videos & Quick Actions */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Videos */}
          <Card className="lg:col-span-2 bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Video size={20} />
                Vídeos recentes
              </CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/videos">Ver todos</Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentVideos.map((video, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary/20 flex items-center justify-center">
                        <Video size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{video.title}</p>
                        <p className="text-sm text-muted-foreground">{video.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {video.views !== "-" && (
                        <span className="text-sm text-muted-foreground">{video.views} views</span>
                      )}
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[video.status as keyof typeof statusColors]}`}>
                        {statusLabels[video.status as keyof typeof statusLabels]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar size={20} />
                Ações rápidas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/scheduler">
                  <Plus size={18} className="mr-2" />
                  Agendar novo vídeo
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/settings">
                  <Video size={18} className="mr-2" />
                  Conectar conta TikTok
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/analytics">
                  <TrendingUp size={18} className="mr-2" />
                  Ver analytics
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
