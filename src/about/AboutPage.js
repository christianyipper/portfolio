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

    const [ aboutH1 ] = useTypewriter({
        words: [ 'Christian', 'Yipper' ],
        loop: 0,
        delaySpeed: 5000
    });
    const [ aboutH2 ] = useTypewriter({
        words: [ 'Skillset', 'Experiences' ],
        loop: 0,
        delaySpeed: 5000
    });
    const [ aboutH3 ] = useTypewriter({
        words: [ 'Values', 'Morales' ],
        loop: 0,
        delaySpeed: 5000
    });
    const [ aboutH4 ] = useTypewriter({
        words: [ 'Downtime', 'Brakes' ],
        loop: 0,
        delaySpeed: 5000
    });

    return (
        <main className="about">
            <section className="about-img-section">
                <article/>
                <div className="about-img-wrap">
                    <div className={ `about-img-1 ${ aboutImg1 ? `blur-in` : `blur-out` }` }>
                        <img className="gif-overlay" src="https://drive.google.com/thumbnail?id=13GYzqZbshgEzo6oeuFILzmHR3CvnSsSD&sz=w1000" alt='Christian Yip "Yipper" thinking profile shirt gif'/>
                        <img src="https://drive.google.com/thumbnail?id=1QQErqfjmKLpZhlLCck1WpEjaLLsXcZ3X&sz=w1000" alt='Christian Yip "Yipper" thinking profile photo head shot' />
                    </div>
                    <div className={ `about-img-2 ${ aboutImg2 ? `blur-in` : `blur-out` }` }>
                        <img className="gif-overlay" src="https://drive.google.com/thumbnail?id=1ZtYTm3pgzeB32Tgk8PlVdg59_vqVqtQR&sz=w1000" alt='Christian Yip "Yipper" referee officiating profile jersey gif'/>
                        <img src="https://drive.google.com/thumbnail?id=1IEkhy1QkJog0bLQdrT0weGqzGSEf3ipJ&sz=w1000" alt='Christian Yip "Yipper" referee officiating profile photo head shot'/>
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
                        <img className="gif-overlay" src="https://drive.google.com/thumbnail?id=1u2HiD6DpaGqdN84oDprXNcDBKEiO68M7&sz=w1000" alt='Christian Yip "Yipper" profile shirt gif'/>
                        <img src="https://drive.google.com/thumbnail?id=1DFjw656aktqcm3CijGacJePxAFCiOfQE&sz=w1000" alt='Christian Yip "Yipper" profile photo head shot'/>
                    </div>
                    <div className={ `about-img-4 ${ aboutImg4 ? `blur-in` : `blur-out` }` }>
                        <img src="https://drive.google.com/thumbnail?id=19uDnQmdSy2nrZv6K6-r3M5KEFQC_W3pa&sz=w1000" alt='Christian Yip "Yipper" skiing photo'/>
                    </div>
                </div>
            </section>
            <section ref={ aboutSection1 }>
                <article>
                    <h1>Hey There!<br/><span className="indent"/>I'm <strong>{ aboutH1 }</strong><span className="text-cursor">.</span></h1>
                    <div className="quote-wrap">
                        <p className="quote-text">Empowering users by creating intuitive,<br/>engaging, and innovative experiences.</p>
                    </div>
                    <h3>My Goals</h3>
                    <p>I strive to deliver a unique and engaging user experience for any business. To accomplish this, I’ll implement current trends and intuitive design to craft unique experiences. In turn, this will emphasis a business’ personality and set their website apart from the competition. I’ll also focus on innovating new web design strategies to improve interactivity and visual appeal.</p>
                </article>
                <div/>
            </section>
            <section ref={ aboutSection2 }>
                <article>
                    <h2>My Social<br/><span className="indent"/><strong>{ aboutH2 }</strong><span className="text-cursor">.</span></h2>
                    <h3>Communication</h3>
                    <p>As a hockey referee, communication with coaches, players, and fellow officials is vital to keep the game running smoothly. Whether I’m coaching players on the faceoff or diffusing an emotional situation, I continue to improve my ability to effectively communicate with others.</p>
                    <h3>Teamwork</h3>
                    <p>Whether I’m competing in a hockey tournament or playing video games, teamwork has become a natural skill I’ve learned. I’ve accomplished the most in life through leading and collaborating with my peers. I strive to fill the gaps in any team environment to achieve success.</p>
                    <h3>Conflict-Management</h3>
                    <p>Diffusing tense situations has become a frequent task in my officiating career. Managing stress and emotions is difficult and I often use various approaches that best resolve conflict. Through these experiences, staying calm and being a great listener has helped strengthen my interpersonal skillset.</p>
                </article>
                <div/>
            </section>
            <section ref={ aboutSection3 }>
                <article>
                    <h2>My Core<br/><span className="indent"/><strong>{ aboutH3 }</strong><span className="text-cursor">.</span></h2>
                    <h3>Collaboration</h3>
                    <p>I believe the best innovations starts with collaborative ideas. The most successful teams I’ve been involved in support each other, balancing individual weaknesses with each other’s strengths. I cherish and value the connections I make with others as we pioneer the future.</p>
                    <h3>Leadership</h3>
                    <p>From a hockey team captain to officiating coach, driving your peers to success . Since then, I value people who find courage to posses this trait.</p>
                    <h3>Determination</h3>
                    <p>My determination comes from collaborating with like-minded people who strive to achieve their best work. I believe this plays a vital role in the industry as we need to push through barriers to be creative and innovative.</p>
                </article>
                <div/>
            </section>
            <section ref={ aboutSection4 }>
                <article>
                    <h2>During My<br/><span className="indent"/><strong>{ aboutH4 }</strong><span className="text-cursor">.</span></h2>
                    <h3>Backcountry Skiing</h3>
                    <p>I love navigating through intricate slopes and dense forests of the backcountry. I’m always seeking to conquer new challenges that push my skiing ability to the limits. The thrill of cliff drops and uncharted terrain makes our local mountains an irresistible playground!</p>
                    <h3>Action Photography</h3>
                    <p>When I’m not on the ice at the hockey rink, I’m the one behind the camera. The game of hockey is packed with high-intensity action and emotion, and capturing these moments is an art I strive to master.</p>
                    <h3>Video Games</h3>
                    <p>I’ve always been into video games as a kid and over 20 years later, nothing has changed! I love exploring different genres, all with their unique quirks.</p>
                </article>
                <div/>
            </section>
        </main>
    )
}

export default About