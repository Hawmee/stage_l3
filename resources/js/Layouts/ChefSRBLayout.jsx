import React from 'react'
import Authenticated from './AuthenticatedLayout'
import SideBarContents from '../Components/SideBarContents'
import { SideBarLinks } from '../Components/Sidebar'
import { 
    Handshake, Heart, LayoutDashboard, 
    User , GraduationCap , Users ,
    BookUser, NotebookText , Workflow
} from 'lucide-react'
import { usePage } from '@inertiajs/react'

function ChefSRBLayout({children}) {

    const current_route = usePage().url;
    
    
    const getActiveLink = ()=>{
        if(current_route.includes('dashboard')){
            return 'dashboard';
        }else if(current_route.includes('interview')){
            return 'interview';
        }else if(current_route.includes('internships')){
            return 'internships';
        }else if(current_route.includes('intern') && !current_route.includes('internships')){
            return 'interns';
        }else if(current_route.includes('offers')){
            return 'offers';
        }else if(current_route.includes('units')){
            return 'units';
        }else if(current_route.includes('accounts')){
            return 'accounts';
        }
    }

    const active_link = getActiveLink();

  return (
    <>
        <Authenticated>
                <SideBarContents>
                    <SideBarLinks icon={<LayoutDashboard size={22}/>} text={'Dashboard'} active={active_link=='dashboard'} href={'chefSRB.dashboard'} alert notifs={'2+'} />
                    <SideBarLinks icon={<Handshake size={22}/>} text='Interviews' active={active_link=='interview' } href={'chefSRB.interview'} />
                    <SideBarLinks icon={<NotebookText size={22}/>} text='Offers' active={active_link=='offers' } href={'chefSRB.offers'} />
                    <SideBarLinks icon={<BookUser size={22}/>} text='Interns' active={active_link=='interns' } href={'chefSRB.interns'} />
                    <SideBarLinks icon={<GraduationCap size={22}/>} text='InternShips' active={active_link=='internships' } href={'chefSRB.internships'} />
                    <SideBarLinks icon={<Users size={22}/>} text='Accounts' active={active_link=='accounts' } href={'chefSRB.accounts'} />
                    <SideBarLinks icon={<Workflow size={22}/>} text='Work Units' active={active_link=='units' } href={'chefSRB.units'} />
                </SideBarContents>
                <div className='h-full'>
                    {children}
                </div>
        </Authenticated>
    </>
  )
}

export default ChefSRBLayout
