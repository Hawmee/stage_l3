import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import { AlignJustify, TableOfContents } from 'lucide-react';
import SideBarContents from '../Components/SideBarContents';

export default function Authenticated({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <>
            <div className='flex flex-col h-screen'>
                <div className='flex flex-row justify-between py-4 border-b shadow-sm'>
                    <div className='logo px-4 flex flex-row items-center'>
                        <div>
                            <button className='p-1.5 flex flex-col items-center justify-center rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-600'>
                                <AlignJustify size={20}/>
                            </button>
                        </div>
                        <div className='font-extrabold text-lg text-blue-400 hover:text-blue-300 transition-colors duration-200 ease-in-out cursor-pointer ml-2'>
                            SRB Intern Management
                        </div>
                    </div>
                    <div className='dark/light px-10 flex flex-row items-center justify-between'>
                        <div className='mr-5'>
                            EN/FR
                        </div>
                        <div>
                            DARK/LIGHT
                        </div>
                    </div>
                </div>
                <div className=' h-full flex flex-row '>
                    <Sidebar>
                        {children[0]}
                    </Sidebar>
                    <div className="main bg-gray-50 w-full h-full">
                        {children[1]}
                    </div>
                </div>
            </div>
        </>
    );
}
