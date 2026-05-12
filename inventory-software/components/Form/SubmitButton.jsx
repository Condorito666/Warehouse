import React from 'react';
import { Loader2 } from 'lucide-react';

const SubmitButton = ({ title = "Guardar", isLoading = false, className = "", ...props }) => {
    return (
        <button
            type="submit"
            disabled={isLoading}
            className={`flex items-center justify-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors disabled:opacity-70 disabled:cursor-not-allowed ${className}`}
            {...props}
        >
            {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
            {isLoading ? "Guardando..." : title}
        </button>
    );
};

export default SubmitButton;
