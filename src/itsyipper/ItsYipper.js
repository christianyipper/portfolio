import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useRef } from 'react';
import Footer from '../Footer';
import TableOfContents from '../components/TableOfContents';
import List from '../components/List';
import Paragraph from '../components/text/Paragraph';
import TitleFloat from '../components/text/TitleFloat';
import TitleShimmer from '../components/text/TitleShimmer'
import HeadingFloat from '../components/text/HeadingFloat';
import HeadingShimmer from '../components/text/HeadingShimmer';
import SubHeading from '../components/text/SubHeading';
import VideoAutoplay from '../components/VideoAutoplay';
import Image from '../components/Image';
import ScrollDown from '../components/ScrollDown';
import ScrollSnap from '../components/ScrollSnap';

const ItsYipper = () => {
    const { ref: snap1, inView: inView1 } = useInView( { threshold: 0.5 } );
    const { ref: snap2, inView: inView2 } = useInView( { threshold: 0.5 } );
    const { ref: snap3, inView: inView3 } = useInView( { threshold: 0.5 } );
    const { ref: snap4, inView: inView4 } = useInView( { threshold: 0.5 } );
    const { ref: snap5, inView: inView5 } = useInView( { threshold: 0.5 } );
    const { ref: snap6, inView: inView6 } = useInView( { threshold: 0.5 } );
    const { ref: snap7, inView: inView7 } = useInView( { threshold: 0.5 } );

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

                id2="CmsItems"
                reference2={ snap2 }
                display2="scroll-show"

                id3="Animations"
                reference3={ snap3 }
                display3="scroll-show"

                id4="Forms"
                reference4={ snap4 }
                display4="scroll-show"

                id5="ProductMockups"
                reference5={ snap5 }
                display5="scroll-show"
                
                id6="Footer"
                reference6={ snap6 }
                display6="scroll-show"
            />
            <section className="artifact-section artifact-home">
                <div className="artifact-wrap">
                    <article className={ `artifact-left left-lg heading-col ${ inView1 ? "blur-in" : "blur-out" }` }>
                        <TitleFloat 
                            animation={ `artifact-heading-float ${ inView1 ? "blur-in" : "blur-out" }` }
                            meta="ItsYipper" 
                            a="I" b="t" c="s" d="Y" e="i" f="p" g="p" h="e" i="r"
                        />
                        <HeadingShimmer 
                            animation={ inView1 ? "blur-in" : "blur-out" }
                            heading="Front End"
                        />
                        <Paragraph 
                            animation={ inView1 ? "leap-in" : ""}
                            text1="Stripes Nation redefines the way you see hockey by offering a fresh perspective through the eyes of officials. Stripes Nation boast a bold, photo-centric brand identity that perfectly complements its stunning website, featuring a captivating photo gallery."
                        />
                        <Paragraph 
                            animation={ inView1 ? "leap-in leap1" : ""}
                            text1="I utilize my design skillset in Photoshop, Illustrator, Figma, and After Effects throughout this project. Join me as I embark on a journey to create Stripes Nation from the ground up."
                        />
                    </article>
                    <div className="artifact-right right-sm">
                        <TableOfContents
                            menu={ isActive ? "toc-show" : "toc-hide" }
                            click={ tocClick }
                            view={ isActive ? "pointer-show" : "pointer-hide" }
                            animation={ inView7 ? "opacity-0" : "opacity-100"}

                            subHeading1="Webflow"
                            mainHeading1="CMS Items"
                            path1="#CmsItems"
                            num1="1"
                            display1="toc-display"

                            subHeading2="Webflow | Illustrator"
                            mainHeading2="Animations"
                            path2="#Animations"
                            num2="2"
                            display2="toc-display"

                            subHeading3="Webflow"
                            mainHeading3="Forms"
                            path3="#Forms"
                            num3="3"
                            display3="toc-display"

                            subHeading4="Photoshop"
                            mainHeading4="Product Mockups"
                            path4="#ProductMockups"
                            num4="4"
                            display4="toc-display"
                        />
                    </div>
                    <ScrollDown
                        animation={ inView6 ? "opacity-0" : "opacity-100"}

                        heading1="Next - CMS Items"
                        link1="#CmsItems"
                        animation1={ inView1 ? "opacity-100" : "opacity-0"}

                        heading2="Next - Animations"
                        link2="#Animation"
                        animation2={ inView2 ? "opacity-100" : "opacity-0"}

                        heading3="Next - Forms"
                        link3="#Forms"
                        animation3={ inView3 ? "opacity-100" : "opacity-0"}

                        heading4="Next - Product Mockups"
                        link4="#ProductMockups"
                        animation4={ inView4 ? "opacity-100" : "opacity-0"}

                        heading5="Next - More Projects"
                        link5="#Footer"
                        animation5={ inView5 ? "opacity-100" : "opacity-0"}
                    />
                </div>
            </section>
            <section className={ `artifact-section ${ inView2 ? "" : "artifact-hide" }` }>
                <div className="artifact-wrap">
                    <article className="artifact-left left-sm">
                        <SubHeading 
                            subHeading="Webflow" 
                            mainHeading="CMS Items"
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
                    <div className="right-lg space-between">
                        <VideoAutoplay
                            name="artifact-img-wrap video-cms-backend"
                            animation={ inView2 ? "blur-in" : ""}
                            link="https://www.dropbox.com/scl/fi/fu24uqkco8viszdp83uod/ItsYipper-cms-backend-1080p-comp.mp4?rlkey=epycs1mwklki46c0czid0hre3&st=42q9kmxo&raw=1"
                        />
                        <VideoAutoplay
                            name="artifact-img-wrap video-cms-layout"
                            animation={ inView2 ? "blur-in" : ""}
                            link="https://www.dropbox.com/scl/fi/2bqedy9zsre4uysvozrma/itsYipper-cms-layout-comp.mp4?rlkey=9bhmw5yvfx6hljadoqp8jwf3l&st=5wutd0fl&raw=1"
                        />
                    </div>
                </div>
            </section>
            <section className={ `artifact-section ${ inView3 ? "" : "artifact-hide" }` }>
                <div className="artifact-wrap">
                    <VideoAutoplay
                        name="artifact-img-wrap img-left"
                        animation={ inView3 ? "blur-in" : ""}
                        link="https://www.dropbox.com/scl/fi/ex7r9640fmtarva9sjava/Yipper-Card-Animation-1080p-comp.mp4?rlkey=l79tdljwtsw078gn14iuw02q5&st=9xvw8c65&raw=1"
                    />
                    <article className="artifact-right right-md">
                        <SubHeading 
                            subHeading="Webflow | Illustrator" 
                            mainHeading="Animations"
                            animation={ inView3 ? "scale-in" : ""}
                        />
                        <List 
                        
                            heading1="Hover Effect" 
                            text1="I used a combination of actions to trigger on hover in and out. I resized the overlay to cover the card while also scaling the background image to add a zooming effect. Additionally, I changed the text and border colour to the secondary and accent colours." 
                            animation1={ inView3 ? "leap-in leap1" : ""}
                            
                            heading2="Page Effect" 
                            text2='I created my own blinking eye "gif" using graphics from Illustrator and an infinite looping animation. I changed opacity of different layers to show and hide them, creating a "blinking" eye effect.' 
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
                            subHeading="Webflow" 
                            mainHeading="Forms" 
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
                            subHeading="Photoshop" 
                            mainHeading="Product Mockups" 
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
                            animation={ inView5 ? "scale-in" : ""}
                        />
                    </article>
                </div>
                <Footer/>
            </section>
        </main>
    )
}

export default ItsYipper