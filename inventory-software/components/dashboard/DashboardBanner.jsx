import React from 'react';
import { User, Sparkles } from 'lucide-react';

export default function DashboardBanner({ userName }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-8 text-white shadow-lg mb-8">
      {/* Decorative background elements */}
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-20 h-32 w-32 rounded-full bg-white/10 blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-inner">
            <User className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
              Hola, {userName}! <Sparkles className="h-6 w-6 text-yellow-300" />
            </h1>
            <p className="mt-1 text-indigo-100 font-medium">
              Bienvenido a tu dashboard de inventario. Mira que está pasando hoy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
