import React from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  Package,
  Users,
  Settings,
  BarChart3,
  LogOut,
  Box
} from 'lucide-react';

const Sidebar = ({ isOpen }) => {
  const navItems = [
    { name: 'Dashboard', href: '/dashboard/home/overview', icon: LayoutDashboard },
    { name: 'Inventario', href: '/dashboard/home/inventory', icon: Package },
    { name: 'Reportes', href: '/dashboard/home/reports', icon: BarChart3 },
    { name: 'Proveedores', href: '/dashboard/home/suppliers', icon: Users },
    { name: 'Configuración', href: '/dashboard/home/settings', icon: Settings },
  ];

  return (
    <aside className={`fixed inset-y-0 left-0 z-50 flex flex-col bg-slate-900 text-white transition-all duration-300 ease-in-out md:static md:inset-auto md:z-0 overflow-hidden ${isOpen ? 'w-72 translate-x-0' : 'w-0 -translate-x-full'}`}>
      <div className="w-72 flex-shrink-0 flex flex-col h-full">
        <div className="flex h-20 items-center px-6 bg-slate-950 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-500/30">
            <Box className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">Ferremas</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-6">
        <nav className="space-y-1 px-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-all hover:bg-slate-800 hover:text-white"
            >
              <item.icon className="h-5 w-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t border-slate-800 bg-slate-900">
        <button className="group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition-all hover:bg-red-500/10 hover:text-red-400">
          <LogOut className="h-5 w-5" />
          Cerrar Sesión
        </button>
      </div>
      </div>
    </aside>
  );
};

export default Sidebar;
