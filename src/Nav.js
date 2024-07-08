const Nav = () => {
    return (
        <nav>
            <section className="nav-left">
                <a className="nav-logo-wrap" href="">
                    <img className="nav-logo" src="" alt="" />my Logo
                </a>
            </section>
            <section className="nav-mid">
                <div className="nav-heading-wrap">
                    <a className="nav-heading" href="">Home</a>
                    <a className="nav-heading" href="">About</a>
                    <a className="nav-heading" href="">Projects</a>
                </div>
            </section>
            <section className="nav-right">
                <div className="nav-icon-wrap">
                    <a className="nav-icon" href="">Email</a>
                    <a className="nav-icon" href="">Linkedin</a>
                    <a className="nav-icon" href="">GitHub</a>
                </div>
            </section>
        </nav>
    )
}

export default Nav