
const Expertise = () => {
    return(
        <>
            <section className="sm:mx-0 sm:ml-0 sm:mr-0 xl:px-0 xl:mx-0 lg:pl-0 md:mr-0 lg:pr-0 " id='expertise'>
                <div className="ml-0 js-show-on-scroll cel:mx-6 md:ml-6 xl:flex xl:flex-col lg:ml-0 sm:px-6 md:mx-6 md:px-0 lg:pr-0 xl:mx-0 xl:px-0 md:pl-0" id='container-expertise'>
                    <div className="flex mb-6 xl:ml-[70px]" id="title">
                        <h2 className='xl:text-[45px] drop-shadow-md shadow-red-200 min-w-[300px] text-4xl md:ml-0 lg:text-5xl lg:ml-0 md:font-thin md:text-4xl sm:text-4xl xl:ml-0'>Mi experiencia</h2>
                    </div>

                    <div className='sm:py-12 lg:ml-0 lg:flex lg:flex-row lg:justify-center lg:space-x-6 md:ml-0 sm:pb-24 md:flex md:flex-row md:space-x-10 xl:py-0 xl:pt-12 xl:grid-flex-row xl:ml-2 xl:mr-5 sm:justify-items-center' id="content">
                        <div className="sm:relative xl:justify-center border-y-2 xl:mr-0 md:flex md:justify-center lg:flex lg:justify-center flex flex-col md:border-y-2 lg:border-y-2 drop-shadow-md xl:min-w-[564px] xl:h-[276px] md:min-w-[340px] lg:w-[468px] lg:h-[252px] lg:mr-0 lg:ml-0 md:mr-0 xl:ml-0 sm:mr-8" id='content-design'>
                            <h3 className='mt-4 mb-3 text-2xl min-w-[300px] font-thin xl:pb-2 xl:text-[26px] sm:text-2xl sm:pb-2'>Diseño estratégico</h3>
                            <p className='xl:max-w-lg mb-7 max-w-xl sm:max-w-x lg:min-w-[468px] sm:text-lg lg:max-w-lg text-neutral-500 xl:leading-relaxed xl:text-[20px] sm:leading-relaxed md:text-md md:min-w-[340px]'>Ayudo a los equipos a alinearse en los principales desafíos. Diseño y creo software de calidad para impulsar las empresas hacia adelante.</p>
                        </div>
                        <div className="sm:relative xl:items-start border-y-2 md:flex xl:justify-center lg:border-y-2 md:border-y-2 drop-shadow-md flex flex-col pl-0 md:min-w-[340px] xl:pl-0 md:pl-0 lg:pl-0 xl:min-w-[564px] lg:w-[468px] xl:h-[276px]" id='content-develop'>
                            <h3 className='mt-8 mb-3 text-2xl font-thin xl:mt-3 lg:mt-8 xl:pb-4 xl:text-[26px] sm:text-2xl sm:pb-2'>Desarrollo de sitios web</h3>
                            <p className='xl:max-w-6xl mb-3 sm:max-w-xl sm:text-lg lg:max-w-[529px] text-neutral-500 xl:leading-relaxed xl:text-[20px] sm:leading-relaxed md:min-w-[340px] md:text-md'>
                            Usando la última tecnología, llevo los sitios web al siguiente nivel creando experiencias digitales que convencen a los clientes. Construyo sitios web que son hermosos en diseño, fáciles de usar y fuertes en rendimiento.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Expertise;