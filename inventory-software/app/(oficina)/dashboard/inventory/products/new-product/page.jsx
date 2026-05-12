import FormHeader from '@/components/Form/FormHeader';
import React from 'react';

export default function NewProduct() {
    return (
        <div>
            <FormHeader title="Nuevo Producto" href="/dashboard/inventory/products" />
        </div>
    );
}