import React from 'react'
import Authenticated from './AuthenticatedLayout'
import SideBarContents from '../Components/SideBarContents'

function ChefSRBLayout({children}) {
  return (
    <>
        <Authenticated>
                <SideBarContents>
                    <li>Dashboard</li>
                    <li>Units</li>
                    <li>Interview</li>
                    <li>Accounts</li>
                    <li>Attestations</li>
                </SideBarContents>
                <div>
                    {children}
                </div>
        </Authenticated>
    </>
  )
}

export default ChefSRBLayout
