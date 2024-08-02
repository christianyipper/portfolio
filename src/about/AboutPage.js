import { useInView } from 'react-intersection-observer';
import { useTypewriter } from 'react-simple-typewriter';
import Footer from '../Footer';
import TitleFloat from '../components/TitleFloat';
import TitleShimmer from '../components/TitleShimmer';
import HeadingFloat from '../components/HeadingFloat';
import HeadingShimmer from '../components/HeadingShimmer';
import Paragraph from '../components/Paragraph';

import bchl from '../assets/images/icons/bchl-logo.png';
import bcehl from '../assets/images/icons/bcehl-logo.png';
import bcHockey from '../assets/images/icons/bc-hockey-logo.png';
import csshl from '../assets/images/icons/csshl-logo.png';
import jphl from '../assets/images/icons/jphl-logo.png';

const About = () => {
    const { ref: aboutSection1, inView: aboutImg1 } = useInView( { threshold: 0.5 } );
    const { ref: aboutSection2, inView: aboutImg2 } = useInView( { threshold: 0.5 } );
    const { ref: aboutSection3, inView: aboutImg3 } = useInView( { threshold: 0.5 } );
    const { ref: aboutSection4, inView: aboutImg4 } = useInView( { threshold: 0.5 } );

    const { ref: headingSection1, inView: heading1 } = useInView( { threshold: 1, rootMargin: '-10% 0%' } );
    const { ref: headingSection2, inView: heading2 } = useInView( { threshold: 1, rootMargin: '-10% 0%' } );
    const { ref: headingSection3, inView: heading3 } = useInView( { threshold: 1, rootMargin: '-10% 0%' } );
    const { ref: headingSection4, inView: heading4 } = useInView( { threshold: 1, rootMargin: '-10% 0%' } );
    
    const { ref: textSection1, inView: text1 } = useInView( { threshold: 1, rootMargin: '-10% 10%' } );
    const { ref: textSection2, inView: text2 } = useInView( { threshold: 1, rootMargin: '-10% 10%' } );
    const { ref: textSection3, inView: text3 } = useInView( { threshold: 1, rootMargin: '-10% 10%' } );
    const { ref: textSection4, inView: text4 } = useInView( { threshold: 1, rootMargin: '-10% 10%' } );
    const { ref: textSection5, inView: text5 } = useInView( { threshold: 1, rootMargin: '-10% 10%' } );
    const { ref: textSection6, inView: text6 } = useInView( { threshold: 1, rootMargin: '-10% 10%' } );
    const { ref: textSection7, inView: text7 } = useInView( { threshold: 1, rootMargin: '-10% 10%' } );
    const { ref: textSection8, inView: text8 } = useInView( { threshold: 1, rootMargin: '-10% 10%' } );
    const { ref: textSection9, inView: text9 } = useInView( { threshold: 1, rootMargin: '-10% 10%' } );

    return (
        <main className="about">
            <div className="about-scroll">
                <section className="about-img-section">
                    <article/>
                    <div className="about-img-wrap">
                        <div className={ `about-img-1 ${ aboutImg1 ? `blur-in` : `blur-out` }` }>
                            <img src="https://www.dropbox.com/scl/fi/jakfcghe5pc3xotzq9nay/yipper-profile.png?rlkey=n6adv16tacga0b5dmnylymtko&st=mzxqu7ld&raw=1" alt='Christian Yip "Yipper" profile photo'/>
                        </div>
                        <div className={ `about-img-2 ${ aboutImg2 ? `blur-in` : `blur-out` }` }>
                            <img src="https://www.dropbox.com/scl/fi/4mhvzdbo4w2dvfrx6t515/yipper-referee-profile.png?rlkey=914rtv7x98e8yzpcf5jv0ppmk&st=smd6lsrg&raw=1" alt='Christian Yip "Yipper" referee officiating profile photo head shot'/>
                            <div className="career">
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
                            </div>
                        </div>
                        <div className={ `about-img-3 ${ aboutImg3 ? `blur-in` : `blur-out` }` }>
                            <img src="https://www.dropbox.com/scl/fi/6ds2czndjac1k9j6mh0s9/yipper-thinking-profile.png?rlkey=b85kfvaidishq61960ngc6ocb&st=th9ryrot&raw=1" alt='Christian Yip "Yipper" thinking profile photo head shot'/>
                        </div>
                        <div className={ `about-img-4 ${ aboutImg4 ? `blur-in` : `blur-out` }` }>
                            <img src="https://www.dropbox.com/scl/fi/h4ak9cve43cjrttubj4dp/yipper-skiing-profile.png?rlkey=twugd8wsmlerp45yorj744gy5&st=ib7lpdvd&raw=1" alt='Christian Yip "Yipper" skiing photo'/>
                        </div>
                    </div>
                </section>
                <section ref={ aboutSection1 } className="about-section">
                    <article>
                        <TitleShimmer 
                            reference={ headingSection1 } 
                            heading="Hey There!"
                        />
                        <div className="about-heading-wrap">
                            <span className="indent"/>
                            <TitleShimmer 
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
                <section ref={ aboutSection2 } className="about-section">
                    <article>
                        <HeadingShimmer 
                            animation={ `${ heading2 ? `scale-in` : `scale-out` }` } 
                            heading="My Social"
                        />
                        <div ref={ headingSection2 } className="about-heading-wrap">
                            <span className="indent"/>
                            <HeadingFloat 
                                animation={ `${ heading2 ? `scale-in` : `scale-out` }` } 
                                meta=" Skillset." 
                                a="S" b="k" c="i" d="l" e="l" f="s" g="e" h="t" i="."
                            />
                        </div>
                        <Paragraph 
                            reference={ textSection1 } 
                            animation={ `${ text1 ? `blur-in-fast` : `blur-out-fast` }` } 
                            heading="Communication" 
                            text1="As a hockey referee, communication with coaches, players, and fellow officials is vital to keep the game running smoothly. Whether I’m coaching players on the faceoff or diffusing an emotional situation, I continue to improve my ability to effectively communicate with others."
                        />
                        <Paragraph 
                            reference={ textSection2 } 
                            animation={ `${ text2 ? `blur-in-fast` : `blur-out-fast` }` } 
                            heading="Teamwork" 
                            text1="Whether I’m competing in a hockey tournament or playing video games, teamwork has become a natural skill I’ve learned. I’ve accomplished the most in life through leading and collaborating with my peers. I strive to fill the gaps in any team environment to achieve success."
                        />
                        <Paragraph 
                            reference={ textSection3 } 
                            animation={ `${ text3 ? `blur-in-fast` : `blur-out-fast` }` } 
                            heading="Conflict-Management" 
                            text1="Diffusing tense situations has become a frequent task in my officiating career. Managing stress and emotions is difficult and I often use various approaches that best resolve conflict. Through these experiences, staying calm and being a great listener has helped strengthen my interpersonal skillset."
                        />
                    </article>
                    <div/>
                </section>
                <section ref={ aboutSection3 } className="about-section">
                    <article>
                        <HeadingShimmer 
                            animation={ `${ heading3 ? `scale-in` : `scale-out` }` } 
                            heading="My Core"
                        />
                        <div ref={ headingSection3 } className="about-heading-wrap">
                            <span className="indent"/>
                            <HeadingFloat 
                                animation={ `${ heading3 ? `scale-in` : `scale-out` }` } 
                                meta=" Values." 
                                a="V" b="a" c="l" d="u" e="e" f="s" g="."
                            />
                        </div>
                        <Paragraph 
                            reference={ textSection4 } 
                            animation={ `${ text4 ? `blur-in-fast` : `blur-out-fast` }` } 
                            heading="Collaboration" 
                            text1="I believe the best innovations starts with collaborative ideas. The most successful teams I’ve been involved in support each other, balancing individual weaknesses with each other’s strengths. I cherish and value the connections I make with others as we pioneer the future."
                        />
                        <Paragraph 
                            reference={ textSection5 } 
                            animation={ `${ text5 ? `blur-in-fast` : `blur-out-fast` }` } 
                            heading="Leadership" 
                            text1="From a team leader to officiating coach, my experiences and focus on mentorship have enabled me to create positive environments and inspire growth. Through my time, I’m grateful to have the opportunity to empower individuals as they achieve success."
                        />
                        <Paragraph 
                            reference={ textSection6 } 
                            animation={ `${ text6 ? `blur-in-fast` : `blur-out-fast` }` } 
                            heading="Determination" 
                            text1="My determination comes from collaborating with like-minded people who strive to achieve their best work. I believe this plays a vital role in the industry as we need to push through barriers to be creative and innovative."
                        />
                    </article>
                    <div/>
                </section>
                <section ref={ aboutSection4 } className="about-section">
                    <article>
                        <HeadingShimmer 
                            animation={ `${ heading4 ? `scale-in` : `scale-out` }` } 
                            heading="During My"
                        />
                        <div ref={ headingSection4 } className="about-heading-wrap">
                            <span className="indent"/>
                            <HeadingFloat 
                                animation={ `${ heading4 ? `scale-in` : `scale-out` }` } 
                                meta=" Downtime." a="D" b="o" c="w" d="n" e="t" f="i" g="m" h="e" i="."
                            />
                        </div>
                        <Paragraph 
                            reference={ textSection7 } 
                            animation={ `${ text7 ? `blur-in-fast` : `blur-out-fast` }` } 
                            heading="Backcountry Skiing" 
                            text1="I love navigating through intricate slopes and dense forests of the backcountry. I’m always seeking to conquer new challenges that push my skiing ability to the limits. The thrill of cliff drops and uncharted terrain makes our local mountains an irresistible playground!"
                        />
                        <Paragraph 
                            reference={ textSection8 } 
                            animation={ `${ text8 ? `blur-in-fast` : `blur-out-fast` }` } 
                            heading="Action Photography" 
                            text1="When I’m not on the ice at the hockey rink, I’m the one behind the camera. The game of hockey is packed with high-intensity action and emotion, and capturing these moments is an art I strive to master."
                        />
                        <Paragraph 
                            reference={ textSection9 } 
                            animation={ `${ text9 ? `blur-in-fast` : `blur-out-fast` }` } 
                            heading="Video Games" 
                            text1="I’ve always been into video games as a kid and over 20 years later, nothing has changed! I love exploring different genres, all with their unique quirks."
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