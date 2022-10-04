import { motion } from "framer-motion";
const Reasons = () => {
    return(
    <motion.div
    initial={{opacity: 0}}
    transition={{duration: 1.5}}
    animate={{opacity: 1}}
    className="xl:ml-[92px] mx-6 lg:grid md:grid md:justify-items-start xl:w-[1168px] lg:px-7 md:px-[28px] sm:px-8 xl:px-[10px] lg:pb-240" id='container-reasons'>
        <div id="container-title">
            <h2 className="pb-12 text-4xl xl:text-5xl lg:text-4xl sm:text-4xl md:text-4xl">Razones para trabajar conmigo</h2>
        </div>
        <div className="grid xl:border-y-0 lg:border-y-0 border-y-[1px]  xl:h-[450px] sm:grid sm:justify-items-start lg:flex lg:justify-evenly md:grid md:justify-items-start xl:justify-between" id="reasons">
            <div className='mt-6 mb-4 lg:max-w-sm lg:pr-8 sm:py-6 xl:py-0 xl:w-[390px] xl:h-[450px] md:py-6 justify-start flex flex-col'>
                <h3 className="lg:text-[23px] sm:text-2xl md:text-2xl text-xl mb-2">Experiencia<br/>e<br/>Impacto</h3>
                <p className="max-w-2xl text-left text-gray-500 sm:max-w-xl md:max-w-2xl xl:text-lg sm:pt-6 lg:max-w-lg lg:text-xl md:pt-4 lg:pt-6">Realicé apps desde un Ecommerce aplicando ágiles, una SPA con filtros y ordenamientos hasta un clon de Instagram con Firebase, con muchas ganas de aportar software de calidad en proyectos de los cuales pueda aprender mucho y explotar todo mi potencial.</p>
            </div>
            <div className="sm:border-t-[1px] border-t-[1px] xl:border-t-0 lg:border-t-0 lg:max-w-sm sm:max-w-2xl lg:px-8 xl:px-7 sm:border-l-0 xl:border-l-[1px] lg:border-l-[2px] sm:pt-6 sm:pb-6 md:pb-5">
                <div className='mt-6 mb-4 lg:max-w-sm lg:pr-8 xl:w-[395px] xl:mr-4 xl:h-[450px] md:py-6 justify-start flex flex-col'>
                    <h3 className="lg:text-[23px] sm:text-2xl md:text-2xl text-xl mb-2">Estratega empático <br/> y <br/> amigable</h3>
                    <p className="max-w-2xl text-left text-gray-500 sm:max-w-xl md:max-w-2xl xl:text-lg sm:pt-6 lg:max-w-lg lg:text-xl md:pt-4 lg:pt-6">Esta habilidad natural me convierte en un desarrollador centrado en la calidad y un jugador de equipo responsable.</p>
                </div>
            </div>
            <div className="sm:border-t-[1px] border-t-[1px] xl:border-t-0 lg:border-t-0 lg:max-w-sm sm:max-w-2xl lg:pl-8 xl:pl-12 xl:border-l-[1px] sm:border-l-0 lg:border-l-[2px]">
                <div className='mt-6 mb-4 lg:max-w-sm lg:pr-8 xl:w-[355px] xl:h-[450px] md:py-6 justify-start flex flex-col'>
                    <h3 className="lg:text-[23px] sm:text-2xl md:text-2xl text-xl mb-2">Curiosidad <br/> y <br/> mejora continúa</h3>
                    <p className="max-w-2xl text-left text-gray-500 sm:max-w-xl md:pb-7 sm:pb-6 xl:text-lg sm:pt-6 md:max-w-2xl lg:max-w-lg lg:text-xl md:pt-4 lg:pt-6">Me gusta mejorar mis habilidades y actualizar mis conocimientos a las últimas soluciones / mejores prácticas, lo que mejora la velocidad y la calidad del proceso de producción.</p>
                </div>
            </div>
        </div>
    </motion.div>
    )
}
export default Reasons;