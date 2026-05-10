function SalesOverview() {
    const salesActivities = [
        {
            title: "Productos totales",
            value: "1,248",
            description: "Cantidad",
            icon: "package",
            color: "emerald"
        },
        {
            title: "Alerta de Stock Bajo",
            description: "Productos con stock bajo",
            value: "12",
            icon: "alert",
            color: "rose"
        },
        {
            title: "Pedidos Recientes",
            description: "Cantidad",
            value: "34",
            icon: "shopping-cart",
            color: "blue"
        },
        {
            title: "Total de pedidos",
            description: "Cantidad",
            value: "14",
            icon: "Package",
            color: "green",
        }
    ]
    const inventoryIndicators = [
        {
            title: "Inventory Quantity",
            value: "45,231",
            description: "Products in stock",
            icon: "package",
            color: "emerald"
        },
        {
            title: "Arrivals",
            value: "240",
            description: "Products received",
            icon: "package",
            color: "blue"
        }
    ]
    return (
        <div className="space-y-6">
            {/* Overview Metrics Section */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
                <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">Métricas Generales</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {/* Placeholder for metrics */}
                    {salesActivities.map((activity) => {
                        const colorClasses = {
                            emerald: "text-emerald-500 dark:text-emerald-400",
                            rose: "text-rose-500 dark:text-rose-400",
                            blue: "text-blue-500 dark:text-blue-400",
                            green: "text-green-500 dark:text-green-400"
                        };
                        return (
                            <div key={activity.title} className="flex flex-col items-center justify-center gap-3 hover:cursor-pointer bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
                                <h4 className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase text-center">   {activity.title}</h4>
                                <small className="text-slate-400 text-center">{activity.description}</small>
                                <p className={`text-3xl font-bold ${colorClasses[activity.color] || 'text-slate-800 dark:text-slate-100'} mt-2`}>{activity.value}</p>
                            </div>
                        );
                    })}

                    {/* Inventory Indicators Column */}
                    <div className="flex flex-col gap-6">
                        {inventoryIndicators.map((indicator) => {
                            const colorClasses = {
                                emerald: "text-emerald-500 dark:text-emerald-400",
                                rose: "text-rose-500 dark:text-rose-400",
                                blue: "text-blue-500 dark:text-blue-400",
                                green: "text-green-500 dark:text-green-400"
                            };
                            return (
                                <div key={indicator.title} className="flex-1 flex flex-col items-center justify-center gap-2 hover:cursor-pointer bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
                                    <h4 className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase text-center">{indicator.title}</h4>
                                    <p className={`text-2xl font-bold ${colorClasses[indicator.color] || 'text-slate-800 dark:text-slate-100'} mt-1`}>{indicator.value}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SalesOverview