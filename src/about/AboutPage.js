import { useInView } from 'react-intersection-observer';
import { Helmet } from "react-helmet-async";

import Footer from '../components/Footer';
import TitleFloat from '../components/text/TitleFloat';
import TitleShimmer from '../components/text/TitleShimmer';
import HeadingFloat from '../components/text/HeadingFloat';
import HeadingShimmer from '../components/text/HeadingShimmer';
import Paragraph from '../components/text/Paragraph';
import Indent from '../components/text/Indent';

import bchl from '../assets/images/icons/bchl-logo.png';
import bcehl from '../assets/images/icons/bcehl-logo.png';
import bcHockey from '../assets/images/icons/bc-hockey-logo.png';
import csshl from '../assets/images/icons/csshl-logo.png';
import jphl from '../assets/images/icons/jphl-logo.png';

const About = () => {
    const { ref: aboutSection0, inView: aboutImg0 } = useInView( { threshold: 0.5 } );
    const { ref: aboutSection1, inView: aboutImg1 } = useInView( { threshold: 0.5 } );
    const { ref: aboutSection2, inView: aboutImg2 } = useInView( { threshold: 0.5 } );
    const { ref: aboutSection3, inView: aboutImg3 } = useInView( { threshold: 0.5 } );

    const { ref: headingSection0, inView: heading0 } = useInView( { threshold: 1, rootMargin: '-10% 0%' } );
    const { ref: headingSection1, inView: heading1 } = useInView( { threshold: 1, rootMargin: '-10% 0%' } );
    const { ref: headingSection2, inView: heading2 } = useInView( { threshold: 1, rootMargin: '-10% 0%' } );
    const { ref: headingSection3, inView: heading3 } = useInView( { threshold: 1, rootMargin: '-10% 0%' } );
    
    const { ref: textSection0, inView: text0 } = useInView( { threshold: 1, rootMargin: '-10% 10%' } );
    const { ref: textSection1, inView: text1 } = useInView( { threshold: 1, rootMargin: '-10% 10%' } );
    const { ref: textSection2, inView: text2 } = useInView( { threshold: 1, rootMargin: '-10% 10%' } );
    const { ref: textSection3, inView: text3 } = useInView( { threshold: 1, rootMargin: '-10% 10%' } );


    return (
        <main className="about">
            <Helmet>
                <title>Yipper Portfolio | About</title>
                <meta property="og:title" content="Yipper Portfolio | About"/>

                <meta name="description" content="Christian Yip, a passionate front-end developer and designer striving to create intuitive, engaging, and innovative digital experiences."/>
                <meta name="og:description" content="Christian Yip, a passionate front-end developer and designer striving to create intuitive, engaging, and innovative digital experiences."/>

                <meta name="keywords" content="front-end developer, graphics designer, portfolio, hockey referee, sports photographer"/>

                <meta property="og:url" content="https://yipper.ca/about"/>
            </Helmet>
            <div className="about-scroll">
                <section className="about-img-section">
                    <article/>
                    <div className="about-img-wrap">
                        <div className={ `about-img-1 ${ aboutImg0 ? "blur-in" : "blur-out" }` }>
                            <img src="https://www.dropbox.com/scl/fi/jakfcghe5pc3xotzq9nay/yipper-profile.png?rlkey=n6adv16tacga0b5dmnylymtko&st=mzxqu7ld&raw=1" alt='Christian Yip "Yipper" profile photo'/>
                        </div>
                        <div className={ `about-img-2 ${ aboutImg1 ? "blur-in" : "blur-out" }` }>
                            <img src="https://www.dropbox.com/scl/fi/4mhvzdbo4w2dvfrx6t515/yipper-referee-profile.png?rlkey=914rtv7x98e8yzpcf5jv0ppmk&st=smd6lsrg&raw=1" alt='Christian Yip "Yipper" referee officiating profile photo head shot'/>
                            {/* <div className="career">
                                <h3>Officiating <strong>Career</strong></h3>
                                <div className="career-stats">
                                    <div className="league-wrap">
                                        <div className="league-card featured-card">
                                            <img src={ bchl } alt="BCHL logo" />
                                            <article className="league-info">
                                                <p><span className="bold">2023 - Present</span><br/>British Columbia Hockey League</p>
                                            </article>
                                        </div>
                                        <div className="league-card">
                                            <img src={ jphl } alt="JPHL logo" />
                                            <article className="league-info">
                                                <p><span className="bold">2023 - Present</span><br/>Junior Prospects Hockey League</p>
                                            </article>
                                        </div>
                                        <div className="league-card">
                                            <img src={ bcehl } alt="BCEHL logo" />
                                            <article className="league-info">
                                                <p><span className="bold">2019 - 2023</span><br/>BC Elite<br/>Hockey League</p>
                                            </article>
                                        </div>
                                        <div className="league-card">
                                            <img src={ csshl } alt="CSSHL logo" />
                                            <article className="league-info">
                                                <p><span className="bold">2019 - 2023</span><br/>Canadian Sports Schools<br/>Hockey League</p>
                                            </article>
                                        </div>
                                        <div className="league-card">
                                            <img src={ bcHockey } alt="BC Hockey logo" />
                                            <article className="league-info">
                                                <p><span className="bold">2012 - 2023</span><br/>BC Hockey</p>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        {/* <div className={ `about-img-3 ${ aboutImg2 ? "blur-in" : "blur-out" }` }>
                            <img src="https://www.dropbox.com/scl/fi/6ds2czndjac1k9j6mh0s9/yipper-thinking-profile.png?rlkey=b85kfvaidishq61960ngc6ocb&st=th9ryrot&raw=1" alt='Christian Yip "Yipper" thinking profile photo head shot'/>
                        </div> */}
                        <div className={ `about-img-3 ${ aboutImg3 ? "blur-in" : "blur-out" }` }>
                            <img src="https://www.dropbox.com/scl/fi/h4ak9cve43cjrttubj4dp/yipper-skiing-profile.png?rlkey=twugd8wsmlerp45yorj744gy5&st=ib7lpdvd&raw=1" alt='Christian Yip "Yipper" skiing photo'/>
                        </div>
                    </div>
                </section>
                <section ref={ aboutSection0 } className="about-section">
                    <article>
                        <TitleShimmer 
                            reference={ headingSection0 } 
                            heading="Hey There!"
                        />
                        <div className="about-heading-wrap">
                            <Indent/>
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
                            text1="Hey there! I'm a front-end developer and designer who loves creating digital experiences that just click with users. I get excited about building websites that not only work flawlessly but also look amazing and feel great to use. I'm on the hunt for internship opportunities where I can grow my skills and push my creative boundaries."
                        />
                    </article>
                </section>
                <section ref={ aboutSection1 } className="about-section">
                    <article>
                        {/* <HeadingShimmer 
                            animation={ heading1 ? "scale-in" : "scale-out" } 
                            heading="My Social"
                        /> */}
                        <Paragraph 
                            reference={ textSection1 } 
                            animation={ text1 ? "move-in" : "move-out" } 
                            animationHead={ text1 ? "leap-in" : "leap-out" }
                            heading="My Skillset" 
                            text1="From refereeing hockey games to working with fellow developers, I've learned a ton about what makes teams gel. Clear communication? Check. Working through tough situations? You bet. I really shine when I'm part of a group that values honest discussion and tackles problems head-on. Plus, I've got a knack for helping people find common ground, even when things get heated."
                        />
                    </article>
                    <div/>
                </section>
                <section ref={ aboutSection2 } className="about-section">
                    <article>
                        {/* <HeadingShimmer 
                            animation={ heading2 ? "scale-in" : "scale-out" } 
                            heading="My Core"
                        /> */}
                        <Paragraph 
                            reference={ textSection2 } 
                            animation={ text2 ? "move-in" : "move-out" } 
                            animationHead={ text2 ? "leap-in" : "leap-out" }
                            heading="Core Values" 
                            text1={`I believe the coolest stuff happens when great minds come together. I love watching people discover what they're capable of and breaking through obstacles to find creative solutions. I'm always hungry to learn more, try new approaches, and deliver work that makes people go "wow."  For me, it's about exploring new ideas and transforming "what if?" into "check this out!"`}
                        />
                    </article>
                    <div/>
                </section>
                <section ref={ aboutSection3 } className="about-section">
                    <article>
                        {/* <HeadingShimmer 
                            animation={ heading3 ? "scale-in" : "scale-out" } 
                            heading="During My"
                        /> */}
                        <Paragraph 
                            reference={ textSection3 } 
                            animation={ text3 ? "move-in" : "move-out" } 
                            animationHead={ text3 ? "leap-in" : "leap-out" } 
                            heading="Downtime" 
                            text1="When I'm not coding, you'll find me either chasing powder in the backcountry or capturing intense sports moments through my lens. There's nothing like the thrill of navigating uncharted territory through dense forest and, when I'm not on the slopes, I love being behind the camera shooting anything from sports to wildlife. It's my way of staying creative, pushing my limits, and finding inspiration away from the computer screen."
                        />
                    </article>
                    <div/>
                </section>
                <Footer />
            </div>
        </main>
    )
}

export default About