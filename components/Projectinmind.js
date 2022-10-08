import Link from "next/link"
const Projectinmind = () => {
    return(
        <div className="mx-0 lg:items-center lg:space-x-10 xl:pb-14 sm:mt-32 sm:ml-6 xl:pt-10 lg:justify-around lg:mx-0 lg:mt-10 xl:ml-0 xl:mr-16 xl:flex-row md:my-0 md:pt-36 md:mb-10 md:mx-0" id='project-in-mind'>
           <div className="px-4 md:flex md:flex-col md:space-y-14 md:px-6 xl:px-16 xl:flex-row lg:flex-row lg:items-center xl:flex xl:justify-around xl:items-center">
                <div className="lg:mr-20 xl:mr-40" id="container-text-project">
                        <h2 className="text-4xl cel:min-w-[200px] xl:text-5xl md:text-5xl">Tenes un proyecto en mente?</h2>
                        <h2 className="text-4xl cel:min-w-[200px] xl:text-5xl md:text-5xl">Sentite libre de compartirlo!</h2>
                </div>
                <div id="div-button">
                    <Link href='/contact'>
                        <a className="inline-block">
                            <div className='grid w-32 h-32 mt-12 text-xl text-black transition duration-300 ease-in-out bg-white border-2 border-black rounded-full cursor-pointer lg:ml-16 md:my-0 xl:mt-0 xl:mb-0 mb-14 sm:mb-16 sm:mt-10 lg:h-44 lg:mb-0 lg:w-44 lg:text-2xl xl:h-48 sm:h-32 sm:w-32 md:h-40 md:text-2xl duration-400 place-items-center md:w-40 xl:w-48 xl:text-3xl sm:text-2xl hover:bg-black hover:text-white' id='goContact'>
                            Contacto
                            </div>
                        </a>                  
                    </Link>
                </div>
           </div>
        </div>
    )
}
export default Projectinmind;