import { useInView } from 'react-intersection-observer';

const Footer = () => {
    const { ref: footer, inView: footerView } = useInView( { threshold: 0.5 } );

    return (
        <footer ref={ footer }>
            <div className="footer-wrap">
                <div className="footer-left">
                    <h2 className={ `footer-shimmer ${ footerView ? `scale-in` : `scale-out` }` } text-shimmer="Connect On">Connect On</h2>
                    <h2 className={ `footer-float ${ footerView ? `scale-in` : `scale-out` }` }>
                        <span text-glow="L">L</span>
                        <span text-glow="i">i</span>
                        <span text-glow="n">n</span>
                        <span text-glow="k">k</span>
                        <span text-glow="e">e</span>
                        <span text-glow="d">d</span>
                        <span text-glow="I">I</span>
                        <span text-glow="n">n</span>
                        <span text-glow=".">.</span>
                    </h2>
                    <a className={ `btn ${ footerView ? `scale-in` : `scale-out` }` }>
                        <p className="text-linkedin" text-glow="linkedin.com">linkedin.com</p>
                    </a>
                </div>
                <div className="footer-mid">
                    <img className={ `gif-overlay ${ footerView ? `blur-in` : `blur-out` }` } src="https://www.dropbox.com/scl/fi/rf1u88wl47o3ni7vo7ltn/yipper-profile-overlay-400p-27fps-comp.gif?rlkey=bdevz0gcrtbgz4ygq8y1hrtne&st=r9liec8y&raw=1" alt='Christian Yip "Yipper" profile shirt gif'/>
                    <img className={ `${ footerView ? `blur-in` : `blur-out` }` } src="https://www.dropbox.com/scl/fi/wrixsoyia5q9jsfa6qrll/yipper-profile-gif-head.png?rlkey=qiqbj024tymoh12989wp7mxde&st=p84n445d&raw=1" alt='Christian Yip "Yipper" profile photo head shot'/>
                </div>
                <div className="footer-right">
                    <h2 className={ `footer-float ${ footerView ? `scale-in` : `scale-out` }` }>
                        <span text-glow="R">R</span>
                        <span text-glow="e">e</span>
                        <span text-glow="a">a</span>
                        <span text-glow="c">c</span>
                        <span text-glow="h">h</span>
                        <span className="space" text-glow="O">O</span>
                        <span text-glow="u">u</span>
                        <span text-glow="t">t</span>
                    </h2>
                    <h2 className={ `footer-shimmer h2-right ${ footerView ? `scale-in` : `scale-out` }` } text-shimmer="By Email.">By Email.</h2>
                    <a className={ `btn ${ footerView ? `scale-in` : `scale-out` }` }>
                        <p className="text-email" text-glow="christian@yipper.ca">christian@yipper.ca</p>
                    </a>
                </div>
            </div>
            <p className="copyright">© Yipper 2024</p>
        </footer>
    )
}
export default Footer