import henryFood from '../utils/henry-food.jpg';
import Image from 'next/image';
import electroShop from '../utils/electroshop.png'
import Link from 'next/link';

const Portfolio = () => {
    return(
        <>
            <section className='mt-20 w-full pr-[25px] pl-[25px] min-w-[760px] sm:pr-[30px] sm:pl-[30px] grid justify-items-center xl:w-[93%] lg:pl-[35px] lg:pr-[20px] lg:w-[97%] md:pr-[30px] md:pl-[30px] md:mb-32 md:w-full xl:pr-[35px] xl:pl-[40px] sm:mb-20' id="container-portfolio">
                <div className='xl:w-[92%] lg:w-full md:w-[170vh] xl:ml-[185px]' id="container2-portfolio">
                    <div id="title" className='mb-10 text-4xl xl:pb-10 md:pb-9 sm:text-4xl sm:pb-8 md:text-4xl xl:text-5xl xl:flex xl:justify-start'>
                        <h2>Proyectos pasados</h2>
                    </div>
                    <div className='' id="projects">
                        <div className='mb-20 xl:mb-32' id="container2-projects">
                            <Link href='/project-henryfood'>
                            <a>
                                <div id='firtProject' className='mb-4 xl:mr-0 xl:relative xl:h-[107vh] h-[82vh] md:h-[128vh] sm:h-[86vh] xl:w-11/12 lg:w-full md:w-full bg-gradient-to-tr to-teal-900 via-sky-700 from-blue-300'>
                                    <div className='py-5 md:mx-8 md:grid xl:ml-[3rem] md:justify-items-start sm:ml-[1rem] sm:mr-[1rem] sm:grid sm:justify-items-start xl:grid xl:place-items-start'>
                                        <h4 className='font-medium text-white  ml-5 xl:mb-9 xl:mt-12 sm:mb-4 xl:text-2xl md:mt-[3rem] md:text-2xl sm:mt-3'>Proyecto Individual en Henry Bootcamp</h4>
                                        <div className='w-full xl:w-[93%] ml-5 lg:w-[90%] sm:w-[96%]'>
                                            <div className='transition-all h-[220px] duration-300 transform shadow-2xl w-[90%] sm:h-[220px] md:w-full sm:w-full xl:w-full xl:hover:scale-110 lg:hover:scale-110' id='project1'>
                                            <Image src={henryFood} width='1366' height='800' alt='henryfoodwebsite' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id='titleProject'>
                                    <h3 className='max-w-lg text-xl sm:max-w-md sm:text-[20px]'>Poniendo a prueba todas las tecnologías enseñadas en el bootcamp Soy Henry.</h3>
                                    <div className='mt-4'>
                                        <div className='inline-block w-32 h-10 bg-black rounded-lg sm:w-32'>
                                            <div className='grid justify-center m-2 text-white text-sm sm:text-[15px]'>Desarrollo Web</div>
                                        </div>
                                        <div className='inline-block w-32 h-10 ml-3 bg-black rounded-lg sm:w-32'>
                                            <div className='grid justify-center m-2 text-white text-sm sm:text-[15px]'>Diseño Web</div>
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
                            <div id='2Project' className='mb-4 mt-20 xl:mr-0 xl:relative h-[82vh] xl:h-[107vh] md:h-[128vh] sm:h-[86vh] xl:w-11/12 md:w-full bg-gradient-to-tr to-pink-600 via-pink-500 from-pink-300'>
                                    <div className='md:grid py-5 md:mx-8 xl:ml-[3rem] md:justify-items-start sm:ml-[1rem] sm:mr-[1rem] sm:grid sm:justify-items-start xl:grid xl:place-items-start'>
                                        <h4 className='font-medium text-white  ml-5 xl:mb-9 xl:mt-12 sm:mb-4 xl:text-2xl md:mt-[3rem] md:text-2xl sm:mt-3'>Proyecto Grupal</h4>
                                        <div className='w-full xl:w-[93%] lg:w-[90%] ml-5 sm:w-[96%]'>
                                            <div className='transition-all h-[220px] duration-300 transform shadow-2xl w-[90%] sm:h-[220px] md:w-full sm:w-full xl:w-full xl:hover:scale-110 lg:hover:scale-110' id='imgProject1'>
                                            <Image src={electroShop} width='1366' height='800' alt='electroshopwebsite' />
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                                <div id='titleProject2'>
                                    <h3 className='max-w-lg text-xl sm:max-w-md sm:text-[20px]'>Aplicando nuevas metodologías de trabajo en equipo</h3>
                                    <div className='mt-4'>
                                        <div className='inline-block w-32 h-10 bg-black rounded-lg sm:w-32'>
                                            <div className='grid justify-center m-2 text-white text-sm sm:text-[15px]'>Desarrollo Web</div>
                                        </div>
                                        <div className='inline-block w-32 h-10 ml-3 bg-black rounded-lg sm:w-32'>
                                            <div className='grid justify-center m-2 text-white text-sm sm:text-[15px]'>Diseño Web</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='inline-block text-xl font-medium transition ease-in border-b-2 sm:text-[19px] sm:mt-12 rounded-md duration-400 mt-14 xl:mt-14 md:mt-7 hover:border-b-2 hover:border-gray-500 text-neutral-900 hover:text-neutral-500' id='linkToProject1'>
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
