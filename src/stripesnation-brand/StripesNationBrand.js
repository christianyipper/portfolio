import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useRef } from 'react';
import { Helmet } from "react-helmet-async";

import Footer from '../components/Footer';
import TableOfContents from '../components/TableOfContents';
import List from '../components/List';
import Paragraph from '../components/text/Paragraph';
import TitleFloat from '../components/text/TitleFloat';
import TitleShimmer from '../components/text/TitleShimmer'
import HeadingFloat from '../components/text/HeadingFloat';
import HeadingShimmer from '../components/text/HeadingShimmer';
import SubHeading from '../components/text/SubHeading';
import Button from '../components/text/Button';

import VideoAutoplay from '../components/VideoAutoplay';
import Image from '../components/Image';
import ScrollDown from '../components/ScrollDown';
import ScrollSnap from '../components/ScrollSnap';

const StripesNationBrand = () => {
    const { ref: snap1, inView: inView1 } = useInView( { threshold: 0.5 } );
    const { ref: snap2, inView: inView2 } = useInView( { threshold: 0.5 } );
    const { ref: snap3, inView: inView3 } = useInView( { threshold: 0.5 } );
    const { ref: snap4, inView: inView4 } = useInView( { threshold: 0.5 } );
    const { ref: snap5, inView: inView5 } = useInView( { threshold: 0.5 } );
    const { ref: snap6, inView: inView6 } = useInView( { threshold: 0.5 } );
    const { ref: snap7, inView: inView7 } = useInView( { threshold: 0.5 } );
    const { ref: snap8, inView: inView8 } = useInView( { threshold: 0.5 } );

    const [isActive, setIsActive] = useState(false);
    const homeView = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setIsActive(true);
            } else {
            setIsActive(false);
            }
        },
        { threshold: 0.5 } 
        );

        if (homeView.current) {
        observer.observe(homeView.current);
        }

        return () => {
        if (homeView.current) {
            observer.unobserve(homeView.current);
            }
        };
    }, []);

    const tocClick = () => {
        setIsActive(!isActive);
    };

    return (
        <main className="artifact">
            <ScrollSnap
                id1=""
                reference1={ snap1 }
                display1="scroll-show"
                homeView={ homeView }

                id2="LogoConcepts"
                reference2={ snap2 }
                display2="scroll-show"

                id3="LogoDevelopment"
                reference3={ snap3 }
                display3="scroll-show"

                id4="MarketingMockups"
                reference4={ snap4 }
                display4="scroll-show"

                id5="BumperVideo"
                reference5={ snap5 }
                display5="scroll-show"

                id6="BrandBook"
                reference6={ snap6 }
                display6="scroll-show"
                
                id7="LandingPage"
                reference7={ snap7 }
                display7="scroll-show"

                // id8="UIElements"
                // reference8={ snap8 }
                // display8="scroll-show"
            />
            <section className="artifact-section artifact-home">
                <div className="artifact-wrap">
                    <article className={ `artifact-left left-lg heading-col ${ inView1 ? "blur-in" : "blur-out" }` }>
                        <TitleFloat 
                            animation={ `artifact-title-float ${ inView1 ? "blur-in" : "blur-out" }` }
                            meta="Stripes Nation" 
                            a="S" b="t" c="r" d="i" e="p" f="e" g="s" spaceH="space" h="N" i="a" j="t" k="i" l="o" m="n"
                        />
                        <List 
                            heading1="The Problem"
                            text1="Stripes Nation caters to a niche audience of hockey referees. We wanted a brand that represents on-ice officials and the fast-paced nature of the sport."
                            animation1={ inView2 ? "leap-in leap1" : ""}

                            heading2="Our Solution" 
                            text2="Stripes Nation aims to incorporate elements from the referee uniform and the sport into the brand's core identity. We worked to showcase all these elements through out the design process, from the logo to the website's design."
                            animation2={ inView2 ? "leap-in leap2" : ""}

                            display3="none"
                        />
                        {/* <div className="button-wrap">
                            <Button
                                text="Figma Wireframes"
                                link="https://www.figma.com/design/6LsIArquwlc7r4zUHBu6n7/Blend-It.?node-id=90-2&t=9MePM4UXKJn6Lf4Y-1"
                                target="_blank"
                            />
                        </div> */}
                        <p className="author"><b>Created by:</b> Christian Yip</p>
                        {/* <Paragraph 
                            animation={ inView1 ? "leap-in" : ""}
                            text1="Stripes Nation redefines the way you see hockey by offering a fresh perspective through the eyes of officials. Stripes Nation boast a bold, photo-centric brand identity that perfectly complements its stunning website, featuring a captivating photo gallery."
                        />
                        <Paragraph 
                            animation={ inView1 ? "leap-in leap1" : ""}
                            text1="I utilize my design skillset in Photoshop, Illustrator, Figma, and After Effects throughout this project. Join me as I embark on a journey to create Stripes Nation from the ground up."
                        /> */}
                    </article>
                    <div className="artifact-right right-sm">
                        <TableOfContents
                            menu={ isActive ? "toc-show" : "toc-hide" }
                            click={ tocClick }
                            view={ isActive ? "pointer-show" : "pointer-hide" }

                            // toggle burger visibility
                            // animation={ inView7 ? "opacity-0" : "opacity-100"}

                            subHeading1="Illustrator"
                            mainHeading1="Logo Concepts"
                            path1="#LogoConcepts"
                            num1="1"
                            display1="toc-display"

                            subHeading2="Illustrator"
                            mainHeading2="Logo Development"
                            path2="#LogoDevelopment"
                            num2="2"
                            display2="toc-display"

                            subHeading3="Photoshop"
                            mainHeading3="Marketing Mockups"
                            path3="#MarketingMockups"
                            num3="3"
                            display3="toc-display"

                            subHeading4="After Effects"
                            mainHeading4="Bumper Video"
                            path4="#BumperVideo"
                            num4="4"
                            display4="toc-display"

                            subHeading5="Figma | Photoshop"
                            mainHeading5="Brand Book"
                            path5="#BrandBook"
                            num5="5"
                            display5="toc-display"

                            // subHeading6="React | Sass | After Effects"
                            // mainHeading6="Landing Page"
                            // path6="#LandingPage"
                            // num6="6"
                            // display6="toc-display"

                            // subHeading7="React | Sass"
                            // mainHeading7="UI Elements"
                            // path7="#UIElements"
                            // num7="7"
                            // display7="toc-display"
                        />
                    </div>
                    <ScrollDown
                        // toggle burger visibility
                        animation={ inView7 ? "opacity-0" : "opacity-100"}

                        heading1="Next - Logo Concepts"
                        link1="#LogoConcepts"
                        animation1={ inView1 ? "opacity-100" : "opacity-0"}

                        heading2="Next - Logo Development"
                        link2="#LogoDevelopment"
                        animation2={ inView2 ? "opacity-100" : "opacity-0"}

                        heading3="Next - Marketing Mockups"
                        link3="#MarketingMockups"
                        animation3={ inView3 ? "opacity-100" : "opacity-0"}

                        heading4="Next - Bumper Video"
                        link4="#BumperVideo"
                        animation4={ inView4 ? "opacity-100" : "opacity-0"}

                        heading5="Next - Brand Book"
                        link5="#BrandBook"
                        animation5={ inView5 ? "opacity-100" : "opacity-0"}
                        
                        heading6="Next - Reach Out"
                        link6="#LandingPage"
                        animation6={ inView6 ? "opacity-100" : "opacity-0"}

                        // heading7="Next - UI Elements"
                        // link7="#UIElements"
                        // animation7={ inView7 ? "opacity-100" : "opacity-0"}
                    />
                </div>
            </section>
            <section className={ `artifact-section ${ inView2 ? "" : "artifact-hide" }` }>
                <div className="artifact-wrap">
                    <article className="artifact-left left-md">
                        <SubHeading 
                            subHeading="Illustrator" 
                            mainHeading="Logo Concepts"
                            animation={ inView2 ? "scale-in" : ""}
                        />
                        <Paragraph 
                            animation={ inView2 ? "leap-in" : ""}
                            text1="When creating the Stripes Nation logo, it was important to incorporate elements from the hockey referee uniform and the sport into the design. There were three key aspects to consider:"
                        />
                        <List 
                            heading1="Referee Armbands" 
                            text1="The eye-catching red armbands are unique to hockey officials and was imperative to include the striking colour into the design." 
                            animation1={ inView2 ? "leap-in leap1" : ""}
                            
                            heading2="Striped Uniform" 
                            text2="Undoubtedly the most iconic part of an officiating uniform are the black and white stripes. I wanted the design to reflect this predominant pattern throughout." 
                            animation2={ inView2 ? "leap-in leap2" : ""}
                            
                            heading3="Speed" 
                            text3="Designing a logo around the high-speed and intense action of the sport was important, as it plays an integral role in every game."
                            animation3={ inView2 ? "leap-in leap3" : ""}
                        />
                    </article>
                    <Image
                        name="artifact-img-wrap img-left-sm"
                        animation={ inView2 ? "blur-in" : ""}

                        link="https://www.dropbox.com/scl/fi/o45qn8dhp6h85jiwgc356/stripesnation-logo-primary.png?rlkey=art9ntknrjif9fwtwi8mvs88u&st=g7g4tp7l&raw=1"
                        description="Stripes Nation Logo"

                        textName="alt-text"
                        text="Design Concept 1"
                    />
                    <Image
                        name="artifact-img-wrap img-right-sm"
                        animation={ inView2 ? "blur-in" : ""}

                        imgName="img-md"
                        link="https://www.dropbox.com/scl/fi/5n2718wxnubjm258kgw7x/sn-draft-alt.png?rlkey=wslq49ry5g4uckisupqba0yxn&st=p8av3sdn&raw=1"
                        description="Stripes Nation Logo Concept"

                        textName="alt-text"
                        text="Design Concept 2"
                    />
                </div>
            </section>
            <section className={ `artifact-section ${ inView3 ? "" : "artifact-hide" }` }>
                <div className="artifact-wrap">
                    <VideoAutoplay
                        name="artifact-img-wrap"
                        animation={ inView3 ? "blur-in" : ""}
                        link="https://www.dropbox.com/scl/fi/5ppn95cg0nzpdbeefw8fm/stripesnation-draft-1080p.mp4?rlkey=zftk8be37con1v5joy1dog55i&st=ezcj0qnt&raw=1"
                    />
                    <article className="artifact-right right-md">
                        <SubHeading 
                            subHeading="Illustrator" 
                            mainHeading="Logo Development"
                            animation={ inView3 ? "scale-in" : ""}
                        />
                        <List 
                        
                            heading1="Pen & Shape Builder" 
                            text1="The shape builder and pen tools were used to create the aesthetic of the Stripes Nation logo and wordmark. Diagonal lines were used to create the outlines of the logo and were combined to create negative space between the shapes." 
                            animation1={ inView3 ? "leap-in leap1" : ""}
                            
                            heading2="Selection & Path Offset" 
                            text2="The wordmark name “Stripes Nation” was custom-made, based on the nausea font. Path offset and selection tools were used to match the angle and weight of the final logo while also changing some of the original typography landscape. Spacing between the individual characters, words, and logo were made consistent." 
                            animation2={ inView3 ? "leap-in leap2" : ""}
                            
                            display3="none"
                        />
                    </article>
                </div>
            </section>
            <section className={ `artifact-section ${ inView4 ? "" : "artifact-hide" }` }>
                <div className="artifact-wrap">
                    <article className="artifact-left left-md">
                        <SubHeading 
                            subHeading="Photoshop" 
                            mainHeading="Marketing Mockups" 
                            animation={ inView4 ? "scale-in" : ""}
                        />
                        <Paragraph 
                            animation={ inView4 ? "leap-in" : ""}
                            text1="After my brand assets were finalized, I exported them into Photoshop and started creating mockups with open-source templates to use as a foundation."
                        />
                        <List 
                            heading1="Warp & Feather" 
                            text1="I utilized a combination of warping and feathering to create a realistic landscape. This helped show depth in wrinkled clothing and rough textures." 
                            animation1={ inView4 ? "leap-in leap1" : ""}

                            heading2="Masks & Blends" 
                            text2="Masking layers also helped create shadows and textures for objects and clothing. By changing blend modes, I was able to enhance the lighting effects in the scene."
                            animation2={ inView4 ? "leap-in leap2" : ""}

                            display3="none" 
                        />
                    </article>
                    <VideoAutoplay
                        name="artifact-img-wrap img-right"
                        animation={ inView4 ? "blur-in" : ""}
                        link="https://www.dropbox.com/scl/fi/px2nj5vdyjv79ukzr0y3z/StripesNation-Cards-1080p-comp.mp4?rlkey=5peprap5ifs5tuv4f4tea1a1r&st=2c97k3ay&raw=1"
                    />
                </div>
            </section>
            <section className={ `artifact-section ${ inView5 ? "" : "artifact-hide" }` }>
                <div className="artifact-wrap">
                    <VideoAutoplay
                        name="artifact-img-wrap img-left bumper-wrap"
                        videoName="bumper"
                        animation={ inView5 ? "blur-in" : ""}
                        link="https://www.dropbox.com/scl/fi/tky5ce4my00ba9ig7duxn/stripesnation-bumper-comp.mp4?rlkey=crxokuquu0j7a2gud57lzt5e3&st=9g4xgoqx&raw=1"
                    />
                    <article className="artifact-right right-md">
                        <SubHeading 
                            subHeading="After Effects" 
                            mainHeading="Bumper Video" 
                            animation={ inView5 ? "scale-in" : ""}
                        />
                        <Paragraph 
                            animation={ inView5 ? "leap-in" : ""}
                            text1="With an online presence at its forefront, I needed to create a bumper video that showcases the Stripes Performance brand."
                        />
                        <List 
                            heading1="Masking"
                            text1="I predominantly used masks to animate the logo by hiding each stroke. The end result is a crispy line animation that reveals the logo." 
                            animation1={ inView5 ? "leap-in leap1" : ""}

                            heading2="Timing Functions" 
                            text2="In contrast with the primary logo, I eased in the wordmark animations when sliding into frame. This adds a bit of variety and polish to the overall result." 
                            animation2={ inView5 ? "leap-in leap2" : ""}

                            display3="none"
                        />
                    </article>
                </div>
            </section>
            <section className={ `artifact-section ${ inView6 ? "" : "artifact-hide" }` }>
                <div className="artifact-wrap">
                    <article className="artifact-left left-sm">
                        <SubHeading 
                            subHeading="Figma | Photoshop" 
                            mainHeading="Brand Book" 
                            animation={ inView6 ? "scale-in" : ""}
                        />
                        <Paragraph 
                            animation={ inView6 ? "leap-in" : ""}
                            text1="To wrap it all up, I designed the brand book pages in Figma using their intuitive organization systems."
                        />
                        <List 
                            heading1="Grids" 
                            text1="Figma's grid system made it easy to distribute information and create appealing layouts." 
                            animation1={ inView6 ? "leap-in leap1" : ""}

                            heading2="Components & Variables" 
                            text2="In contrast with the primary logo, I eased in the wordmark animations when sliding into frame. This adds a bit of variety and polish to the overall result." 
                            animation2={ inView6 ? "leap-in leap2" : ""}

                            display3="none"
                        />
                    </article>
                    <VideoAutoplay
                        name="artifact-img-wrap img-right-lg"
                        animation={ inView6 ? "blur-in" : ""}
                        link="https://www.dropbox.com/scl/fi/uegla6jtusg5r4gsc58bu/stripesnation-brandbook-preview.mp4?rlkey=bhnyuwrvyd3uesj8z81o0hl49&st=latcu33b&raw=1"
                    />
                </div>
            </section>
            <section className={ `artifact-section ${ inView7 ? "" : "artifact-hide" }` }>
                <Footer/>
            </section>
            {/* <section className={ `artifact-section ${ inView7 ? "" : "artifact-hide" }` }>
                <div className="artifact-wrap">
                    <VideoAutoplay
                        name="artifact-img-wrap img-left"
                        videoName="bumper"
                        animation={ inView7 ? "blur-in" : ""}
                        link="https://www.dropbox.com/scl/fi/wav9i59vxwpb9m78yqbqn/sn-website-load.mp4?rlkey=xh72ews8ufx4z13t82n601yhq&st=o9xrbv0u&raw=1"
                    />
                    <article className="artifact-right right-md">
                        <SubHeading 
                            subHeading="React | Sass | After Effects" 
                            mainHeading="Landing Page" 
                            animation={ inView7 ? "scale-in" : ""}
                        />
                        <Paragraph 
                            animation={ inView7 ? "leap-in" : ""}
                            text1="The pinacle of the Stripes Nation website is to tell stories through imagery. The landing page was created with a photo-centric approach."
                        />
                        <List 
                            heading1="Jersey Animation"
                            text1="With a combination of photoshop editing and After Effects, I was able to animate the jersey to simulate it waving in the wind. I wanted to add a sense of realism and immersiveness to the design." 
                            animation1={ inView7 ? "leap-in leap1" : ""}

                            heading2="Parallax" 
                            text2="After separating the layers within the photo, I used transform properties to ease in these separated layers to simulate a parallax effect. When the page renders, the layers fade in and slide into frame." 
                            animation2={ inView7 ? "leap-in leap2" : ""}

                            display3="none"
                        />
                    </article>
                </div>
            </section> */}
            {/* <section className={ `artifact-section ${ inView8 ? "" : "artifact-hide" }` }>
                <div className="artifact-wrap">
                    <article className="artifact-left left-sm">
                        <SubHeading 
                            subHeading="React | Sass" 
                            mainHeading="UI Elements" 
                            animation={ inView8 ? "scale-in" : ""}
                        />
                        <Paragraph 
                            animation={ inView8 ? "leap-in" : ""}
                            text1="With the navigation and footer icons, I wanted to create a design that reflects the Stripes Nation brand while also adding elements that resemble photography."
                        />
                        <List 
                            heading1="Icon Design" 
                            text1="I deliberately incoporated a bordered version of the logos and icons created in illustrator. The logos and social media icons were created with a solid slanted border to reflect the speed of the sport. The heading borders were created in Sass using transform properties to skew and rotate the lines to reflect the viewfinder of a camera." 
                            animation1={ inView8 ? "leap-in leap1" : ""}

                            heading2="Interactivity" 
                            text2="I used scale and opacity properties to create the hover effect by showing and hiding the overlapping elements." 
                            animation2={ inView8 ? "leap-in leap2" : ""}

                            display3="none"
                        />
                    </article>
                    <VideoAutoplay
                        name="artifact-img-wrap img-right-lg"
                        animation={ inView8 ? "blur-in" : ""}
                        link="https://www.dropbox.com/scl/fi/560jrffj3r8jchlmiex63/sn-website-hover.mp4?rlkey=rxqekysgu2gbt7decezwcm5ki&st=aliqmild&raw=1"
                    />
                </div>
            </section> */}
        </main>
    )
}

export default StripesNationBrand