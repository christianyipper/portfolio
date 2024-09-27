import SvgBurger from '../components/svg/SvgBurger'
import SvgClose from '../components/svg/SvgClose'
import TextGlow from './text/TextGlow';

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
                        <TextGlow
                            name={ view }
                            link={ path1 }
                            text={ mainHeading1 }
                            click={ click }
                        />
                        <TextGlow
                            name="page-num"
                            link={ path1 }
                            text={ num1 }
                            click={ click }
                        />
                    </div>
                </div>
                <div className={ `toc-wrap ${ display2 }` }>
                    <p className="sub-heading-grey" text-glow={ subHeading2 }>{ subHeading2 }</p>
                    <div>
                        <TextGlow
                            name={ view }
                            link={ path2 }
                            text={ mainHeading2 }
                            click={ click }
                        />
                        <TextGlow
                            name="page-num"
                            link={ path2 }
                            text={ num2 }
                            click={ click }
                        />
                    </div>
                </div>
                <div className={ `toc-wrap ${ display3 }` }>
                    <p className="sub-heading-grey" text-glow={ subHeading3 }>{ subHeading3 }</p>
                    <div>
                        <TextGlow
                            name={ view }
                            link={ path3 }
                            text={ mainHeading3 }
                            click={ click }
                        />
                        <TextGlow
                            name="page-num"
                            link={ path3 }
                            text={ num3 }
                            click={ click }
                        />
                    </div>
                </div>
                <div className={ `toc-wrap ${ display4 }` }>
                    <p className="sub-heading-grey" text-glow={ subHeading4 }>{ subHeading4 }</p>
                    <div>
                        <TextGlow
                            name={ view }
                            link={ path4 }
                            text={ mainHeading4 }
                            click={ click }
                        />
                        <TextGlow
                            name="page-num"
                            link={ path4 }
                            text={ num4 }
                            click={ click }
                        />
                    </div>
                </div>
                <div className={ `toc-wrap ${ display5 }` }>
                    <p className="sub-heading-grey" text-glow={ subHeading5 }>{ subHeading5 }</p>
                    <div>
                        <TextGlow
                            name={ view }
                            link={ path5 }
                            text={ mainHeading5 }
                            click={ click }
                        />
                        <TextGlow
                            name="page-num"
                            link={ path5 }
                            text={ num5 }
                            click={ click }
                        />
                    </div>
                </div>
                <div className={ `toc-wrap ${ display6 }` }>
                    <p className="sub-heading-grey" text-glow={ subHeading6 }>{ subHeading6 }</p>
                    <div>
                        <TextGlow
                            name={ view }
                            link={ path6 }
                            text={ mainHeading6 }
                            click={ click }
                        />
                        <TextGlow
                            name="page-num"
                            link={ path6 }
                            text={ num6 }
                            click={ click }
                        />
                    </div>
                </div>
                <div className={ `toc-wrap ${ display7 }` }>
                    <p className="sub-heading-grey" text-glow={ subHeading7 }>{ subHeading7 }</p>
                    <div>
                        <TextGlow
                            name={ view }
                            link={ path7 }
                            text={ mainHeading7 }
                            click={ click }
                        />
                        <TextGlow
                            name="page-num"
                            link={ path7 }
                            text={ num7 }
                            click={ click }
                        />
                    </div>
                </div>
                <div className={ `toc-wrap ${ display8 }` }>
                    <p className="sub-heading-grey" text-glow={ subHeading8 }>{ subHeading8 }</p>
                    <div>
                        <TextGlow
                            name={ view }
                            link={ path8 }
                            text={ mainHeading8 }
                            click={ click }
                        />
                        <TextGlow
                            name="page-num"
                            link={ path8 }
                            text={ num8 }
                            click={ click }
                        />
                    </div>
                </div>
                <div className={ `toc-wrap ${ display9 }` }>
                    <p className="sub-heading-grey" text-glow={ subHeading9 }>{ subHeading9 }</p>
                    <div>
                        <TextGlow
                            name={ view }
                            link={ path9 }
                            text={ mainHeading9 }
                            click={ click }
                        />
                        <TextGlow
                            name="page-num"
                            link={ path9 }
                            text={ num9 }
                            click={ click }
                        />
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