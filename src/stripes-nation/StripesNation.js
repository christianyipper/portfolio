import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Footer from '../Footer';

const StripesNation = () => {
    const { ref: snap1, inView: inView1 } = useInView( { threshold: 0.5 } );
    const { ref: snap2, inView: inView2 } = useInView( { threshold: 0.5 } );
    const { ref: snap3, inView: inView3 } = useInView( { threshold: 0.5 } );
    const { ref: snap4, inView: inView4 } = useInView( { threshold: 0.5 } );
    const { ref: snap5, inView: inView5 } = useInView( { threshold: 0.5 } );
    const { ref: snap6, inView: inView6 } = useInView( { threshold: 0.5 } );
    const { ref: snap7, inView: inView7 } = useInView( { threshold: 0.5 } );

    useEffect( () => {
        document.body.classList.add("scroll-hide");
    
        return () => {
        document.body.classList.remove("scroll-hide");
        };
    }, 
    [] );
    
    return (
        <main className="artifact">
            <section className="scroll-wrap">
                <div className="scroll-section" ref={ snap1 }></div>
                <div id="LogoConcepts" className="scroll-section" ref={ snap2 }></div>
                <div id="LogoDevelopment" className="scroll-section" ref={ snap3 }></div>
                <div id="MarketingMockups" className="scroll-section" ref={ snap4 }></div>
                <div id="BumperVideo" className="scroll-section" ref={ snap5 }></div>
                <div id="BrandBook" className="scroll-section" ref={ snap6 }></div>
                <div className="footer-section" ref={ snap7 }>
                    <Footer />
                </div>
            </section>
            <section className={ `artifact-section artifact-home ${ inView1 ? `blur-in` : `blur-out` }` }>
                <div className="artifact-wrap">
                    <div className="artifact-left heading-col">
                        <h1 className={ `artifact-heading-float ${ inView1 ? `blur-in` : `blur-out` }` }>
                            <span text-glow="S">S</span>
                            <span text-glow="t">t</span>
                            <span text-glow="r">r</span>
                            <span text-glow="i">i</span>
                            <span text-glow="p">p</span>
                            <span text-glow="e">e</span>
                            <span text-glow="s">s</span>
                            <span className="space" text-glow="N">N</span>
                            <span text-glow="a">a</span>
                            <span text-glow="t">t</span>
                            <span text-glow="i">i</span>
                            <span text-glow="o">o</span>
                            <span text-glow="n">n</span>
                        </h1>
                        <h1 className={ `artifact-heading-shimmer ${ inView1 ? `blur-in` : `blur-out` }` } text-shimmer="Branding">Branding</h1>
                        <p>Stripes Nation redefines the way you see hockey by offering a fresh perspective through the eyes of officials. Stripes Nation boast a bold, photo-centric brand identity that perfectly complements its stunning website, featuring a captivating photo gallery.</p>
                        <p>I utilize my design skillset in Photoshop, Illustrator, Figma, and After Effects throughout this project. Join me as I embark on a journey to create Stripes Nation from the ground up.</p>
                    </div>
                    <div className={ `artifact-right ${ inView1 ? `blur-in` : `blur-out` }` }>
                        {/* <div className="artifact-img-wrap">
                            <img src="https://www.dropbox.com/scl/fi/bn53u2b1dqhyhtgo8tgpi/stripesnation-wordmark.png?rlkey=b5a1v40aiws5t4g962fki0l2x&st=e01aqlpf&raw=1" alt="" />
                        </div> */}
                        <h2 className="artifact-heading-shimmer" text-shimmer="Table of Contents">Table of Contents</h2>
                        <div className="toc">
                            <div className="toc-link">
                                <p className="sub-heading-grey" text-glow="Illustrator">Illustrator</p>
                                <div>
                                    <a href="#LogoConcepts">
                                        <h3 toc="Logo Concepts">Logo Concepts</h3>
                                    </a>
                                    <p className="page-num">2</p>
                                </div>
                            </div>
                            <div className="toc-link">
                                <p className="sub-heading-grey" text-glow="Illustrator">Illustrator</p>
                                <div>
                                    <a href="#LogoDevelopment">
                                        <h3 toc="Logo Dexelopment">Logo Development</h3>
                                    </a>
                                    <p className="page-num">3</p>
                                </div>
                            </div>
                            <div className="toc-link">
                                <p className="sub-heading-grey" text-glow="Photoshop">Photoshop</p>
                                <div>
                                    <a href="#MarketingMockups">
                                        <h3 toc="Marketing Mockups">Marketing Mockups</h3>
                                    </a>
                                    <p className="page-num">4</p>
                                </div>
                            </div>
                            <div className="toc-link">
                                <p className="sub-heading-grey" text-glow="After Effects">After Effects</p>
                                <div>
                                    <a href="#BumperVideo">
                                        <h3 toc="Bumper dixeo">Bumper Video</h3>
                                    </a>
                                    <p className="page-num">5</p>
                                </div>
                            </div>
                            <div className="toc-link">
                                <p className="sub-heading-grey" text-glow="Figma | Photoshop">Figma | Photoshop</p>
                                <div>
                                    <a href="#BrandBook">
                                        <h3 toc="Brand Book">Brand Book</h3>
                                    </a>
                                    <p className="page-num">6</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={ `artifact-section ${ inView2 ? `blur-in` : `blur-out` }` }>
                <div className={ `artifact-wrap ${ inView1 ? `hide` : `` }` }>
                    <article className="artifact-left">
                        <p className="sub-heading" text-glow="Illustrator">Illustrator</p>
                        <h2 className="artifact-heading-shimmer" text-shimmer="Logo Concepts">Logo Concepts</h2>
                        <p>When creating the Stripes Nation logo, it was important to incorporate elements from the hockey referee uniform and the sport into the design. There were three key aspects to consider:</p>
                        <ul>
                            <li><strong>Referee Armbands</strong>
                                <li>The eye-catching red armbands are unique to hockey officials and was imperative to include the striking colour into the design.</li>
                            </li>
                            <li><strong>Striped Uniform</strong>
                                <li>Undoubtedly the most iconic part of an officiating uniform are the black and white stripes. I wanted the design to reflect this predominant pattern throughout.</li>
                            </li>
                            <li><strong>Speed</strong>
                                <li>Designing a logo around the high-speed and intense action of the sport was important, as it plays an integral role in every game.</li>
                            </li>
                        </ul>
                    </article>
                    <div className="artifact-img-wrap img-sm-left">
                        <img src="https://www.dropbox.com/scl/fi/o45qn8dhp6h85jiwgc356/stripesnation-logo-primary.png?rlkey=art9ntknrjif9fwtwi8mvs88u&st=g7g4tp7l&raw=1" alt="Stripes Nation Logo" />
                        <p className="alt-text" text-glow="Design Concept 1">Design Concept 1</p>
                    </div>
                    <div className="artifact-img-wrap img-sm-right">
                        <img className="img-md" src="https://www.dropbox.com/scl/fi/5n2718wxnubjm258kgw7x/sn-draft-alt.png?rlkey=wslq49ry5g4uckisupqba0yxn&st=p8av3sdn&raw=1" alt="Stripes Nation Logo Concept" />
                        <p className="alt-text" text-glow="Design Concept 2">Design Concept 2</p>
                    </div>
                </div>
            </section>
            <section className={ `artifact-section ${ inView3 ? `blur-in` : `blur-out` }` }>
                <div className={ `artifact-wrap ${ inView1 ? `hide` : `` }` }>
                    <div className="artifact-img-wrap">
                        <video loop autoPlay muted>
                            <source src="https://www.dropbox.com/scl/fi/5ppn95cg0nzpdbeefw8fm/stripesnation-draft-1080p.mp4?rlkey=zftk8be37con1v5joy1dog55i&st=ezcj0qnt&raw=1"/>
                        </video>
                    </div>
                    <article className="artifact-right">
                        <p className="sub-heading" text-glow="Illustrator">Illustrator</p>
                        <h2 className="artifact-heading-shimmer" text-shimmer="Logo Development">Logo Development</h2>
                        <ul>
                            <li><strong>Pen & Shape Builder</strong>
                                <li>The shape builder and pen tools were used to create the aesthetic of the Stripes Nation logo and wordmark. Diagonal lines were used to create the outlines of the logo and were combined to create negative space between the shapes.</li>
                            </li>
                            <li><strong>Selection & Path Offset</strong>
                                <li>The wordmark name “Stripes Nation” was custom-made, based on the nausea font. Path offset and selection tools were used to match the angle and weight of the final logo while also changing some of the original typography landscape. Spacing between the individual characters, words, and logo were made consistent.</li>
                            </li>
                        </ul>
                    </article>
                </div>
            </section>
            <section className={ `artifact-section ${ inView4 ? `blur-in` : `blur-out` }` }>
                <div className={ `artifact-wrap ${ inView1 ? `hide` : `` }` }>
                    <article className="artifact-left">
                        <p className="sub-heading" text-glow="Photoshop">Photoshop</p>
                        <h2 className="artifact-heading-shimmer" text-shimmer="Marketing Mockups">Marketing Mockups</h2>
                        <p>After my brand assets were finalized, I exported them into Photoshop and started creating mockups with open-source templates to use as a foundation.</p>
                        <ul>
                            <li><strong>Warp & Feather</strong>
                                <li>I utilized a combination of warping and feathering to create a realistic landscape. This helped show depth in wrinkled clothing and rough textures.</li>
                            </li>
                            <li><strong>Masks & Blends</strong>
                                <li>Masking layers also helped create shadows and textures for objects and clothing. By changing blend modes, I was able to enhance the lighting effects in the scene. </li>
                            </li>
                        </ul>
                    </article>
                    <div className="artifact-img-wrap img-right">
                        <video loop autoPlay muted>
                            <source src="https://www.dropbox.com/scl/fi/px2nj5vdyjv79ukzr0y3z/StripesNation-Cards-1080p-comp.mp4?rlkey=5peprap5ifs5tuv4f4tea1a1r&st=2c97k3ay&raw=1"/>
                        </video>
                    </div>
                </div>
            </section>
            <section className={ `artifact-section ${ inView5 ? `blur-in` : `blur-out` }` }>
                <div className={ `artifact-wrap ${ inView1 ? `hide` : `` }` }>
                    <div className="artifact-img-wrap img-left bumper-wrap">
                        <video className="bumper" loop autoPlay muted>
                            <source src="https://www.dropbox.com/scl/fi/tky5ce4my00ba9ig7duxn/stripesnation-bumper-comp.mp4?rlkey=crxokuquu0j7a2gud57lzt5e3&st=9g4xgoqx&raw=1"/>
                        </video>                    </div>
                    <article className="artifact-right">
                        <p className="sub-heading" text-glow="After Effects">After Effects</p>
                        <h2 className="artifact-heading-shimmer" text-shimmer="Bumper Video">Bumper Video</h2>
                        <p>With an online presence at its forefront, I needed to create a bumper video that showcases the Stripes Performance brand.</p>
                        <ul>
                            <li><strong>Masking</strong>
                                <li>I predominantly used masks to animate the logo by hiding each stroke. The end result is a crispy line animation that reveals the logo.</li>
                            </li>
                            <li><strong>Timing Functions</strong>
                                <li>In contrast with the primary logo, I eased in the wordmark animations when sliding into frame. This adds a bit of variety and polish to the overall result.</li>
                            </li>
                        </ul>
                    </article>
                </div>
            </section>
            <section className={ `artifact-section ${ inView6 ? `blur-in` : `blur-out` }` }>
                <div className={ `artifact-wrap ${ inView1 ? `hide` : `` }` }>
                    <article className="artifact-left artifact-left-sm">
                        <p className="sub-heading" text-glow="Figma | Photoshop">Figma | Photoshop</p>
                        <h2 className="artifact-heading-shimmer" text-shimmer="Brand Book">Brand Book</h2>
                        <p>To wrap it all up, I designed the brand book pages in Figma using their intuitive organization systems.</p>
                        <ul>
                            <li><strong>Grids</strong>
                                <li>Figma's grid system made it easy to distribute information and create appealing layouts.</li>
                            </li>
                            <li><strong>Components & Variables</strong>
                                <li>In contrast with the primary logo, I eased in the wordmark animations when sliding into frame. This adds a bit of variety and polish to the overall result.</li>
                            </li>
                        </ul>
                    </article>
                    <div className="artifact-img-wrap img-right-lg">
                        <video loop autoPlay muted>
                            <source src="https://www.dropbox.com/scl/fi/uegla6jtusg5r4gsc58bu/stripesnation-brandbook-preview.mp4?rlkey=bhnyuwrvyd3uesj8z81o0hl49&st=latcu33b&raw=1"/>
                        </video>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default StripesNation