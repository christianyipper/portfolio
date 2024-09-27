import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
// import { Outlet } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Footer from './Footer';
import TitleFloat from './components/text/TitleFloat';
import HeadingShimmer from './components/text/HeadingShimmer';
import Button from './components/text/Button';
import ScrollSnap from './components/ScrollSnap';
import SvgLogo from './components/svg/SvgLogo';
import SvgGlasses from './components/svg/SvgGlasses';

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
                <ScrollSnap
                    id1=""
                    reference1={ snap1 }
                    display1="scroll-show"

                    id2=""
                    reference2={ snap2 }
                    display2="scroll-show"

                    id3=""
                    reference3={ snap3 }
                    display3="scroll-show"

                    id4=""
                    reference4={ snap4 }
                    display4="scroll-show"
                />
                <section className="loading-screen">
                    <SvgLogo />
                </section>
                <section className={ `home-section ${ inView1 ? "blur-in" : "blur-out" }` }>
                    <div className="home-wrap">
                        <div className="home-left-1">
                            <div className="banner-img-wrap">
                                <img className="hat-overlay" src="https://www.dropbox.com/scl/fi/2d08w01fbhz7lp8efr8fl/yipper-thinking-hat-outline.png?rlkey=upknggjhf9za1hnqf6lna6u62&st=4v4szizk&raw=1" alt='Christian Yip "Yipper" thinking profile hat outline'/>
                                <img className="gif-overlay" src="https://www.dropbox.com/scl/fi/iw67v4lx2qo6t2rng26yy/yipper-thinking-720p-34fps-comp.gif?rlkey=4dadc7ljlt0bueyg5hhpwy06o&st=o2qjtvdk&raw=1" alt='Christian Yip "Yipper" thinking profile shirt gif'/>
                                <img className="gif-bg" src="https://www.dropbox.com/scl/fi/fxrjiw69x684upbcabxbb/yipper-thinking-gif-head.png?rlkey=s9mls63qz2rsx4ox1bgh3vgow&st=m1vb3kxp&raw=1" alt='Christian Yip "Yipper" thinking profile photo head shot'/>
                                <div className="banner-svg">
                                    <SvgGlasses />
                                </div>
                            </div>
                        </div>
                        <article>
                            <div className="home-title">
                                <TitleFloat 
                                    meta="Christian" 
                                    a="C" b="h" c="r" d="i" e="s" f="t" g="i" h="a" i="n"
                                />
                                <TitleFloat 
                                    meta=" Yipper" 
                                    a="Y" b="i" c="p" d="p" e="e" f="r"
                                />
                            </div>
                            <div className="home-text-wrap">
                                <p className="quote-text">My name's Christian. My colleagues call me Yipper.<br/>And my friends? They have their own ideas!</p>
                                {/* <HeadingShimmer 
                                    // animation={ heading2 ? "scale-in" : "scale-out" } 
                                    heading="Front-End Developer"
                                /> */}
                                <div className="home-buttons-wrap">
                                    <Button text="About Me" link="/about"/>
                                    <Button text="My Projects" link="/about" variant="btn-alt"/>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
                <section className={ `home-section ${ inView2 ? "blur-in" : "blur-out" }` }>
                    <div className="home-wrap">
                        <div className="window-wrap">
                            <img className="window" src="https://drive.google.com/thumbnail?id=1-sfapRmWf0WAtDT7HuCJ7ck7ny7bhyLB&sz=w1000" alt='Glowing neon window border'/>
                            <img className="window-bar" src="https://drive.google.com/thumbnail?id=1Nba2j4QNbJRQ3N12CIh2mIBaHldhFBRM&sz=w1000" alt='Glowing neon window search bar'/>
                            <img className="window-bg" src="https://drive.google.com/thumbnail?id=1oygEPyxWN9CKRrCDAapVhuhZgU-qTseM&sz=w1000" alt='Neon window background'/>
                            <video className="window-video"
                                poster="https://www.dropbox.com/scl/fi/dwu10b5gjpzz8tuc78d3h/itsyipper-thumb-comp.png?rlkey=rvakfjhv84t26pwfthgmhttqy&st=89spahic&raw=1"
                                loop
                                autoPlay
                                muted>
                                <source src="https://www.dropbox.com/scl/fi/gftktvruwyq90jdxj31ih/ItsYipper-Intro-720p-comp.mp4?rlkey=1bvcxgetbkygn3rcbp93ouw4x&st=7hxbgikt&raw=1" type="video/mp4"/>
                            </video>
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
                                <p className="p-padding">ItsYipper delivers in-depth reviews of the latest games and sparking conversations about trending topics within the community. Dive deeper into the gaming world with our interactive website. Explore the gaming landscape with original blogs and captivating video stories.</p>
                            </div>
                            <div className="article-footer">
                                <div className="article-icons"></div>
                                <div className="article-button">
                                    <Button text="Preview" link="/itsyipper"/>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
                <section className={ `home-section home-footer ${ inView4 ? "blur-in" : "blur-out" }` }>
                    <div className="home-wrap">
                        <div className="recommend-wrap">
                            <article></article>
                        </div>
                    </div>
                    <Footer />
                </section>
            </div>
        </main>
    )
}

export default HomePage