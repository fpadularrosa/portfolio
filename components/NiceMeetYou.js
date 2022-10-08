import Image from 'next/image';
import programmation from '../utils/programmation.png';
import Link from 'next/link';
const NiceMeetYou = () => {
    return(
        <div className='px-6 py-16 ml-0 cel:px-0 xl:my-40 lg:mr-0 lg:ml-0 md:px-0 xl:mx-0 md:ml-0 sm:ml-6' id='nicetoMeetYou'>
            <div className='flex flex-col pl-6 xl:flex-row xl:justify-around sm:flex lg:flex-row lg:justify-around xl:items-center lg:mx-7 md:px-0 lg:pl-0 xl:ml-0 xl:mb-0 md:flex-col md:ml-6 md:mb-20 xl:mx-0'>
                <div className='xl:mr-0 lg:mr-16 xl:mb-0 md:mb-7 lg:mb-0 lg:min-w-[468px] sm:mb-20'>
                    <h3 className='text-4xl min-w-[200px] md:text-5xl xl:text-5xl sm:text-4xl'>Un gusto conocerte</h3>
                    <p className='xl:max-w-md min-w-[250px] sm:text-lg xl:my-5 lg:mt-6 lg:mb-8 sm:my-4 xl:text-[20px] md:max-w-sm md:text-xl lg:max-w-sm md:mt-4 text-neutral-500'>Me encanta resolver problemas con gente buena onda e increible</p>
                    <div id='containerLinkToAbout'>
                        <Link href='/about-franco'>
                            <a>
                            <div className='inline-block text-xl font-medium transition ease-in border-b-2 rounded-md hover:cursor-pointer xl:text-2xl duration-400 mt-7 hover:border-b-2 hover:border-gray-500 text-neutral-900 hover:text-neutral-500' id='linkToProject1'>
                                <div>Conóceme</div>
                            </div>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='md:ml-0 mt-16 mb-28 mx-0 xl:mr-14 xl:ml-0 lg:mx-0 lg:my-0 min-w-[250px] md:my-0 md:w-[520px] sm:ml-3 xl:w-[520px] xl:h-[420px] sm:w-[440px] sm:h-[380px]'>
                    <Image src={programmation} width='520' height='380' alt='notebook'/>
                </div>
            </div>
        </div>
    )
}
export default NiceMeetYou;