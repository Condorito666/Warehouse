'use client'
import React, { useState } from 'react';
import FormHeader from '@/components/Form/FormHeader';
import { Package } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import TextInput from '@/components/Form/TextInput';
import TextareaInput from '@/components/Form/TextareaInput';
import SubmitButton from '@/components/Form/SubmitButton';

export default function NewCategory() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data) => {
        setIsLoading(true);
        console.log("Form submitted: ", data);
        const baseUrl = "http://localhost:3000";
        console.log("Base URL: ", baseUrl);
        try {
            const response = await fetch(`${baseUrl}/api/categories`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Error al crear la categoría');
            }

            reset();
        } catch (error) {
            console.error("Error submitting form: ", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col gap-6">
            <FormHeader title="Nueva Categoría" href="/dashboard/inventory/categories" />

            <div className="p-6">
                <Card className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <Package className="w-6 h-6 text-slate-500" />
                        <div>
                            <h2 className="text-lg font-semibold">Información de la Categoría</h2>
                            <p className="text-sm text-slate-500">Complete el formulario para crear una nueva categoría</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <TextInput
                                    label="Título de la Categoría"
                                    name="title"
                                    placeholder="Ej. Electrónica"
                                    isRequired={true}

                                    {...register("title", { required: "El título es obligatorio" })}
                                />
                                {errors.title && <span className="text-sm text-red-500 mt-1 block">{errors.title.message}</span>}
                            </div>

                            <div>
                                <TextareaInput
                                    label="Descripción"
                                    name="description"
                                    placeholder="Breve descripción de la categoría"
                                    isRequired={false}
                                    rows={2}
                                    {...register("description")}
                                />
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <SubmitButton title="Guardar Categoría" isLoading={isLoading} />
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
}