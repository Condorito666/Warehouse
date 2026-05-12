import Link from 'next/link';
import React from 'react';
import { X } from 'lucide-react';

export default function FormHeader({ title, href }) {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h2>
      <Link href={href} className="p-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors">
        <X className="w-5 h-5" />
      </Link>
    </div>
  );
}
