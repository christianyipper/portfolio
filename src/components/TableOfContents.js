import SvgBurger from '../components/svg/SvgBurger'
import SvgClose from '../components/svg/SvgClose'

const TableOfContents = ( { 
    subHeading1, subHeading2, subHeading3, subHeading4, subHeading5, subHeading6, subHeading7, subHeading8, subHeading9, 
    mainHeading1, mainHeading2, mainHeading3, mainHeading4, mainHeading5, mainHeading6, mainHeading7, mainHeading8, mainHeading9, 
    path1, path2, path3, path4, path5, path6, path7, path8, path9, 
    num1, num2, num3, num4, num5, num6, num7, num8, num9, 
    display1, display2, display3, display4, display5, display6, display7, display8, display9,
    view, menu, click, animation } ) => {

    return (
        <div className={ `toc-container ${ menu } ${ animation }` }>
            <article className="toc">
                <div className={ `toc-wrap ${ display1 }` }>
                    <p className="sub-heading-grey" text-glow={ subHeading1 }>{ subHeading1 }</p>
                    <div>
                        <a 
                            href={ path1 } 
                            className={ view }
                            text-glow={ mainHeading1 }
                            onClick={ click }
                        >{ mainHeading1 }</a>
                        <p className="page-num" text-glow={ num1 }>{ num1 }</p>
                    </div>
                </div>
                <div className={ `toc-wrap ${ display2 }` }>
                    <p className="sub-heading-grey" text-glow={ subHeading2 }>{ subHeading2 }</p>
                    <div>
                        <a 
                            href={ path2 } 
                            className={ view }
                            text-glow={ mainHeading2 }
                            onClick={ click }
                        >{ mainHeading2 }</a>
                        <p className="page-num" text-glow={ num2 }>{ num2 }</p>
                    </div>
                </div>
                <div className={ `toc-wrap ${ display3 }` }>
                    <p className="sub-heading-grey" text-glow={ subHeading3 }>{ subHeading3 }</p>
                    <div>
                        <a 
                            href={ path3 } 
                            className={ view }
                            text-glow={ mainHeading3 }
                            onClick={ click }
                        >{ mainHeading3 }</a>
                        <p className="page-num" text-glow={ num3 }>{ num3 }</p>
                    </div>
                </div>
                <div className={ `toc-wrap ${ display4 }` }>
                    <p className="sub-heading-grey" text-glow={ subHeading4 }>{ subHeading4 }</p>
                    <div>
                        <a 
                            href={ path4 } 
                            className={ view }
                            text-glow={ mainHeading4 }
                            onClick={ click }
                        >{ mainHeading4 }</a>
                        <p className="page-num" text-glow={ num4 }>{ num4 }</p>
                    </div>
                </div>
                <div className={ `toc-wrap ${ display5 }` }>
                    <p className="sub-heading-grey" text-glow={ subHeading5 }>{ subHeading5 }</p>
                    <div>
                        <a 
                            href={ path5 } 
                            className={ view }
                            text-glow={ mainHeading5 }
                            onClick={ click }
                        >{ mainHeading5 }</a>
                        <p className="page-num" text-glow={ num5 }>{ num5 }</p>
                    </div>
                </div>
                <div className={ `toc-wrap ${ display6 }` }>
                    <p className="sub-heading-grey" text-glow={ subHeading6 }>{ subHeading6 }</p>
                    <div>
                        <a 
                            href={ path6 } 
                            className={ view }
                            text-glow={ mainHeading6 }
                            onClick={ click }
                        >{ mainHeading6 }</a>
                        <p className="page-num" text-glow={ num6 }>{ num6 }</p>
                    </div>
                </div>
                <div className={ `toc-wrap ${ display7 }` }>
                    <p className="sub-heading-grey" text-glow={ subHeading7 }>{ subHeading7 }</p>
                    <div>
                        <a 
                            href={ path7 } 
                            className={ view }
                            text-glow={ mainHeading7 }
                            onClick={ click }
                        >{ mainHeading7 }</a>
                        <p className="page-num" text-glow={ num7 }>{ num7 }</p>
                    </div>
                </div>
                <div className={ `toc-wrap ${ display8 }` }>
                    <p className="sub-heading-grey" text-glow={ subHeading8 }>{ subHeading8 }</p>
                    <div>
                        <a 
                            href={ path8 } 
                            className={ view }
                            text-glow={ mainHeading8 }
                            onClick={ click }
                        >{ mainHeading8 }</a>
                        <p className="page-num" text-glow={ num8 }>{ num8 }</p>
                    </div>
                </div>
                <div className={ `toc-wrap ${ display9 }` }>
                    <p className="sub-heading-grey" text-glow={ subHeading9 }>{ subHeading9 }</p>
                    <div>
                        <a 
                            href={ path9 } 
                            className={ view }
                            text-glow={ mainHeading9 }
                            onClick={ click }
                        >{ mainHeading9 }</a>
                        <p className="page-num" text-glow={ num9 }>{ num9 }</p>
                    </div>
                </div>
            </article>
            <div className="toc-icon-wrap" onClick={ click }>
                <div className="icon-open">
                    <SvgBurger/>
                </div>
                <div className="icon-close">
                    <SvgClose/>
                </div>
            </div>
        </div>
    );
};

export default TableOfContents;