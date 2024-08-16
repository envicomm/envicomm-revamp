import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Footer from './Footer'

function Application() {
    return (
        <>
            <div className='w-full flex flex-col text-center justify-center'>
                <div className='bg-services lg:h-[600px] h-[300px] bg-cover bg-center flex flex-col items-start justify-center'>
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
                                <Link to="/services/application" className={`text-white hover:text-slate-500 ${location.pathname === '/services/application' ? 'underline' : ""}`}>Planning</Link>
                            </li>
                        </ol>
                    </nav>
                    {/* end of breadcrumbs */}
                    <h1 className='lg:mx-40 mx-5 drop-shadow-lg text-extrabold text-white font-sans text-5xl md:text-7xl lg:text-9xl '>
                        SERVICES
                    </h1>


                </div>
                <ol>

                </ol>
                <div className='pt-[30px] h-screen overflow-hidden'>
                    <div className='md:pt-[32px] md:pl-[174px] md:justify-center '>
                        <div className='flex flex-col md:flex-row items-center lg:gap-4'>
                            <Link
                                to="/services"
                                className='flex bg-darkgreen hover:bg-lightgreen rounded-2xl p-4 text-white shadow-lg  w-[124px] h-[40px] text-[12px] items-center justify-center'>
                                <ArrowLeft />Back
                            </Link>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold  text-[#547326] font-serif">
                        PLANNING
                    </h1>
                    <p1 className="text-xl text-midgreen">
                        PIONEERING DATA-DRIVEN DECISIONS FOR A HEALTHIER ENVIRONMENT.
                    </p1>

                    <p className=' flex text-lightgreen justify-start   lg:pl-[342px] pt-[70px]' >
                        WE PROCESS:
                    </p>

                    <div className=" grid grid-cols-2 md:grid-cols-2 gap-4 p-4 md:p-6 lg:pl-[342px] text-base md:text-lg overflow-y-auto sm:h-full">
                        <div className="table-container">
                            <table className="w-full border-collapse">
                                <tbody className='text-justify text font-serif'>
                                    <tr>
                                        <td className="p-2 before:content-['•'] before:mr-2">Comprehensive Development and Management Plan</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 before:content-['•'] before:mr-2">Environmental Management Plan</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 before:content-['•'] before:mr-2">Environmental Monitoring Plan</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 before:content-['•'] before:mr-2">Indicative Management Plan</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 before:content-['•'] before:mr-2">Indicative Management Plan</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 before:content-['•'] before:mr-2">Feasibility Study</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 before:content-['•'] before:mr-2">Cistern Tank Design</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 before:content-['•'] before:mr-2">Wastewater Treatment Facility Design</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 before:content-['•'] before:mr-2">Material Recovery Facility Design</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 before:content-['•'] before:mr-2">Hazardous Waste Storage Facility Design</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 before:content-['•'] before:mr-2">Architectural Plans</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 before:content-['•'] before:mr-2">Site Development Plan</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 before:content-['•'] before:mr-2">Floor Plans</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className="table-container text-justify ">
                            <table className="w-full border-collapse">
                                <tbody className='font-serif'>
                                    <tr>
                                        <td className="p-2 before:content-['•'] before:mr-2">Elevations</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 before:content-['•'] before:mr-2">Detailed/Blow-Up Plans</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 before:content-['•'] before:mr-2">Material Schedules</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 before:content-['•'] before:mr-2">Perspectives</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 before:content-['•'] before:mr-2">Exterior Perspective</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 before:content-['•'] before:mr-2">Interior Perspective</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 before:content-['•'] before:mr-2">Aerial Perspective</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 before:content-['•'] before:mr-2">Scaled Model/Diorama</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 before:content-['•'] before:mr-2">Walkthrough Video</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 before:content-['•'] before:mr-2">As-Built Plan</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 before:content-['•'] before:mr-2">Detailed Plans</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 before:content-['•'] before:mr-2">Septic Tank Details</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 before:content-['•'] before:mr-2">Wastewater Treatment Facility Details</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 before:content-['•'] before:mr-2">Equipment Specifications</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 before:content-['•'] before:mr-2">Cost Estimates</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>



                </div>

            </div>

        </>
    )
}

export default Application