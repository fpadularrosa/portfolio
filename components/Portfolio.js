import henryFood from '../utils/henry-food.jpg';
import Image from 'next/image';
import electroShop from '../utils/electroshop.png'
import Link from 'next/link';

const Portfolio = () => {
    return(
        <>
            <section data-aos='fade' data-aos-once='true'  className='mt-20 flex xl:w-[94%] sm:pl-9 lg:ml-[20px] md:mr-7 lg:pr-8 lg:w-[98%] md:mb-32 ml-0 md:pl-7 md:w-[175vh] xl:ml-4 sm:mb-20' id="container-portfolio">
                <div className='xl:w-[94%] lg:w-full md:w-[175vh] xl:ml-[185px] mx-0' id="container2-portfolio">
                    <div id="title" className='xl:pb-10 md:pb-9 sm:text-4xl sm:pb-8 md:text-4xl xl:text-5xl md:ml-0 xl:flex xl:justify-start'>
                        <h2>Proyectos pasados</h2>
                    </div>
                    <div className='' id="projects">
                        <div className='mb-20 xl:mb-32' id="container2-projects">
                            <Link href='/project-henryfood'>
                            <a>
                                <div id='firtProject' className='mb-4 sm:mr-10 xl:mr-0 xl:relative md:h-[130vh] sm:h-[76vh] lg:h-[120vh] xl:h-[100vh] xl:w-11/12 md:w-full bg-gradient-to-tr to-teal-900 via-sky-700 from-blue-300'>
                                    <div className='pb-0 md:ml-[2.5rem] md:grid xl:ml-[5rem] md:justify-items-start sm:ml-[2rem] sm:grid sm:justify-items-start xl:grid xl:place-items-start'>
                                        <h4 className='font-medium text-white xl:mb-9 xl:mt-12 sm:mb-4 xl:text-2xl md:mt-[3rem] md:text-2xl sm:mt-3'>Proyecto Individual en Henry Bootcamp</h4>
                                        <div className='w-[90%] xl:w-[90%] sm:w-[96%]'>
                                            <div className='transition-all duration-300 transform shadow-2xl sm:h-[220px] md:w-full sm:w-full xl:w-full xl:hover:scale-110 lg:hover:scale-110' id='project1'>
                                            <Image src={henryFood} width='1366' height='800' alt='henryfoodwebsite' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id='titleProject'>
                                    <h3 className='max-w-lg text-2xl sm:max-w-md sm:text-[20px]'>Poniendo a prueba todas las tecnologías enseñadas en el bootcamp Soy Henry.</h3>
                                    <div className='mt-4'>
                                        <div className='inline-block h-10 bg-black rounded-lg w-36 sm:w-32'>
                                            <div className='grid justify-center m-2 text-white text-md sm:text-[15px]'>Desarrollo Web</div>
                                        </div>
                                        <div className='inline-block h-10 ml-3 bg-black rounded-lg w-36 sm:w-32'>
                                            <div className='grid justify-center m-2 text-white text-md sm:text-[15px]'>Diseño Web</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='inline-block text-xl font-medium transition ease-in-out border-b-2 rounded-md sm:text-[19px] duration-400 mt-14 sm:mt-12 hover:border-b-2 hover:border-gray-500 text-neutral-900 hover:text-neutral-500' id='linkToProject1'>
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
                                <div id='2Project' className='mb-4 mt-20 sm:mr-10 xl:mr-0 xl:relative xl:h-[98vh] md:h-[128vh] sm:h-[76vh] xl:w-11/12 md:w-full bg-gradient-to-tr to-pink-600 via-pink-500 from-pink-300'>
                                    <div className='md:grid md:ml-[2.5rem] xl:ml-[5rem] md:justify-items-start sm:ml-[2rem] sm:grid sm:justify-items-start xl:grid xl:place-items-start'>
                                        <h4 className='font-medium text-white xl:mb-9 xl:mt-12 sm:mb-4 xl:text-2xl md:mt-[3rem] md:text-2xl sm:mt-3'>Proyecto Grupal</h4>
                                        <div className='w-[90%] xl:w-[90%] sm:w-[96%]'>
                                            <div className='transition-all duration-300 transform shadow-2xl sm:h-[220px] md:w-full sm:w-full xl:w-full xl:hover:scale-110 lg:hover:scale-110' id='imgProject1'>
                                            <Image src={electroShop} width='1366' height='800' alt='electroshopwebsite' />
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                                <div id='titleProject2'>
                                    <h3 className='max-w-lg text-2xl sm:max-w-md sm:text-[20px]'>Aplicando nuevas metodologías de trabajo en equipo</h3>
                                    <div className='mt-4'>
                                        <div className='inline-block h-10 bg-black rounded-lg w-36 sm:w-32'>
                                            <div className='grid justify-center m-2 text-white sm:text-[15px]'>Desarrollo Web</div>
                                        </div>
                                        <div className='inline-block h-10 ml-3 bg-black rounded-lg w-36 sm:w-32'>
                                            <div className='grid justify-center m-2 text-white text-md sm:text-[15px]'>Diseño Web</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='inline-block text-xl font-medium transition ease-in border-b-2 sm:text-[19px] sm:mt-12 rounded-md duration-400 xl:mt-14 md:mt-7 hover:border-b-2 hover:border-gray-500 text-neutral-900 hover:text-neutral-500' id='linkToProject1'>
                                    <Link href='/project-electroshop'>
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
export default Portfolio;
