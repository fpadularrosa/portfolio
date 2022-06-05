import Link from "next/link";
import Image from "next/image";
import Project from "../components/Projectinmind";
import electroShop from '../utils/electroshop.png'
import Head from 'next/head'
const Electroshop = () => {
    return(
        <>
                <Head>
                    <title>Portfolio Project - Electroshop</title>
                </Head>
                    <div className="lg:ml-0"  id="all">
                        <div className="pl-[25px] pr-[20px] xl:px-[200px] lg:pr-0 sm:px-0 sm:pl-[2rem] md:pr-[20px]"  id="container-project-electroshop">
                            <div className="grid min-w-[350px] pt-24 mb-16 sm:mb-14 sm:pt-32 xl:ml-0 lg:ml-0 xl:mb-20">
                                <h3 className="text-5xl md:text-5xl min-w-[650px] xl:text-6xl lg:text-5xl sm:text-4xl xl:max-w-2xl">Proyecto Grupal en Henry</h3>
                                <span className="pt-4 text-xl md:text-xl xl:text-2xl lg:text-xl pb-9 sm:text-lg text-neutral-500">Trabajo de un mes en equipo con 6 compañeros como proyecto final en el bootcamp.</span>
                                <div id="containerLink">
                                    <div className='inline-block mt-6 text-xl transition ease-in border-b-2 rounded-md xl:text-2xl sm:text-lg hover:cursor-pointer duration-400 hover:border-b-2 hover:border-gray-500 text-neutral-900 hover:text-neutral-500' id='linkToProject1'>
                                        <Link href='https://electroshop-ecommerce.vercel.app'>
                                        <a target='_blank' rel="noreferrer" >
                                            <div>Visitar web</div>
                                        </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <Link href='https://electroshop-ecommerce.vercel.app'>
                            <a target='_blank' rel="noreferrer">
                                <div id='secondProject' className='mb-4 min-w-[670px] h-[78vh] sm:mr-[2rem] lg:mr-[9px] md:h-[100vh] lg:h-[120vh] sm:h-[70vh] xl:h-screen lg:w-full xl:w-full md:w-full bg-gradient-to-tr to-pink-600 via-pink-500 from-pink-300'>
                                    <div className='grid pb-0 lg:mt-12 md:pt-8 sm:pt-4 justify-items-center lg:pt-10 lg:ml-14 md:grid xl:mb-10 xl:ml-0 md:justify-items-center lg:grid lg:justify-items-start sm:grid sm:justify-items-center xl:grid xl:place-items-center'>
                                        <div className="w-[90%] xl:w-[90%] md:w-[87%] sm:w-[84%] lg:w-[94%]">
                                            <div className='shadow-2xl h-[200px] mt-8 xl:mt-16 sm:h-[220px] md:w-full lg:w-full sm:w-full md:h-[333px] xl:w-full' id='project1'>
                                            <Image src={electroShop} width='1366' height='800' alt="electroshopWebSite"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            </Link>
                        </div>
                        <div className="flex pl-[40px] min-w-[500px] mt-8 mb-24 justify-evenly" id="container-utils-project">
                            <div className="flex justify-center" id="myRole">
                                <div>
                                    <div className="mb-3 text-xl xl:text-xl" id="titleRol">Mi rol</div>
                                    <div className="text-lg xl:text-lg text-neutral-500" id="examples">
                                        Front End <br/>
                                        Back End <br/>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-24 mr-12" id="tools">
                                <div className="mb-3 text-xl xl:text-xl" id="titleTools">Herramientas</div>
                                <div className="text-lg xl:text-lg text-neutral-500" id="examples-tools">
                                    React <br/>
                                    Redux <br/>
                                    JavaScript <br/>
                                    Sequelize <br/>
                                    Express <br/>
                                    NodeJS <br/>
                                    CSS
                                </div>
                            </div>
                            <div id="website">
                                <div className="mb-3 text-xl xl:text-xl" id="title">Sitio web</div>
                                <div className='inline-block mt-4 text-lg font-medium transition duration-300 ease-in border-b-2 rounded-md xl:text-xl hover:border-b-2 hover:border-gray-500 text-neutral-900 hover:text-neutral-500' id='linkToProject1'>
                                    <Link href='https://electroshop-ecommerce.vercel.app'>
                                        <a target='_blank' rel="noreferrer">
                                        <div className='hover:cursor-pointer'>Vista previa</div>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                <Project/>
        </>
    )
}
export default Electroshop;