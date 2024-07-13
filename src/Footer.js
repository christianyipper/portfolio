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
                <div className="footer-mid"></div>
                    <img src="https://drive.google.com/thumbnail?id=1an2AB7I7NbMzXRwZl03x-qW6Q1A_YbkJ&sz=w1000" alt=""></img>
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