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
                            text1="When creating our blogging page, we utilized Webflow's built in content management system (CMS) to create and display our blogs."
                        />
                        <List 
                            heading1="Content Management System" 
                            text1="Using custom fields, I added images, video, links and rich text inputs to display the blog content on the page." 
                            animation1={ inView2 ? "leap-in leap1" : ""}
                            
                            heading2="Design" 
                            text2="Using Webflow's drag and drop feature, I designed the page layout with text, image, and video and linked the CMS fields to these elements." 
                            animation2={ inView2 ? "leap-in leap2" : ""}
                            
                            display3="none"
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
                        <Paragraph 
                            animation={ inView3 ? "leap-in" : ""}
                            text1="After creating the page, I wanted to add some engaging animation effects."
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
                            text1="To make our subscription form and modal, I used a combination of Webflow's form elements and animations."
                        />
                        <List 
                            heading1="Form Elements" 
                            text1="To make the form, we only utilized the text input and submit button elements. When the form is submitted, the display values of the text changes to welcome the user." 
                            animation1={ inView4 ? "leap-in leap1" : ""}

                            heading2="Animations" 
                            text2='When opening and closing the modal, I utilized animations to display "block" and "none" to change the visibility during the beginning and end of the animation. I also translated Y position and changed the opacity.'
                            animation2={ inView4 ? "leap-in leap2" : ""}

                            display3="none" 
                        />
                    </article>
                    <VideoAutoplay
                        name="artifact-img-wrap img-right"
                        animation={ inView4 ? "blur-in" : ""}
                        link="https://www.dropbox.com/scl/fi/ljrosp79had7pt9k88uk1/Yipper-Form-720p-comp.mp4?rlkey=qgzkw6e7gtpdtqr1e3z3t2txn&st=1m47fn0s&raw=1"
                    />
                </div>
            </section>
            <section className={ `artifact-section ${ inView5 ? "" : "artifact-hide" }` }>
                <div className="artifact-wrap">
                    <VideoAutoplay
                        name="artifact-img-wrap img-left"
                        videoName="bumper"
                        animation={ inView5 ? "blur-in" : ""}
                        link="https://www.dropbox.com/scl/fi/6n7ofgfwvv7f084272giz/Yipper-Mockups-720p-comp.mp4?rlkey=xn6yxpdw5cfnjhv27r6ywcc7h&st=k4b9q02h&raw=1"
                    />
                    <article className="artifact-right right-md">
                        <SubHeading 
                            subHeading="Photoshop" 
                            mainHeading="Product Mockups" 
                            animation={ inView5 ? "scale-in" : ""}
                        />
                        <Paragraph 
                            animation={ inView5 ? "leap-in" : ""}
                            text1="Additionally, I was also tasked to create product mockups for our online store. I used open-source templates from Unsplash and created themed designs in Photoshop."
                        />
                        <List 
                            heading1="Design"
                            text1="The bucket hat template came with two zones: the brim and top. I created a wavy pattern using the pen tool and duplicated the pattern across the two zones. I then matched the seams together to make a cohesive design." 
                            animation1={ inView5 ? "leap-in leap1" : ""}

                            heading2="Blending" 
                            text2="Most of the templates provided lighting, shadow, and texture overlays. I feathered some layers to enhance these effects and also warped some designs (like the hoodie mockup) to bring out depth." 
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