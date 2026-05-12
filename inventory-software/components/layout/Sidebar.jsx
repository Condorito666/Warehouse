'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  Package,
  Users,
  Settings,
  BarChart3,
  LogOut,
  Box,
  ShoppingCart,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

const Sidebar = ({ isOpen }) => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menuName) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName]
    }));
  };

  const navItems = [
    { name: 'Dashboard', href: '/dashboard/home/overview', icon: LayoutDashboard },
    {
      name: 'Inventario',
      icon: Package,
      subItems: [
        { name: 'Productos', href: '/dashboard/inventory/products' },
        { name: 'Marcas', href: '/dashboard/inventory/brands' },
        { name: 'Categorias', href: '/dashboard/inventory/categories' },
        { name: 'Unidades de Medida', href: '/dashboard/inventory/units' },
        { name: 'Tiendas', href: '/dashboard/inventory/warehouses' },
        { name: 'Ajustes de Inventario', href: '/dashboard/inventory/inventory-adjustments' },
      ]
    },
    {
      name: 'Ventas',
      icon: ShoppingCart,
      subItems: [
        { name: 'Nueva Venta', href: '/dashboard/home/sales/new' },
        { name: 'Historial', href: '/dashboard/home/sales/history' },
        { name: 'Clientes', href: '/dashboard/home/sales/customers' },
      ]
    },
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
              <div key={item.name} className="flex flex-col">
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => toggleMenu(item.name)}
                      className="group flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-all hover:bg-slate-800 hover:text-white focus:outline-none"
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="h-5 w-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                        {item.name}
                      </div>
                      {openMenus[item.name] ? (
                        <ChevronDown className="h-4 w-4 text-slate-500 transition-transform" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-slate-500 transition-transform" />
                      )}
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${openMenus[item.name] ? 'max-h-48 opacity-100 mt-1 mb-2' : 'max-h-0 opacity-0'
                        }`}
                    >
                      <div className="flex flex-col space-y-1 pl-11 pr-4">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="rounded-lg px-3 py-2 text-sm text-slate-400 transition-all hover:bg-slate-800/50 hover:text-blue-400"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-all hover:bg-slate-800 hover:text-white"
                  >
                    <item.icon className="h-5 w-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                    {item.name}
                  </Link>
                )}
              </div>
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
