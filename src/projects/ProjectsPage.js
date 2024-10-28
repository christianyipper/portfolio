// import React from 'react';
import React, { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Footer from '../Footer';
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
import ArtifactCard from '../components/ArtifactCard';


const ProjectsPage = () => {

    const [isHovered, setIsHovered] = useState(false);
    const ItsYipper = useRef(null);
    const StripesNation = useRef(null);
    const SonicAni = useRef(null);
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
            <div className="project-container">
                <div className="project-wrap">
                    <TitleFloat 
                        meta="My Projects."
                        a="M" b="y" spaceC="space" c=" " d="P" e="r" f="o" g="j" h="e" i="c" j="t" k="s" l="."
                    />
                    <div className="project-gallery-wrap">
                        <div className="project-gallery">
                            <ArtifactCard
                            enter={ () => mouseEnter( ItsYipper ) }
                            leave={ () => mouseLeave( ItsYipper ) }
                            poster="https://www.dropbox.com/scl/fi/dwu10b5gjpzz8tuc78d3h/itsyipper-thumb-comp.png?rlkey=rvakfjhv84t26pwfthgmhttqy&st=89spahic&raw=1"
                            video="https://www.dropbox.com/scl/fi/gftktvruwyq90jdxj31ih/ItsYipper-Intro-720p-comp.mp4?rlkey=1bvcxgetbkygn3rcbp93ouw4x&st=xt6vmdm0&raw=1"
                            reference={ ItsYipper }
                            subheading="Web Design"
                            heading="ItsYipper"
                            text="ItsYipper delivers in-depth reviews of the latest games and sparking conversations about trending topics within the community. Dive deeper into the gaming world with our interactive website. Explore the gaming landscape with original blogs and captivating video stories."
                            link="/itsyipper"
                            >
                                <SvgWebflow/>
                                <SvgPhotoshop/>
                                <SvgIllustrator/>
                            </ArtifactCard>
                            <ArtifactCard
                            enter={ () => mouseEnter( StripesNation ) }
                            leave={ () => mouseLeave( StripesNation ) }
                            poster="https://www.dropbox.com/scl/fi/444jjpr2zh7s91t43xu2q/stripesnation-thumb-comp.png?rlkey=m206g74xrn3z44qac0i73ljd3&st=xhx8upg5&raw=1"
                            video="https://www.dropbox.com/scl/fi/yd79axbaddk06h76ytb4m/StripesNation-1080p-comp.mp4?rlkey=iry6dsr7ct2umpe48n5gwlb5z&st=qcuh5kru&raw=1"
                            reference={ StripesNation }
                            subheading="Branding"
                            heading="Stripes Nation"
                            text="Stripes Nation redefines the way you see hockey by offering a fresh perspective through the eyes of officials. Stripes Nation boast a bold, photo-centric brand identity that perfectly complements its stunning website, featuring a captivating photo gallery."
                            link="/stripes-nation"
                            >
                                <SvgPhotoshop/>
                                <SvgIllustrator/>
                                <SvgAfterEffects/>
                                <SvgFigma/>
                            </ArtifactCard>
                            <ArtifactCard
                            enter={ () => mouseEnter( SonicAni ) }
                            leave={ () => mouseLeave( SonicAni ) }
                            poster="https://www.dropbox.com/scl/fi/uh74vqvxay4lx4dwt682q/sonic-thumb-comp.png?rlkey=jufydzsubr3e9li62l1249rgs&st=x4kykj4q&raw=1"
                            video="https://www.dropbox.com/scl/fi/xx8gfihs9jvk66lezrmlw/Sonic-Preview-720p-comp.mp4?rlkey=s4bep7n5vsit23jm21pht2oil&st=25ay3jsm&raw=1"
                            reference={ SonicAni }
                            subheading="Web Design"
                            heading="Sonic Animation"
                            text="ItsYipper delivers in-depth reviews of the latest games and sparking conversations about trending topics within the community. Dive deeper into the gaming world with our interactive website. Explore the gaming landscape with original blogs and captivating video stories."
                            link="/sonic-animation"
                            >
                                <SvgHtml/>
                                <SvgCss/>
                                <SvgJs/>
                            </ArtifactCard>
                            <ArtifactCard
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
                            </ArtifactCard>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProjectsPage