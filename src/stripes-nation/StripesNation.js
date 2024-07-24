import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Footer from '../Footer';

const StripesNation = () => {
    const { ref: snap1, inView: inView1 } = useInView( { threshold: 0.5 } );
    const { ref: snap2, inView: inView2 } = useInView( { threshold: 0.5 } );
    const { ref: snap3, inView: inView3 } = useInView( { threshold: 0.5 } );
    const { ref: snap4, inView: inView4 } = useInView( { threshold: 0.5 } );
    const { ref: snap5, inView: inView5 } = useInView( { threshold: 0.5 } );

    useEffect( () => {
        document.body.classList.add("scroll-hide");
    
        return () => {
        document.body.classList.remove("scroll-hide");
        };
    }, 
    [] );
    
    return (
        <main className="project-grid">
            {/* <section className="scroll-wrap">
                <div className="scroll-section" ref={ snap1 }></div>
                <div className="scroll-section" ref={ snap2 }></div>
                <div className="scroll-section" ref={ snap3 }></div>
                <div className="scroll-section" ref={ snap4 }></div>
                <div className="footer-section" ref={ snap5 }>
                    <Footer />
                </div>
            </section> */}
            <section className="project-img-section">
                <div className="project-img-wrap">
                    <video className="project-video" loop autoPlay muted>
                        <source src="https://www.dropbox.com/scl/fi/0xj4rvjnn4xqleh5iyp1f/StripesNation-720p.mp4?rlkey=bqzh5y9k6m1sr55zc43mnsisb&st=jf7xrzt8&raw=1" type="video/mp4"/>
                    </video>
                </div>
            </section>
        </main>
    )
}

export default StripesNation