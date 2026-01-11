import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  TrendingUp, 
  TrendingDown,
  Eye,
  Heart,
  MessageCircle,
  Share2,
  Users
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const viewsData = [
  { name: "Seg", views: 4000 },
  { name: "Ter", views: 3000 },
  { name: "Qua", views: 5000 },
  { name: "Qui", views: 2780 },
  { name: "Sex", views: 1890 },
  { name: "Sáb", views: 6390 },
  { name: "Dom", views: 7490 },
];

const engagementData = [
  { name: "Jan 1", likes: 400, comments: 240, shares: 100 },
  { name: "Jan 5", likes: 300, comments: 139, shares: 80 },
  { name: "Jan 10", likes: 500, comments: 380, shares: 150 },
  { name: "Jan 15", likes: 278, comments: 190, shares: 90 },
  { name: "Jan 20", likes: 689, comments: 390, shares: 200 },
  { name: "Jan 25", likes: 439, comments: 280, shares: 180 },
  { name: "Jan 30", likes: 749, comments: 430, shares: 250 },
];

const stats = [
  { 
    label: "Total de Visualizações", 
    value: "124.5K", 
    icon: Eye, 
    change: "+12.3%",
    positive: true
  },
  { 
    label: "Total de Curtidas", 
    value: "8.2K", 
    icon: Heart, 
    change: "+8.1%",
    positive: true
  },
  { 
    label: "Comentários", 
    value: "1.4K", 
    icon: MessageCircle, 
    change: "-2.4%",
    positive: false
  },
  { 
    label: "Compartilhamentos", 
    value: "956", 
    icon: Share2, 
    change: "+15.7%",
    positive: true
  },
  { 
    label: "Novos Seguidores", 
    value: "2.1K", 
    icon: Users, 
    change: "+22.5%",
    positive: true
  },
];

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-muted-foreground">Acompanhe a performance dos seus vídeos.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-primary">
                    <stat.icon size={20} />
                  </div>
                  <div className={`flex items-center gap-1 text-sm ${stat.positive ? 'text-success' : 'text-destructive'}`}>
                    {stat.positive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                    {stat.change}
                  </div>
                </div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Views Chart */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye size={20} />
                Visualizações (Última Semana)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={viewsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="name" 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                      labelStyle={{ color: "hsl(var(--foreground))" }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="views" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={3}
                      dot={{ fill: "hsl(var(--primary))", strokeWidth: 2 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Engagement Chart */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart size={20} />
                Engajamento (Último Mês)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={engagementData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="name" 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                      labelStyle={{ color: "hsl(var(--foreground))" }}
                    />
                    <Bar dataKey="likes" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="comments" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="shares" fill="hsl(var(--success))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">Curtidas</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <span className="text-sm text-muted-foreground">Comentários</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-success" />
                  <span className="text-sm text-muted-foreground">Compartilhamentos</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Performing Videos */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp size={20} />
              Vídeos com Melhor Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Review completo do iPhone", views: "45.2K", likes: "5.8K", engagement: "12.8%" },
                { title: "Tutorial de dança #1", views: "12.5K", likes: "1.2K", engagement: "9.6%" },
                { title: "Dia na minha vida", views: "8.9K", likes: "892", engagement: "10.0%" },
              ].map((video, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-muted-foreground">#{index + 1}</span>
                    <div>
                      <p className="font-medium">{video.title}</p>
                      <p className="text-sm text-muted-foreground">Taxa de engajamento: {video.engagement}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="text-right">
                      <p className="font-medium">{video.views}</p>
                      <p className="text-muted-foreground">views</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{video.likes}</p>
                      <p className="text-muted-foreground">likes</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
