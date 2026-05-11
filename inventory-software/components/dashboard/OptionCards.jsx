import React from 'react';
import { Layers, Package, PackagePlus, Tags, Plus } from 'lucide-react';
import Link from 'next/link';

export default function OptionCards() {
    const optionCards = [
        {
            title: 'Grupos de Items',
            description: 'Crea múltiples variantes del mismo artículo usando Grupos de Items',
            icon: Layers,
            href: '/dashboard/inventory/product-groups/new-group',
            enabled: true
        },
        {
            title: 'Items',
            description: 'Crea artículos y servicios independientes que compras y vendes',
            icon: Package,
            href: '/dashboard/inventory/products/new',
            enabled: true
        },
        {
            title: 'Items Compuestos',
            description: 'Agrupa artículos',
            icon: PackagePlus,
            href: '/dashboard/inventory/products/new-composite',
            enabled: true
        },
        {
            title: 'Listas de Precios',
            description: 'Agrega usuarios para descuentos especiales',
            icon: Tags,
            href: '/dashboard/inventory/price-lists/new-list',
            enabled: true
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {optionCards.map((card, index) => {
                const Icon = card.icon;
                return (
                    <Link
                        href={card.href}
                        key={index}
                        className="group bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 flex items-start gap-5 cursor-pointer relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0 duration-300">
                            <div className="bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 p-2 rounded-full">
                                <Plus className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="p-4 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" strokeWidth={1.5} />
                        </div>
                        <div className="flex-1 pt-1">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                {card.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    </Link>
                )
            })}
        </div>
    );
}
