import React from 'react'
import FixedHeader from '@/components/dashboard/FixedHeader'
import OptionCards from '@/components/dashboard/OptionCards'

function page() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <FixedHeader title='Productos' newLink='/dashboard/inventory/products/new-product' newText='Nuevo Producto' />
            <div className="p-6 md:p-8 max-w-7xl mx-auto">
                <div className="text-center mb-10 mt-8">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Agrega a tu inventario</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Elige el tipo de artículo que deseas crear para comenzar a gestionar tu catálogo de manera efectiva.
                    </p>
                </div>

                <OptionCards />
            </div>
        </div>
    )
}

export default page