// import React from 'react';
import React, { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Footer from '../Footer';
import TitleFloat from '../components/text/TitleFloat';
import TitleShimmer from '../components/text/TitleShimmer';
import HeadingFloat from '../components/text/HeadingFloat';
import HeadingShimmer from '../components/text/HeadingShimmer';
import Paragraph from '../components/text/Paragraph';

import SvgPhotoshop from '../components/svg/SvgPhotoshop';
import SvgWebflow from '../components/svg/SvgWebflow';
import SvgIllustrator from '../components/svg/SvgIllustrator';
import SvgAfterEffects from '../components/svg/SvgAfterEffects';
import SvgFigma from '../components/svg/SvgFigma';
import SvgHtml from '../components/svg/SvgHtml';
import SvgCss from '../components/svg/SvgCss';
import SvgJs from '../components/svg/SvgJs';
import Button from '../components/text/Button';


const ProjectsPage = () => {

    const [isHovered, setIsHovered] = useState(false);
    const ItsYipper = useRef(null);
    const StripesNation = useRef(null);
    const SonicAni = useRef(null);
    const EdgeBoards = useRef(null);

    const itsYipperEnter = () => {
        setIsHovered(true);
        ItsYipper.current.play();
    };
    const itsYipperLeave = () => {
        setIsHovered(false);
        ItsYipper.current.pause();
    };

    const stripesNationEnter = () => {
        setIsHovered(true);
        StripesNation.current.play();
    };
    const stripesNationLeave = () => {
        setIsHovered(false);
        StripesNation.current.pause();
    };

    const sonicAniEnter = () => {
        setIsHovered(true);
        SonicAni.current.play();
    };
    const sonicAniLeave = () => {
        setIsHovered(false);
        SonicAni.current.pause();
    };

    const edgeBoardsEnter = () => {
        setIsHovered(true);
        EdgeBoards.current.play();
    };
    const edgeBoardsLeave = () => {
        setIsHovered(false);
        EdgeBoards.current.pause();
    };
    // Not sure how I should go about making a hook for this. It seems I would need to add everything inside the section which might be a lot of work... :(

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
                            <section id="artifact-1" className="project-artifact-wrap"
                            onMouseEnter={ itsYipperEnter }
                            onMouseLeave={ itsYipperLeave }>
                                <p className="sub-heading" text-glow="Web Design">Web Design</p>
                                <div className="project-artifact">
                                    <div className="project-border"></div>
                                    <div className="project-corner-wrap"></div>
                                    <video 
                                        className="project-img"
                                        poster="https://www.dropbox.com/scl/fi/dwu10b5gjpzz8tuc78d3h/itsyipper-thumb-comp.png?rlkey=rvakfjhv84t26pwfthgmhttqy&st=89spahic&raw=1"
                                        loop
                                        muted
                                        ref={ ItsYipper }
                                    >
                                        <source src="https://www.dropbox.com/scl/fi/gftktvruwyq90jdxj31ih/ItsYipper-Intro-720p-comp.mp4?rlkey=1bvcxgetbkygn3rcbp93ouw4x&st=xt6vmdm0&raw=1" type="video/mp4"/>
                                    </video>
                                    <HeadingShimmer heading="ItsYipper"/>
                                    <article className="project-text">
                                        <HeadingShimmer heading="ItsYipper"/>
                                        <Paragraph name="project-text-margin" text1="ItsYipper delivers in-depth reviews of the latest games and sparking conversations about trending topics within the community. Dive deeper into the gaming world with our interactive website. Explore the gaming landscape with original blogs and captivating video stories."/>
                                    </article>
                                    <div className="app-icons-wrap">
                                        <SvgWebflow/>
                                        <SvgPhotoshop/>
                                        <SvgIllustrator/>
                                    </div>
                                    <div className="project-heading-bg"/>
                                    <div className="project-btn-wrap">
                                        <div className="project-top-corner"></div>
                                        <div className="project-btn-bot">
                                            <div className="project-bot-corner"></div>
                                            <div className="project-btn-bg">
                                                <Button text="Preview" link="/itsyipper"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-btn">
                                    <Button text="Preview" link="/itsyipper"/>
                                </div>
                            </section>
                            <section id="artifact-2" className="project-artifact-wrap"
                            onMouseEnter={ stripesNationEnter }
                            onMouseLeave={ stripesNationLeave }>
                                <p className="sub-heading" text-glow="Branding">Branding</p>
                                <div className="project-artifact">
                                    <div className="project-border"></div>
                                    <div className="project-corner-wrap"></div>
                                    <video 
                                        className="project-img"
                                        poster="https://www.dropbox.com/scl/fi/444jjpr2zh7s91t43xu2q/stripesnation-thumb-comp.png?rlkey=m206g74xrn3z44qac0i73ljd3&st=xhx8upg5&raw=1"
                                        loop
                                        muted
                                        ref={ StripesNation }
                                    >
                                        <source src="https://www.dropbox.com/scl/fi/yd79axbaddk06h76ytb4m/StripesNation-1080p-comp.mp4?rlkey=iry6dsr7ct2umpe48n5gwlb5z&st=qcuh5kru&raw=1" type="video/mp4"/>
                                    </video>
                                    <HeadingShimmer heading="Stripes Nation"/>
                                    <article className="project-text">
                                        <HeadingShimmer heading="Stripes Nation"/>
                                        <Paragraph name="project-text-margin" text1="Stripes Nation redefines the way you see hockey by offering a fresh perspective through the eyes of officials. Stripes Nation boast a bold, photo-centric brand identity that perfectly complements its stunning website, featuring a captivating photo gallery."/>
                                    </article>
                                    <div className="app-icons-wrap">
                                        <SvgPhotoshop/>
                                        <SvgIllustrator/>
                                        <SvgAfterEffects/>
                                        <SvgFigma/>
                                    </div>
                                    <div className="project-heading-bg"/>
                                    <div className="project-btn-wrap">
                                        <div className="project-top-corner"></div>
                                        <div className="project-btn-bot">
                                            <div className="project-bot-corner"></div>
                                            <div className="project-btn-bg">
                                                <Button text="Preview" link="/stripes-nation"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-btn">
                                    <Button text="Preview" link="/stripes-nation"/>
                                </div>
                            </section>
                            <section id="artifact-3" className="project-artifact-wrap"
                            onMouseEnter={ sonicAniEnter }
                            onMouseLeave={ sonicAniLeave }>
                                <p className="sub-heading" text-glow="Web Design">Web Design</p>
                                <div className="project-artifact">
                                    <div className="project-border"></div>
                                    <div className="project-corner-wrap"></div>
                                    <video 
                                        className="project-img"
                                        poster="https://www.dropbox.com/scl/fi/uh74vqvxay4lx4dwt682q/sonic-thumb-comp.png?rlkey=jufydzsubr3e9li62l1249rgs&st=x4kykj4q&raw=1"
                                        loop
                                        muted
                                        defaultMuted
                                        playsInline
                                        ref={ SonicAni }
                                    >
                                        <source src="https://www.dropbox.com/scl/fi/xx8gfihs9jvk66lezrmlw/Sonic-Preview-720p-comp.mp4?rlkey=s4bep7n5vsit23jm21pht2oil&st=25ay3jsm&raw=1" type="video/mp4"/>
                                    </video>
                                    <HeadingShimmer heading="Sonic Animation"/>
                                    <article className="project-text">
                                        <HeadingShimmer heading="Sonic Animation"/>
                                        <Paragraph name="project-text-margin" text1="ItsYipper delivers in-depth reviews of the latest games and sparking conversations about trending topics within the community. Dive deeper into the gaming world with our interactive website. Explore the gaming landscape with original blogs and captivating video stories."/>
                                    </article>
                                    <div className="app-icons-wrap">
                                        <SvgHtml/>
                                        <SvgCss/>
                                        <SvgJs/>
                                    </div>
                                    <div className="project-heading-bg"/>
                                    <div className="project-btn-wrap">
                                        <div className="project-top-corner"></div>
                                        <div className="project-btn-bot">
                                            <div className="project-bot-corner"></div>
                                            <div className="project-btn-bg">
                                                <Button text="Preview" link="/sonic-animation"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-btn">
                                    <Button text="Preview" link="/sonic-animation"/>
                                </div>
                            </section>
                            <section id="artifact-4" className="project-artifact-wrap"
                            onMouseEnter={ edgeBoardsEnter }
                            onMouseLeave={ edgeBoardsLeave }>
                                <p className="sub-heading" text-glow="Branding">Branding</p>
                                <div className="project-artifact">
                                    <div className="project-border"></div>
                                    <div className="project-corner-wrap"></div>
                                    <video 
                                        className="project-img"
                                        poster="https://www.dropbox.com/scl/fi/06induswo23lu4c1o8ybi/edgeboards-poster-wide.png?rlkey=m2c1p4kjdi2pe0qx4jsvncyuj&st=pxyuiju3&raw=1"
                                        loop
                                        muted
                                        defaultMuted
                                        playsInline
                                        ref={ EdgeBoards }
                                    >
                                        <source src="https://www.dropbox.com/scl/fi/h69ieqh7sfy7zoo29ishj/edgeboards-skilift-1080p-comp.mp4?rlkey=kmtnff10c80h6k7ni1kyjc9ob&st=t4be6ajj&raw=1" type="video/mp4"/>
                                    </video>
                                    <HeadingShimmer heading="Edge Boards"/>
                                    <article className="project-text">
                                        <HeadingShimmer heading="Edge Boards"/>
                                        <Paragraph name="project-text-margin" text1="ItsYipper delivers in-depth reviews of the latest games and sparking conversations about trending topics within the community. Dive deeper into the gaming world with our interactive website. Explore the gaming landscape with original blogs and captivating video stories."/>
                                    </article>
                                    <div className="app-icons-wrap">
                                        <SvgWebflow/>
                                        <SvgPhotoshop/>
                                        <SvgIllustrator/>
                                    </div>
                                    <div className="project-heading-bg"/>
                                    <div className="project-btn-wrap">
                                        <div className="project-top-corner"></div>
                                        <div className="project-btn-bot">
                                            <div className="project-bot-corner"></div>
                                            <div className="project-btn-bg">
                                                <Button text="Preview" link="/edge-boards"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-btn">
                                    <Button text="Preview" link="/edge-boards"/>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProjectsPage