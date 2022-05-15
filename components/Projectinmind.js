import Link from "next/link"
const Project = () => {
    return(
        <>
        <div data-aos='fade-up' data-aos-once='true' data-aos-duration='300' className="xl:flex xl:pb-24 sm:mt-32 sm:ml-6 xl:pt-10 xl:justify-around md:mt-60 md:ml-5" id='project-in-mind'>
           <div id="container-text-project">
                <h2 data-aos='fade-left' data-aos-once='true' data-aos-delay='200' data-aos-duration='300' className="xl:text-5xl md:text-5xl sm:text-4xl">Tenes un proyecto en mente?</h2>
                <h2 data-aos='fade-left' data-aos-once='true' data-aos-delay='200' data-aos-duration='300' d className="xl:text-5xl md:text-5xl sm:text-4xl">Sentite libre de compartirlo!</h2>
           </div>
            <div data-aos='fade-right' data-aos-once='true' data-aos-delay='200' data-aos-duration='300'  className="md:mt-9 xl:mt-0 xl:mb-0 md:mb-24 sm:mb-16 sm:mt-10" id="div-button">
                <Link href='/contact'>                  
                    <div className='grid text-black transition ease-in bg-white border border-black rounded-full cursor-pointer xl:h-36 sm:h-32 sm:w-32 md:h-28 md:text-lg duration-400 place-items-center md:w-28 xl:w-36 xl:text-2xl sm:text-2xl hover:bg-black hover:text-white' id='goContact'>
                    Contacto
                    </div>
                </Link>
            </div>
        </div>
        </>
    )
}
export default Project