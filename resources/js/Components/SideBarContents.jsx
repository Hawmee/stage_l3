import React from 'react'

function SideBarContents({children}) {
  return (
    <>
        <ul>
            {children}
        </ul>
    </>
  )
}

export default SideBarContents