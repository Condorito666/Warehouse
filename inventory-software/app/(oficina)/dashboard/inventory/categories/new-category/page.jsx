import FormHeader from '@/components/Form/FormHeader';
import React from 'react';

export default function NewCategory() {
    return (
        <div>
            <FormHeader title="Nueva Categoría" href="/dashboard/inventory/categories" />
        </div>
    );
}