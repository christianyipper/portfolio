import React, { useState } from 'react';

import TitleFloat from './text/TitleFloat';
import TitleShimmer from './text/TitleShimmer';
import HeadingShimmer from './text/HeadingShimmer';
import Paragraph from './text/Paragraph';

import SvgLogo from './svg/SvgLogo';
import SvgEmail from './svg/SvgEmail';
import SvgLinkedIn from './svg/SvgLinkedIn';
import SvgGithub from './svg/SvgGithub';
import SvgBurger from './svg/SvgBurger';

const Nav = () => {

    const [burgerActive, setBurgerActive] = useState(false);
    const burgerClick = () => {
        setBurgerActive(!burgerActive);
    };

    return (
        <nav>
            <div className={ `nav-burger ${ burgerActive ? "burger-open" : "" }` }
                onClick={ burgerClick }
            >
                <SvgBurger/>
            </div>
            <section className={ `nav-wrap ${ burgerActive ? "nav-open" : "nav-close" }` }>
                <section className="nav-left">
                    <a className="nav-logo-wrap" href="">
                        <SvgLogo/>
                    </a>
                </section>
                <section className="nav-mid">
                    <a className="nav-heading nav-home" href="/" text-glow="Home">Home</a>
                    <a className="nav-heading nav-about" href="about" text-glow="About">About</a>
                    <a className="nav-heading nav-projects" href="projects" text-glow="Projects">Projects</a>
                    <div className="nav-heading-bg"></div>
                </section>
                <section className="nav-right">
                    <div className="nav-icon-wrap">
                        <a className="nav-icon nav-email" href="">
                            <SvgEmail/>
                        </a>
                        <a className="nav-icon nav-linkedin" href="https://www.linkedin.com/in/christianyipper/" target="_blank">
                            <SvgLinkedIn/>
                        </a>
                        <a className="nav-icon nav-github" href="https://github.com/christianyipper" target="_blank">
                            <SvgGithub/>
                        </a>
                        <div className="nav-icon-bg"></div>
                    </div>
                </section>
            </section>
        </nav>
    )
}

export default Nav