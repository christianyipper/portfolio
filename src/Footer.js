import { useInView } from 'react-intersection-observer';
import HeadingFloat from './components/text/HeadingFloat';
import HeadingShimmer from './components/text/HeadingShimmer';

const Footer = () => {
    const { ref: footer, inView: footerView } = useInView( { threshold: 0.5 } );

    return (
        <footer ref={ footer }>
            <div className="footer-wrap">
                <div className="footer-left">
                    <HeadingShimmer 
                        animation={ footerView ? `scale-in` : `scale-out` }
                        heading="Connect On"
                    />
                    <HeadingFloat
                        animation={ footerView ? `scale-in` : `scale-out` }
                        meta="LinkedIn." 
                        a="L" b="i" c="n" d="k" e="e" f="d" g="I" h="n" i="."
                    />
                    <a className={ `btn ${ footerView ? `scale-in` : `scale-out` }` } href="https://www.linkedin.com/in/christianyipper/">
                        <p className="text-linkedin" text-glow="linkedin.com">linkedin.com</p>
                    </a>
                </div>
                <div className="footer-mid">
                    <img className={ `gif-overlay ${ footerView ? `blur-in` : `blur-out` }` } src="https://www.dropbox.com/scl/fi/rf1u88wl47o3ni7vo7ltn/yipper-profile-overlay-400p-27fps-comp.gif?rlkey=bdevz0gcrtbgz4ygq8y1hrtne&st=r9liec8y&raw=1" alt='Christian Yip "Yipper" profile shirt gif'/>
                    <img className={ `${ footerView ? `blur-in` : `blur-out` }` } src="https://www.dropbox.com/scl/fi/wrixsoyia5q9jsfa6qrll/yipper-profile-gif-head.png?rlkey=qiqbj024tymoh12989wp7mxde&st=p84n445d&raw=1" alt='Christian Yip "Yipper" profile photo head shot'/>
                </div>
                <div className="footer-right">
                    <HeadingFloat
                        animation={ footerView ? `scale-in` : `scale-out` }
                        meta="Reach Out" 
                        a="R" b="e" c="a" d="c" e="h" spaceF="space" f="O" g="u" h="t" i="."
                    />
                    <HeadingShimmer 
                        animation={ `heading-right ${ footerView ? `scale-in` : `scale-out` }` }
                        direction="heading-right"
                        heading="By Email."
                    />
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