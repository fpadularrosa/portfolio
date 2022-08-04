import React from "react";
import henryFood from '../utils/henryfood.jpg';
import Image from 'next/image';
import Project from '../components/Projectinmind';
import Link from 'next/link';
import Head from 'next/head'
class Henryfood extends React.Component {   
    render() {
        return <>
                <Head>
                    <title>Portfolio Project - HenryFood</title>
                </Head>
                    <div id="all">
                        <div className="pl-[25px] pr-[20px] xl:px-[200px] sm:px-0 sm:pl-[2rem] md:pr-[20px]" id="container-project-henryfood">
                            <div className="grid min-w-[350px] pt-24 mb-16 sm:mb-14 sm:pt-32 xl:ml-0 lg:ml-0 xl:mb-20">
                                <h3 className="text-5xl md:text-5xl min-w-[650px] md:min-w-[1000px] xl:text-6xl lg:text-5xl sm:text-4xl xl:max-w-2xl">Mi primer aplicación web de cocina (Full Stack)</h3>
                                <span className="pt-4 text-lg md:text-xl xl:text-2xl lg:text-xl pb-9 sm:text-lg text-neutral-500">Le hice algunos ajustes, es un trabajo de 2 semanas.</span>
                                <div id="containerLink">
                                    <div className='inline-block mt-6 text-xl transition ease-in border-b-2 rounded-md sm:text-lg hover:cursor-pointer duration-400 hover:border-b-2 hover:border-gray-500 text-neutral-900 hover:text-neutral-500' id='linkToProject1'>
                                        <Link href='https://henryfood.vercel.app'>
                                        <a target='_blank' rel="noreferrer">
                                            <div>Visitar web</div>
                                        </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <Link href='https://henryfood.vercel.app'>
                            <a target='_blank' rel="noreferrer">
                                <div id='firtProject' className='mb-4 min-w-[720px] md:min-w-[1000px] h-[78vh] sm:mr-[2rem] lg:mr-[9px] md:h-[108vh] lg:h-[103vh] sm:h-[72vh] xl:h-screen lg:w-full xl:w-full md:w-full bg-gradient-to-tr to-teal-900 via-sky-700 from-blue-300'>
                                    <div className='pb-0 lg:mt-12 grid justify-items-center md:pt-10 lg:ml-[7rem] sm:pt-2 xl:ml-[0rem] lg:pt-10 md:grid xl:mb-10 md:justify-items-center lg:grid lg:justify-items-start sm:grid sm:justify-items-center xl:grid xl:place-items-center'>
                                        <div className="w-[90%] md:w-[87%] sm:w-[95%]">
                                            <div className='shadow-2xl w-full h-[200px] mt-8 xl:mt-16 sm:h-[220px] md:w-full lg:w-full sm:w-full md:h-[300px] xl:w-full' id='project1'>
                                            <Image src={henryFood} width='1366' height='800' alt="henryfoodWebSite" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            </Link>
                        </div>
                        <div className="flex min-w-[500px] mt-8 mb-24 justify-evenly" id="container-utils-project">
                            <div className="flex justify-center" id="myRole">
                                <div>
                                    <div className="mb-3 text-xl" id="titleRol">Mi rol</div>
                                    <div className="text-lg text-neutral-500" id="examples">
                                        Front End <br/>
                                        Back End <br/>
                                    </div>
                                </div>
                                <div className="ml-24" id="tools">
                                    <div className="mb-3 text-xl" id="titleTools">Herramientas</div>
                                    <div className="text-lg text-neutral-500" id="examples-tools">
                                        React <br/>
                                        Redux <br/>
                                        JavaScript <br/>
                                        Sequelize <br/>
                                        Express <br/>
                                        NodeJS <br/>
                                        CSS
                                     </div>
                                 </div>
                            </div>
                            <div id="website">
                                <div className="mb-3 text-xl" id="title">Sitio web</div>
                                <div className='inline-block mt-4 text-lg font-medium text-black transition duration-300 ease-in border-b-2 rounded-md xl:text-xl hover:border-b-2 hover:border-gray-500 hover:text-neutral-500' id='linkToProject1'>
                                    <Link href='https://henryfood.vercel.app'>
                                    <a target='_blank' rel="noreferrer">
                                        <div>Vista previa</div>
                                    </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                <Project/>
        </>
    }
}

export default Henryfood;