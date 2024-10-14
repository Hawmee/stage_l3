import React from 'react'
import { chefSRBData } from '../../../context/ChefSRBcontext'

function InternShip() {

    const {test , ohatra}= chefSRBData()
  return (
    <>
        <div>
            <button onClick={test}>
                here
            </button>
            {ohatra}
        </div>
    </>
  )
}

export default InternShip
