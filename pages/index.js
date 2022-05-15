import Link from "next/link";
import Image from "next/image";
import Portfolio from "../components/Portfolio";
import Expertise from "../components/Expertise";
import imgHome from '../utils/gafas-ordenador.jpg';
import Head from "next/head";
import Project from '../components/Projectinmind';
import NiceMeetYou from "../components/NiceMeetYou";

export default function Home() {
  return (
    <>
    <Head>
      <title>Franco Full Stack Web Developer</title>
      <meta charSet="utf-8"/>
    </Head>
        <div className="xl:mx-32 xl:pl-7 sm:my-28 sm:mx-0 md:mx-0 md:mb-52 lg:mb-48 md:mt-36 lg:mt-24 lg:mr-2 md:mr-0" id="container-home">
            <div className='xl:text-left xl:justify-around md:pl-0 md:grid lg:pl-0 md:m-0 xl:flex lg:justify-around lg:flex sm:grid sm:justify-items-center'>
                <div className="grid xl:pt-36 xl:ml-7 lg:pt-28" id="text-home">
                    <div data-aos='fade-down' data-aos-duration='500' data-aos-once='true' className="mr-0 overflow-hidden sm:ml-6 lg:mr-8" id="container-text">
                        <h1 className='xl:text-left lg:text-5xl sm:text-4xl lg:max-w-lg xl:text-6xl pb-7 sm:pb-5 sm:max-w-[630px] xl:max-w-2xl xl:leading-tight md:text-6xl md:max-w-7xl'>
                        Hola, soy Franco.<br/>
                        Ayudaré a su equipo a ganar clientes usando el diseño y soluciones éficaces.
                        </h1>
                        <p className='xl:max-w-lg sm:max-w-4xl sm:text-xl md:max-w-4xl lg:max-w-lg lg:text-[20px] md:text-[28px] xl:text-[24px] text-neutral-500'>
                        Con la creación de valor con un diseño web estratégico, experiencias digitales centradas en las personas y
                        el desarrollo de sitios web de alta calidad.
                        </p>
                        <div className='inline-block text-xl font-medium transition ease-in border-b-2 rounded-md sm:mt-8 md:pt-12 xl:pt-20 duration-400 hover:border-b-2 hover:border-gray-500 text-neutral-900 hover:text-neutral-500' id='linkToProject1'>
                            <Link className='hover:cursor-pointer' href='/contact'>
                              <a>
                                <div className='xl:text-2xl sm:text-lg sm:font-medium'>Contáctame</div>
                              </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div data-aos='fade-up-right' data-aos-once='true' className="sm:mt-9 md:ml-[240px] xl:ml-10 lg:ml-0 md:mt-20 xl:mr-0 sm:pr-10 lg:mr-[-20px] lg:max-w-[560px] sm:max-w-sm lg:h-2/4 lg:mt-12 xl:mt-8 xl:max-w-[650px] xl:h-[105vh] md:max-w-lg md:h-screen sm:m-auto" id="image-homepage">
                    <Image src={imgHome} width='770' heigth='1000' alt="programmation"/>
                </div>
            </div>
        </div>
        <Expertise/>
        <Portfolio/>
        <NiceMeetYou/>
        <Project/>
    </>
  )
}