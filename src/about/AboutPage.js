import { useInView } from 'react-intersection-observer';
import { useTypewriter } from 'react-simple-typewriter';

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


    // const [ aboutH1 ] = useTypewriter({
    //     words: [ 'Christian', 'Yipper' ],
    //     loop: 0,
    //     delaySpeed: 5000
    // });
    // const [ aboutH2 ] = useTypewriter({
    //     words: [ 'Skillset', 'Experiences' ],
    //     loop: 0,
    //     delaySpeed: 5000
    // });
    // const [ aboutH3 ] = useTypewriter({
    //     words: [ 'Values', 'Morales' ],
    //     loop: 0,
    //     delaySpeed: 5000
    // });
    // const [ aboutH4 ] = useTypewriter({
    //     words: [ 'Downtime', 'Brakes' ],
    //     loop: 0,
    //     delaySpeed: 5000
    // });

    return (
        <main className="about">
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
            <section ref={ aboutSection1 }>
                <article>
                    {/* <h1>Hey There!<br/><span className="indent"/>I'm <strong>{ aboutH1 }</strong><span className="text-cursor">.</span></h1> */}
                    <h1 ref={ headingSection1 } className={ `about-heading-shimmer ${ heading1 ? `blur-in` : `blur-out` }` } text-shimmer="Hey There!">Hey There!</h1>
                    <div className="about-heading-wrap">
                        <span className="indent"/>
                        <h1 className={ `about-heading-shimmer ${ heading1 ? `blur-in` : `blur-out` }` } text-shimmer="I'm">I'm</h1>
                        <h1 className={ `about-heading-float ${ heading1 ? `blur-in` : `blur-out` }` }>
                            <span text-glow="C">C</span>
                            <span text-glow="h">h</span>
                            <span text-glow="r">r</span>
                            <span text-glow="i">i</span>
                            <span text-glow="s">s</span>
                            <span text-glow="t">t</span>
                            <span text-glow="i">i</span>
                            <span text-glow="a">a</span>
                            <span text-glow="n">n</span>
                            <span text-glow=".">.</span>
                        </h1>
                    </div>
                    <div className="quote-wrap">
                        <p className="quote-text">Empowering users by creating intuitive,<br/>engaging, and innovative experiences.</p>
                    </div>
                    <h3>My Goals</h3>
                    <p>I strive to deliver a unique and engaging user experience for any business. I look to implement current trends and intuitive design to craft unique experiences. I hope to emphasis any business’ personality and set their website apart from the competition.</p>
                </article>
            </section>
            <section ref={ aboutSection2 }>
                <article>
                    <h2 className={ `about-heading-shimmer ${ heading2 ? `scale-in` : `scale-out` }` } text-shimmer="My Social">My Social</h2>
                    <div ref={ headingSection2 } className="about-heading-wrap">
                        <span className="indent"/>
                        <h2 className={ `about-heading-float ${ heading2 ? `scale-in` : `scale-out` }` }>
                            <span text-glow="S">S</span>
                            <span text-glow="k">k</span>
                            <span text-glow="i">i</span>
                            <span text-glow="l">l</span>
                            <span text-glow="l">l</span>
                            <span text-glow="s">s</span>
                            <span text-glow="e">e</span>
                            <span text-glow="t">t</span>
                            <span text-glow=".">.</span>
                        </h2>
                    </div>
                    {/* <h2>My Social<br/><span className="indent"/><strong>{ aboutH2 }</strong><span className="text-cursor">.</span></h2> */}
                    <h3 className={ `${ text1 ? `blur-in-fast` : `blur-out-fast` }` }>Communication</h3>
                    <p ref={ textSection1 } className={ `${ text1 ? `blur-in-fast` : `blur-out-fast` }` }>As a hockey referee, communication with coaches, players, and fellow officials is vital to keep the game running smoothly. Whether I’m coaching players on the faceoff or diffusing an emotional situation, I continue to improve my ability to effectively communicate with others.</p>
                    <h3 className={ `${ text2 ? `blur-in-fast` : `blur-out-fast` }` }>Teamwork</h3>
                    <p ref={ textSection2 } className={ `${ text2 ? `blur-in-fast` : `blur-out-fast` }` }>Whether I’m competing in a hockey tournament or playing video games, teamwork has become a natural skill I’ve learned. I’ve accomplished the most in life through leading and collaborating with my peers. I strive to fill the gaps in any team environment to achieve success.</p>
                    <h3 className={ `${ text3 ? `blur-in-fast` : `blur-out-fast` }` }>Conflict-Management</h3>
                    <p ref={ textSection3 } className={ `${ text3 ? `blur-in-fast` : `blur-out-fast` }` }>Diffusing tense situations has become a frequent task in my officiating career. Managing stress and emotions is difficult and I often use various approaches that best resolve conflict. Through these experiences, staying calm and being a great listener has helped strengthen my interpersonal skillset.</p>
                </article>
                <div/>
            </section>
            <section ref={ aboutSection3 }>
                <article>
                    <h2 className={ `about-heading-shimmer ${ heading3 ? `scale-in` : `scale-out` }` } text-shimmer="My Core">My Core</h2>
                    <div ref={ headingSection3 } className="about-heading-wrap">
                        <span className="indent"/>
                        <h2 className={ `about-heading-float ${ heading3 ? `scale-in` : `scale-out` }` }>
                            <span text-glow="V">V</span>
                            <span text-glow="a">a</span>
                            <span text-glow="l">l</span>
                            <span text-glow="u">u</span>
                            <span text-glow="e">e</span>
                            <span text-glow="s">s</span>
                            <span text-glow=".">.</span>
                        </h2>
                    </div>
                    {/* <h2>My Core<br/><span className="indent"/><strong>{ aboutH3 }</strong><span className="text-cursor">.</span></h2> */}
                    <h3 className={ `${ text4 ? `blur-in-fast` : `blur-out-fast` }` }>Collaboration</h3>
                    <p ref={ textSection4 } className={ `${ text4 ? `blur-in-fast` : `blur-out-fast` }` }>I believe the best innovations starts with collaborative ideas. The most successful teams I’ve been involved in support each other, balancing individual weaknesses with each other’s strengths. I cherish and value the connections I make with others as we pioneer the future.</p>
                    <h3 className={ `${ text5 ? `blur-in-fast` : `blur-out-fast` }` }>Leadership</h3>
                    <p ref={ textSection5 } className={ `${ text5 ? `blur-in-fast` : `blur-out-fast` }` }>From a hockey team captain to officiating coach, driving your peers to success . Since then, I value people who find courage to posses this trait.</p>
                    <h3 className={ `${ text6 ? `blur-in-fast` : `blur-out-fast` }` }>Determination</h3>
                    <p ref={ textSection6 } className={ `${ text6 ? `blur-in-fast` : `blur-out-fast` }` }>My determination comes from collaborating with like-minded people who strive to achieve their best work. I believe this plays a vital role in the industry as we need to push through barriers to be creative and innovative.</p>
                </article>
                <div/>
            </section>
            <section ref={ aboutSection4 }>
                <article>
                    <h2 className={ `about-heading-shimmer ${ heading4 ? `scale-in` : `scale-out` }` } text-shimmer="During My">During My</h2>
                    <div ref={ headingSection4 } className="about-heading-wrap">
                        <span className="indent"/>
                        <h2 className={ `about-heading-float ${ heading4 ? `scale-in` : `scale-out` }` }>
                            <span text-glow="D">D</span>
                            <span text-glow="o">o</span>
                            <span text-glow="w">w</span>
                            <span text-glow="n">n</span>
                            <span text-glow="t">t</span>
                            <span text-glow="i">i</span>
                            <span text-glow="m">m</span>
                            <span text-glow="e">e</span>
                            <span text-glow=".">.</span>
                        </h2>
                    </div>
                    {/* <h2>During My<br/><span className="indent"/><strong>{ aboutH4 }</strong><span className="text-cursor">.</span></h2> */}
                    <h3 className={ `${ text7 ? `blur-in-fast` : `blur-out-fast` }` }>Backcountry Skiing</h3>
                    <p ref={ textSection7 } className={ `${ text7 ? `blur-in-fast` : `blur-out-fast` }` }>I love navigating through intricate slopes and dense forests of the backcountry. I’m always seeking to conquer new challenges that push my skiing ability to the limits. The thrill of cliff drops and uncharted terrain makes our local mountains an irresistible playground!</p>
                    <h3 className={ `${ text8 ? `blur-in-fast` : `blur-out-fast` }` }>Action Photography</h3>
                    <p ref={ textSection8 } className={ `${ text8 ? `blur-in-fast` : `blur-out-fast` }` }>When I’m not on the ice at the hockey rink, I’m the one behind the camera. The game of hockey is packed with high-intensity action and emotion, and capturing these moments is an art I strive to master.</p>
                    <h3 className={ `${ text9 ? `blur-in-fast` : `blur-out-fast` }` }>Video Games</h3>
                    <p ref={ textSection9 } className={ `${ text9 ? `blur-in-fast` : `blur-out-fast` }` }>I’ve always been into video games as a kid and over 20 years later, nothing has changed! I love exploring different genres, all with their unique quirks.</p>
                </article>
                <div/>
            </section>
        </main>
    )
}

export default About