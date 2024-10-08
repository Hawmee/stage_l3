import React from 'react'
import Authenticated from './AuthenticatedLayout'

function ChefSRBLayout({children}) {
  return (
    <>
        <Authenticated>
            <>
                ChefSRBLayout
                <div>
                    {children}
                </div>
            </>
        </Authenticated>
    </>
  )
}

export default ChefSRBLayout
