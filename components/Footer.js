const Footer = () => {
    return(
        <>
        <footer className='bottom-0 md:w-[205vh] block w-[145vh] sm:w-[145vh] sm:pt-24 lg:w-[195vh] xl:w-full bg-black md:mt-44'>
            <div id='first-container-footer' className="mx-5 text-white pt-14 xl:flex sm:grid md:flex lg:pb-20 lg:flex lg:justify-start lg:justify-items-start md:pb-12 sm:pb-16 md:mr-0 xl:mx-64 md:justify-items-start xl:justify-items-start">
                <div className='xl:mt-[84px] md:mr-28 sm:pr-28 xl:pr-24 pr-0 sm:mt-0 lg:ml-7 lg:mr-32 sm:ml-5 sm:mb-8 md:mt-[74px] lg:mt-12 md:mb-8'>
                    <div className='mb-6 font-semibold md:pb-3 sm:mb-7 lg:text-lg sm:text-lg md:text-lg xl:text-xl'>Feliz hablando de:</div>
                        <div className='xl:text-lg sm:text-md md:text-md justify-evenly'>
                            <div>
                            Diseño Dígital
                            <br/>
                            UX/Desarrollo Web
                            <br/>
                            Estrategía
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 xl:pt-6 sm:ml-5 lg:mt-8 lg:ml-7 xl:pb-8 md:mt-14 lg:mb-12 md:mb-8'>
                        <div className='mb-4 font-semibold xl:pb-4 md:pb-3 lg:text-lg xl:text-xl sm:py-3 sm:text-lg md:pt-4 md:text-lg xl:pt-7'>Ponte en contácto conmigo</div>
                            <a className='pb-3 xl:text-lg md:text-md' href='mailto:fpadularrosa22@gmail.com'>fpadularrosa22@gmail.com</a>
                        <div className="mb-9">
                            <div className='my-3 font-semibold xl:my-1 lg:pt-9 lg:text-lg sm:py-3 md:py-3 xl:text-xl md:text-lg'>Conectar</div>
                            <a className='xl:text-lg md:text-md' rel="noreferrer" href='https://www.linkedin.com/in/padularrosa-franco-fullstack' target='_blank'>LinkedIn</a>
                        </div>
                    </div>
            </div>
            <div id='second-container-footer' className='grid w-full pr-0 text-white justify-items-center lg:pr-2 lg:pl-7 xl:justify-items-center sm:justify-items-start sm:pl-5'>
                <hr className="md:w-[98%] w-[90%] xl:w-[70%] lg:w-[98%] sm:w-[97%]" width='45%'/>
                <div className='py-6 text-lg'>
                    Desarrollado con ❤ por Franco Padularrosa
                    <br/>
                    ©2022
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;