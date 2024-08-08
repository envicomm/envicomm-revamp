import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

function Application() {
    return (
        <div className='min-h-screen flex flex-col text-center justify-center'>
            <div className='relative bg-services w-screen h-[600px] bg-cover bg-center flex items-center overflow-hidden'>
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
                            <Link to="/services/application" className={`text-white hover:text-slate-500 ${location.pathname === '/services/application' ? 'underline' : ""}`}>Reporting</Link>
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
            <div className='pt-[30px] h-screen overflow-hidden'>
                <div className='pt-[32px] pl-[174px]'>
                    <Link
                        to="/services"
                        className='flex bg-darkgreen hover:bg-lightgreen rounded-2xl p-4 text-white shadow-lg inline-block w-[124px] h-[40px] text-[12px] items-center justify-center'>
                        <ArrowLeft />Back
                    </Link>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold  text-[#547326] font-serif">
                    REPORTING
                </h1>
                <p1 className="text-xl text-midgreen">
                    PIONEERING DATA-DRIVEN DECISIONS FOR A HEALTHIER ENVIRONMENT.
                </p1>

                <p className=' flex text-lightgreen justify-start pl-[342px] pt-[70px]' >
                    WE PROCESS:
                </p>

                <div className="grid grid-cols-2 gap-4 pl-[342px] pt-[50px]">
                    <div className="table-container">
                        <table className="w-full border-collapse">
                            <tbody className='text-justify text font-serif'>
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">Compliance Monitoring and Verification Report</td>
                                </tr>
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">Compliance Monitoring Report</td>
                                </tr>
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">Engineers Report for Permit to Operate Application</td>
                                </tr>
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">Environmental Monitoring Report</td>
                                </tr>
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">Self-Monitoring Report</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                   
                </div>  

            </div>

        </div>
    )
}

export default Application