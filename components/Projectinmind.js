import Link from "next/link"
const Projectinmind = () => {
    return(
        <>
        <div className="mx-6 xl:flex xl:pb-24 sm:mt-32 sm:ml-6 xl:pt-10 xl:justify-around xl:flex-row xl:items-center md:mt-60 md:ml-5" id='project-in-mind'>
           <div id="container-text-project">
                <h2 className="text-4xl min-w-[400px] xl:text-5xl md:text-5xl sm:text-4xl">Tenes un proyecto en mente?</h2>
                <h2 className="text-4xl min-w-[400px] xl:text-5xl md:text-5xl sm:text-4xl">Sentite libre de compartirlo!</h2>
           </div>
            <div id="div-button">
                <Link href='/contact'>
                    <a>
                        <div className='grid w-32 h-32 mt-12 text-xl text-black transition duration-300 ease-in-out bg-white border border-black rounded-full cursor-pointer md:mt-9 xl:mt-0 xl:mb-0 md:mb-24 mb-14 sm:mb-16 sm:mt-10 lg:h-32 lg:mb-0 lg:w-32 lg:text-2xl xl:h-36 sm:h-32 sm:w-32 md:h-28 md:text-lg duration-400 place-items-center md:w-28 xl:w-36 xl:text-2xl sm:text-2xl hover:bg-black hover:text-white' id='goContact'>
                        Contacto
                        </div>
                    </a>                  
                </Link>
            </div>
        </div>
        </>
    )
}
export default Projectinmind;