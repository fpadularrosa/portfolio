import Link from "next/link"

const About = () => {
    return(
        <>
        <div className='flex-wrap text-left items-center opacity-100 mx-43 m-40'>
            <h1 className='text-5xl py-6'> Full Stack Web Developer </h1>
            <p className='text-xl max-w-lg'>
                ¡Hola de vuelta!<br/>
                Soy Franco Padularrosa,<br/>
                me gusta mucho diseñar y desarrollar proyectos increibles que impulsen a las empresas hacia adelante.
            </p>
        </div>

        <Link href='/about-franco#reasons'>
            <a href="#">Conóceme mejor</a>
        </Link>
        </>
    )
}

export default About;