const Header = () => {
  return (
    <div>
      <header>
        <span className='logo'>`E-Commerce`</span>
        <input type='text' name='search' id='search' placeholder='Search everywhere...' />
        <nav></nav>
        {/* //? How to creat a dropdown with tailwind or do i neec some ui liberaries?  */}
      </header>
    </div>
  )
}

export default Header
