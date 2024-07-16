const Footer = () => {
    return (
        <footer>
            <div className="footer-wrap">
                <div className="footer-left">
                    <h2>Connect On<br/><strong>LinkedIn.</strong></h2>
                    <button>
                        <p>linkedin.com</p>
                    </button>
                </div>
                <div className="footer-mid">
                <img className="gif-overlay" src="https://www.dropbox.com/scl/fi/tuma334n7ykchht48f8wk/yipper-profile-1080p.gif?rlkey=qf19hunzy4s8i6xvj4h94ld2z&st=65tpimb9&raw=1" alt='Christian Yip "Yipper" profile shirt gif'/>
                <img src="https://www.dropbox.com/scl/fi/fxnbup25t7v4w29yl1b03/yipper-profile-head.png?rlkey=s97ut47pl2z28g05v3e2yuy83&st=v1i14km6&raw=1" alt='Christian Yip "Yipper" profile photo head shot'/>
                </div>
                <div className="footer-right">
                    <h2><strong>Reach Out</strong><br/>By Email.</h2>
                    <button>
                        <p>christian@yipper.ca</p>
                    </button>
                </div>
            </div>
            <p className="copyright">© Yipper 2024</p>
        </footer>
    )
}
export default Footer