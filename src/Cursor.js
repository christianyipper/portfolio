import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const hideCursor = function() {
    document.body.style.cursor = 'none';
}();
const Cursor = () => {
    const [animate, setAnimate] = useState(false);
    const [ mousePosition, setMousePosition ] = useState({
        x: 0,
        y: 0
    });
    const [ cursorVariant, setCursorVariant ] = useState("default");

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }
        window.addEventListener("mousemove", mouseMove);
        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, []);

    useEffect(() => {
        const docClick = () => {
            setAnimate(true);
            setTimeout(() => setAnimate(false), 200);
        };

        document.addEventListener('click', docClick);

        return () => {
            document.removeEventListener('click', docClick);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x,
            y: mousePosition.y,
            transition: {
                type: "smooth",
                duration: 0,
            }
        },
        text: {
            x: mousePosition.x,
            y: mousePosition.y,
            fill: "black",
        }
    }

    const textEnter = () => setCursorVariant("text");
    const textLeave = () => setCursorVariant("default");

    return(
        <div>
            <motion.svg className="cursor"
                variants={variants}
                animate="default"
                xmlns="http://www.w3.org/2000/svg" 
                id="Layer_5" 
                data-name="Layer 5" 
                viewBox="0 0 44 44">
                <path className={`cursor-fill ${animate ? "doc-click" : ""}`} d="m25.7 18.26-6.01-4.44a.806.806 0 0 0-1.28.65l.06 7.47c.02 3.24 3.26 5.67 6.27 4.49.16-.06.32-.13.47-.2s.3-.16.44-.26c2.73-1.75 2.66-5.79.05-7.72Zm-1.23 6.52c-1.48.75-3.28.17-4.03-1.31s-.17-3.28 1.31-4.03 3.28-.17 4.03 1.31.17 3.28-1.31 4.03Z"/>
                <circle className={`cursor-dot ${animate ? "doc-click" : ""}`} cx="23.11" cy="22.11" r="1.5"/>
            </motion.svg>
        </div>
    )
}

export default Cursor