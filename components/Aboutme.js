import Image from "next/image";
import franco from '../utils/franco.png';

const Aboutme = () => {
    return(
        <>
            <div className="grid grid-rows-2 xl:flex xl:flex-row xl:space-x-10 lg:flex md:flex mb-20 mt-32 sm:pl-[24px] sm:pr-[24px] sm:pt-24 xl:px-24 xl:w-[98%] md:pt-28 md:px-8 xl:pt-20" id='container-aboutme-c'>
                <div className='mx-6 lg:ml-6 sm:pr-12 lg:grid lg:justify-start lg:mb-12 xl:ml-0 md:mr-24' id="container-aboutme">
                    <h2 className="pb-5 text-4xl lg:text-4xl sm:text-4xl md:text-4xl">Sobre mi</h2>
                    <p className='lg:max-w-5xl sm:max-w-[60rem] xl:max-w-7xl sm:text-md md:max-w-4xl lg:text-lg text-neutral-500'>Soy un Full Stack Web Developer, nací en Argentina, Buenos Aires y actualmente ando en busca de mi primer empleo en el mundo IT como developer. <br/><br/>
                    Siempre fui una persona empática a la que le gusta ayudar a las personas a lograr resultados de la manera más eficiente. Esta capacidad natural me permitió construir relaciones sólidas con compañeros dentro de cada rol en el que trabajé. <br/><br/>
                    En el 2021 me decidí a estudiar programación y entré al bootcamp Henry porque quiero independizarme y desde hace muchos años que me atrae el mundo del software, actualmente estoy egresado del mismo mientras estoy en busqueda activa laboral y mantengo mi learner mindset aprendiendo tecnologías como Nest, Next, Firebase o mejorando las tecnologías aprendidas.<br/><br/>
                    Como persona, tengo un enfoque muy positivo y libre de ego para todos los aspectos de mi vida, y llevo una fuerte ética de trabajo conmigo en cada lugar al que voy.
                    </p>
                </div>
                <div className="mt-10 ml-[120px] md:ml-8 lg:mt-32 md:mt-24 sm:mt-32 xl:mt-8 xl:ml-40 lg:ml-24">
                    <div className="xl:w-[100%] w-[70%] sm:w-[85%] md:w-full lg:w-[90%] lg:h-[70%] xl:h-[85%]">
                        <Image src={franco} width='1000' heigth='980' alt='selfie'/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Aboutme;