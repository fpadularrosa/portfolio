import Image from 'next/image';
import iconBar from '../utils/FP.png';
import Link from 'next/link';
const Navbar = () => {
    
    return(
        <nav className="fixed top-0 left-0 z-10 w-full bg-gradient-to-b from-white to-transparent">
            <div className="flex justify-between mx-5 mt-2 md:pr-[26px] md:pl-[20px] text-gray-700 sm:mx-0 lg:pl-0 lg:justify-between lg:mx-6 xl:mx-0 xl:pl-12 xl:justify-between md:justify-between sm:justify-between">
                <div className='lg:mr-14 xl:pl-[47px] xl:max-w-[9%] max-w-[12%] lg:max-w-[8%] md:max-w-[9%] sm:max-w-[14%] sm:pl-6 md:mr-6 md:pl-0'>
                    <Link href='/'>
                        <a>
                        <div className='hover:cursor-pointer hover:blur-[1px]'>
                            <Image src={iconBar} width='500' heigth='520' alt='icon'/>
                        </div>
                        </a>
                    </Link>
                </div>
                <ul className="items-center hidden text-base cursor-pointer lg:flex lg:pr-0 pr-52 xl:pr-10">
                    <Link href='/#expertise'>
                        <a className="duration-500 hover:cursor-pointer hover:text-neutral-300">
                            <li className="inline-block py-1 mx-4 text-xl text-black transition ease-in border-b-2 rounded-md duration-400 border-neutral-300 hover:border-b-2 hover:border-black xl:text-lg hover:text-neutral-300">Experiencia</li>
                        </a>
                    </Link>
                    <Link href='/#projects'>
                        <a className="duration-500 hover:cursor-pointer hover:text-neutral-300">
                            <li className="inline-block py-1 mx-4 text-xl text-black transition ease-in border-b-2 rounded-md duration-400 border-neutral-300 hover:border-b-2 hover:border-black xl:text-lg hover:text-neutral-300">Portfolio</li>
                        </a>
                    </Link>
                    <Link href='/about-franco'>
                        <a className="duration-500 hover:cursor-pointer hover:text-neutral-300">
                            <li className="inline-block py-1 mx-4 text-xl text-black transition ease-in border-b-2 rounded-md duration-400 border-neutral-300 hover:border-b-2 hover:border-black xl:text-lg hover:text-neutral-300">Sobre mi</li>
                        </a>
                    </Link>
                    <div className='inline-block border border-black hover:cursor-pointer hover:text-black hover:bg-neutral-100 px-8 py-3 ml-5 text-lg text-white transition duration-200 ease-in bg-black xl:px-9 xl:py-2.5 xl:ml-6 lg:ml-5 lg:mr-3 h-14 xl:h-[48px]'>
                        <Link href='/contact'>
                            <a>
                                <div className="">  
                                    Hablemos
                                </div>
                            </a>
                        </Link>
                    </div>
                </ul>

                <button className="block py-3 rounded md:mx-0 sm:mr-8 md:ml-10 md:px-0 lg:hidden focus:outline-none group"> 
                    <div className="h-1 mb-1 bg-gray-600 w-7"></div>
                    <div className="h-1 mb-1 bg-gray-600 w-7"></div>
                    <div className="h-1 bg-gray-600 w-7"></div>
                    <div className="absolute top-0 w-8/12 h-screen transition-all duration-300 bg-black border opacity-0 -right-full group-focus:right-0 group-focus:opacity-100">
                        <ul className="flex flex-col items-center w-full pt-10 text-base cursor-pointer">
                            <Link href='/#expertise'>
                                <a><li className="w-full px-6 py-4 text-xl text-white transition duration-500 ease-in rounded-md hover:text-neutral-400 duration-400 hover:border-b-2 hover:border-gray-500">Experiencia</li></a>
                            </Link>
                            <Link href='/#projects'>
                                <a><li className="w-full px-6 py-4 text-xl text-white transition duration-500 ease-in rounded-md hover:text-neutral-400 duration-400 hover:border-b-2 hover:border-gray-500">Portfolio</li></a>
                            </Link>
                            <Link href='/about-franco'>
                                <a><li className="w-full px-6 py-4 text-xl text-white transition duration-500 ease-in rounded-md hover:text-neutral-400 duration-400 hover:border-b-2 hover:border-gray-500">Sobre mi</li></a>
                            </Link>
                            <div>
                                <Link href='/contact'>
                                <a>
                                    <div className="px-8 py-4 mx-4 text-white duration-500 bg-black border border-white hover:border-black hover:border hover:bg-neutral-300 h-14">
                                        Hablemos
                                    </div>
                                </a>
                                </Link>
                            </div>
                        </ul>
                    </div>
                </button>
            </div>
        </nav>
    )

}

export default Navbar;