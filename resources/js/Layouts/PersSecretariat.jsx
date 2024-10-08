import React from 'react'

function PersSecretariat({children}) {
  return (
    <>
        <Authenticated>
            PersSecretariat
            <div>
                {children}
            </div>
        </Authenticated>
    </>
  )
}

export default PersSecretariat
