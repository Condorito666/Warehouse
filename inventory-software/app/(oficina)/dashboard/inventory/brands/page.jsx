import React from 'react'
import FixedHeader from '@/components/dashboard/FixedHeader'

export default function Brands() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <FixedHeader title='Marcas' newLink='/dashboard/inventory/brands/new-brand' newText='Nueva Marca' />
        </div>
    )
}
