import React from 'react'

function PersCelluleLayout({children}) {
  return (
    <>
        <Authenticated>
            PersCellule
            <div>
                {children}
            </div>
        </Authenticated>
    </>
  )
}

export default PersCelluleLayout
