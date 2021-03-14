const Header = () => {
  return (
    <div>
      <header>
        <span className='logo text-3xl mx-4'>E-Comm</span>
        <input
          className='w-60 shadow-md hover:shadow-lg px-4 py-2 outline-none rounded-sm transition-all duration-200'
          type='text'
          name='search'
          id='search'
          placeholder='Search everywhere...'
        />
        <button className='menuBtn sm:hidden block fixed h-14 w-14 rounded-full bottom-8 right-8 bg-gray-800 cursor-pointer '>
          <div className='flex flex-col justify-evenly h-8 w-8 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2'>
            <div className='w-8 h-1 bg-white'></div>
            <div className='w-8 h-1 bg-white'></div>
          </div>
        </button>
        <nav></nav>
      </header>
    </div>
  )
}

export default Header
