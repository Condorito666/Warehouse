import React from 'react'
import FixedHeader from '@/components/dashboard/FixedHeader'

export default function Units() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <FixedHeader title='Unidades de Medida' newLink='/dashboard/inventory/units/new-unit' newText='Nueva Unidad' />
        </div>
    )
}