import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Footer from './Footer'
import Animate from './Animate'

function Application() {
    return (
        <div className='min-h-screen flex flex-col text-center justify-center'>

            <div className='bg-services lg:h-[600px] h-[300px] bg-cover bg-center flex flex-col items-start justify-center'>
                <Animate>
                    {/* breacrumbs */}
                    <nav aria-label="breadcrumb" className='lg:mx-40 mx-5'>
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
                    <h1 className='lg:mx-40 mx-5 drop-shadow-lg text-extrabold text-white font-sans text-5xl md:text-7xl lg:text-9xl '>
                        SERVICES
                    </h1>

                </Animate>
            </div>
            <ol>

            </ol>
            <Animate>
                <div className='pt-[30px] lg:h-full overflow-hidden'>
                    <div className='md:pt-[32px] md:pl-[174px] md:justify-center '>
                        <div className='flex flex-col md:flex-row items-center lg:gap-4 '>
                            <Link
                                to="/services"
                                className='flex bg-darkgreen hover:bg-lightgreen rounded-2xl p-4 text-white shadow-lg  w-[124px] h-[40px] text-[12px] items-center justify-center'>
                                <ArrowLeft />Back
                            </Link>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold  text-[#547326] font-serif">
                        REPORTING
                    </h1>
                    <p1 className="text-xl text-midgreen">
                        PIONEERING DATA-DRIVEN DECISIONS FOR A HEALTHIER ENVIRONMENT.
                    </p1>

                    <p className=' flex text-lightgreen justify-start   lg:pl-[342px] pt-[70px] px-4' >
                        WE PROCESS:
                    </p>

                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-6 lg:pl-[342px] text-base md:text-lg overflow-y-auto h-full ">
                        <div className="table-container">
                            <table className="w-full border-collapse">
                                <tbody className='text-start text font-serif'>
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
            </Animate>
            <div className='md:pt-[32px] md:pl-[174px] md:justify-center '>
                <div className='flex flex-col md:flex-row items-center lg:gap-4 '>
                    <Link
                        to="/services"
                        className='flex bg-darkgreen hover:bg-lightgreen rounded-2xl p-4 text-white shadow-lg  w-[124px] h-[40px] text-[12px] items-center justify-center'>
                        <ArrowLeft />Back
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Application