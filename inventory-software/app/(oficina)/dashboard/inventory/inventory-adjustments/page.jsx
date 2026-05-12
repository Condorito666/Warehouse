import React from 'react'
import FixedHeader from '@/components/dashboard/FixedHeader'

function InventoryAdjustmentsPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <FixedHeader title='Ajustes de Inventario' newLink='/dashboard/inventory/inventory-adjustments/new-adjustment' newText='Nuevo Ajuste' />
        </div>
    )
}

export default InventoryAdjustmentsPage