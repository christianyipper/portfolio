import { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import HeadingShimmer from '../components/HeadingShimmer';
import SvgEmail from '../components/svg/SvgEmail'
import SvgLinkedIn from '../components/svg/SvgLinkedIn'

const TableOfContents = ( { 
    subHeading1, subHeading2, subHeading3, subHeading4, subHeading5, subHeading6, subHeading7, subHeading8, subHeading9, 
    mainHeading1, mainHeading2, mainHeading3, mainHeading4, mainHeading5, mainHeading6, mainHeading7, mainHeading8, mainHeading9, 
    path1, path2, path3, path4, path5, path6, path7, path8, path9, 
    num1, num2, num3, num4, num5, num6, num7, num8, num9, 
    display1, display2, display3, display4, display5, display6, display7, display8, display9,
    view, menu, click } ) => {

    return (
        <div className={ `toc-container ${ menu }` }>
            <article className="toc">
                {/* <HeadingShimmer heading="Table of Contents"/> */}
                <div className={ `toc-wrap ${ display1 }` }>
                    <p className="sub-heading-grey" text-glow={ subHeading1 }>{ subHeading1 }</p>
                    <div>
                        <a 
                            href={ path1 } 
                            className={ view }
                            text-glow={ mainHeading1 }
                            onClick={ click }
                        >{ mainHeading1 }</a>
                        <p className="page-num">{ num1 }</p>
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
                        <p className="page-num">{ num2 }</p>
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
                        <p className="page-num">{ num3 }</p>
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
                        <p className="page-num">{ num4 }</p>
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
                        <p className="page-num">{ num5 }</p>
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
                        <p className="page-num">{ num6 }</p>
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
                        <p className="page-num">{ num7 }</p>
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
                        <p className="page-num">{ num8 }</p>
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
                        <p className="page-num">{ num9 }</p>
                    </div>
                </div>
            </article>
            <div className="toc-icon-wrap" onClick={ click }>
                <DotLottieReact
                    src="https://lottie.host/96ccc72a-7bd2-428f-af74-bcc8bf675c9d/yeAFqNLd3q.json"
                    loop
                />
                {/* <div className="icon-open">
                    <SvgEmail/>
                </div>
                <div className="icon-close">
                    <SvgLinkedIn/>
                </div> */}
            </div>
        </div>
    );
};

export default TableOfContents;