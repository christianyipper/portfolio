const Nav = () => {
    return (
        <nav>
            <section className="nav-left">
                <a className="nav-logo-wrap" href="">
                    <img className="nav-logo" src="" alt="" />my Logo
                </a>
            </section>
            <section className="nav-mid">
                <a className="nav-heading nav-home" href="">Home</a>
                <a className="nav-heading nav-about" href="">About</a>
                <a className="nav-heading nav-projects" href="">Projects</a>
                <div className="nav-heading-bg"></div>
            </section>
            <section className="nav-right">
                <div className="nav-icon-wrap">
                    <a className="nav-icon" href="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44">
                            <path className="email-icon" d="M22 9.97c-7.18 0-13 4.95-13 11.05 0 2.95 1.36 5.64 3.58 7.62v4.86c0 .4.43.65.78.45l4.33-2.5c1.35.4 2.8.62 4.31.62 7.18 0 13-4.95 13-11.05S29.18 9.97 22 9.97Zm-7.08 13.4c-1.29 0-2.34-1.05-2.34-2.34s1.05-2.34 2.34-2.34 2.34 1.05 2.34 2.34-1.05 2.34-2.34 2.34Zm7.08 0c-1.29 0-2.34-1.05-2.34-2.34s1.05-2.34 2.34-2.34 2.34 1.05 2.34 2.34-1.05 2.34-2.34 2.34Zm7.08 0c-1.29 0-2.34-1.05-2.34-2.34s1.05-2.34 2.34-2.34 2.34 1.05 2.34 2.34-1.05 2.34-2.34 2.34Z"/>
                        </svg>
                    </a>
                    <a className="nav-icon" href="">L</a>
                    <a className="nav-icon" href="">G</a>
                    <div className="nav-icon-bg"></div>
                </div>
            </section>
        </nav>
    )
}

export default Nav