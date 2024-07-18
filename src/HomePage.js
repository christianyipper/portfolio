import HomeBg from './HomeBg';
import { useInView } from 'react-intersection-observer';


const HomePage = () => {
    const { ref: snap1, inView: inView1 } = useInView({threshold: 0.5});
    const { ref: snap2, inView: inView2 } = useInView({threshold: 0.5});
    const { ref: snap3, inView: inView3 } = useInView({threshold: 0.5});
    const { ref: snap4, inView: inView4 } = useInView({threshold: 0.5});
    return (
        <main className="home">
            <section className='scroll-container'>
                {/* <div className='scroll-section' ref={ snap1 }></div>
                <div className='scroll-section' ref={ snap2 }></div>
                <div className='scroll-section' ref={ snap3 }></div>
                <div className='scroll-section' ref={ snap4 }></div> */}
            </section>
            <section className="home-section">
                <div className="home-left">
                    <div className="banner-img-wrap">
                        <img className="hat-overlay" src="https://www.dropbox.com/scl/fi/42b9ctd7rgdwcrkiscdpm/yipper-thinking-hat-outline-alt.png?rlkey=ri6f7vun4afnr860x4zfyfckv&st=6marzq65&raw=1" alt='Christian Yip "Yipper" thinking profile hat outline'/>
                        <img className="gif-overlay" src="https://www.dropbox.com/scl/fi/gf4pecgo0mh9jteafqsdc/yipper-thinking-1080p.gif?rlkey=7lsnfl8d54lv04h3jd6t5ahgg&st=ybnzs5dz&raw=1" alt='Christian Yip "Yipper" thinking profile shirt gif'/>
                        <img className="gif-bg" src="https://www.dropbox.com/scl/fi/4ms6td6kyky52h14omqux/yipper-thinking-head.png?rlkey=6kvmzjfk87q1t13x9fsha9tqq&st=89bl88pc&raw=1" alt='Christian Yip "Yipper" thinking profile photo head shot'/>
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
                        <span text-glow="C">C</span>
                        <span text-glow="h">h</span>
                        <span text-glow="r">r</span>
                        <span text-glow="i">i</span>
                        <span text-glow="s">s</span>
                        <span text-glow="t">t</span>
                        <span text-glow="i">i</span>
                        <span text-glow="a">a</span>
                        <span text-glow="n">n</span>
                        <br/>
                        <span className="indent" text-glow="Y">Y</span>
                        <span text-glow="i">i</span>
                        <span text-glow="p">p</span>
                        <span text-glow="p">p</span>
                        <span text-glow="e">e</span>
                        <span text-glow="r">r</span>
                    </h1> 
                    <div className="home-text-wrap">
                        <h2 text-shimmer="Front-End Developer">Front-End Developer</h2>
                        {/* <h2 text-shimmer="Developer">Developer</h2> */}
                    </div>
                </article>
            </section>
            <section className="home-section">
                <div className="window-wrap">
                    <img className="window" src="https://drive.google.com/thumbnail?id=1-sfapRmWf0WAtDT7HuCJ7ck7ny7bhyLB&sz=w1000" alt='Glowing neon window border'/>
                    <img className="window-bar" src="https://drive.google.com/thumbnail?id=1Nba2j4QNbJRQ3N12CIh2mIBaHldhFBRM&sz=w1000" alt='Glowing neon window search bar'/>
                    <img className="window-bg" src="https://drive.google.com/thumbnail?id=1oygEPyxWN9CKRrCDAapVhuhZgU-qTseM&sz=w1000" alt='Neon window background'/>
                    <div className='bgbg'></div>
                </div>
            </section>
            <HomeBg />
        </main>
    )
}

export default HomePage