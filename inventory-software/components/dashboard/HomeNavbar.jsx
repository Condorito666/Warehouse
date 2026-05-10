'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HomeNavbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Dashboard', href: '/dashboard/home/overview' },
    { name: 'Getting Started', href: '/dashboard/home/getting-started' },
    { name: 'Actualizaciones recientes', href: '/dashboard/home/update' },
    { name: 'Anuncios', href: '/dashboard/home/announcements' },
  ];

  return (
    <div className="sticky top-0 z-30 -mx-4 px-4 bg-slate-50/80 backdrop-blur-md dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 pt-2 pb-0 md:-mx-6 md:px-6 lg:-mx-8 lg:px-8">
      <nav className="flex space-x-8 overflow-x-auto no-scrollbar">
        {navLinks.map((link) => {
          // Check if the current path starts with or matches the link href
          const isActive = pathname === link.href || pathname?.startsWith(link.href + '/');

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`relative py-4 text-sm font-semibold transition-colors whitespace-nowrap ${isActive
                  ? 'text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
            >
              {link.name}
              {isActive && (
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-t-full" />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
