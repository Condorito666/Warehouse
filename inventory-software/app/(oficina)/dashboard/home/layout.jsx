import React from 'react';
import DashboardBanner from '@/components/dashboard/DashboardBanner';
import HomeNavbar from '@/components/dashboard/HomeNavbar';

export default function HomeLayout({ children }) {
    return (
        <div className="flex flex-col h-full">
            <DashboardBanner userName="Domingo" />
            <HomeNavbar />
            <div className="mt-6 flex-1">
                {children}
            </div>
        </div>
    );
}
