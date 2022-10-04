import Link from "next/link";
import Image from "next/image";
import Projects from "../components/Projects";
import Expertise from "../components/Expertise";
import imgHome from '../utils/gafas-ordenador.jpg';
import Head from "next/head";
import Project from '../components/Projectinmind';
import NiceMeetYou from "../components/NiceMeetYou";
import {motion} from 'framer-motion';

export default function Home() {
  return (
    <>
    <Head>
      <title>Franco Full Stack Web Developer</title>
      <meta charSet="utf-8"/>
    </Head>
        <div className="mt-[92px] xl:mt-10 w-full mb-40 xl:mx-[9px] xl:flex  sm:my-28 sm:mx-0 md:mx-0 md:mb-52 lg:mb-48 md:mt-36 lg:mt-24 lg:pl-[45px] md:mr-0" id="container-home">
            <div className='xl:text-left xl:pl-0 xl:pr-0 xl:mr-[100px] pl-[23px] pr-[23px] xl:flex-row xl:items-center xl:mx-10 xl:justify-center md:pl-0 md:grid lg:pl-0 md:m-0 xl:flex lg:justify-around lg:flex sm:grid sm:justify-items-center'>
                <div className="xl:pt-52 xl:pl-0 md:pl-[30px] lg:pt-28 sm:pl-3" id="text-home">
                    <motion.div
                      initial={{x: '-200', color: '#fff'}}
                      transition={{duration: 0.8}}
                      animate={{x: '100', color: '#000'}}
                      className="mr-0 xl:mr-20 xl:ml-1 lg:mr-8" id="container-text">
                        <h1 className='xl:text-left text-5xl min-w-[730px] lg:min-w-[500px] max-w-4xl lg:text-5xl sm:text-5xl lg:max-w-lg xl:text-6xl pb-7 sm:pb-5 sm:max-w-[630px] xl:max-w-6xl xl:leading-tight md:text-6xl md:max-w-7xl'>
                        Hola, soy Franco.<br/>
                        Ayudaré a su equipo a ganar clientes usando el diseño y soluciones éficaces.
                        </h1>
                        <motion.p
                          initial={{color: '#fff'}}
                          transition={{duration: 0.8}}
                          animate={{x: '100', color:'#898e8c'}}
                          className='xl:max-w-lg max-w-2xl text-[19px] min-w-[600px] lg:min-w-[500px] sm:max-w-4xl sm:text-xl md:max-w-4xl lg:max-w-lg text-justify lg:text-[20px] md:text-[28px] xl:text-[24px] text-neutral-500'>
                          Con la creación de valor con un diseño web estratégico, experiencias digitales centradas en las personas y
                          el desarrollo de sitios web de alta calidad.
                        </motion.p>
                        <div className='inline-block mt-10 text-xl font-medium transition ease-in border-b-2 rounded-md mb-14 sm:mt-8 md:pt-12 xl:pt-6 duration-400 hover:border-b-2 hover:border-gray-500 text-neutral-900 hover:text-neutral-500' id='linkToProject1'>
                            <Link className='hover:cursor-pointer' href='/contact'>
                              <a>
                                <motion.div 
                                  initial={{x: '-100',left:'-50', color: '#fff'}}
                                  transition={{duration: 0.8}}
                                  animate={{x: '100',left:'0', color: '#000'}}
                                  className='text-2xl xl:text-2xl md:text-xl sm:text-xl sm:font-medium'>
                                    Contáctame
                                </motion.div>
                              </a>
                            </Link>
                        </div>
                    </motion.div>
                </div>
                <div className="max-w-[70%] xl:max-w-full ml-14 min-w-[400px] lg:min-w-[520px] sm:mt-9 md:ml-[240px] lg:ml-0 md:mt-20 sm:pr-10 lg:mr-[-20px] lg:max-w-[560px] sm:max-w-sm md:max-w-[32rem] lg:h-[80%] xl:h-[800px] lg:mt-12 xl:mt-36 md:h-[650px] xl:mx-0 sm:m-auto">
                  <motion.div
                  transition={{duration: 2}}
                  id="image-homepage">
                    <Image src={imgHome} width='1700' heigth='1014' alt="programmation"/>
                  </motion.div>
                </div>
            </div>
        </div>
        <Expertise/>
        <Projects/>
        <NiceMeetYou/>
        <Project/>
    </>
  )
}