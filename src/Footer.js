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
                    <img className="gif-overlay" src="https://drive.google.com/thumbnail?id=15cDu4VD6EPhyFj57lBlOEwBvjQucsXrY&sz=w1000" alt='Christian Yip "Yipper" profile shirt gif'/>
                    <img src="https://drive.google.com/thumbnail?id=1DFjw656aktqcm3CijGacJePxAFCiOfQE&sz=w1000" alt='Christian Yip "Yipper" profile photo head shot'/>
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