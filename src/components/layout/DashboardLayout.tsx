import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Calendar, 
  Settings, 
  LogOut,
  Video,
  BarChart3,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Calendar, label: "Agendador", path: "/scheduler" },
  { icon: Video, label: "Meus Vídeos", path: "/videos" },
  { icon: BarChart3, label: "Analytics", path: "/analytics" },
  { icon: Settings, label: "Configurações", path: "/settings" },
];

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 z-40 flex flex-col",
          collapsed ? "w-16" : "w-64"
        )}
      >
        {/* Logo */}
        <div className="h-16 flex items-center px-4 border-b border-sidebar-border">
          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
              <span className="text-primary-foreground font-bold text-sm">TF</span>
            </div>
            {!collapsed && <span className="font-bold text-lg">TikFlow</span>}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                  isActive 
                    ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                )}
              >
                <item.icon size={20} className={cn(isActive && "text-primary")} />
                {!collapsed && <span className="font-medium">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Collapse Toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-20 w-6 h-6 bg-muted border border-border rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors"
        >
          {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>

        {/* User Section */}
        <div className="p-3 border-t border-sidebar-border">
          <div className={cn(
            "flex items-center gap-3 p-2",
            collapsed && "justify-center"
          )}>
            <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
              <span className="text-primary-foreground text-sm font-medium">U</span>
            </div>
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">Usuário</p>
                <p className="text-xs text-muted-foreground truncate">user@email.com</p>
              </div>
            )}
            {!collapsed && (
              <Button variant="ghost" size="icon" className="flex-shrink-0" asChild>
                <Link to="/">
                  <LogOut size={16} />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={cn(
        "flex-1 transition-all duration-300",
        collapsed ? "ml-16" : "ml-64"
      )}>
        <div className="p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
