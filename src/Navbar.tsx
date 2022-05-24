
import Darkmood from "./Darkmood";




function Navbar() {

  return (
    <div>
      <header className="bg-[#facc15]">
        <div className={'container mx-auto flex flex-wrap  text-black  flex-col md:flex-row items-center'}>
          <a className={'flex title-font font-medium text-center items-center  mb-4 md:mb-0'}>

            <span className="ml-3 p-1 text-2xl">F-books</span>
          </a>
          <nav className={'md:ml-auto md:mr-auto font-black text-2xl flex flex-wrap items-center  justify-center'}>
            <a className={'mr-5 hover:text-white cursor-pointer transition-all'}>About</a>
            <a className={'mr-5 hover:text-white cursor-pointer transition-all'}>content</a>
            <a className={'mr-5 hover:text-white cursor-pointer transition-all'}>dashboard</a>

          </nav>
          <Darkmood />

        </div>
      </header>


    </div>
  );
}

export default Navbar