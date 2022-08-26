import React, { PropsWithChildren } from 'react'

function Container({ children }: PropsWithChildren) {
    return (
        <div className='flex flex-col justify-center text-center my-10 rounded-lg shadow-lg'>
            {children}
        </div>
    )
}

export default Container