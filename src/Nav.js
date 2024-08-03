import TitleFloat from './components/TitleFloat';
import TitleShimmer from './components/TitleShimmer';
import HeadingShimmer from './components/HeadingShimmer';
import Paragraph from './components/Paragraph';

import SvgWebflow from './components/svg/SvgWebflow';
import SvgPhotoshop from './components/svg/SvgPhotoshop';
import SvgIllustrator from './components/svg/SvgIllustrator';
import SvgAfterEffects from './components/svg/SvgAfterEffects';
import SvgFigma from './components/svg/SvgFigma';
import SvgHtml from './components/svg/SvgHtml';
import SvgCss from './components/svg/SvgCss';
import SvgJs from './components/svg/SvgJs';

const Nav = () => {
    return (
        <nav>
            <div className="nav-wrap">
                <section className="nav-left">
                    <a className="nav-logo-wrap" href="">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Logo-SVG" data-name="Logo-SVG" viewBox="0 0 1440 700">
                            <defs>
                                <clipPath id="clippath">
                                    <path d="M729.84 246.27c-.84 0-1.68.01-2.52.05l-47.3 1.94 6.25 46.92c.22 1.66.33 3.37.33 5.09 0 4.2-.65 8.32-1.93 12.23l-2.06 6.27-3.99 5.3a39.283 39.283 0 0 1-5.14 5.58l-.15.14c-1.19 1.08-2.5 2.11-3.89 3.06l-18.8 12.87v100.5l14.38 12.88a97.056 97.056 0 0 0 64.82 24.77h43.2v-53.34c32.67-16.28 54-50.09 54-87.06 0-53.6-43.6-97.2-97.2-97.2Zm28.8 174.84v48.36h-28.8c-20.41 0-40.02-7.49-55.21-21.09l-9.59-8.59v-86.48l12.53-8.58a50.16 50.16 0 0 0 5.43-4.28l.13-.11c2.55-2.29 4.9-4.84 6.98-7.6l5.44-7.21 2.8-8.55a53.456 53.456 0 0 0 2.65-16.71c0-2.35-.15-4.71-.46-6.99L696.38 262l31.53-1.3c.64-.02 1.29-.03 1.93-.03 45.66 0 82.8 37.14 82.8 82.8 0 35.53-22.5 65.91-54 77.64Z"/>
                                </clipPath>
                            </defs>
                            <g id="Logo_2" data-name="Logo 2">
                            <g id="R_Logo" data-name="R Logo">
                                <path id="Base" d="M834.91 422.68c8.56 9.55 13.77 22.16 13.77 35.99v11.46c-9.55 8.54-22.17 13.74-36 13.74v-25.2c0-9.94-8.06-18-18-18v43.2c-13.83 0-26.45-5.2-36-13.74v-49.05c5.3-1.97 10.34-4.47 15.07-7.44 4.2-2.64 8.15-5.64 11.8-8.97h9.13c9.94 0 18-8.05 18-18 0-5.18-2.19-9.85-5.69-13.13 3.65-9.32 5.65-19.47 5.65-30.07 0-2.65-.13-5.28-.38-7.87 21.19 7.29 36.42 27.4 36.42 51.07 0 13.83-5.21 26.45-13.77 36.01Z" className="base-r"/>
                                <path id="Base" d="M834.91 422.68c8.56 9.55 13.77 22.16 13.77 35.99v11.46c-9.55 8.54-22.17 13.74-36 13.74v-25.2c0-9.94-8.06-18-18-18v43.2c-13.83 0-26.45-5.2-36-13.74v-49.05c5.3-1.97 10.34-4.47 15.07-7.44 4.2-2.64 8.15-5.64 11.8-8.97h9.13c9.94 0 18-8.05 18-18 0-5.18-2.19-9.85-5.69-13.13 3.65-9.32 5.65-19.47 5.65-30.07 0-2.65-.13-5.28-.38-7.87 21.19 7.29 36.42 27.4 36.42 51.07 0 13.83-5.21 26.45-13.77 36.01Z" className="base-r-mask base-nav"/>
                                <path id="Cirlce" d="M801.84 389.81c0 1.99-1.61 3.6-3.6 3.6h-4.7s.52-2.48.52-3.6c0-1.99 2.2-3.6 4.19-3.6s3.6 1.61 3.6 3.6Z" className="line-r-accent accent-nav"/>
                            </g>
                            <g id="P_Logo" data-name="P Logo">
                                <path id="Base-2" d="M783.84 343.47c0 29.83-24.18 54-54 54v43.2c-13.83 0-26.45-5.2-36-13.75V368.5c2.98-2.04 5.83-4.28 8.51-6.71a82.22 82.22 0 0 0 10.75-11.7c2.63 6.67 9.14 11.38 16.74 11.38 9.94 0 18-8.05 18-18s-8.06-18-18-18c-1.42 0-2.8.16-4.12.48a82.346 82.346 0 0 0 4.08-25.68c0-3.66-.24-7.26-.71-10.79.25-.01.5-.01.75-.01 29.82 0 54 24.18 54 54Z" className="base-p" data-name="Base"/>
                                <path id="Base-2" d="M783.84 343.47c0 29.83-24.18 54-54 54v43.2c-13.83 0-26.45-5.2-36-13.75V368.5c2.98-2.04 5.83-4.28 8.51-6.71a82.22 82.22 0 0 0 10.75-11.7c2.63 6.67 9.14 11.38 16.74 11.38 9.94 0 18-8.05 18-18s-8.06-18-18-18c-1.42 0-2.8.16-4.12.48a82.346 82.346 0 0 0 4.08-25.68c0-3.66-.24-7.26-.71-10.79.25-.01.5-.01.75-.01 29.82 0 54 24.18 54 54Z" className="base-p-mask base-nav" data-name="Base"/>
                                <path id="Circle" d="M729.84 339.87c-.27 0-.53.03-.73.07l-4.14 1.01 1.53 3.86c.41 1.04 1.53 2.26 3.34 2.26 1.99 0 3.6-1.62 3.6-3.6s-1.61-3.6-3.6-3.6Z" className="line-p-accent accent-nav"/>
                            </g>
                            <g id="Y_Logo" data-name="Y Logo">
                                <path id="Base-3" d="M701 300.27c0 23.52-15.03 43.52-36 50.93v46.27c-13.83 0-26.45-5.2-36-13.75V351.2c-20.97-7.41-36-27.41-36-50.93s15.03-43.51 36-50.92v50.92c0 9.94 8.06 18 18 18s18-8.06 18-18v-50.92c20.97 7.41 36 27.41 36 50.92Z" className="base-y" data-name="Base"/>
                                <path id="Base-4" d="M701 300.27c0 23.52-15.03 43.52-36 50.93v46.27c-13.83 0-26.45-5.2-36-13.75V351.2c-20.97-7.41-36-27.41-36-50.93s15.03-43.51 36-50.92v50.92c0 9.94 8.06 18 18 18s18-8.06 18-18v-50.92c20.97 7.41 36 27.41 36 50.92Z" className="base-y-mask base-nav" data-name="Base"/>
                            </g>
                            <path id="R_Outline" d="M793.43 318.28c.42 0 .83-.01 1.25-.01 37.72 0 68.4 30.68 68.4 68.4 0 12.75-3.79 25.2-9.92 35.47l-.33.54a68.255 68.255 0 0 1 10.25 35.99v17.9l-4.8 4.29a68.346 68.346 0 0 1-45.6 17.41h-18c-16.85 0-33.05-6.18-45.6-17.41l-4.84-4.29v-21.5" className="line-r line-nav" data-name="R Outline"/>
                            <path id="P_Outline" d="M711.51 277.56a68.048 68.048 0 0 1 18.33-2.49c37.72 0 68.4 30.68 68.4 68.4 0 32.78-23.18 60.25-54 66.88V455.07h-14.4c-16.86 0-33.06-6.19-45.61-17.42l-4.79-4.31-.04-21.47" className="line-p line-nav" data-name="P Outline"/>
                            <path id="Y_Outline" d="M679.4 410.32v1.55H665c-16.86 0-33.06-6.19-45.6-17.42l-4.8-4.29v-29.64c-21.43-11.56-36.03-34.23-36.03-60.25 0-36.99 28.12-67.22 64.83-68.37v68.37c0 1.99 1.62 3.6 3.6 3.6s3.6-1.61 3.6-3.6v-68.36c36.7 1.17 64.77 31.39 64.77 68.36 0 26-14.58 48.65-35.99 60.22l.02 49.83Z" className="line-y line-nav" data-name="Y Outline"/>
                            </g>
                        </svg>
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44">
                                <path className="email-icon" d="M22 9.97c-7.18 0-13 4.95-13 11.05 0 2.95 1.36 5.64 3.58 7.62v4.86c0 .4.43.65.78.45l4.33-2.5c1.35.4 2.8.62 4.31.62 7.18 0 13-4.95 13-11.05S29.18 9.97 22 9.97Zm-7.08 13.4c-1.29 0-2.34-1.05-2.34-2.34s1.05-2.34 2.34-2.34 2.34 1.05 2.34 2.34-1.05 2.34-2.34 2.34Zm7.08 0c-1.29 0-2.34-1.05-2.34-2.34s1.05-2.34 2.34-2.34 2.34 1.05 2.34 2.34-1.05 2.34-2.34 2.34Zm7.08 0c-1.29 0-2.34-1.05-2.34-2.34s1.05-2.34 2.34-2.34 2.34 1.05 2.34 2.34-1.05 2.34-2.34 2.34Z"/>
                            </svg>
                        </a>
                        <a className="nav-icon nav-linkedin" href="https://www.linkedin.com/in/christianyipper/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44">
                                <path d="M22 9C14.82 9 9 14.82 9 22s5.82 13 13 13 13-5.82 13-13S29.18 9 22 9Zm-3.91 19.57c0 .18-.04.25-.23.25-.81-.01-1.63 0-2.44 0-.18 0-.23-.05-.23-.23V19.83c0-.21.06-.26.26-.26.8.01 1.6 0 2.4 0 .19 0 .24.05.24.24v8.75Zm-1.44-10.18c-.92 0-1.7-.78-1.69-1.7 0-.92.76-1.67 1.69-1.67.93 0 1.69.74 1.69 1.67 0 .93-.76 1.7-1.69 1.7Zm12.18 10.15c0 .27 0 .27-.28.27h-2.4c-.2 0-.25-.06-.25-.25v-4.54c0-.31-.03-.62-.08-.92-.15-.87-.75-1.3-1.62-1.18-.81.11-1.24.54-1.38 1.37-.05.32-.08.64-.08.96v4.3c0 .2-.05.26-.26.26-.81-.01-1.62 0-2.42 0-.16 0-.22-.04-.22-.21v-8.79c0-.18.06-.23.23-.23h2.32c.18 0 .24.05.23.23-.01.32 0 .64 0 .97.4-.57.91-.99 1.56-1.21 1.01-.34 2.01-.28 2.97.15.86.39 1.27 1.14 1.48 2.02.16.69.2 1.4.2 2.1v4.7Z"/>
                            </svg>
                        </a>
                        <a className="nav-icon nav-github" href="https://github.com/christianyipper" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44">
                                <path d="M9 21.49c.07-.48.12-.95.2-1.42.3-1.86 1.01-3.55 2.07-5.1 1.61-2.34 3.76-3.98 6.43-4.93 1.81-.65 3.68-.83 5.6-.65 2.38.22 4.53 1.07 6.44 2.49 2.33 1.73 3.9 4 4.73 6.78.53 1.78.65 3.61.39 5.45-.51 3.63-2.31 6.5-5.2 8.71-1.05.8-2.23 1.37-3.47 1.8-.57.2-.96-.08-.96-.68v-3.38c0-.56-.03-1.12-.28-1.64-.14-.3-.34-.58-.52-.86.47-.09.99-.15 1.49-.28 1.32-.34 2.51-.93 3.31-2.09.58-.85.86-1.81.97-2.82.09-.77.12-1.53-.03-2.3-.16-.85-.53-1.6-1.1-2.25-.1-.12-.12-.21-.07-.36.37-1.07.23-2.12-.17-3.14-.02-.06-.13-.12-.21-.13-.45-.06-.88.06-1.28.25-.66.31-1.29.66-1.94.99-.12.06-.28.09-.4.06-2.03-.51-4.05-.51-6.07 0-.12.03-.29 0-.39-.07-.83-.53-1.7-.94-2.64-1.19-.02 0-.03-.01-.05-.01-.61-.13-.71-.06-.89.54-.27.92-.32 1.84 0 2.77.03.07 0 .2-.05.26-1.09 1.24-1.34 2.71-1.19 4.29.09.93.31 1.81.72 2.65.59 1.18 1.58 1.89 2.77 2.31.71.25 1.47.35 2.21.52.04 0 .08.01.09.01-.19.34-.38.68-.56 1.03-.06.12-.11.26-.11.39-.01.27-.15.4-.4.47-.82.22-1.64.37-2.43-.12-.41-.25-.72-.61-.96-1.02-.37-.64-.9-1.1-1.61-1.31-.26-.08-.56-.06-.84-.04-.17.01-.23.15-.11.29.12.14.23.31.38.4.7.4 1.09 1.04 1.4 1.75.18.4.35.8.69 1.11.55.49 1.2.68 1.91.71.61.03 1.23 0 1.88 0v1.23c0 .33.01.66.01.99 0 .61-.4.9-.98.71-1.92-.65-3.61-1.69-5.03-3.14-1.37-1.41-2.42-3.03-3.07-4.9-.37-1.06-.58-2.15-.67-3.27 0-.1-.03-.2-.04-.3v-1.52Z"/>
                            </svg>
                        </a>
                        <div className="nav-icon-bg"></div>
                    </div>
                </section>
            </div>
        </nav>
    )
}

export default Nav