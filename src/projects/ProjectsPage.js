// import React from 'react';
import React, { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Helmet } from "react-helmet-async";

import Footer from '../components/Footer';
import TitleFloat from '../components/text/TitleFloat';
import TitleShimmer from '../components/text/TitleShimmer';

import SvgPhotoshop from '../components/svg/SvgPhotoshop';
import SvgWebflow from '../components/svg/SvgWebflow';
import SvgIllustrator from '../components/svg/SvgIllustrator';
import SvgAfterEffects from '../components/svg/SvgAfterEffects';
import SvgFigma from '../components/svg/SvgFigma';
import SvgHtml from '../components/svg/SvgHtml';
import SvgCss from '../components/svg/SvgCss';
import SvgJs from '../components/svg/SvgJs';
import SvgReact from '../components/svg/SvgReact';
import SvgSass from '../components/svg/SvgSass';
import SvgTailwind from '../components/svg/SvgTailwind';
import ArtifactCard from '../components/ArtifactCard';


const ProjectsPage = () => {

    // Horizontal scroll
    const scrollContainerRef = useRef(null);
    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        
        const handleWheel = (e) => {
            // Prevent the default vertical scroll
            e.preventDefault();
            
            // Scroll horizontally based on the vertical scroll amount
            scrollContainer.scrollLeft += e.deltaY;
        };
        
        // Add event listener
        scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
        
        // Cleanup
        return () => {
            scrollContainer.removeEventListener('wheel', handleWheel);
        };
    }, []);

    const centerItem = (e) => {
        const container = scrollContainerRef.current;
        const item = e.currentTarget;
        
        // Get viewport width to calculate actual dimensions
        const vw = window.innerWidth / 100;
        const itemHeight = 30 * vw; // 30vw height
        
        // Calculate widths based on aspect ratios
        const normalWidth = itemHeight * (9/16); // Original aspect ratio 9:16
        const hoveredWidth = itemHeight * (16/9); // Hovered aspect ratio 16:9
        
        // Get the container's width
        const containerWidth = container.offsetWidth;
        
        // Calculate item's current position
        const itemLeft = item.offsetLeft;
        
        // Calculate the center position accounting for the width change
        const widthDifference = hoveredWidth - normalWidth;
        const targetScroll = itemLeft - (containerWidth / 2) + (hoveredWidth / 2);
        
        container.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        });
    };

    // Video hooks
    const [isHovered, setIsHovered] = useState(false);
    const ItsYipper = useRef(null);
    const StripesNationBrand = useRef(null);
    const StripesNationWebsite = useRef(null);
    const Blendit = useRef(null);
    const EdgeBoards = useRef(null);

    const mouseEnter = ( videoRef ) => {
        setIsHovered(true);
        videoRef.current.play();
    };
    
    const mouseLeave = ( videoRef ) => {
        setIsHovered(false);
        videoRef.current.pause();
    };

    return (
        <main className="projects">
            <Helmet>
                <title>Yipper Portfolio | Projects</title>
                <meta property="og:title" content="Yipper Portfolio | Projects"/>

                <meta name="description" content="Front-end developer and designer Christian Yip's creative work. View his skills in front-end and branding."/>
                <meta name="og:description" content="Front-end developer and designer Christian Yip's creative work. View his skills in front-end and branding."/>

                <meta name="keywords" content="front-end developer, graphics designer, portfolio, hockey referee, sports photographer"/>

                <meta property="og:url" content="https://yipper.ca/projects"/>
            </Helmet>
            <div className="project-container">
                <div className="project-wrap">
                    <TitleFloat 
                        meta="My Projects."
                        a="M" b="y" spaceC="space" c=" " d="P" e="r" f="o" g="j" h="e" i="c" j="t" k="s" l="."
                    />
                    <div className="fade-overlay"/>
                    <div className="project-gallery-wrap" 
                        ref={ scrollContainerRef }
                    >
                        <div className="project-gallery">
                            <ArtifactCard
                                enter={ (e) => { 
                                    mouseEnter( Blendit ); 
                                    centerItem(e); 
                                }}
                                leave={ () => mouseLeave( Blendit )}
                                poster="https://www.dropbox.com/scl/fi/mqdxrq6misi7vbjqhfhvr/blendit-bg-comp.png?rlkey=j5q7sne43c2z8kjxab1ihkb33&st=vbwhhcnk&raw=1"
                                // video="https://www.dropbox.com/scl/fi/eidpjoeahq67umeob3dc2/background-video-16-9.mp4?rlkey=c36c1316oo4azszfbiknvkny3&st=ogajpxl9&raw=1"
                                image=""
                                reference={ Blendit }
                                subheading="Front-End"
                                heading="Blendit"
                                dark="heading-shimmer-dark"
                                text="At the heart of Blendit's innovation is its groundbreaking interactive ordering system. Unlike traditional food ordering platforms, Blendit turns customization into a playful, immersive experience. Through carefully designed animations and intuitive interfaces, customers are guided through a step-by-step bowl creation process that feels more like a creative game than a standard menu selection."
                                link="/blendit"
                            >
                                <SvgReact/>
                                <SvgTailwind/>
                                <SvgFigma/>
                            </ArtifactCard>
                            <ArtifactCard
                                enter={ (e) => { 
                                    mouseEnter( StripesNationBrand ); 
                                    centerItem(e); 
                                }}
                                leave={ () => mouseLeave( StripesNationBrand )}
                                poster="https://www.dropbox.com/scl/fi/444jjpr2zh7s91t43xu2q/stripesnation-thumb-comp.png?rlkey=m206g74xrn3z44qac0i73ljd3&st=xhx8upg5&raw=1"
                                video="https://www.dropbox.com/scl/fi/yd79axbaddk06h76ytb4m/StripesNation-1080p-comp.mp4?rlkey=iry6dsr7ct2umpe48n5gwlb5z&st=qcuh5kru&raw=1"
                                image="hide"
                                reference={ StripesNationBrand }
                                subheading="Branding"
                                heading="Stripes Nation"
                                text="Stripes Nation redefines the way you see hockey by offering a fresh perspective through the eyes of officials. I wanted to create a brand which boast a bold identity that evokes the energy and speed of the sport. I also wanted to highlight the emotions of the game through photo-centric elements within the brand's website and social media."
                                link="/stripesnation-brand"
                            >
                                <SvgPhotoshop/>
                                <SvgIllustrator/>
                                <SvgAfterEffects/>
                                <SvgFigma/>
                            </ArtifactCard>
                            <ArtifactCard
                                enter={ (e) => { 
                                    mouseEnter( StripesNationWebsite ); 
                                    centerItem(e); 
                                }}
                                leave={ () => mouseLeave( StripesNationWebsite )}
                                poster="https://www.dropbox.com/scl/fi/lu2pt8d7o3j31e8at96gf/sn-jersey-md-min.webp?rlkey=bdhqr3jh8omzi1mqvcznqxtm4&st=d7t7fp9n&raw=1"
                                video="https://www.dropbox.com/scl/fi/eidpjoeahq67umeob3dc2/background-video-16-9.mp4?rlkey=c36c1316oo4azszfbiknvkny3&st=ogajpxl9&raw=1"
                                image="hide"
                                reference={ StripesNationWebsite }
                                subheading="Front-End"
                                heading="Stripes Nation"
                                text="Stripes Nation redefines the way you see hockey by offering a fresh perspective through the eyes of officials. I wanted to create a brand which boast a bold identity that evokes the energy and speed of the sport. I also wanted to highlight the emotions of the game through photo-centric elements within the brand's website and social media."
                                link="/stripesnation-website"
                            >
                                <SvgReact/>
                                <SvgSass/>
                                <SvgFigma/>
                            </ArtifactCard>
                            <ArtifactCard
                                enter={ (e) => { 
                                    mouseEnter( ItsYipper ); 
                                    centerItem(e); 
                                }}
                                leave={ () => mouseLeave( ItsYipper ) }
                                poster="https://www.dropbox.com/scl/fi/dwu10b5gjpzz8tuc78d3h/itsyipper-thumb-comp.png?rlkey=rvakfjhv84t26pwfthgmhttqy&st=89spahic&raw=1"
                                video="https://www.dropbox.com/scl/fi/gftktvruwyq90jdxj31ih/ItsYipper-Intro-720p-comp.mp4?rlkey=1bvcxgetbkygn3rcbp93ouw4x&st=xt6vmdm0&raw=1"
                                image="hide"
                                reference={ ItsYipper }
                                subheading="Front-End"
                                heading="ItsYipper"
                                text="ItsYipper delivers in-depth reviews of the latest games and sparking conversations about trending topics within the community. Dive deeper into the gaming world with our interactive website. Explore the gaming landscape with original blogs and captivating video stories."
                                link="/itsyipper"
                            >
                                <SvgWebflow/>
                                <SvgPhotoshop/>
                                <SvgIllustrator/>
                            </ArtifactCard>
                            {/* <ArtifactCard
                            enter={ () => mouseEnter( EdgeBoards ) }
                            leave={ () => mouseLeave( EdgeBoards ) }
                            poster="https://www.dropbox.com/scl/fi/06induswo23lu4c1o8ybi/edgeboards-poster-wide.png?rlkey=m2c1p4kjdi2pe0qx4jsvncyuj&st=pxyuiju3&raw=1"
                            video="https://www.dropbox.com/scl/fi/h69ieqh7sfy7zoo29ishj/edgeboards-skilift-1080p-comp.mp4?rlkey=kmtnff10c80h6k7ni1kyjc9ob&st=t4be6ajj&raw=1"
                            reference={ EdgeBoards }
                            subheading="Branding"
                            heading="Edge Boards"
                            text="Stripes Nation redefines the way you see hockey by offering a fresh perspective through the eyes of officials. Stripes Nation boast a bold, photo-centric brand identity that perfectly complements its stunning website, featuring a captivating photo gallery."
                            link="/edge-boards"
                            >
                                <SvgWebflow/>
                                <SvgPhotoshop/>
                                <SvgIllustrator/>
                            </ArtifactCard> */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProjectsPage