function Header() {

  return (
    <>
      <div className="hearder--container">
        <h1 className="herader--name">
          {/* <img className="logo--img" src="../../public/logo-transparent-png.png"/> */}
          <span className="ProM">Pro</span>ject <span className="ProM">&#160;&#160;&#160;M</span>anager
        </h1>
        <li className="header-list--container">
          <ul>About</ul>
          <ul>dev</ul>
          <ul>contact</ul>
        </li>
      </div>
    </>
  )
}

export default Header;