import MyImage from './MyImage';
import programmation from '../pages/img/programmation.png';
import Link from 'next/link';
const NiceMeetYou = () => {
    return(
        <div className='ml-0 xl:flex xl:justify-evenly xl:ml-3 xl:mx-18 md:ml-6 sm:ml-6' id='nicetoMeetYou'>
            <div className='grid content-center xl:mb-0 md:mb-7 sm:mb-20'>
                <h3 className='md:text-4xl xl:text-5xl sm:text-3xl'>Un gusto conocerte</h3>
                <p className='xl:max-w-lg sm:text-lg xl:my-5 sm:my-4 xl:text-[23px] md:max-w-2xl md:text-xl md:mt-4 text-neutral-500'>Amo resolver problemas reales con profesionales amigables y gente increible!</p>
                <div className='hover:cursor-pointer' id='containerLinkToAbout'>
                    <Link href='/about-franco'>
                        <div className='inline-block text-xl font-medium transition ease-in border-b-2 rounded-md xl:text-2xl duration-400 mt-7 hover:border-b-2 hover:border-gray-500 text-neutral-900 hover:text-neutral-500' id='linkToProject1'>
                            <div>Conóceme</div>
                        </div>
                    </Link>
                </div>
            </div>
            <div data-aos='fade-up-left' data-aos-once='true' className='md:ml-4 xl:ml-0 xl:mr-7 sm:ml-3 xl:w-[560px] xl:h-[420px] sm:w-[440px] sm:h-[380px]'>
                <MyImage src={programmation} width='560' heigth='420'/>
            </div>
        </div>
    )
}
export default NiceMeetYou;