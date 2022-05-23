const Reasons = () => {
    return(
    <div className="xl:ml-32 mx-6 lg:grid md:grid md:justify-items-start lg:px-7 md:px-[28px] sm:px-8 xl:px-[70px] lg:pb-24" id='container-reasons'>
        <div id="container-title">
            <h2 className="pb-12 text-4xl lg:text-4xl sm:text-4xl md:text-4xl">Razones para trabajar conmigo</h2>
        </div>
        <div className="grid xl:border-y-0 lg:border-y-0 border-y-[1px] sm:grid sm:justify-items-start lg:flex lg:justify-evenly md:grid md:justify-items-start xl:justify-between" id="reasons">
            <div className='mt-6 mb-4 lg:max-w-sm lg:pr-8 sm:py-6 xl:pr-10 md:py-6'>
                <h3 className="lg:text-[23px] sm:text-2xl md:text-2xl text-xl mb-3">Experiencia<br/>e<br/>Impacto</h3>
                <p className="max-w-2xl text-gray-500 sm:max-w-xl md:max-w-2xl sm:pt-6 lg:max-w-lg lg:text-xl md:pt-4 lg:pt-6">Todavía no tengo 1 año de experiencia, pero soy una persona con mucha constancia, practicando, aprendiendo nuevas tecnologías, etc. Egresado de Henry Bootcamp para aplicar soluciones a problemas del mundo.</p>
            </div>
            <div className="sm:border-t-[1px] border-t-[1px] xl:border-t-0 lg:border-t-0 lg:max-w-sm sm:max-w-2xl lg:px-8 xl:px-10 sm:border-l-0 lg:border-l-[2px] sm:pt-6 sm:pb-6 md:pb-5">
                <div className='mt-6 mb-4 lg:max-w-sm lg:pr-8 xl:pr-10 md:py-6'>
                    <h3 className="lg:text-[23px] sm:text-2xl md:text-2xl text-xl mb-3">Estratega empático <br/> y <br/> amigable</h3>
                    <p className="max-w-2xl text-gray-500 sm:max-w-xl md:max-w-2xl sm:pt-6 lg:max-w-lg lg:text-xl md:pt-4 lg:pt-6">Esta habilidad natural me convierte en un desarrollador centrado en la calidad y un jugador de equipo responsable.</p>
                </div>
            </div>
            <div className="sm:border-t-[1px] border-t-[1px] xl:border-t-0 lg:border-t-0 lg:max-w-sm sm:max-w-2xl lg:pl-8 xl:pl-12 sm:border-l-0 lg:border-l-[2px]">
                <div className='mt-6 mb-4 lg:max-w-sm lg:pr-8 xl:pr-10 md:py-6'>
                    <h3 className="lg:text-[23px] sm:text-2xl md:text-2xl text-xl mb-3">Curiosidad <br/> y <br/> mejora continúa</h3>
                    <p className="max-w-2xl text-gray-500 sm:max-w-xl md:pb-7 sm:pb-6 sm:pt-6 md:max-w-2xl lg:max-w-lg lg:text-xl md:pt-4 lg:pt-6">Siempre estoy buscando mejorar mis habilidades y actualizar mis conocimientos a las últimas soluciones / mejores prácticas, lo que mejora la velocidad y la calidad del proceso de producción.</p>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Reasons;