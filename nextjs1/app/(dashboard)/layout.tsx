import React from 'react'

const Layout = ({children} : {children: React.ReactNode})=>{
  return (
    <div>
        <p className='text-sky-500'>DASHBOARD</p>
    {children}
    </div>
  )
}

export default Layout