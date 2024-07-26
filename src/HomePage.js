import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
// import { Outlet } from 'react-router-dom';
import ReactPlayer from 'react-player';

const HomePage = () => {
    const { ref: snap1, inView: inView1 } = useInView( { threshold: 0.5 } );
    const { ref: snap2, inView: inView2 } = useInView( { threshold: 0.5 } );
    const { ref: snap3, inView: inView3 } = useInView( { threshold: 0.5 } );
    const { ref: snap4, inView: inView4 } = useInView( { threshold: 0.5 } );

    useEffect( () => {
        document.body.classList.add("scroll-hide");
    
        return () => {
        document.body.classList.remove("scroll-hide");
        };
    }, 
    [] );

    return (
        <main className="home">
            <div className="home-view">
                <section className='scroll-wrap'>
                    <div className='scroll-section' ref={ snap1 }></div>
                    <div className='scroll-section' ref={ snap2 }></div>
                    <div className='scroll-section' ref={ snap3 }></div>
                    <div className='scroll-section' ref={ snap4 }></div>
                </section>
                <section className="loading-screen">
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
                </section>
                <section className={ `home-section ${ inView1 ? `` : `` }` }>
                    <div className="home-wrap">
                        <div className="home-left-1">
                            <div className="banner-img-wrap">
                                <img className="hat-overlay" src="https://www.dropbox.com/scl/fi/2d08w01fbhz7lp8efr8fl/yipper-thinking-hat-outline.png?rlkey=upknggjhf9za1hnqf6lna6u62&st=4v4szizk&raw=1" alt='Christian Yip "Yipper" thinking profile hat outline'/>
                                <img className="gif-overlay" src="https://www.dropbox.com/scl/fi/iw67v4lx2qo6t2rng26yy/yipper-thinking-720p-34fps-comp.gif?rlkey=4dadc7ljlt0bueyg5hhpwy06o&st=o2qjtvdk&raw=1" alt='Christian Yip "Yipper" thinking profile shirt gif'/>
                                <img className="gif-bg" src="https://www.dropbox.com/scl/fi/fxrjiw69x684upbcabxbb/yipper-thinking-gif-head.png?rlkey=s9mls63qz2rsx4ox1bgh3vgow&st=m1vb3kxp&raw=1" alt='Christian Yip "Yipper" thinking profile photo head shot'/>
                                <div className="banner-svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 1440">
                                        <path className="glasses glasses-frame" d="M505.66,480.98l98.37-57.27s7.82-5.06,15.25-1.93,39.69,43.54,52.07,49.32,24.39,11.23,55.27-7.6,30.34-38.55,30.34-48.3c0-38.42-4.72-63.42-13.9-74.04-3.52-4.07,17.94-15.74,22.13-17.61,0,0,36.66,83.89,83.89,71.45s48.42-45.23,49.54-50.09c2.83-12.25-2.31-58.46-2.31-58.46,0,0-1.68-6.26,3.83-10.78.74-11.64-4.87-13.71-4.87-13.71,0,0-11.76-3.86-24.28-2.6-19.71,1.98-38.04,5.26-58.39,15.77s-33.8,23.45-45.98,38.61c-17.61,6.06-32.04,18.83-32.04,18.83,0,0-6.12-1.06-21.34-.81s-36,7.27-56.81,22.13-35.67,31.54-44.26,40.62-14.2,14.86-14.2,14.86l-97.35,57.54"/>
                                        <path className="glasses glasses-left" d="M638.86,403.54c-.63-10.84-1.72-18.88,11.99-30.77,18.53-16.07,36.5-25.43,47.06-28.4s33.61-4.68,42.19,17.12,8.47,63.1,1.37,74.83-29.69,33.72-55.95,28.44-45.07-49.29-46.67-61.21"/>
                                        <path className="glasses glasses-right" d="M783.4,319.86s26.67,65.82,54.91,65.99,47.01-19.46,49.98-39.63c3.34-22.67-.19-46.2-4.98-57.1s-13.8-17.27-21.07-18.26-45.18,7.93-61.43,23.37c-20.9,19.86-17.48,25.35-17.48,25.35"/>
                                        <line className="glasses glasses-accent1" x1="542.71" y1="474.55" x2="613.39" y2="433.82"/>
                                        <path className="glasses glasses-accent3" d="M876.07,320.86s1.32,31.05-13.21,42.28"/>
                                        <path className="glasses glasses-accent2" d="M729.76,398.48s5.5,24.88-13.87,40.51"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <article>
                            <h1 className="home-heading">
                                <span className="floating-wrap">
                                    <span className="floating-text float-1" text-glow="C">C</span>
                                </span>
                                <span className="floating-wrap">
                                    <span className="floating-text float-2" text-glow="h">h</span>
                                </span>
                                <span className="floating-wrap">
                                    <span className="floating-text float-3" text-glow="r">r</span>
                                </span>
                                <span className="floating-wrap">
                                    <span className="floating-text float-4" text-glow="i">i</span>
                                </span>
                                <span className="floating-wrap">
                                    <span className="floating-text float-5" text-glow="s">s</span>
                                </span>
                                <span className="floating-wrap">
                                    <span className="floating-text float-6" text-glow="t">t</span>
                                </span>
                                <span className="floating-wrap">
                                    <span className="floating-text float-7" text-glow="i">i</span>
                                </span>
                                <span className="floating-wrap">
                                    <span className="floating-text float-8" text-glow="a">a</span>
                                </span>
                                <span className="floating-wrap">
                                    <span className="floating-text float-9" text-glow="n">n</span>
                                </span>
                                <br/>
                                <span className="floating-wrap">
                                    <span className="floating-text float-1 indent" text-glow="Y">Y</span>
                                </span>
                                <span className="floating-wrap">
                                    <span className="floating-text float-2" text-glow="i">i</span>
                                </span>
                                <span className="floating-wrap">
                                    <span className="floating-text float-3" text-glow="p">p</span>
                                </span>
                                <span className="floating-wrap">
                                    <span className="floating-text float-4" text-glow="p">p</span>
                                </span>
                                <span className="floating-wrap">
                                    <span className="floating-text float-5" text-glow="e">e</span>
                                </span>
                                <span className="floating-wrap">
                                    <span className="floating-text float-6" text-glow="r">r</span>
                                </span>
                            </h1> 
                            <div className="home-text-wrap">
                                <h2 text-shimmer="Front-End Developer">Front-End Developer</h2>
                                <div className="home-buttons-wrap">
                                    <a className="btn">
                                        <p text-glow="About Me">About Me</p>
                                    </a>
                                    {/* <a>
                                        <p text-glow="My Works">My Works</p>
                                    </a> */}
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
                <section className={ `home-section ${ inView2 ? `blur-in` : `blur-out` }` }>
                    <div className="home-wrap">
                        <div className="featured-heading-wrap">
                                <h2 className="featured-heading-shimmer" text-shimmer="Featured">Featured</h2>
                                <h2 className="featured-heading-float">
                                    <span text-glow="P">P</span>
                                    <span text-glow="r">r</span>
                                    <span text-glow="o">o</span>
                                    <span text-glow="j">j</span>
                                    <span text-glow="e">e</span>
                                    <span text-glow="c">c</span>
                                    <span text-glow="t">t</span>
                                    <span text-glow=".">.</span>
                                </h2>
                            </div>
                        <div className="window-wrap">
                            <img className="window" src="https://drive.google.com/thumbnail?id=1-sfapRmWf0WAtDT7HuCJ7ck7ny7bhyLB&sz=w1000" alt='Glowing neon window border'/>
                            <img className="window-bar" src="https://drive.google.com/thumbnail?id=1Nba2j4QNbJRQ3N12CIh2mIBaHldhFBRM&sz=w1000" alt='Glowing neon window search bar'/>
                            <img className="window-bg" src="https://drive.google.com/thumbnail?id=1oygEPyxWN9CKRrCDAapVhuhZgU-qTseM&sz=w1000" alt='Neon window background'/>
                            <img className="bgbg" src="https://www.dropbox.com/scl/fi/vilvc058wjbgiq3811i68/ItsYipper-Preiew.gif?rlkey=c6fccjwuka23drz48npbon838&st=n6iod8sn&raw=1" alt='ItsYipper project trailer'/>
                        </div>
                        <article className="article-wrap">
                            <div className="article-content">
                                <div className="featured-heading-wrap">
                                    <h2 className="featured-heading-shimmer" text-shimmer="Featured">Featured</h2>
                                    <h2 className="featured-heading-float">
                                        <span text-glow="P">P</span>
                                        <span text-glow="r">r</span>
                                        <span text-glow="o">o</span>
                                        <span text-glow="j">j</span>
                                        <span text-glow="e">e</span>
                                        <span text-glow="c">c</span>
                                        <span text-glow="t">t</span>
                                        <span text-glow=".">.</span>
                                    </h2>
                                </div>
                                <p>Its Yipper is a gaming news outlet where we review new games and talk about trending topics in the gaming community. In addition to our blog, we post weekly video content across YouTube, Instagram, and TikTok.</p>
                            </div>
                            <div className="article-footer">
                                <div className="article-icons"></div>
                                <div className="article-button">
                                    <a className="btn">
                                        <p>Preview</p>
                                    </a>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default HomePage