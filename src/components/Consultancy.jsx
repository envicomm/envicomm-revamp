import React from 'react'
import { Link } from 'react-router-dom'

function Consultancy() {
  return (
    <div className='w-screen flex flex-col text-center justify-center'>
        <div className='relative bg-services h-[600px] bg-cover bg-center flex items-center'> 
        {/* breacrumbs */}
                <nav aria-label="breadcrumb" className='absolute top-[200px] left-[200px] z-10'>
                    <ol className="flex space-x-2 text-gray-500">
                        <li>
                            <Link to="/" className='text-white hover:text-slate-500'>Home</Link>
                        </li>
                        <li>-</li>
                        <li>
                            <Link to="/Services" className={`text-white hover:text-slate-500 ${location.pathname === '/Services' ? 'underline' : ""}`}>Services</Link>
                        </li>
                        <li>-</li>
                        <li>
                            <Link to="/services/application" className={`text-white hover:text-slate-500 ${location.pathname === '/services/consultancy' ? 'underline' : ""}`}>Consultancy</Link>
                        </li>
                    </ol>
                </nav>
        {/* end of breadcrumbs */}
            <h1 className='flex items-center ml-[200px] drop-shadow-lg text-extrabold text-white font-sans text-9xl'>
                SERVICES
            </h1>
        </div>
        <ol>

        </ol>
    </div>
  )
}

export default Consultancy