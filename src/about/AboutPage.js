import bchl from '../assets/images/icons/bchl-logo.png';
import bcehl from '../assets/images/icons/bcehl-logo.png';
import bcHockey from '../assets/images/icons/bc-hockey-logo.png';
import csshl from '../assets/images/icons/csshl-logo.png';
import jphl from '../assets/images/icons/jphl-logo.png';

const About = () => {
    return (
        <main className="about">
            <section>
                <article>
                    <h1>Hey There!<br/><span/>I'm <strong>Christian.</strong></h1>
                    <p>My name’s Christian Yip, but you can call me Yipper! I’m a passionate front-end developer and designer, driven to explore creative ideas.</p>
                    <h3>My Goals</h3>
                    <p>I strive to deliver a unique and engaging user experience for any business. To accomplish this, I’ll implement current trends and intuitive design to craft unique experiences. In turn, this will emphasis a business’ personality and set their website apart from the competition. I’ll also focus on innovating new web design strategies to improve interactivity and visual appeal.</p>
                </article>
                <div>
                    <img src="https://drive.google.com/thumbnail?id=1PXQMemcZIvk0YuNHTqOaSMXA4RPdXmu9&sz=w1000" alt=""></img>
                </div>
            </section>
            <section>
                <article>
                    <h2>My Soft<br/><span/><strong>Skillset.</strong></h2>
                    <h3>Communication</h3>
                    <p>As a hockey referee, communication with coaches, players, and fellow officials is vital to keep the game running smoothly. Whether I’m coaching players on the faceoff or diffusing an emotional situation, I continue to improve my ability to effectively communicate with others.</p>
                    <h3>Teamwork</h3>
                    <p>Whether I’m competing in a hockey tournament or playing video games, teamwork has become a natural skill I’ve learned. I’ve accomplished the most in life through leading and collaborating with my peers. I strive to fill the gaps in any team environment to achieve success.</p>
                    <h3>Conflict-Management</h3>
                    <p>Diffusing tense situations has become a frequent task in my officiating career. Managing stress and emotions is difficult and I often use various approaches that best resolve conflict. Through these experiences, staying calm and being a great listener has helped strengthen my interpersonal skillset.</p>
                </article>
                <div>
                    <img src="https://drive.google.com/thumbnail?id=1o10Cvh-bKIotrP0za_sK0Ugi9edfXVz8&sz=w1000" alt=""></img>
                    <div className="career">
                        <h3>Officiating <strong>Career</strong></h3>
                        <div className="career-stats">
                            <div className="league-wrap">
                                <div className="league-card featured-card">
                                    <img src={ bchl } alt="" />
                                    <article className="league-info">
                                        <p><span className="bold">2023 - Present</span><br/>British Columbia Hockey League</p>
                                    </article>
                                </div>
                                <div className="league-card">
                                    <img src={ jphl } alt="" />
                                    <article className="league-info">
                                        <p><span className="bold">2023 - Present</span><br/>Junior Prospects Hockey League</p>
                                    </article>
                                </div>
                                <div className="league-card">
                                    <img src={ bcehl } alt="" />
                                    <article className="league-info">
                                        <p><span className="bold">2019 - 2023</span><br/>BC Elite<br/>Hockey League</p>
                                    </article>
                                </div>
                                <div className="league-card">
                                    <img src={ csshl } alt="" />
                                    <article className="league-info">
                                        <p><span className="bold">2019 - 2023</span><br/>Canadian Sports Schools<br/>Hockey League</p>
                                    </article>
                                </div>
                                <div className="league-card">
                                    <img src={ bcHockey } alt="" />
                                    <article className="league-info">
                                        <p><span className="bold">2012 - 2023</span><br/>BC Hockey</p>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <article>
                    <h2>Some of My<br/><span/><strong>Core Values.</strong></h2>
                    <h3>Collaboration</h3>
                    <p>I believe the best innovations starts with collaborative ideas. The most successful teams I’ve been involved in support each other, balancing individual weaknesses with each other’s strengths. I cherish and value the connections I make with others as we pioneer the future.</p>
                    <h3>Leadership</h3>
                    <p>From a hockey team captain to a project leader. Since then, I value people who find courage to posses this trait.</p>
                    <h3>Determination</h3>
                    <p></p>
                </article>
                <div>
                    <img src="https://drive.google.com/thumbnail?id=1JWLEJna0gDyWjM3SxVkRmyZda8e10Cgn&sz=w1000" alt=""></img>
                </div>
            </section>
            <section>
                <article>
                    <h2>During My<br/><span/><strong>Downtime.</strong></h2>
                    <h3>Backcountry Skiing</h3>
                    <p></p>
                    <h3>Action Photography</h3>
                    <p></p>
                    <h3>Video Games</h3>
                    <p></p>
                </article>
                <div>
                    <img src="https://drive.google.com/thumbnail?id=19uDnQmdSy2nrZv6K6-r3M5KEFQC_W3pa&sz=w1000" alt=""></img>
                </div>
            </section>
        </main>
    )
}

export default About