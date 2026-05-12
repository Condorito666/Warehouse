import FormHeader from '@/components/Form/FormHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

export default function NewBrand() {
    return (
        <div>
            <FormHeader title="Nueva Marca" href="/dashboard/inventory/brands" />
            
            <div className="p-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Detalles de la Marca</CardTitle>
                        <CardDescription>Ingrese los detalles de la nueva marca.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {/* Form elements will go here */}
                        <p className="text-sm text-gray-500">Formulario en construcción...</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}