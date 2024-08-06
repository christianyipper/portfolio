import TitleFloat from './components/text/TitleFloat';
import TitleShimmer from './components/text/TitleShimmer';
import HeadingShimmer from './components/text/HeadingShimmer';
import Paragraph from './components/text/Paragraph';

import SvgWebflow from './components/svg/SvgWebflow';
import SvgPhotoshop from './components/svg/SvgPhotoshop';
import SvgIllustrator from './components/svg/SvgIllustrator';
import SvgAfterEffects from './components/svg/SvgAfterEffects';
import SvgFigma from './components/svg/SvgFigma';
import SvgHtml from './components/svg/SvgHtml';
import SvgCss from './components/svg/SvgCss';
import SvgJs from './components/svg/SvgJs';
import SvgLogo from './components/svg/SvgLogo';
import SvgEmail from './components/svg/SvgEmail';
import SvgLinkedIn from './components/svg/SvgLinkedIn';
import SvgGithub from './components/svg/SvgGithub';

const Nav = () => {
    return (
        <nav>
            <div className="nav-wrap">
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
                    <div className="about-preview">
                        <div className="about">
                            <div className="about-scroll">
                                <section className="about-img-section">
                                    <article/>
                                    <div className="about-img-wrap">
                                        <div className="about-img-1">
                                            <img src="https://www.dropbox.com/scl/fi/jakfcghe5pc3xotzq9nay/yipper-profile.png?rlkey=n6adv16tacga0b5dmnylymtko&st=mzxqu7ld&raw=1" alt='Christian Yip "Yipper" profile photo'/>
                                        </div>
                                    </div>
                                </section>
                                <section className="about-section">
                                    <article>
                                        <TitleShimmer 
                                            heading="Hey There!"
                                        />
                                        <div className="about-heading-wrap">
                                            <span className="indent"/>
                                            <TitleShimmer 
                                                animation="heading-auto"
                                                heading="I'm"
                                            />
                                            <TitleFloat 
                                                meta=" Christian." 
                                                a="C" b="h" c="r" d="i" e="s" f="t" g="i" h="a" i="n" j="."
                                            />
                                        </div>
                                        <div className="quote-wrap">
                                            <p className="quote-text">Empowering users by creating intuitive,<br/>engaging, and innovative experiences.</p>
                                        </div>
                                        <Paragraph 
                                            heading="About Me" 
                                            text1="From ice hockey official to photography enthusiast, front-end development marks the next chapter in life." text2="My passion to explore creative ideas has led me to deliver unique user experiences. I hope to build engaging websites that highlight diverse personalities."
                                        />
                                    </article>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="projects-preview">
                        <div className="projects">
                            <div className="project-container">
                                <div className="project-wrap">
                                    <TitleFloat 
                                        meta="My Projects." 
                                        a="M" b="y" spaceC="space" d="P" e="r" f="o" g="j" h="e" i="c" j="t" k="s" l="."
                                    />
                                    <div className="project-gallery-wrap">
                                        <div className="project-gallery">
                                            <section className="project-artifact-wrap">
                                                <p className="sub-heading" text-glow="Web Design">Web Design</p>
                                                <div className="project-artifact">
                                                    <div className="project-border"></div>
                                                    <div className="project-corner-wrap"></div>
                                                    <img src="https://www.dropbox.com/scl/fi/dwu10b5gjpzz8tuc78d3h/itsyipper-thumb-comp.png?rlkey=rvakfjhv84t26pwfthgmhttqy&st=89spahic&raw=1" alt="ItsYipper Poster" />
                                                    <HeadingShimmer heading="ItsYipper"/>
                                                    <div className="app-icons-wrap">
                                                        <SvgWebflow/>
                                                        <SvgPhotoshop/>
                                                        <SvgIllustrator/>
                                                    </div>
                                                    <div className="project-heading-bg"/>
                                                    <div className="project-btn-wrap">
                                                        <div className="project-top-corner"></div>
                                                        <div className="project-btn-bot">
                                                            <div className="project-bot-corner"></div>
                                                            <div className="project-btn-bg">
                                                                <a className="btn" href="/itsyipper">
                                                                    <p>Preview</p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="project-btn">
                                                    <a className="btn" href="/itsyipper">
                                                        <p text-glow="Preview">Preview</p>
                                                    </a>
                                                </div>
                                            </section>
                                            <section className="project-artifact-wrap">
                                                <p className="sub-heading" text-glow="Branding">Branding</p>
                                                <div className="project-artifact">
                                                    <div className="project-border"></div>
                                                    <div className="project-corner-wrap"></div>
                                                    <img src="https://www.dropbox.com/scl/fi/444jjpr2zh7s91t43xu2q/stripesnation-thumb-comp.png?rlkey=m206g74xrn3z44qac0i73ljd3&st=xhx8upg5&raw=1" alt="Stripes Nation Poster" />
                                                    <HeadingShimmer heading="Stripes Nation"/>
                                                    <div className="app-icons-wrap">
                                                        <SvgPhotoshop/>
                                                        <SvgIllustrator/>
                                                        <SvgAfterEffects/>
                                                        <SvgFigma/>
                                                    </div>
                                                    <div className="project-heading-bg"/>
                                                    <div className="project-btn-wrap">
                                                        <div className="project-top-corner"></div>
                                                        <div className="project-btn-bot">
                                                            <div className="project-bot-corner"></div>
                                                            <div className="project-btn-bg">
                                                                <a className="btn" href="/itsyipper">
                                                                    <p>Preview</p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="project-btn">
                                                    <a className="btn" href="/itsyipper">
                                                        <p text-glow="Preview">Preview</p>
                                                    </a>
                                                </div>
                                            </section>
                                            <section className="project-artifact-wrap">
                                                <p className="sub-heading" text-glow="Web Design">Web Design</p>
                                                <div className="project-artifact">
                                                    <div className="project-border"></div>
                                                    <div className="project-corner-wrap"></div>
                                                    <img src="https://www.dropbox.com/scl/fi/uh74vqvxay4lx4dwt682q/sonic-thumb-comp.png?rlkey=jufydzsubr3e9li62l1249rgs&st=x4kykj4q&raw=1" alt="Sonic Animation Poster" />
                                                    <HeadingShimmer heading="Sonic Animation"/>
                                                    <div className="app-icons-wrap">
                                                        <SvgHtml/>
                                                        <SvgCss/>
                                                        <SvgJs/>
                                                    </div>
                                                    <div className="project-heading-bg"/>
                                                    <div className="project-btn-wrap">
                                                        <div className="project-top-corner"></div>
                                                        <div className="project-btn-bot">
                                                            <div className="project-bot-corner"></div>
                                                            <div className="project-btn-bg">
                                                                <a className="btn" href="/itsyipper">
                                                                    <p>Preview</p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="project-btn">
                                                    <a className="btn" href="/itsyipper">
                                                        <p text-glow="Preview">Preview</p>
                                                    </a>
                                                </div>
                                            </section>
                                            <section className="project-artifact-wrap">
                                                <p className="sub-heading" text-glow="Branding">Branding</p>
                                                <div className="project-artifact">
                                                    <div className="project-border"></div>
                                                    <div className="project-corner-wrap"></div>
                                                    <img className="edge-img" src="https://www.dropbox.com/scl/fi/06induswo23lu4c1o8ybi/edgeboards-poster-wide.png?rlkey=m2c1p4kjdi2pe0qx4jsvncyuj&st=694v4gmf&raw=1" alt="Edge Boards Poster" />
                                                    <HeadingShimmer heading="Edge Boards"/>
                                                    <div className="app-icons-wrap">
                                                        <SvgWebflow/>
                                                        <SvgPhotoshop/>
                                                        <SvgIllustrator/>
                                                    </div>
                                                    <div className="project-heading-bg"/>
                                                    <div className="project-btn-wrap">
                                                        <div className="project-top-corner"></div>
                                                        <div className="project-btn-bot">
                                                            <div className="project-bot-corner"></div>
                                                            <div className="project-btn-bg">
                                                                <a className="btn" href="/itsyipper">
                                                                    <p>Preview</p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="project-btn">
                                                    <a className="btn" href="/itsyipper">
                                                        <p text-glow="Preview">Preview</p>
                                                    </a>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
            </div>
        </nav>
    )
}

export default Nav