import { usePage } from '@inertiajs/react';
import { MoreVertical, TableOfContents, User } from 'lucide-react';
import React , {useState} from 'react'

function Sidebar({children}) {

    const user = usePage().props.auth.user;
    const [showOptions , setShowOptions]  = useState(true);
  return (
    <>
        <aside className='h-screen'>
            <nav className='h-full w-[90px] flex flex-col bg-white border-r shadow-sm'>
                <div className="Logo p-4 pb-2 flex justify-between items-center text-lg">
                    <p className='w-32 font-extrabold text-blue-400 hover:text-blue-300 transition-colors duration-200 ease-in-out cursor-pointer'>SRB Intern Management </p>
                    <button className='p-1.5 flex flex-col items-center justify-center rounded-lg bg-gray-50 hover:bg-gray-100'>
                        <TableOfContents size={20}/>
                    </button>
                </div>
                <ul className='flex-1 px-3'>
                    {children}
                </ul>
                <div className="UserProfile border-t flex p-3">
                    <div className='bg-gray-400 rounded-[20px] px-1.5 pt-1'>
                        <User color='white'/>
                    </div>
                    <div className="flex items-center justify-between w-52 ml-3">
                        <div className="leading-4">
                            <h4 className='font-semibold text-gray-500'>{user.name} {user.last_name}</h4>
                            <span className='text-gray-500 text-[15px]'>{user.matricule}</span>
                        </div>
                        <button>
                            <MoreVertical size={20} />
                            {showOptions && (
                             <div className="absolute  bottom-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
                                <ul className="py-1">
                                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                        Profile
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                        Log Out
                                    </li>
                                </ul>
                            </div>
                            )}
                        </button>
                    </div>
                </div>
            </nav>
        </aside>
    </>
  )
}

export default Sidebar
