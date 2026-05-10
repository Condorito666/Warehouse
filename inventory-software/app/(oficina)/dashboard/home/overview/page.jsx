import React from 'react';

export default function Dashboard() {
    return (
        <div className="space-y-6">
            {/* Overview Metrics Section */}
            <div>
                <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">Métricas Generales</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Placeholder for metrics */}
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Productos</p>
                        <p className="text-3xl font-bold text-slate-800 dark:text-slate-100 mt-2">1,248</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Alerta de Stock Bajo</p>
                        <p className="text-3xl font-bold text-rose-500 mt-2">12</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Pedidos Recientes</p>
                        <p className="text-3xl font-bold text-slate-800 dark:text-slate-100 mt-2">34</p>
                    </div>
                </div>
            </div>
        </div>
    )
}