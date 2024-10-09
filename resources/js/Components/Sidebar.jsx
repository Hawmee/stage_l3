import { usePage } from '@inertiajs/react';
import { CirclePower, LogOut, MoreVertical, TableOfContents, User } from 'lucide-react';
import { Link } from '@inertiajs/react';
import React , {useState} from 'react'

export default function Sidebar({children}) {

    const user = usePage().props.auth.user;
    const [showOptions , setShowOptions]  = useState(true);
  return (
    <>
        <aside className='h-full'>
            <nav className='h-full flex flex-col bg-white border-r shadow-sm'>
                <div className='flex-1 px-3'>
                    {children}
                </div>
                
                <div className="UserProfile border-t flex p-3">
                    <div className='bg-gray-600 rounded-[20px] px-1.5 pt-1'>
                        <User color='white'/>
                    </div>
                    <div className="flex items-center justify-between w-52 ml-3">
                        <div className="leading-4 cursor-pointer">
                            <Link href={route('profile.edit')}>
                                <h4 className='font-semibold text-gray-500 hover:text-gray-600'>{user.name} {user.last_name}</h4>
                                <span className='text-gray-500 text-[15px] '>ID: {user.matricule}</span>
                            </Link>
                        </div>
                        <button className='text-red-400 hover:text-red-500'>
                            <Link method="post" href={route('logout')} as="button">
                                <LogOut />
                            </Link>
                        </button>
                    </div>
                </div>
            </nav>
        </aside>
    </>
  )
}

export function SideBarLinks({icon , text , href ,active , alert , notifs}){

    const routeHref = href ? route(href) : route('home');

    return(
        <li >
            <Link className={`
                relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors
                ${
                    active?
                        'bg-gray-100 text-blue-400'
                    :
                        'hover:bg-gray-200 text-gray-300 text-gray-700 '
                }
            `} href={routeHref}>
                {icon}
                <span className=' ml-3'>{text}</span>
                {alert&&
                    <div className='absolute right-2 px-2 rounded-[10px] bg-blue-400 text-[12px] text-gray-50'>
                        <p>{notifs}</p>
                    </div>
                }
            </Link>
        </li>
    )
}

