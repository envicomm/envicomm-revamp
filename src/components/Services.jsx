import React from 'react'
import homebg from '../assets/homebg.jpg'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'


function Services() {
  return (
    <>
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
            </ol>
        </nav>
        {/* end of breadcrumbs */}
            <h1 className='flex items-center ml-[200px] drop-shadow-lg text-extrabold text-white font-sans text-9xl'>
                SERVICES
            </h1>
        </div>
        <div className="absolute inset-0 bg-forest bg-cover bg-center opacity-40 -z-10"></div> 
        <div className='h-[200px] flex items-center justify-center z-10'>
            <div className='relative w-1/2 flex flex-col text-center space-y-5 z-10'>
                <h1 className='font-serif text-3xl text-midgreen'>
                    Services We Offer
                </h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptates pariatur vitae voluptas minus autem libero maiores, aut, nemo facilis sit. Doloribus vero possimus assumenda a corporis doloremque minus voluptatibus.</p>
            </div>
        </div>
        
        <div className='w-full flex items-center justify-center z-10'>
            <div className='grid grid-cols-2 gap-4'>
                <div className='flex items-center gap-4'>
                    <div className='max-w-prose w-[400px] space-y-5'>
                        <h1>
                            Application
                        </h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse repellat exercitationem ea, eaque quis vel ullam suscipit sapiente libero, at itaque illo tempore quod inventore nihil et nesciunt aut nam?</p>
                        <button>BUTTON</button>
                    </div>
                    <img className="h-[300px] w-[300px]  rounded-tl-full rounded-negative " src={homebg} alt='Logo'/>
                </div>

                <div className='flex items-center gap-4'>
                    <img className="h-[300px] w-[300px] rounded-tr-full " src={homebg} alt='Logo'/>
                        <div className='max-w-prose w-[400px] space-y-5'> 
                            <h1>
                                Application
                            </h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse repellat exercitationem ea, eaque quis vel ullam suscipit sapiente libero, at itaque illo tempore quod inventore nihil et nesciunt aut nam?</p>
                            <button>BUTTON</button>
                        </div>
                </div>

                <div className='flex items-center gap-4'>
                    <div className='max-w-prose w-[400px] space-y-5'>         
                        <h1>
                            Application
                        </h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse repellat exercitationem ea, eaque quis vel ullam suscipit sapiente libero, at itaque illo tempore quod inventore nihil et nesciunt aut nam?</p>
                        <button>BUTTON</button>
                    </div>
                        <img className="h-[300px] w-[300px] rounded-bl-full " src={homebg} alt='Logo'/>
                </div>

                <div className='flex items-center gap-4'>
                    <img className="h-[300px] w-[300px] rounded-br-full " src={homebg} alt='Logo'/>
                        <div className='max-w-prose w-[400px] space-y-5'> 
                            <h1>
                                Application
                            </h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse repellat exercitationem ea, eaque quis vel ullam suscipit sapiente libero, at itaque illo tempore quod inventore nihil et nesciunt aut nam?</p>
                            <button>BUTTON</button>
                        </div>
                </div>
            </div>
            <div className='absolute bg-white w-[200px] h-[200px] rounded-full items-center' />
        </div>

    </div>
    <Footer/>
    </>
  )
}

export default Services