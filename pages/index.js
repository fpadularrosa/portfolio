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
        <div className="mt-[75px] xl:mb-44 xl:mt-32 w-full mb-40 md:px-7 xl:ml-0 xl:mr-0 sm:my-28 sm:mx-0 md:mx-0 md:mb-52 lg:mb-48 xl:pb-36 md:mt-36 lg:px-0 xl:px-0 lg:mt-24 lg:pl-0 md:mr-0" id="container-home">
            <div className='js-show-on-scroll lg:pr-0 xl:grid-flex-row xl:text-left md:pr-0 xl:mx-6 xl:ml-0 pl-[23px] pr-[23px] xl:pl-0 md:pl-0 md:flex md:flex-col md:justify-center md:items-center lg:pl-0 md:m-0 lg:ml-5 lg:mr-10 lg:justify-around lg:flex lg:flex-row sm:grid sm:justify-items-center'>
                <div className="xl:pt-10 xl:pl-0 xl:ml-0 md:pl-0 lg:pt-10 lg:max-w-[425px] md:max-w-full xl:max-w-[512px] lg:pl-0 sm:pl-3 lg:mr-14 xl:mr-0 pb-10" id="text-home">
                    <div className="mr-0 xl:mr-0 xl:ml-0 lg:mr-0 lg:ml-[6px]" id="container-text">
                        <h1 className='xl:text-left text-4xl lg:min-w-[400px] lg:text-5xl lg:font-medium sm:text-5xl lg:max-w-[480px] xl:text-5xl pb-7 sm:pb-5 sm:max-w-[630px] xl:max-w-[450px] md:min-w-[700px] xl:leading-tight md:text-6xl md:max-w-[1000px]'>
                        Hola, soy Franco.<br/>
                        Ayudaré a su equipo a ganar clientes usando el diseño y soluciones éficaces.
                        </h1>
                        <p className='xl:max-w-md max-w-2xl text-[19px] lg:min-w-[250px] lg:max-w-[400px] sm:max-w-4xl sm:text-xl md:max-w-4xl lg:text-[22px] md:text-[28px] xl:text-[20px] text-neutral-500'>
                          Con la creación de valor con un diseño web estratégico, experiencias digitales centradas en las personas y
                          el desarrollo de sitios web de alta calidad.
                        </p>
                        <div className='inline-block text-xl font-medium transition ease-in border-b-2 rounded-md mt-14 mb-14 sm:mt-8 lg:pt-6 md:pt-12 xl:mt-10 duration-400 hover:border-b-2 hover:border-gray-500 text-neutral-900 hover:text-neutral-500' id='linkToProject1'>
                            <Link className='hover:cursor-pointer' href='/contact'>
                              <a> <div className='xl:text-xl md:text-xl sm:text-lg sn:font-medium'>Contáctame</div> </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mx-0 lg:min-w-[450px] sn:px-0 sn:mx-0 sm:mt-9 md:ml-0 lg:pr-0 lg:ml-0 md:mt-20 sm:pr-10 lg:mr-0 lg:max-w-[470px] xl:ml-0 xl:max-w-[500px] md:w-[568px] md:pr-0 md:mr-0 lg:h-auto xl:h-auto lg:mt-12 xl:pl-0 xl:mt-0 xl:mb-0 xl:mr-0 sm:m-auto">
                    <Image src={imgHome} width='2100' heigth='1000' alt="programmation"/>
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