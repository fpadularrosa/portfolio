import Image from 'next/image';
import programmation from '../utils/programmation.png';
import Link from 'next/link';
const NiceMeetYou = () => {
    return(
        <div className='ml-0 xl:ml-3 xl:my-40 lg:mr-6 xl:flex lg:flex lg:flex-row lg:items-center xl:justify-around lg:justify-around lg:ml-0 xl:mr-12 xl:items-center md:ml-6 sm:ml-6' id='nicetoMeetYou'>
            <div className='xl:mr-0 lg:mr-14 xl:mb-0 md:mb-7 sm:mb-20'>
                <h3 className='text-4xl min-w-[350px] md:text-4xl xl:text-5xl sm:text-3xl'>Un gusto conocerte</h3>
                <p className='xl:max-w-md min-w-[250px] sm:text-lg xl:my-5 sm:my-4 xl:text-[20px] md:max-w-2xl md:text-xl lg:max-w-sm md:mt-4 text-neutral-500'>Me encanta resolver problemas con gente buena onda e increible</p>
                <div id='containerLinkToAbout'>
                    <Link href='/about-franco'>
                        <a>
                        <div className='inline-block text-xl font-medium transition ease-in border-b-2 rounded-md hover:cursor-pointer xl:font-medium xl:text-2xl duration-400 mt-7 hover:border-b-2 hover:border-gray-500 text-neutral-900 hover:text-neutral-500' id='linkToProject1'>
                            <div>Conóceme</div>
                        </div>
                        </a>
                    </Link>
                </div>
            </div>
            <div className='md:ml-4 mt-24 mb-28 mx-14 xl:ml-0 xl:mr-0 xl:my-0 lg:mr-0 min-w-[250px] sm:ml-3 xl:w-auto xl:h-[420px] sm:w-[440px] sm:h-[380px]'>
                <Image src={programmation} width='520' height='380' alt='notebook'/>
            </div>
        </div>
    )
}
export default NiceMeetYou;