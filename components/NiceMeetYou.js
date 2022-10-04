import Image from 'next/image';
import programmation from '../utils/programmation.png';
import Link from 'next/link';
const NiceMeetYou = () => {
    return(
        <div className='ml-0 xl:ml-28 xl:flex xl:flex-row xl:justify-center xl:items-center md:ml-6 sm:ml-6' id='nicetoMeetYou'>
            <div className=' xl:pr-40 xl:mb-0 md:mb-7 sm:mb-20'>
                <h3 className='text-4xl min-w-[350px] md:text-4xl xl:text-4xl sm:text-3xl'>Un gusto conocerte</h3>
                <p className='xl:max-w-lg min-w-[250px] sm:text-lg xl:my-5 sm:my-4 xl:text-[20px] md:max-w-2xl md:text-xl md:mt-4 text-neutral-500'>Me encanta resolver problemas con gente buena onda e increible</p>
                <div id='containerLinkToAbout'>
                    <Link href='/about-franco'>
                        <a>
                        <div className='inline-block text-xl font-medium transition ease-in border-b-2 rounded-md hover:cursor-pointer xl:text-xl duration-400 mt-7 hover:border-b-2 hover:border-gray-500 text-neutral-900 hover:text-neutral-500' id='linkToProject1'>
                            <div>Conóceme</div>
                        </div>
                        </a>
                    </Link>
                </div>
            </div>
            <div className='md:ml-4 mt-24 mb-28 mx-14 xl:ml-0 xl:mr-7 min-w-[250px] sm:ml-3 xl:w-[600px] xl:h-[420px] sm:w-[440px] sm:h-[380px]'>
                <Image src={programmation} width='400' height='350' alt='notebook'/>
            </div>
        </div>
    )
}
export default NiceMeetYou;