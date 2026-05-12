import FormHeader from '@/components/Form/FormHeader';
import React from 'react';

export default function NewUnit() {
    return (
        <div>
            <FormHeader title="Nueva Unidad" href="/dashboard/inventory/units" />
        </div>
    );
}