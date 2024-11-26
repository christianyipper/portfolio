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


const Blendit = () => {
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

                id2="HeroSelector"
                reference2={ snap2 }
                display2="scroll-show"

                id3="SmoothieBuilder"
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
                            meta="Blend It" 
                            a="B" b="l" c="e" d="n" e="d" f="i" g="t" h="."
                        />
                        <HeadingShimmer 
                            animation={ inView1 ? "blur-in" : "blur-out" }
                            heading="Front End"
                        />
                        <Paragraph 
                            animation={ inView1 ? "leap-in" : ""}
                            text1="Blendit demonstrates how front-end development can transform a simple ordering process into an immersive, enjoyable experience. By carefully crafting each interaction with CSS animations, JavaScript libraries, and responsive design, the team has created more than an app but designed a digital culinary playground."
                        />
                        <Button
                            text="Github Repo"
                            link="https://github.com/christianyipper/blendit.git"
                            target="_blank"
                        />
                    </article>
                    <div className="artifact-right right-sm">
                        <TableOfContents
                            menu={ isActive ? "toc-show" : "toc-hide" }
                            click={ tocClick }
                            view={ isActive ? "pointer-show" : "pointer-hide" }

                            subHeading1="React | Tailwind"
                            mainHeading1="Hero Selector"
                            path1="#HeroSelector"
                            num1="1"
                            display1="toc-display"

                            subHeading2="React | Tailwind"
                            mainHeading2="Smoothie Builder"
                            path2="#SmoothieBuilder"
                            num2="2"
                            display2="toc-display"
                        />
                    </div>
                    <ScrollDown
                        animation={ inView4 ? "opacity-0" : "opacity-100"}

                        heading1="Next - Hero Selector"
                        link1="#HeroSelector"
                        animation1={ inView1 ? "opacity-100" : "opacity-0"}

                        heading2="Next - Smoothie Builder"
                        link2="#SmoothieBuilder"
                        animation2={ inView2 ? "opacity-100" : "opacity-0"}

                        heading3="Next - More Projects"
                        link3="#SmoothieBuilder"
                        animation3={ inView3 ? "opacity-100" : "opacity-0"}
                    />
                </div>
            </section>
            <section className={ `artifact-section ${ inView2 ? "" : "artifact-hide" }` }>
                <div className="artifact-wrap">
                    <VideoAutoplay
                        name="artifact-img-wrap img-left-mobile"
                        videoName="bumper"
                        animation={ inView2 ? "blur-in" : ""}
                        link="https://www.dropbox.com/scl/fi/n1ex6zcyfh294g6746uat/Blendit-Hero-Comp.mp4?rlkey=56rawj7d9sdk0fai9jkjjl8ho&st=kc7c3iv8&raw=1"
                    />
                    <article className="artifact-right right-lg">
                        <SubHeading 
                            subHeading="React | Tailwind" 
                            mainHeading="Hero Selector" 
                            animation={ inView2 ? "scale-in" : ""}
                        />
                        <List 
                            heading1="Item Mapping"
                            text1="When transitioning from different smoothie bowls, we found it was easiest to create an array of items which included names, colours, images, and other properties. Selecting the different bowls will set these dynamic style properties based on that item's index. So clicking the blue bowl will set the background colour of shapes, buttons and text while also transforming rotational properties to display the rotating bowl on-screen."
                            animation1={ inView2 ? "leap-in leap1" : ""}

                            heading2="Transitions" 
                            text2="By using transitions instead of keyframe animations, we were able to use ease effects for all changing properties. When selecting the different bowls, the changes in colour and rotational values are all eased in and out." 
                            animation2={ inView2 ? "leap-in leap2" : ""}

                            display3="none"
                        />
                    </article>
                </div>
            </section>
            <section className={ `artifact-section ${ inView3 ? "" : "artifact-hide" }` }>
                <div className="artifact-wrap">
                    <article className="artifact-left left-lg">
                        <SubHeading 
                            subHeading="React | Tailwind" 
                            mainHeading="Smoothie Builder" 
                            animation={ inView3 ? "scale-in" : ""}
                        />
                        {/* <Paragraph 
                            animation={ inView3 ? "leap-in" : ""}
                            text1="With the navigation and footer icons, I wanted to create a design that reflects the Stripes Nation brand while also adding elements that resemble photography."
                        /> */}
                        <List 
                            heading1="Step Wizzard" 
                            text1="Step Wizzard was used to create separate screens for each step in the ordering process. We mapped all the ingredients from an array that will be used throughout these screens. By combining Step Wizzard and the mapped ingredients, we are able to save the selected ingredients throughout screens." 
                            animation1={ inView3 ? "leap-in leap1" : ""}

                            heading2="Intersection Observer" 
                            text2="When selecting an item (like the strawberry), the item gets mapped and displays in the viewport and intersection observer adds a class with keyframe animations. Each step has its own animations involving opacity, translation, and rotation." 
                            animation2={ inView3 ? "leap-in leap2" : ""}

                            heading3="Blending Animation" 
                            text3="We used a translucent image of the blender to show the fruit dropping into it. When the animation triggers, the fruit translates downward while a coloured block translates upward to simulate the smoothie base. An opaque border around the blended hides these items from clipping. Furthermore, the smoothie colour is calculated when each of the three fruits are selected. Each fruit has an RGB value which all get combined to create the smoothie base colour." 
                            animation3={ inView3 ? "leap-in leap3" : ""}
                        />
                    </article>
                    <VideoAutoplay
                        name="artifact-img-wrap img-right-mobile"
                        animation={ inView3 ? "blur-in" : ""}
                        link="https://www.dropbox.com/scl/fi/v2p06xkk4xmdtqv54cluq/Blendit-Builder-Comp.mp4?rlkey=g96af3vnaeu297q9percosmp5&st=l0s8ka97&raw=1"
                    />
                </div>
            </section>
            <section className={ `artifact-section ${ inView4 ? "" : "artifact-hide" }` }>
                <Footer/>
            </section>
        </main>
    )
}

export default Blendit