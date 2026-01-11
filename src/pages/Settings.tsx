import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { 
  Link2, 
  Bell, 
  Shield, 
  User,
  CheckCircle,
  ExternalLink,
  Settings as SettingsIcon
} from "lucide-react";
import { toast } from "sonner";

const Settings = () => {
  const [tiktokConnected, setTiktokConnected] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    marketing: false,
  });

  const handleConnectTikTok = () => {
    // Simulate TikTok OAuth
    setTiktokConnected(true);
    toast.success("Conta TikTok conectada com sucesso!");
  };

  const handleDisconnectTikTok = () => {
    setTiktokConnected(false);
    toast.info("Conta TikTok desconectada");
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Configurações</h1>
          <p className="text-muted-foreground">Gerencie sua conta e preferências.</p>
        </div>

        <div className="space-y-6">
          {/* TikTok Connection */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Link2 size={20} />
                Conexão TikTok
              </CardTitle>
              <CardDescription>
                Conecte sua conta do TikTok para começar a agendar vídeos.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!tiktokConnected ? (
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-xl border border-dashed border-border">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary-foreground" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Nenhuma conta conectada</p>
                    <p className="text-sm text-muted-foreground">
                      Conecte sua conta TikTok para agendar e publicar vídeos automaticamente.
                    </p>
                  </div>
                  <Button variant="hero" onClick={handleConnectTikTok}>
                    <ExternalLink size={16} className="mr-2" />
                    Conectar TikTok
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-xl bg-success/10 border border-success/30">
                  <div className="w-12 h-12 rounded-xl bg-success flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={24} className="text-success-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">@usuario_tiktok</p>
                    <p className="text-sm text-muted-foreground">
                      Conta conectada e pronta para uso
                    </p>
                  </div>
                  <Button variant="outline" onClick={handleDisconnectTikTok}>
                    Desconectar
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Profile Settings */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User size={20} />
                Perfil
              </CardTitle>
              <CardDescription>
                Atualize suas informações pessoais.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" defaultValue="Usuário" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="user@email.com" />
                </div>
              </div>
              <Button variant="default">Salvar alterações</Button>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell size={20} />
                Notificações
              </CardTitle>
              <CardDescription>
                Configure como você deseja receber notificações.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Notificações por email</p>
                  <p className="text-sm text-muted-foreground">Receba atualizações sobre seus agendamentos</p>
                </div>
                <Switch 
                  checked={notifications.email}
                  onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Notificações push</p>
                  <p className="text-sm text-muted-foreground">Alertas em tempo real no navegador</p>
                </div>
                <Switch 
                  checked={notifications.push}
                  onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Emails de marketing</p>
                  <p className="text-sm text-muted-foreground">Novidades, dicas e ofertas especiais</p>
                </div>
                <Switch 
                  checked={notifications.marketing}
                  onCheckedChange={(checked) => setNotifications({...notifications, marketing: checked})}
                />
              </div>
            </CardContent>
          </Card>

          {/* Security */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield size={20} />
                Segurança
              </CardTitle>
              <CardDescription>
                Mantenha sua conta segura.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Senha atual</Label>
                <Input id="current-password" type="password" placeholder="••••••••" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="new-password">Nova senha</Label>
                  <Input id="new-password" type="password" placeholder="••••••••" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirmar nova senha</Label>
                  <Input id="confirm-password" type="password" placeholder="••••••••" />
                </div>
              </div>
              <Button variant="default">Alterar senha</Button>
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="bg-card border-destructive/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <SettingsIcon size={20} />
                Zona de perigo
              </CardTitle>
              <CardDescription>
                Ações irreversíveis para sua conta.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-xl border border-destructive/30 bg-destructive/10">
                <div className="flex-1">
                  <p className="font-medium">Excluir conta</p>
                  <p className="text-sm text-muted-foreground">
                    Esta ação é permanente e não pode ser desfeita.
                  </p>
                </div>
                <Button variant="destructive">
                  Excluir minha conta
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
