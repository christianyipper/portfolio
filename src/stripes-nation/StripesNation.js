import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Footer from '../Footer';
import TocLink from '../components/TocLink';
import List from '../components/List';
import TitleFloat from '../components/TitleFloat';
import TitleShimmer from '../components/TitleShimmer'
import HeadingFloat from '../components/HeadingFloat';
import HeadingShimmer from '../components/HeadingShimmer';
import SubHeading from '../components/SubHeading';


const StripesNation = () => {
    const { ref: snap1, inView: inView1 } = useInView( { threshold: 0.5 } );
    const { ref: snap2, inView: inView2 } = useInView( { threshold: 0.5 } );
    const { ref: snap3, inView: inView3 } = useInView( { threshold: 0.5 } );
    const { ref: snap4, inView: inView4 } = useInView( { threshold: 0.5 } );
    const { ref: snap5, inView: inView5 } = useInView( { threshold: 0.5 } );
    const { ref: snap6, inView: inView6 } = useInView( { threshold: 0.5 } );
    const { ref: snap7, inView: inView7 } = useInView( { threshold: 0.5 } );

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
                    <div className="artifact-left left-lg heading-col">
                        <TitleFloat 
                            animation={ `artifact-heading-float ${ inView1 ? `blur-in` : `blur-out` }` }
                            meta="Stripes Nation" 
                            a="S" b="t" c="r" d="i" e="p" f="e" g="s" spaceH="space" h="N" i="a" j="t" k="i" l="o" m="n"
                        />
                        <TitleShimmer 
                            animation={ inView1 ? `blur-in` : `blur-out` }
                            heading="- Branding"
                        />
                        <p>Stripes Nation redefines the way you see hockey by offering a fresh perspective through the eyes of officials. Stripes Nation boast a bold, photo-centric brand identity that perfectly complements its stunning website, featuring a captivating photo gallery.</p>
                        <p>I utilize my design skillset in Photoshop, Illustrator, Figma, and After Effects throughout this project. Join me as I embark on a journey to create Stripes Nation from the ground up.</p>
                    </div>
                    <div className={ `artifact-right right-sm ${ inView1 ? `blur-in` : `blur-out` }` }>
                        {/* <div className="artifact-img-wrap">
                            <img src="https://www.dropbox.com/scl/fi/bn53u2b1dqhyhtgo8tgpi/stripesnation-wordmark.png?rlkey=b5a1v40aiws5t4g962fki0l2x&st=e01aqlpf&raw=1" alt="" />
                        </div> */}
                        <HeadingShimmer heading="Table of Contents" />
                        <div className="toc">
                            {/* <TocLink view={ `toc ${ inView1 ? `pointer-show` : `pointer-hide` }` } subHeading="Illustrator" mainHeading="Logo Concepts" path="#LogoConcepts" num="2" />
                            <TocLink view={ `toc ${ inView1 ? `pointer-show` : `pointer-hide` }` } subHeading="Illustrator" mainHeading="Logo Development" path="#LogoDevelopment" num="3" />
                            <TocLink view={ `toc ${ inView1 ? `pointer-show` : `pointer-hide` }` } subHeading="Photoshop" mainHeading="Marketing Mockups" path="#MarketingMockups" num="4" />
                            <TocLink view={ `toc ${ inView1 ? `pointer-show` : `pointer-hide` }` } subHeading="After Effects" mainHeading="Bumper Video" path="#BumperVideo" num="5" />
                            <TocLink view={ `toc ${ inView1 ? `pointer-show` : `pointer-hide` }` } subHeading="Figma | Photoshop" mainHeading="Brand Book" path="#BrandBook" num="6" /> */}
                            {/* <TocLink subHeading="" mainHeading="" path="" num="" /> */}
                        </div>
                    </div>
                </div>
            </section>
            <section className={ `artifact-section ${ inView2 ? `blur-in` : `blur-out` }` }>
                <div className={ `artifact-wrap ${ inView1 ? `hide` : `` }` }>
                    <article className="artifact-left left-md">
                        <SubHeading 
                            subHeading="Illustrator" 
                            mainHeading="Logo Concepts"
                        />
                        <p>When creating the Stripes Nation logo, it was important to incorporate elements from the hockey referee uniform and the sport into the design. There were three key aspects to consider:</p>
                        <List 
                            heading1="Referee Armbands" 
                            text1="The eye-catching red armbands are unique to hockey officials and was imperative to include the striking colour into the design." 
                            heading2="Striped Uniform" 
                            text2="Undoubtedly the most iconic part of an officiating uniform are the black and white stripes. I wanted the design to reflect this predominant pattern throughout." 
                            heading3="Speed" 
                            text3="Designing a logo around the high-speed and intense action of the sport was important, as it plays an integral role in every game."
                        />
                    </article>
                    <div className="artifact-img-wrap img-left-sm">
                        <img src="https://www.dropbox.com/scl/fi/o45qn8dhp6h85jiwgc356/stripesnation-logo-primary.png?rlkey=art9ntknrjif9fwtwi8mvs88u&st=g7g4tp7l&raw=1" alt="Stripes Nation Logo" />
                        <p className="alt-text" text-glow="Design Concept 1">Design Concept 1</p>
                    </div>
                    <div className="artifact-img-wrap img-right-sm">
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
                    <article className="artifact-right right-md">
                        <SubHeading subHeading="Illustrator" mainHeading="Logo Development" />
                        <List 
                            heading1="Pen & Shape Builder" 
                            text1="The shape builder and pen tools were used to create the aesthetic of the Stripes Nation logo and wordmark. Diagonal lines were used to create the outlines of the logo and were combined to create negative space between the shapes." 
                            heading2="Selection & Path Offset" 
                            text2="The wordmark name “Stripes Nation” was custom-made, based on the nausea font. Path offset and selection tools were used to match the angle and weight of the final logo while also changing some of the original typography landscape. Spacing between the individual characters, words, and logo were made consistent." 
                            name3="none"
                        />
                    </article>
                </div>
            </section>
            <section className={ `artifact-section ${ inView4 ? `blur-in` : `blur-out` }` }>
                <div className={ `artifact-wrap ${ inView1 ? `hide` : `` }` }>
                    <article className="artifact-left left-md">
                        <SubHeading subHeading="Photoshop" mainHeading="Marketing Mockups" />
                        <p>After my brand assets were finalized, I exported them into Photoshop and started creating mockups with open-source templates to use as a foundation.</p>
                        <List 
                            heading1="Warp & Feather" 
                            text1="I utilized a combination of warping and feathering to create a realistic landscape. This helped show depth in wrinkled clothing and rough textures." 
                            heading2="Masks & Blends" 
                            text2="Masking layers also helped create shadows and textures for objects and clothing. By changing blend modes, I was able to enhance the lighting effects in the scene."
                            name3="none" 
                        />
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
                    <article className="artifact-right right-md">
                        <SubHeading subHeading="After Effects" mainHeading="Bumper Video" />
                        <p>With an online presence at its forefront, I needed to create a bumper video that showcases the Stripes Performance brand.</p>
                        <List 
                            heading1="Masking" 
                            text1="I predominantly used masks to animate the logo by hiding each stroke. The end result is a crispy line animation that reveals the logo." 
                            heading2="Timing Functions" 
                            text2="In contrast with the primary logo, I eased in the wordmark animations when sliding into frame. This adds a bit of variety and polish to the overall result." 
                            name3="none"
                        />
                    </article>
                </div>
            </section>
            <section className={ `artifact-section ${ inView6 ? `blur-in` : `blur-out` }` }>
                <div className={ `artifact-wrap ${ inView1 ? `hide` : `` }` }>
                    <article className="artifact-left left-sm">
                        <SubHeading subHeading="Figma | Photoshop" mainHeading="Brand Book" />
                        <p>To wrap it all up, I designed the brand book pages in Figma using their intuitive organization systems.</p>
                        <List 
                            heading1="Grids" 
                            text1="Figma's grid system made it easy to distribute information and create appealing layouts." 
                            heading2="Components & Variables" 
                            text2="In contrast with the primary logo, I eased in the wordmark animations when sliding into frame. This adds a bit of variety and polish to the overall result." 
                            name3="none"
                        />
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