import React, { PropsWithChildren } from 'react'

function Container({ children }: PropsWithChildren) {
    return (
        <div className='flex flex-col p-5 justify-center text-center my-10 rounded-lg shadow-lg bg-slate-400 dark:bg-slate-900'>
            {children}
        </div>
    )
}

export default Container