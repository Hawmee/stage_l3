import React from 'react'
import Authenticated from '../Layouts/AuthenticatedLayout'

function Waiting() {
  return (
    <>
        <Authenticated>

            <pages>

            </pages>

          <div className='w-full h-full bg-gray-100 px-20 flex flex-col items-center justify-center text-base md:text-lg lg:text-xl xl:text-2xl font-extrabold text-gray-600'>
            <p>
                The account is still under verification |
            </p>
            <p>Once verified , you will be able to have all the functionalities for your account</p>
          </div>
        </Authenticated>

    </>
  )
}

export default Waiting
