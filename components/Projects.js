import henryFood from '../utils/homepage.png';
import Image from 'next/image';
import electroShop from '../utils/electroshop.png'
import Link from 'next/link';
import popsout from '../public/popsout.png';
const Projects = () => {
    return(
        <>
            <section className='mt-20 xl:mt-28 w-full pr-[20px] pl-[25px] cel:px-0 md:min-w-[768px] flex justify-center sm:pr-[30px] sm:pl-[30px] xl:w-full lg:pl-[10px] lg:pr-[20px] lg:w-full md:pt-20 md:my-0 md:pr-0 md:pl-0 md:pb-32 md:w-full xl:pr-0 xl:ml-0 sm:mb-20' id="container-portfolio">
                <div className='flex flex-col justify-center xl:w-[90%] lg:w-full xl:px-5 md:w-auto md:px-6 cel:pl-6' id="container2-portfolio">
                    <div id="title" className='mb-10 text-4xl xl:pb-10 md:pb-9 sm:text-4xl sm:pb-8 md:text-4xl xl:text-5xl xl:flex xl:justify-start'>
                        <h2>Proyectos pasados</h2>
                    </div>
                    <div className='' id="projects">
                        <div className='mb-20 xl:mb-32' id="container2-projects">
                            <Link href='/project-henryfood'>
                            <a>
                                <div id='firtProject' className='mb-10 xl:mr-0 xl:relative xl:h-[130vh] h-[55vh] md:h-[110vh] sm:h-[80vh] xl:w-[98%] lg:h-[105vh] lg:w-full md:w-full bg-gradient-to-tr to-slate-700 via-slate-500 from-blue-200'>
                                    <div className='py-5 md:mx-8 md:grid xl:ml-[3rem] md:justify-items-start sm:ml-[1rem] sm:mr-[1rem] sm:grid sm:justify-items-start xl:flex xl:justify-start xl:flex-col'>
                                        <h4 className='font-medium text-white  ml-5 xl:mb-9 xl:mt-12 sm:mb-4 xl:text-2xl md:mt-[3rem] md:text-2xl sm:mt-3'>Proyecto Individual en Henry Bootcamp</h4>
                                        <div className='w-full xl:w-[90%] ml-5 lg:w-full lg:pr-4 sm:w-[96%]'>
                                            <div className='transition-all h-full cel:h-[220px] duration-300 transform drop-shadow-2xl w-[90%] md:w-full sm:w-full xl:w-full lg:w-full xl:hover:scale-110 lg:hover:scale-110' id='project1'>
                                            <Image src={henryFood} width='1366' height='830' alt='henryfoodwebsite' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id='titleProject'>
                                    <h3 className='max-w-lg text-xl sm:max-w-md sm:text-[20px]'>Poniendo a prueba todas las tecnologías enseñadas en el bootcamp Soy Henry.</h3>
                                    <div className='flex flex-row mt-4 space-x-2'>
                                        <div className='flex justify-center w-32 bg-black rounded-lg h-9 sm:w-32'>
                                            <div className='m-2 text-white text-sm sm:text-[15px]'>Desarrollo Web</div>
                                        </div>
                                        <div className='flex justify-center w-32 bg-black rounded-lg h-9 sm:w-32'>
                                            <div className='m-2 text-white text-sm sm:text-[15px]'>Diseño Web</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='inline-block text-xl font-medium transition mb-14 lg:mb-16 ease-in-out md:mb-16 border-b-2 rounded-md sm:text-[19px] duration-400 mt-14 sm:mt-12 xl:mt-10 xl:mb-20 xl:py-0 hover:border-b-2 hover:border-gray-500 text-neutral-900 hover:text-neutral-500' id='linkToProject1'>
                                    <Link href='/project-henryfood'>
                                        <a>
                                        <div className='hover:cursor-pointer'>Ver proyecto</div>
                                        </a>
                                    </Link>
                                </div>
                            </a>
                            </Link>
                            <Link href='/project-electroshop'>
                            <a>
                            <div id='2Project' className='mb-4 xl:mr-0 xl:relative xl:h-[130vh] h-[55vh] md:h-[110vh] sm:h-[80vh] xl:w-[98%] lg:h-[105vh] lg:w-full md:w-full bg-gradient-to-tr to-pink-600 via-pink-500 from-pink-300'>
                                    <div className='md:grid py-5 md:mx-8 xl:ml-[3rem] md:justify-items-start sm:ml-[1rem] sm:mr-[1rem] sm:grid sm:justify-items-start xl:grid xl:place-items-start'>
                                        <h4 className='font-medium text-white  ml-5 xl:mb-9 xl:mt-12 sm:mb-4 xl:text-2xl md:mt-[3rem] md:text-2xl sm:mt-3'>Proyecto Grupal</h4>
                                        <div className='w-full xl:w-[93%] lg:w-full lg:pr-4 ml-5 sm:w-[96%]'>
                                            <div className='transition-all h-full duration-300 transform drop-shadow-2xl shadow-2xl w-[90%] cel:h-[220px] md:w-full sm:w-full xl:w-full xl:hover:scale-110 lg:hover:scale-110' id='imgProject1'>
                                            <Image src={electroShop} width='1366' height='830' alt='electroshopwebsite' />
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                                <div id='titleProject2'>
                                    <h3 className='max-w-lg text-xl sm:max-w-md sm:text-[20px]'>Aplicando nuevas metodologías de trabajo en equipo</h3>
                                    <div className='flex flex-row mt-4 space-x-2'>
                                        <div className='flex justify-center w-32 bg-black rounded-lg h-9 sm:w-32'>
                                            <div className='m-2 text-white text-sm sm:text-[15px]'>Desarrollo Web</div>
                                        </div>
                                        <div className='flex justify-center w-32 bg-black rounded-lg h-9 sm:w-32'>
                                            <div className='m-2 text-white text-sm sm:text-[15px]'>Diseño Web</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='inline-block text-xl font-medium transition mb-14 lg:mb-16 md:mb-16 ease-in border-b-2 sm:text-[19px] sm:mt-12 rounded-md duration-400 mt-14 xl:mt-10 xl:mb-20 md:mt-7 hover:border-b-2 hover:border-gray-500 text-neutral-900 hover:text-neutral-500' id='linkToProject1'>
                                    <Link href='/project-electroshop'>
                                        <a>
                                        <div className='hover:cursor-pointer'>Ver proyecto</div>
                                        </a>
                                    </Link>
                                </div>
                            </a>
                            </Link>
                            <Link href='/project-popsout'>
                            <a>
                            <div id='3Project' className='mb-4 xl:mt-0 xl:mr-0 xl:relative xl:h-[130vh] h-[55vh] md:h-[110vh] sm:h-[80vh] xl:w-[98%] lg:h-[105vh] lg:w-full md:w-full bg-gradient-to-bl to-purple-800 via-purple-500 from-purple-100'>
                                    <div className='md:grid py-5 md:mx-8 xl:ml-[3rem] md:justify-items-start sm:ml-[1rem] sm:mr-[1rem] sm:grid sm:justify-items-start xl:grid xl:place-items-start'>
                                        <h4 className='font-medium text-white  ml-5 xl:mb-9 xl:mt-12 sm:mb-4 xl:text-2xl md:mt-[3rem] md:text-2xl sm:mt-3'>Landing Page PopsOut</h4>
                                        <div className='w-full xl:w-[93%] lg:w-full lg:pr-4 ml-5 sm:w-[96%]'>
                                            <div className='transition-all h-full duration-300 transform drop-shadow-2xl shadow-2xl w-[90%] md:w-full sm:w-full cel:h-[220px] xl:w-full xl:hover:scale-110 lg:hover:scale-110' id='imgProject1'>
                                            <Image src={popsout} width='1366' height='830' alt='popsoutwebsite' />
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                                <div id='titleProject2'>
                                    <h3 className='max-w-lg text-xl sm:max-w-md sm:text-[20px]'>Una simple pero muy bonita landing page para tu sitio web.</h3>
                                    <div className='flex flex-row mt-4 space-x-2'>
                                        <div className='flex justify-center w-32 bg-black rounded-lg h-9 sm:w-32'>
                                            <div className='m-2 text-white text-sm sm:text-[15px]'>Desarrollo Web</div>
                                        </div>
                                        <div className='flex justify-center w-32 bg-black rounded-lg h-9 sm:w-32'>
                                            <div className='m-2 text-white text-sm sm:text-[15px]'>Diseño Web</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='inline-block text-xl font-medium transition cel:mb-14 ease-in border-b-2 sm:text-[19px] sm:mt-12 rounded-md duration-400 mt-14 xl:mt-14 md:mt-7 hover:border-b-2 hover:border-gray-500 text-neutral-900 hover:text-neutral-500' id='linkToProject1'>
                                    <Link href='/project-popsout'>
                                        <a>
                                        <div className='hover:cursor-pointer'>Ver proyecto</div>
                                        </a>
                                    </Link>
                                </div>
                            </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Projects;