import SvgArrowDown from '../components/svg/SvgArrowDown';

const ScrollDown = ( { 
    link1, heading1, animation1,
    link2, heading2, animation2,
    link3, heading3, animation3,
    link4, heading4, animation4,
    link5, heading5, animation5,
    link6, heading6, animation6,
    link7, heading7, animation7,
    link8, heading8, animation8,
    link9, heading9, animation9
    } ) => {

    return (
        <div className="scroll-down">
            <div className="arrow-wrap">
                <SvgArrowDown/>
            </div>
            <div className="arrow-heading-wrap">
                <a href={ link1 } className={ animation1 }>{ heading1 }</a>
                <a href={ link2 } className={ animation2 }>{ heading2 }</a>
                <a href={ link3 } className={ animation3 }>{ heading3 }</a>
                <a href={ link4 } className={ animation4 }>{ heading4 }</a>
                <a href={ link5 } className={ animation5 }>{ heading5 }</a>
                <a href={ link6 } className={ animation6 }>{ heading6 }</a>
                <a href={ link7 } className={ animation7 }>{ heading7 }</a>
                <a href={ link8 } className={ animation8 }>{ heading8 }</a>
                <a href={ link9 } className={ animation9 }>{ heading9 }</a>
            </div>
        </div>
    );
};

export default ScrollDown;