const ScrollSnap = ( { 
    id1, reference1, display1, homeView,
    id2, reference2, display2,
    id3, reference3, display3,
    id4, reference4, display4,
    id5, reference5, display5,
    id6, reference6, display6,
    id7, reference7, display7,
    id8, reference8, display8,
    id9, reference9, display9
    } ) => {

    return (
        <section className="scroll-wrap">
            <div id={ id1 } className={ `scroll-section ${ display1 }` } ref={ reference1 }>
                <div ref={ homeView }></div>
            </div>
            <div id={ id2 } className={ `scroll-section ${ display2 }` } ref={ reference2 }></div>
            <div id={ id3 } className={ `scroll-section ${ display3 }` } ref={ reference3 }></div>
            <div id={ id4 } className={ `scroll-section ${ display4 }` } ref={ reference4 }></div>
            <div id={ id5 } className={ `scroll-section ${ display5 }` } ref={ reference5 }></div>
            <div id={ id6 } className={ `scroll-section ${ display6 }` } ref={ reference6 }></div>
            <div id={ id7 } className={ `scroll-section ${ display7 }` } ref={ reference7 }></div>
            <div id={ id8 } className={ `scroll-section ${ display8 }` } ref={ reference8 }></div>
            <div id={ id9 } className={ `scroll-section ${ display9 }` } ref={ reference9 }></div>
        </section>
    );
};

export default ScrollSnap;