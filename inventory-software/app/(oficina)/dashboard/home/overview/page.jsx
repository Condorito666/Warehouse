import React from 'react';
import SalesOverview from '@/components/dashboard/SalesOverview';

export default function Dashboard() {
    return (
        <div className="space-y-6">
            {/* Overview Metrics Section */}
            <SalesOverview />

        </div>
    )
}