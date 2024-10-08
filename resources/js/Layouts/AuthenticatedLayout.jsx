import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import Sidebar from '../Components/Sidebar';

export default function Authenticated({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <>
            <div className=' h-full flex flex-row '>
                {/* <siv className="sidebar bg-red-200">
                    sidebar
                    {children[0]}
                </siv> */}

                <Sidebar>
                    {children[0]}
                </Sidebar>
                <div className="main bg-gray-50 w-full">
                    {children[1]}
                </div>
            </div>
        </>
    );
}
