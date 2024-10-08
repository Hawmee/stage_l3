import React from 'react'

function ChefUnitLayout({children}) {
  return (
    <>
        <Authenticated>
            ChefUnit
            <div>
                {children}
            </div>
        </Authenticated>
    </>
  )
}

export default ChefUnitLayout
