import Link from 'next/link';

const Navbar = () => {
    return(
        <>
        <nav className="bg-gray-800 opacity-100 py-4">
        <div className="max-w-7xl mx-auto px-2 tablet:px-6 laptop:px-8">
            <div className="relative flex items-center justify-end h-16">
            <div className="flex items-center justify-end tablet:items-stretch tablet:justify-start">

                <div className="flex items-center content-start">
                    <img className="block laptop:hidden h-8 w-auto" src="../fp.jpg" alt="Workflow"/>
                    <img className="w-full" src="../fp.jpg" alt="Workflow"/>
                </div>

                <div className="hidden tablet:block tablet:ml-6">
                    <div className="flex space-x-4">
                        <Link href='/#expertise'>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-tablet font-medium">Experiencia</a>
                        </Link>

                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-tablet font-medium" aria-current="page">Portfolio</a>

                        <Link href='/about-franco'>
                            <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-tablet font-medium">Sobre mi</a>
                        </Link>
                        
                    </div>
                </div>

            </div>
            </div>
        </div>

        <div className="tablet:hidden" id="mobile-menu">

            <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Profile</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Skills</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
            </div>

        </div>
        </nav>
        </>
    )
}

export default Navbar;