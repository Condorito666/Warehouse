import React from 'react'
import FixedHeader from '@/components/dashboard/FixedHeader'

export default function Warehouses() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <FixedHeader title='Bodegas' newLink='/dashboard/inventory/warehouses/new-warehouse' newText='Nueva Bodega' />
        </div>
    )
}
