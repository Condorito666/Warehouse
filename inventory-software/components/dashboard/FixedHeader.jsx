'use client';

import React, { useState } from 'react';
import { Plus, LayoutGrid, List, MoreHorizontal, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export default function FixedHeader({ 
  title = 'Productos', 
  newLink = '/dashboard/inventory/products/new-product', 
  newText = 'Nuevo Producto' 
}) {
  const [viewLayout, setViewLayout] = useState('list');

  return (
    <div className="flex items-center justify-between bg-white dark:bg-slate-900 px-6 py-4 border-b border-slate-200 dark:border-slate-800">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h1>
      </div>
      <div className="flex items-center gap-3">
        {/* Add New Item Button */}
        <Link
          href={newLink}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium transition-colors text-sm"
        >
          <Plus className="w-4 h-4" />
          <span>{newText}</span>
        </Link>

        {/* Layout Buttons Group */}
        <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-md p-1 border border-slate-200 dark:border-slate-700">
          <button
            onClick={() => setViewLayout('list')}
            className={`p-1.5 rounded transition-all ${viewLayout === 'list'
                ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-800 dark:text-white'
                : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700/50'
              }`}
          >
            <List className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewLayout('grid')}
            className={`p-1.5 rounded transition-all ${viewLayout === 'grid'
                ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-800 dark:text-white'
                : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700/50'
              }`}
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
        </div>

        {/* More Options Button */}
        <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors border border-slate-200 dark:border-slate-700">
          <MoreHorizontal className="w-4 h-4" />
        </button>

        {/* Help Button */}
        <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors">
          <HelpCircle className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
