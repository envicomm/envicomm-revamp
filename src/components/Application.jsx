import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Footer from './Footer'

function Application() {
    return (
        <div className='min-h-screen flex flex-col text-center justify-center'>
            <div className='bg-services lg:h-[600px] h-[300px] bg-cover bg-center flex flex-col items-start justify-center'>

                {/* Breadcrumbs */}
                <nav aria-label="breadcrumb" className='lg:mx-40 mx-5 '>
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
                            <Link to="/services/application" className={`text-white hover:text-slate-500 ${location.pathname === '/services/application' ? 'underline' : ""}`}>Application</Link>
                        </li>
                    </ol>
                </nav>
                {/* End of Breadcrumbs */}

                <h1 className='lg:mx-40 mx-5 drop-shadow-lg text-extrabold text-white font-sans text-5xl md:text-7xl lg:text-9xl '>
                    SERVICES
                </h1>
            </div>
            <ol>

            </ol>
            <div className='pt-[30px] h-screen overflow-hidden'>
                <div className='md:pt-[32px] md:pl-[174px] md:justify-center '>
                    <div className='flex flex-col md:flex-row items-center lg:gap-4 '>
                        <Link
                            to="/services"
                            className='flex bg-darkgreen hover:bg-lightgreen rounded-2xl p-4 text-white shadow-lg  w-[124px] h-[40px] text-[12px] items-center justify-center'>
                            <ArrowLeft />Back
                        </Link>
                    </div>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#547326] font-serif sm:px-4 md:px-6 lg:px-8">
                    APPLICATION
                </h1>
                <div className='flex items-center justify-center px-8  md:px-16'>
                    <p className="text-xl text-midgreen  flex flex-col md:flex-row items-center lg:gap-4">
                        TURNING VISIONS INTO REALITY WITH SUSTAINABLE SOLUTIONS.
                    </p>
                </div>

                <p className="flex text-lightgreen justify-start lg:pl-[342px] sm:pl-4 md:pl-6 pt-[70px] ">
                    WE PROCESS:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 md:p-6 lg:pl-[342px] text-base md:text-lg overflow-y-auto md:h-full">
                    <div className="table-container">
                        <table className="w-full border-collapse">
                            <tbody className="text-justify font-roboto">
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">Area Clearance</td>
                                </tr>
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">Certificate of Non-coverage</td>
                                </tr>
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">Chemical Control Order (CCO) Registration Application</td>
                                </tr>
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">Community Based Forest Management Agreement</td>
                                </tr>
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">Discharge Permit</td>
                                </tr>
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">Environmental Compliance Certificate (Technical & Non-Technical)</td>
                                </tr>
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">Environmental Technology Verification</td>
                                </tr>
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">Foreshore Lease Agreement</td>
                                </tr>
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">Forest Land Grazing Management Agreement (FLGMA)</td>
                                </tr>
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">Forest Land Use Agreement (FLAg)</td>
                                </tr>
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">Hazardous Waste Generator's ID</td>
                                </tr>
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">Importation Clearance (IC) Application</td>
                                </tr>
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">Integrated Forest Management Agreement (IFMA)</td>
                                </tr>
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">Miscellaneous Lease Agreement</td>
                                </tr>
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">National Water Resource Board Water Permit</td>
                                </tr>
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">Ozone Depleting Substances (ODS) Dealers & Resellers Registration Application</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="table-container">
                        <table className="w-full border-collapse text-justify">
                            <tbody className="font-roboto">
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">Permit to Operate</td>
                                </tr>
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">Permit to Transport (PTT) Application</td>
                                </tr>
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">Philippine Inventory of Chemicals and Chemical Substance Certification</td>
                                </tr>
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">Pollution Control Officer Accreditation</td>
                                </tr>
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">Pre-Manufacturing and Pre-Importation Notification Clearance</td>
                                </tr>
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">Priority Chemical List Compliance Certificate</td>
                                </tr>
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">Protected Area Management Board Clearance</td>
                                </tr>
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">Small Quantity Importation</td>
                                </tr>
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">Socialized Industrial Forest Management Agreement (SIFMA)</td>
                                </tr>
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">Special Land Use Permit (SLUP)</td>
                                </tr>
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">Special Use Agreement in Protected Areas</td>
                                </tr>
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">Transportation Registration Certificate</td>
                                </tr>
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">Treater, Storage, Disposal Facility Application</td>
                                </tr>
                                <tr>
                                    <td className="p-2 before:content-['•'] before:mr-2">Tree Cutting Permit (TCP)</td>
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