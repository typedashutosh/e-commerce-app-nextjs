const Header = () => {
  return (
    <div>
      <header>
        <span className='logo text-3xl mx-4'>E-Commerce</span>
        <input
          className='w-60 shadow-md hover:shadow-lg px-4 py-2 outline-none rounded-sm transition-all duration-200'
          type='text'
          name='search'
          id='search'
          placeholder='Search everywhere...'
        />
        <nav></nav>
      </header>
    </div>
  )
}

export default Header
