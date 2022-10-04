
const Expertise = () => {
    return(
        <>
            <section className="mx-6 xl:pr-0 xl:mx-0 xl-pl-0 lg:pl-[10px] lg:pr-[25px] sm:mr-[1.5rem] sm:ml-0" id='expertise'>
                <div className="sm:ml-9 md:ml-6 lg:ml-0 sm:mr-16 md:mr-0 md:pr-6 xl:ml-0 xl:pr-0 md:pl-0" id='container-expertise'>
                    <div className="flex mb-6 " id="title">
                        <h2 className='xl:text-[45px] drop-shadow-md shadow-red-200 min-w-[300px] text-4xl md:ml-[5px] lg:ml-6 md:font-thin md:text-4xl sm:text-4xl xl:ml-[90px] '>Mi experiencia</h2>
                    </div>

                    <div className='sm:py-12 md:ml-2 sm:pb-24 md:inline-flex xl:flex xl:py-0 xl:pt-12 xl:flex-row xl:mx-10 xl:items-center sm:justify-items-center' id="content">
                        <div className="sm:relative drop-shadow-md xl:w-[564px] xl:h-[276px] lg:mr-20 lg:ml-7 xl:mr-0 md:mr-20 xl:ml-12 sm:mr-8" id='content-design'>
                            <hr className='xl:pb-7 sm:pb-7 min-w-[300px] w-[515px] lg:w-[440px] xl:w-[515px] md:w-[470px] sm:w-[552px]' width='530'/>
                                <h3 className='mt-4 mb-3 text-2xl min-w-[300px] font-thin xl:pb-2 xl:text-[26px] sm:text-2xl sm:pb-2'>Diseño estratégico</h3>
                                <p className='xl:max-w-lg mb-7 min-w-[450px] max-w-xl sm:max-w-xl sm:text-lg lg:max-w-lg text-neutral-500 xl:leading-relaxed xl:text-[20px] sm:leading-relaxed md:text-md md:max-w-sm'>Ayudo a los equipos a alinearse en los principales desafíos. Diseño y creo software de calidad para impulsar las empresas hacia adelante.</p>
                            <hr className='xl:mt-[67px] min-w-[300px] hidden w-[515px] sm:block md:mt-[37px] lg:w-[440px] sm:mb-7 sm:mt-7 xl:w-[515px] md:w-[470px] sm:w-[552px]' width='530' />
                        </div>
                        <div className="sm:relative drop-shadow-md flex flex-col pl-[80px] xl:w-[564px] xl:h-[276px] xl:pl-2" id='content-develop'>
                            <hr className='xl:pb-8 sm:pb-7 md:pb-3 min-w-[515px] w-[515px] xl:w-[564px] lg:block md:block xl:block sm:hidden lg:w-[440px] md:w-[470px]' width='530' />
                                <h3 className='mt-8 mb-3 text-2xl font-thin xl:mt-3 lg:mt-8 xl:pb-4  xl:text-[26px] sm:text-2xl sm:pb-2'>Desarrollo de sitios web</h3>
                                <p className='xl:max-w-6xl min-w-[565px] mb-3 max-w-xl sm:max-w-xl sm:text-lg lg:max-w-lg text-neutral-500 xl:leading-relaxed xl:text-[20px] sm:leading-relaxed md:max-w-sm md:text-md'>
                                Usando la última tecnología, llevo los sitios web al siguiente nivel creando experiencias digitales que convencen a los clientes. Construyo sitios web que son hermosos en diseño, fáciles de usar y fuertes en rendimiento.</p>
                            <hr className='xl:mt-[15px] min-w-[300px] md:mt-9 w-[515px] sm:mt-7 sm:w-[552px] lg:mt-9 lg:w-[440px] xl:w-[564px] md:w-[470px]' width='530'/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Expertise;