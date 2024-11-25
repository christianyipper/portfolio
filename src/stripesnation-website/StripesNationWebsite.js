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

                id3="UIelements"
                reference3={ snap3 }
                display3="scroll-show"

                id4="Footer"
                reference4={ snap4 }
                display4="scroll-show"
            />
            <section className="artifact-section artifact-home">
                <div className="artifact-wrap">
                    <article className={ `artifact-left left-lg heading-col ${ inView1 ? "blur-in" : "blur-out" }` }>
                        <TitleFloat 
                            animation={ `artifact-heading-float ${ inView1 ? "blur-in" : "blur-out" }` }
                            meta="Stripes Nation" 
                            a="S" b="t" c="r" d="i" e="p" f="e" g="s" spaceH="space" h="N" i="a" j="t" k="i" l="o" m="n"
                        />
                        <HeadingShimmer 
                            animation={ inView1 ? "blur-in" : "blur-out" }
                            heading="Front End"
                        />
                        <Paragraph 
                            animation={ inView1 ? "leap-in" : ""}
                            text1="Stripes Nation redefines the way you see hockey by offering a fresh perspective through the eyes of officials. Stripes Nation boast a bold, photo-centric brand identity that perfectly complements its stunning website."
                        />
                        <Paragraph 
                            animation={ inView1 ? "leap-in leap1" : ""}
                            text1="Combining my creative skills in Photoshop and After Effects with web development, I'm able to create an immersive landing page which grabs your attention in a heart beat! Below showcases my work on how I combined these two skills to create a complete website."
                        />
                        <Button
                            text="Github Repo"
                            link="https://github.com/christianyipper/stripesnation.git"
                            target="_blank"
                        />
                    </article>
                    <div className="artifact-right right-sm">
                        <TableOfContents
                            menu={ isActive ? "toc-show" : "toc-hide" }
                            click={ tocClick }
                            view={ isActive ? "pointer-show" : "pointer-hide" }

                            subHeading1="Photoshop | After Effects | Sass"
                            mainHeading1="Animated Hero"
                            path1="#LandingPage"
                            num1="1"
                            display1="toc-display"

                            subHeading2="Sass"
                            mainHeading2="Hover Effects"
                            path2="#UIelements"
                            num2="2"
                            display2="toc-display"
                        />
                    </div>
                    <ScrollDown
                        animation={ inView4 ? "opacity-0" : "opacity-100"}

                        heading1="Next - Logo Concepts"
                        link1="#LandingPage"
                        animation1={ inView1 ? "opacity-100" : "opacity-0"}

                        heading2="Next - Logo Development"
                        link2="#UIelements"
                        animation2={ inView2 ? "opacity-100" : "opacity-0"}
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
                            mainHeading="Landing Page" 
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
                            mainHeading="UI Elements" 
                            animation={ inView3 ? "scale-in" : ""}
                        />
                        <Paragraph 
                            animation={ inView3 ? "leap-in" : ""}
                            text1="With the navigation and footer icons, I wanted to create a design that reflects the Stripes Nation brand while also adding elements that resemble photography."
                        />
                        <List 
                            heading1="Icon Design" 
                            text1="I deliberately incoporated a bordered version of the logos and icons created in illustrator. The logos and social media icons were created with a solid slanted border to reflect the speed of the sport. The heading borders were created in Sass using transform properties to skew and rotate the lines to reflect the viewfinder of a camera." 
                            animation1={ inView3 ? "leap-in leap1" : ""}

                            heading2="Interactivity" 
                            text2="I used scale and opacity properties to create the hover effect by showing and hiding the overlapping elements." 
                            animation2={ inView3 ? "leap-in leap2" : ""}

                            display3="none"
                        />
                    </article>
                    <VideoAutoplay
                        name="artifact-img-wrap img-right"
                        animation={ inView3 ? "blur-in" : ""}
                        link="https://www.dropbox.com/scl/fi/560jrffj3r8jchlmiex63/sn-website-hover.mp4?rlkey=rxqekysgu2gbt7decezwcm5ki&st=aliqmild&raw=1"
                    />
                </div>
            </section>
            <section className={ `artifact-section ${ inView4 ? "" : "artifact-hide" }` }>
                <Footer/>
            </section>
        </main>
    )
}

export default SonicAnimation