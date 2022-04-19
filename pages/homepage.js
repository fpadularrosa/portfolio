import Link from "next/link";

const Homepage = () => {
    return(
        <div className='flex-wrap text-left items-center opacity-100 mx-43 m-40'>
            <h1 className='text-5xl py-6'>
            Hola, soy Franco.
            </h1>
            <p className='text-xl max-w-lg'>
            Voy a ayudar a su equipo a traves de la creación de valor con un diseño web estratégico, experiencias digitales centradas en las personas y
            el desarrollo de sitios web de alta calidad.
            </p>

            <div className='py-8'>
            <Link href='/contact' className='hover:underline'>
                <a>Contáctame</a>
            </Link>
            </div>
        </div>
    )
}
export default Homepage;