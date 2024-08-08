import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'

function Application() {
    const images = [
        { src: project1, colSpan: 'col-span-2', rowSpan: 'row-span-2' },
        { src: project2, colSpan: 'col-span-1', rowSpan: 'row-span-1' },
        { src: project3, colSpan: 'col-span-1', rowSpan: 'row-span-1' },
    ]
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
                            <Link to="/services/application" className={`text-white hover:text-slate-500 ${location.pathname === '/services/application' ? 'underline' : ""}`}>Planning</Link>
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
                    PLANNING
                </h1>
                <p1 className="text-xl text-midgreen">
                    PIONEERING DATA-DRIVEN DECISIONS FOR A HEALTHIER ENVIRONMENT.
                </p1>

                <p className=' flex text-lightgreen justify-start pl-[342px] pt-[70px]' >
                    WE PROCESS:
                </p>

                <div className="grid grid-cols-2 gap-4 pl-[342px]">
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
            <div className='h-screen w-screen pt-[100px] '>
                <h1 className='text-darkgreen font-serif text-6xl'>
                    Lorem ipsum dolor sit amet
                </h1>
                <div className="container mx-auto p-4">
                    <div className="grid grid-cols-3 grid-rows-2 gap-4">
                        {images.map((image, index) => (
                            <div key={index} className={`bg-gray-200 rounded overflow-hidden ${image.colSpan} ${image.rowSpan}`}>
                                <img
                                    src={image.src}
                                    alt={`Example ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex bg-services w-screen h-[379px] bg-cover bg-center flex items-center overflow-hidden justify-center " >
                <h1 className='text-white text-[50px] font-bold font-serif justify-center'>
                    HOW CAN WE ASSIST YOU TODAY
                    <div className='pt-[32px] flex justify-center'>
                        <Link
                            to="/contact"
                            className='flex bg-midgreen hover:bg-lightgreen rounded-2xl p-4 text-white shadow-lg inline-block w-[124px] h-[40px] text-[12px] items-center justify-center'>
                            Contact Us
                        </Link>
                    </div>
                </h1>
            </div>
        </div>
    )
}

export default Application