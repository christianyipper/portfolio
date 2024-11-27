import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useRef } from 'react';

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

import SvgPhotoshop from '../components/svg/SvgPhotoshop';
import SvgWebflow from '../components/svg/SvgWebflow';
import SvgIllustrator from '../components/svg/SvgIllustrator';
import SvgAfterEffects from '../components/svg/SvgAfterEffects';
import SvgFigma from '../components/svg/SvgFigma';
import SvgHtml from '../components/svg/SvgHtml';
import SvgCss from '../components/svg/SvgCss';
import SvgJs from '../components/svg/SvgJs';


const SonicAnimation = () => {
    const { ref: snap1, inView: inView1 } = useInView( { threshold: 0.5 } );
    const { ref: snap2, inView: inView2 } = useInView( { threshold: 0.5 } );
    const { ref: snap3, inView: inView3 } = useInView( { threshold: 0.5 } );
    const { ref: snap4, inView: inView4 } = useInView( { threshold: 0.5 } );
    const { ref: snap5, inView: inView5 } = useInView( { threshold: 0.5 } );

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

                id2="LandingPage"
                reference2={ snap2 }
                display2="scroll-show"

                id3="ContactPage"
                reference3={ snap3 }
                display3="scroll-show"

                id4="UIelements"
                reference4={ snap4 }
                display4="scroll-show"

                id5="Footer"
                reference5={ snap5 }
                display5="scroll-show"
            />
            <section className="artifact-section artifact-home">
                <div className="artifact-wrap">
                    <article className={ `artifact-left left-lg heading-col ${ inView1 ? "blur-in" : "blur-out" }` }>
                        <TitleFloat 
                            animation={ `artifact-heading-float ${ inView1 ? "blur-in" : "blur-out" }` }
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
                        <div className="button-wrap">
                            <Button
                                text="Github"
                                link="https://github.com/christianyipper/stripesnation.git"
                                target="_blank"
                            />
                            <Button
                                text="Website"
                                link="https://www.stripesnation.com"
                                target="_blank"
                            />
                        </div>
                        <p className="author"><b>Created by:</b> Christian Yip</p>
                    </article>
                    <div className="artifact-right right-sm">
                        <TableOfContents
                            menu={ isActive ? "toc-show" : "toc-hide" }
                            click={ tocClick }
                            view={ isActive ? "pointer-show" : "pointer-hide" }

                            subHeading1="Photoshop | After Effects | Sass"
                            mainHeading1="Parallax Hero"
                            path1="#LandingPage"
                            num1="1"
                            display1="toc-display"

                            subHeading2="Sass"
                            mainHeading2="Image Masking"
                            path2="#ContactPage"
                            num2="2"
                            display2="toc-display"

                            subHeading3="Sass"
                            mainHeading3="Hover Effects"
                            path3="#UIelements"
                            num3="3"
                            display3="toc-display"
                        />
                    </div>
                    <ScrollDown
                        animation={ inView5 ? "opacity-0" : "opacity-100"}

                        heading1="Next - Parallax Hero"
                        link1="#LandingPage"
                        animation1={ inView1 ? "opacity-100" : "opacity-0"}

                        heading2="Next - Image Masking"
                        link2="#ContactPage"
                        animation2={ inView2 ? "opacity-100" : "opacity-0"}

                        heading3="Next - Hover Effects"
                        link3="#UIelements"
                        animation3={ inView3 ? "opacity-100" : "opacity-0"}

                        heading4="Next - Reach Out"
                        link4="#UIelements"
                        animation4={ inView4 ? "opacity-100" : "opacity-0"}
                    />
                </div>
            </section>
            <section className={ `artifact-section ${ inView2 ? "" : "artifact-hide" }` }>
                <div className="artifact-wrap">
                    <VideoAutoplay
                        name="artifact-img-wrap img-left"
                        videoName="bumper"
                        animation={ inView2 ? "blur-in" : ""}
                        link="https://www.dropbox.com/scl/fi/wav9i59vxwpb9m78yqbqn/sn-website-load.mp4?rlkey=xh72ews8ufx4z13t82n601yhq&st=o9xrbv0u&raw=1"
                    />
                    <article className="artifact-right right-md">
                        <SubHeading 
                            subHeading="Photoshop | After Effects | Sass" 
                            mainHeading="Parallax Hero" 
                            animation={ inView2 ? "scale-in" : ""}
                        />
                        <List 
                            heading1="Jersey Editing"
                            text1={`Using Photoshop's generative fill and repair brush, I removed the original name and number on the jersey. Then, I used cloth textures to overlay the logo and "stripes" text to match the jersey's material. Finally, I warped these assets to conform to the jersey and added shadows.`}
                            animation1={ inView2 ? "leap-in leap1" : ""}

                            heading2="Jersey Animation" 
                            text2="Using the distort effects in After Effects, I was able to animate the jersey to simulate it waving in the wind. I wanted to add a sense of realism and immersiveness to the design. I exported this as a GIF which overlays the static image of the referee underneath." 
                            animation2={ inView2 ? "leap-in leap2" : ""}

                            heading3="Parallax"
                            text3="After separating the layers within the photo, I used transform properties to ease in these separated layers to simulate a parallax effect. When the page renders, the layers fade in and slide into frame."
                            animation3={ inView2 ? "leap-in leap3" : ""}
                        />
                    </article>
                </div>
            </section>
            <section className={ `artifact-section ${ inView3 ? "" : "artifact-hide" }` }>
                <div className="artifact-wrap">
                    <article className="artifact-left left-md">
                        <SubHeading 
                            subHeading="Sass" 
                            mainHeading="Image Masking" 
                            animation={ inView3 ? "scale-in" : ""}
                        />
                        {/* <Paragraph 
                            animation={ inView3 ? "leap-in" : ""}
                            text1="With the navigation and footer icons, I wanted to create a design that reflects the Stripes Nation brand while also adding elements that resemble photography."
                        /> */}
                        <List 
                            heading1="Stop Motion Mask" 
                            text1="To create this masking effect, I used a black & white image with several frames which depicts a stop motion animation. When the mask moves from left to right, the image slowly appears in the empty space of the mask." 
                            animation1={ inView3 ? "leap-in leap1" : ""}

                            heading2="Animation Steps" 
                            text2="I used scale and opacity properties to create the hover effect by showing and hiding the overlapping elements." 
                            animation2={ inView3 ? "leap-in leap2" : ""}

                            display3="none"
                        />
                    </article>
                    <VideoAutoplay
                        name="artifact-img-wrap img-right mask-animation-video"
                        animation={ inView3 ? "blur-in" : ""}
                        link="https://www.dropbox.com/scl/fi/5tyy4k5oe61hp1vjhod7a/sn-website-contact.mp4?rlkey=y2915uo19rk9vj1y9leyj0ojt&st=026l4psp&raw=1"
                    />
                    <VideoAutoplay
                        name="artifact-img-wrap img-right"
                        animation={ inView3 ? "blur-in" : ""}
                        link="https://www.dropbox.com/scl/fi/4bjm2ks1gd69sva7bvzak/ink-mask-animation.mp4?rlkey=0pcttn7s5jgd55hrcqy6411k2&st=98iepbvw&raw=1"
                    />
                </div>
            </section>
            <section className={ `artifact-section ${ inView4 ? "" : "artifact-hide" }` }>
                <div className="artifact-wrap">
                    <VideoAutoplay
                        name="artifact-img-wrap img-left-mobile"
                        videoName="bumper"
                        animation={ inView4 ? "blur-in" : ""}
                        link="https://www.dropbox.com/scl/fi/8s1ojejz0jb2p331veiu0/sn-website-icons-alt.mp4?rlkey=kwupzc7y80t2to8zn096pjecm&st=eakyy28l&raw=1"
                    />
                    <article className="artifact-right right-lg">
                    <SubHeading 
                            subHeading="Sass" 
                            mainHeading="Hover Effects" 
                            animation={ inView4 ? "scale-in" : ""}
                        />
                        <Paragraph 
                            animation={ inView4 ? "leap-in" : ""}
                            text1="With the navigation and footer icons, I wanted to create a design that reflects the Stripes Nation brand while also adding elements that resemble photography."
                        />
                        <List 
                            heading1="Icon Design" 
                            text1="I deliberately incoporated a bordered version of the logos and icons created in illustrator. The logos and social media icons were created with a solid slanted border to reflect the speed of the sport. The heading borders were created in Sass using transform properties to skew and rotate the lines to reflect the viewfinder of a camera." 
                            animation1={ inView4 ? "leap-in leap1" : ""}

                            heading2="Interactivity" 
                            text2="I used scale and opacity properties to create the hover effect by showing and hiding the overlapping elements." 
                            animation2={ inView4 ? "leap-in leap2" : ""}

                            display3="none"
                        />
                    </article>
                </div>
            </section>
            <section className={ `artifact-section ${ inView5 ? "" : "artifact-hide" }` }>
                <Footer/>
            </section>
        </main>
    )
}

export default SonicAnimation