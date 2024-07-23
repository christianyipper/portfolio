import React from 'react';
import { useInView } from 'react-intersection-observer';

const ProjectsPage = () => {
    const { ref: snap1, inView: inView1 } = useInView( { threshold: 0.5 } );
    const { ref: snap2, inView: inView2 } = useInView( { threshold: 0.5 } );
    const { ref: snap3, inView: inView3 } = useInView( { threshold: 0.5 } );
    const { ref: snap4, inView: inView4 } = useInView( { threshold: 0.5 } );

    const { ref: btn1, inView: btnView1 } = useInView( { threshold: 1 } );
    const { ref: btn2, inView: btnView2 } = useInView( { threshold: 1 } );
    const { ref: btn3, inView: btnView3 } = useInView( { threshold: 1 } );
    const { ref: btn4, inView: btnView4 } = useInView( { threshold: 1 } );
    return (
        <main className="projects">
            {/* <section className="scroll-wrap">
                <div className="scroll-section" ref={ snap1 }></div>
                <div className="scroll-section" ref={ snap2 }></div>
                <div className="scroll-section" ref={ snap3 }></div>
                <div className="scroll-section" ref={ snap4 }></div>
            </section> */}
            <h1 className="project-heading-float">
                <span text-glow="M">M</span>
                <span text-glow="y">y</span>
                <span className="space"></span>
                <span text-glow="P">P</span>
                <span text-glow="r">r</span>
                <span text-glow="o">o</span>
                <span text-glow="j">j</span>
                <span text-glow="e">e</span>
                <span text-glow="c">c</span>
                <span text-glow="t">t</span>
                <span text-glow="s">s</span>
                <span text-glow=".">.</span>
            </h1>
            <section className="scroll-wrap">
                <div className="scroll-section" ref={ snap1 }>
                    <div className={ `project-wrap project-1 ${ inView1 ? `scale-in` : `scale-out` }` }>
                        <p className="project-sub" text-glow="Web Design">Web Design</p>
                        <div className="project-corner-wrap"></div>
                        <video className="project-img" loop autoPlay muted>
                            <source src="https://www.dropbox.com/scl/fi/sxdz43vbc4tzbty87lhip/ItsYipper-Intro-720p.mp4?rlkey=1iart1gqp9b8ep471xh416se9&st=3cyvshsl&raw=1" type="video/mp4"/>
                        </video>
                        <h2 className="project-heading-shimmer" text-shimmer="ItsYipper">ItsYipper</h2>
                        <article className="project-text">
                            <h2 className="project-heading-shimmer" text-shimmer="ItsYipper">ItsYipper</h2>
                            <p>ItsYipper delivers in-depth reviews of the latest games and sparking conversations about trending topics within the community. Dive deeper into the gaming world with our interactive website. Explore the gaming landscape with original blogs and captivating video stories.</p>
                            <div className="app-icons-wrap">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720.56 720" data-name="Webflow Logo">
                                    <g>
                                        <path className="fill-1" d="M630.35,0H90.21C40.68,0,.28,40.43.28,90v540c0,49.57,40.4,90,89.93,90l540.14-.28c49.53,0,89.93-40.43,89.93-90V90c0-49.57-40.4-90-89.93-90ZM464.35,505.66h-129.47l57.69-111.69h-2.59c-47.59,61.78-118.6,102.46-219.78,111.69v-110.15s64.73-3.82,102.78-43.83h-102.78v-115.52h115.51v95.01h2.59s47.2-95.01,47.2-95.01h87.36v94.41h2.59l48.97-94.41h127.78l-137.85,269.5Z"/>
                                    </g>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720.56 720" data-name="Photoshop Logo">
                                    <path className="fill-1" d="M315.16,267.44c7.52,10.53,9.14,22.45,8.34,35.07-1.48,23.23-17.32,36.46-37.5,41.88-10.68,2.86-21.51,4.38-32.57,4.21-7.79-.12-15.58.25-23.37-.42-2.01-.18-2.4-.85-2.39-2.68.06-15.99.03-31.98.03-47.97s-.01-31.78.02-47.67c0-1.15-.61-2.75,1.59-2.76,19.23-.1,38.56-2.42,57.55,2.53,11.31,2.95,21.33,8.03,28.3,17.81Z"/>
                                    <path className="fill-1" d="M630.35,0H90.21C40.68,0,.28,40.43.28,90v540c0,49.57,40.4,90,89.93,90l540.14-.28c49.53,0,89.93-40.43,89.93-90V90c0-49.57-40.4-90-89.93-90ZM380.3,341.8c-11.7,26.91-32.43,44.32-59.76,54.06-20.97,7.48-42.82,9.42-64.91,9.35-8.3-.03-16.59-.2-24.88-.5-2.62-.1-3.38.6-3.37,3.3.1,30.28.06,60.57.06,90.86,0,5.54-.75,6.31-6.15,6.31h-53.08c-5.4,0-5.9-.51-5.9-6.05V194.75c0-5,.47-5.43,5.45-5.49,30.18-.37,60.34-1.78,90.53-1.68,17.85.06,35.55,1.36,52.79,6.29,23.36,6.69,43.53,18.37,58.32,38.19,10.77,14.45,16.66,30.86,18.74,48.62,2.46,20.98.65,41.61-7.84,61.12ZM595.01,443.34c-3.51,30.88-21.73,50.12-50.13,60.58-16.35,6.02-33.42,7.65-50.72,7.48-20.89-.21-41.43-2.73-61.21-9.87-2.53-.92-4.99-2.03-7.47-3.09-2.99-1.27-4.41-3.47-4.38-6.8.08-8.39.03-16.79.03-25.19s-.02-16.2.01-24.29c.02-5.37,1.14-6,5.72-3.48,24.9,13.69,51.6,19.42,79.9,17.81,5.49-.32,10.89-1.39,15.9-3.89,8.56-4.26,10.5-14.17,4.15-21.31-2.97-3.35-6.67-5.69-10.6-7.71-9.79-5.03-20.2-8.59-30.35-12.76-14.18-5.83-27.75-12.82-39.67-22.62-36.31-29.85-29.04-81.1.6-105.17,13.4-10.89,28.79-17.2,45.74-19.42,24.58-3.21,49.05-1.85,73.29,3.4,4.49.98,8.79,2.6,13.09,4.23,2.51.96,3.99,2.59,4.07,5.33.09,3.59.19,7.19.2,10.79.02,12.39.02,24.79,0,37.19-.01,5.39-2.88,7.15-7.8,4.71-21.18-10.54-43.81-13.88-67.16-13.58-4.71.07-9.35,1.05-13.83,2.47-10.6,3.35-13.45,15.19-5.68,23.15,4.07,4.17,9.19,6.62,14.26,9.23,10.15,5.23,21.04,8.65,31.5,13.1,11.6,4.94,22.87,10.59,33.2,17.84,21.48,15.09,30.26,36.15,27.34,61.87Z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720.56 720" data-name="Illustrator Logo">
                                    <g>
                                        <path className="fill-1" d="M291.72,242.5c11.83,42.75,25.39,83.76,38.54,125.33h-75.63c12.15-41.51,26.41-82.19,37.09-125.33Z"/>
                                        <path className="fill-1" d="M630.35,0H90.21C40.68,0,.28,40.43.28,90v540c0,49.57,40.4,90,89.93,90l540.14-.28c49.53,0,89.93-40.43,89.93-90V90c0-49.57-40.4-90-89.93-90ZM436.74,503.66c-18.58,0-37.17-.19-55.75.12-5.37.09-7.76-1.94-9.39-6.84-7.09-21.29-14.57-42.46-21.71-63.73-1.13-3.37-2.7-4.43-6.28-4.41-34.2.15-68.4.15-102.6,0-3.46-.01-4.73,1.12-5.74,4.33-6.61,20.96-13.47,41.84-20.24,62.74-2.45,7.59-2.7,7.79-10.44,7.79h-48.72c-8.12,0-8.91-1.07-6.27-8.65,26.65-76.71,53.32-153.41,79.96-230.13,5.62-16.19,11.07-32.45,16.68-48.65,2.59-7.48,3.66-15.18,3.46-23.02-.11-4.58,1.75-5.99,6.12-5.92,12.02.19,24.05.07,36.08.07s23.74.11,35.6-.07c4.03-.05,6.07,1.34,7.47,5.28,35.71,101.12,71.55,202.2,107.36,303.28,2.46,6.93,1.84,7.8-5.59,7.81ZM543.9,384.84c0,37.49.01,74.98,0,112.47,0,7.34-.34,7.66-7.64,7.66-17.49,0-34.99.01-52.48,0-6.36-.01-7.18-.77-7.18-6.88-.01-75.45-.01-150.9,0-226.35,0-6,.7-6.7,6.75-6.71,17.96-.02,35.92-.02,53.89,0,5.86.01,6.65.83,6.66,6.87.01,37.64,0,75.29,0,112.94ZM510.63,239.84c-22.7-.2-37.33-15.33-37.16-38.44.15-21.4,16.4-37.02,38.24-36.76,22.19.26,36.46,15.33,36.21,38.25-.23,21.94-15.58,37.14-37.29,36.95Z"/>
                                    </g>
                                </svg>
                            </div>
                        </article>
                        <div className="project-heading-bg"/>
                        <div className="project-btn-wrap">
                            <div className={ `project-top-corner ${ inView1 ? `enable` : `disable` }` }></div>
                            <div className="project-btn-bot">
                                <div className={ `project-bot-corner ${ inView1 ? `enable` : `disable` }` }></div>
                                <div className={ `project-btn-bg ${ inView1 ? `enable` : `disable` }` }>
                                    <button type="button" href="/projects">
                                        <p>Preview</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div ref={ btn1 } className={ `project-btn ${ inView1 ? `enable` : `disable` }` }>
                            <button type="button" href="/projects">
                                <p text-glow="Preview">Preview</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="scroll-section" ref={ snap2 }>
                    <div className={ `project-wrap project-2 ${ inView2 ? `scale-in` : `scale-out` }` }>
                        <p className="project-sub" text-glow="Branding">Branding</p>
                        <div className="project-corner-wrap"></div>
                        <video className="project-img" loop autoPlay muted>
                            <source src="https://www.dropbox.com/scl/fi/0xj4rvjnn4xqleh5iyp1f/StripesNation-720p.mp4?rlkey=bqzh5y9k6m1sr55zc43mnsisb&st=jf7xrzt8&raw=1" type="video/mp4"/>
                        </video>
                        <h2 className="project-heading-shimmer" text-shimmer="Stripes Nation">Stripes Nation</h2>
                        <article className="project-text">
                            <h2 className="project-heading-shimmer" text-shimmer="Stripes Nation">Stripes Nation</h2>
                            <p>Stripes Nation redefines the way you see hockey by offering a fresh perspective through the eyes of officials. Stripes Nation boast a bold, photo-centric brand identity that perfectly complements its stunning website, featuring a captivating photo gallery.</p>
                            <div className="app-icons-wrap">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720.56 720" data-name="Photoshop Logo">
                                    <path className="fill-1" d="M315.16,267.44c7.52,10.53,9.14,22.45,8.34,35.07-1.48,23.23-17.32,36.46-37.5,41.88-10.68,2.86-21.51,4.38-32.57,4.21-7.79-.12-15.58.25-23.37-.42-2.01-.18-2.4-.85-2.39-2.68.06-15.99.03-31.98.03-47.97s-.01-31.78.02-47.67c0-1.15-.61-2.75,1.59-2.76,19.23-.1,38.56-2.42,57.55,2.53,11.31,2.95,21.33,8.03,28.3,17.81Z"/>
                                    <path className="fill-1" d="M630.35,0H90.21C40.68,0,.28,40.43.28,90v540c0,49.57,40.4,90,89.93,90l540.14-.28c49.53,0,89.93-40.43,89.93-90V90c0-49.57-40.4-90-89.93-90ZM380.3,341.8c-11.7,26.91-32.43,44.32-59.76,54.06-20.97,7.48-42.82,9.42-64.91,9.35-8.3-.03-16.59-.2-24.88-.5-2.62-.1-3.38.6-3.37,3.3.1,30.28.06,60.57.06,90.86,0,5.54-.75,6.31-6.15,6.31h-53.08c-5.4,0-5.9-.51-5.9-6.05V194.75c0-5,.47-5.43,5.45-5.49,30.18-.37,60.34-1.78,90.53-1.68,17.85.06,35.55,1.36,52.79,6.29,23.36,6.69,43.53,18.37,58.32,38.19,10.77,14.45,16.66,30.86,18.74,48.62,2.46,20.98.65,41.61-7.84,61.12ZM595.01,443.34c-3.51,30.88-21.73,50.12-50.13,60.58-16.35,6.02-33.42,7.65-50.72,7.48-20.89-.21-41.43-2.73-61.21-9.87-2.53-.92-4.99-2.03-7.47-3.09-2.99-1.27-4.41-3.47-4.38-6.8.08-8.39.03-16.79.03-25.19s-.02-16.2.01-24.29c.02-5.37,1.14-6,5.72-3.48,24.9,13.69,51.6,19.42,79.9,17.81,5.49-.32,10.89-1.39,15.9-3.89,8.56-4.26,10.5-14.17,4.15-21.31-2.97-3.35-6.67-5.69-10.6-7.71-9.79-5.03-20.2-8.59-30.35-12.76-14.18-5.83-27.75-12.82-39.67-22.62-36.31-29.85-29.04-81.1.6-105.17,13.4-10.89,28.79-17.2,45.74-19.42,24.58-3.21,49.05-1.85,73.29,3.4,4.49.98,8.79,2.6,13.09,4.23,2.51.96,3.99,2.59,4.07,5.33.09,3.59.19,7.19.2,10.79.02,12.39.02,24.79,0,37.19-.01,5.39-2.88,7.15-7.8,4.71-21.18-10.54-43.81-13.88-67.16-13.58-4.71.07-9.35,1.05-13.83,2.47-10.6,3.35-13.45,15.19-5.68,23.15,4.07,4.17,9.19,6.62,14.26,9.23,10.15,5.23,21.04,8.65,31.5,13.1,11.6,4.94,22.87,10.59,33.2,17.84,21.48,15.09,30.26,36.15,27.34,61.87Z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720.56 720" data-name="Illustrator Logo">
                                    <g>
                                        <path className="fill-1" d="M291.72,242.5c11.83,42.75,25.39,83.76,38.54,125.33h-75.63c12.15-41.51,26.41-82.19,37.09-125.33Z"/>
                                        <path className="fill-1" d="M630.35,0H90.21C40.68,0,.28,40.43.28,90v540c0,49.57,40.4,90,89.93,90l540.14-.28c49.53,0,89.93-40.43,89.93-90V90c0-49.57-40.4-90-89.93-90ZM436.74,503.66c-18.58,0-37.17-.19-55.75.12-5.37.09-7.76-1.94-9.39-6.84-7.09-21.29-14.57-42.46-21.71-63.73-1.13-3.37-2.7-4.43-6.28-4.41-34.2.15-68.4.15-102.6,0-3.46-.01-4.73,1.12-5.74,4.33-6.61,20.96-13.47,41.84-20.24,62.74-2.45,7.59-2.7,7.79-10.44,7.79h-48.72c-8.12,0-8.91-1.07-6.27-8.65,26.65-76.71,53.32-153.41,79.96-230.13,5.62-16.19,11.07-32.45,16.68-48.65,2.59-7.48,3.66-15.18,3.46-23.02-.11-4.58,1.75-5.99,6.12-5.92,12.02.19,24.05.07,36.08.07s23.74.11,35.6-.07c4.03-.05,6.07,1.34,7.47,5.28,35.71,101.12,71.55,202.2,107.36,303.28,2.46,6.93,1.84,7.8-5.59,7.81ZM543.9,384.84c0,37.49.01,74.98,0,112.47,0,7.34-.34,7.66-7.64,7.66-17.49,0-34.99.01-52.48,0-6.36-.01-7.18-.77-7.18-6.88-.01-75.45-.01-150.9,0-226.35,0-6,.7-6.7,6.75-6.71,17.96-.02,35.92-.02,53.89,0,5.86.01,6.65.83,6.66,6.87.01,37.64,0,75.29,0,112.94ZM510.63,239.84c-22.7-.2-37.33-15.33-37.16-38.44.15-21.4,16.4-37.02,38.24-36.76,22.19.26,36.46,15.33,36.21,38.25-.23,21.94-15.58,37.14-37.29,36.95Z"/>
                                    </g>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720.56 720" data-name="Figma Logo">
                                    <g>
                                        <path className="fill-1" d="M279.38,135.51h62.7v125.39h-62.7c-34.63,0-62.7-28.07-62.7-62.7s28.07-62.69,62.7-62.69Z"/>
                                        <path className="fill-1" d="M279.38,297.3h62.7v125.4h-62.7c-34.63,0-62.7-28.07-62.7-62.7s28.07-62.7,62.7-62.7Z"/>
                                        <path className="fill-1" d="M279.38,459.1h62.7v62.7c0,34.62-28.07,62.69-62.7,62.69s-62.7-28.07-62.7-62.69,28.07-62.7,62.7-62.7Z"/>
                                        <path className="fill-1" d="M503.88,360c0,34.63-28.07,62.7-62.7,62.7s-62.66-28.03-62.7-62.62v-.16c.04-34.56,28.06-62.58,62.62-62.62h.14c34.6.04,62.64,28.09,62.64,62.7Z"/>
                                        <path className="fill-1" d="M503.88,198.2c0,34.61-28.04,62.66-62.63,62.7h-62.77v-125.39h62.7c34.63,0,62.7,28.07,62.7,62.69Z"/>
                                        <path className="fill-1" d="M630.35,0H90.21C40.68,0,.28,40.43.28,90v540c0,49.57,40.4,90,89.93,90l540.14-.28c49.53,0,89.93-40.43,89.93-90V90c0-49.57-40.4-90-89.93-90ZM540.28,360c0,54.73-44.37,99.1-99.1,99.1-23.79,0-45.62-8.38-62.7-22.35v85.05c0,54.73-44.37,99.1-99.1,99.1s-99.1-44.37-99.1-99.1c0-33.41,16.53-62.95,41.85-80.9-25.32-17.95-41.85-47.5-41.85-80.9s16.53-62.95,41.85-80.9c-25.32-17.95-41.85-47.5-41.85-80.9,0-54.73,44.37-99.1,99.1-99.1h161.8c54.73,0,99.1,44.37,99.1,99.1,0,33.4-16.53,62.95-41.85,80.9,25.32,17.95,41.85,47.5,41.85,80.9Z"/>
                                    </g>
                                </svg>
                            </div>
                        </article>
                        <div className="project-heading-bg"/>
                        <div className="project-btn-wrap">
                            <div className={ `project-top-corner ${ inView2 ? `enable` : `disable` }` }></div>
                            <div className="project-btn-bot">
                                <div className={ `project-bot-corner ${ inView2 ? `enable` : `disable` }` }></div>
                                <div className={ `project-btn-bg ${ inView2 ? `enable` : `disable` }` }>
                                    <button type="button" href="/projects">
                                        <p>Preview</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div ref={ btn2 } className={ `project-btn ${ inView2 ? `enable` : `disable` }` }>
                            <button type="button" href="/projects">
                                <p text-glow="Preview">Preview</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="scroll-section" ref={ snap3 }>
                    <div className={ `project-wrap project-2 ${ inView3 ? `scale-in` : `scale-out` }` }>
                        <p className="project-sub" text-glow="Web Design">Web Design</p>
                        <div className="project-corner-wrap"></div>
                        <video className="project-img" loop autoPlay muted>
                            <source src="https://www.dropbox.com/scl/fi/qqsy7rcxiuu78k3zao961/Sonic-preview.mp4?rlkey=nifr14cd4wsj65qmfam7xzhso&st=xwh54hs9&raw=1" type="video/mp4"/>
                        </video>
                        <h2 className="project-heading-shimmer" text-shimmer="Sonic Animation">Sonic Animation</h2>
                        <article className="project-text">
                            <h2 className="project-heading-shimmer" text-shimmer="Sonic Animation">Sonic Animation</h2>
                            <p>Its Yipper is a gaming news outlet where we review new games and talk about trending topics in the gaming community. In addition to our blog, we post weekly video content across YouTube, Instagram, and TikTok.</p>
                            <div className="app-icons-wrap">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720.56 720" dataname="HTML Logo">
                                    <g>
                                        <path className="fill-2" d="M51.71,0l51.43,642.86,257.14,77.14,257.14-77.14L668.85,0H51.71ZM205.99,540l-12.86-128.57h77.14l12.86,64.29,77.14,25.71,77.14-25.71,12.86-102.86H193.14l-25.71-244.29h398.57l-12.86,77.14H244.57l12.86,90h282.86l-25.71,244.29-154.29,51.43-154.29-51.43Z"/>
                                        <polygon className="fill-1" points="437.42 475.71 360.28 501.43 360.28 372.86 450.28 372.86 437.42 475.71"/>
                                        <polygon className="fill-1" points="617.42 51.43 565.99 617.14 360.28 681.43 360.28 591.43 514.57 540 540.28 295.71 360.28 295.71 360.28 205.71 553.14 205.71 565.99 128.57 360.28 128.57 360.28 51.43 617.42 51.43"/>
                                    </g>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720.56 720" dataname="CSS Logo">
                                    <g>
                                        <path className="fill-2" d="M42.86,0l57.75,648.03,259.27,71.97,259.97-72.07L677.7,0H42.86ZM197.59,531.77l-11.14-124.8h79.8l5.65,63.39,88.39,23.88.12.03.08-.02v-.03l88.63-23.91,9.27-103.06h-185.51l-1.59-17.88-3.59-40.29-1.91-21.32h199.68l7.25-81.38H168.59l-1.6-17.87-3.62-40.3-1.9-21.32h398.11l-1.9,21.32-19.52,219.03h-.01l-13.51,151.1-1.21,13.42-162.65,45.08v.02l-.38.1-.1-.03-162.69-45.17Z"/>
                                        <polygon className="fill-1" points="360.4 494.28 360.28 494.25 360.28 367.25 458.39 367.25 449.12 470.31 360.49 494.23 360.49 494.26 360.4 494.28"/>
                                        <polygon className="fill-1" points="465.45 287.76 360.28 287.76 360.28 206.38 472.7 206.38 465.45 287.76"/>
                                        <polygon className="fill-1" points="619.79 52.99 570.37 606.68 360.28 664.92 360.28 576.95 360.38 576.98 360.76 576.87 360.76 576.85 523.41 531.77 524.63 518.35 538.13 367.25 538.14 367.25 557.66 148.22 559.57 126.89 360.28 126.89 360.28 52.99 619.79 52.99"/>
                                    </g>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720.56 720" dataname="JavaScript Logo">
                                    <g>
                                        <path class="fill-1" d="M630.35,0H90.21C41.45,0,1.54,39.18.31,87.68c-.02.77-.03,1.55-.03,2.32v540c0,.77.01,1.55.03,2.32,1.17,45.81,36.82,83.29,81.85,87.31,2.65.25,5.34.37,8.05.37l110.72-.06,429.42-.22c49.53,0,89.93-40.43,89.93-90V90c0-49.57-40.4-90-89.93-90ZM365.77,636.4c-16.66,16.79-42.95,26.68-75.29,26.68-53.03,0-82.48-25.84-101.28-61.59,18.09-11.55,36.59-22.71,55.44-33.52,7.68,21.5,33.65,45.68,62.95,30.79,18.58-9.44,16.43-38.05,16.43-69.11v-197.08c-.06-.97-.11-1.94.68-2.06h66.39v165.6c0,60.02,4.29,110.45-25.32,140.29ZM662.79,576.87c-3.77,56.2-49.66,86.04-111.55,86.21-60.68.18-99.51-26.79-123.2-68.43,17.03-11.72,36.32-21.16,54.07-32.15,14.21,22.2,38.8,43.55,75.29,40.37,22.72-1.98,49.11-20.51,34.21-48.59-7.22-13.61-24.68-20.52-40.37-27.37-49.81-21.73-108.25-41.66-102.66-119.75,1.87-26.09,13.88-44.42,29.43-57.48,15.94-13.39,37.28-22.36,65.7-23.27,51.61-1.65,79.92,21.31,99.23,53.38-16.43,12.53-34.54,23.4-52.7,34.21-5.95-18.31-34.72-36.15-58.85-25.32-10.98,4.93-20.84,19.39-15.06,36.95,5.16,15.67,26.2,24.24,43.12,31.49,51.22,21.92,108.46,43.35,103.34,119.75Z"/>
                                    </g>
                                </svg>
                            </div>
                        </article>
                        <div className="project-heading-bg"/>
                        <div className="project-btn-wrap">
                            <div className={ `project-top-corner ${ inView3 ? `enable` : `disable` }` }></div>
                            <div className="project-btn-bot">
                                <div className={ `project-bot-corner ${ inView3 ? `enable` : `disable` }` }></div>
                                <div className={ `project-btn-bg ${ inView3 ? `enable` : `disable` }` }>
                                    <button type="button" href="/projects">
                                        <p>Preview</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div ref={ btn3 } className={ `project-btn ${ inView3 ? `enable` : `disable` }` }>
                            <button type="button" href="/projects">
                                <p text-glow="Preview">Preview</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="scroll-section" ref={ snap4 }>
                    <div className={ `project-wrap project-2 ${ inView4 ? `scale-in` : `scale-out` }` }>
                        <p className="project-sub" text-glow="Branding">Branding</p>
                        <div className="project-corner-wrap"></div>
                        <video className="project-img" loop autoPlay muted>
                            <source src="https://www.dropbox.com/scl/fi/qa8qrm3en9y54tss75mhw/ItsYipper-Preview-720p.mp4?rlkey=8ixuz6ov2rl0mifj4yy15ij0w&st=qoloqjlt&raw=1" type="video/mp4"/>
                        </video>
                        <h2 className="project-heading-shimmer" text-shimmer="Edge Boards">Edge Boards</h2>
                        <article className="project-text">
                            <h2 className="project-heading-shimmer" text-shimmer="Edge Boards">Edge Boards</h2>
                            <p>Its Yipper is a gaming news outlet where we review new games and talk about trending topics in the gaming community. In addition to our blog, we post weekly video content across YouTube, Instagram, and TikTok.</p>
                            <div className="app-icons-wrap">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 720"><path d="M600 0H120C54 0 0 54 0 120v480c0 66 54 120 120 120h480c66 0 120-54 120-120V120C720 54 666 0 600 0ZM344.96 366.37c-24.99 24.99-64.27 36.73-108.64 36.73-11.73 0-22.44-.51-30.6-2.04v129.55H143.5V191.43c22.44-4.08 53.55-7.14 95.88-7.14 45.91 0 79.57 9.69 101.5 28.05 20.4 16.83 33.66 43.86 33.66 76 0 32.64-10.2 59.67-29.58 78.03Zm130.55 169.34c-30.09 0-57.12-7.14-75.49-17.34l12.24-45.39c14.28 8.67 41.31 17.85 63.76 17.85 27.54 0 39.78-11.22 39.78-27.54s-10.2-25.5-40.8-36.21c-48.46-16.83-68.85-43.35-68.34-72.43 0-43.86 36.21-78.03 93.84-78.03 27.54 0 51.52 7.14 65.79 14.79l-12.24 44.37c-10.71-6.12-30.6-14.28-52.53-14.28s-34.68 10.71-34.68 26.01 11.73 23.47 43.35 34.69c44.88 16.32 65.79 39.27 66.3 76 0 44.88-35.19 77.52-100.99 77.52Zm-163.7-244.82c0 40.29-28.56 63.25-75.49 63.25-12.75 0-22.95-.51-30.6-2.55V235.3c6.63-1.53 18.87-3.06 36.22-3.06 43.35 0 69.87 20.4 69.87 58.65Z" data-name="PS"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 720"><path d="m319.97 306.44 27.04 84.67h-88.24l26.52-84.67c6.12-20.4 11.22-44.37 16.32-64.27h1.02c5.1 19.89 10.71 43.35 17.34 64.27ZM720 120v480c0 66-54 120-120 120H120C54 720 0 666 0 600V120C0 54 54 0 120 0h480c66 0 120 54 120 120ZM456.16 535.96 344.46 192.2h-80.07L154.22 535.96H219l29.58-97.42h109.15l31.11 97.42h67.32Zm106.06-248.39h-63.25v248.39h63.25V287.57Zm3.57-69.36c-.51-19.38-13.77-34.17-35.19-34.17s-35.19 14.79-35.19 34.17 13.77 33.66 34.68 33.66c21.93 0 35.7-14.79 35.7-33.66Z"/></svg>
                            </div>
                        </article>
                        <div className="project-heading-bg"/>
                        <div className="project-btn-wrap">
                            <div className={ `project-top-corner ${ inView4 ? `enable` : `disable` }` }></div>
                            <div className="project-btn-bot">
                                <div className={ `project-bot-corner ${ inView4 ? `enable` : `disable` }` }></div>
                                <div className={ `project-btn-bg ${ inView4 ? `enable` : `disable` }` }>
                                    <button type="button" href="/projects">
                                        <p>Preview</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div ref={ btn4 } className={ `project-btn ${ inView4 ? `enable` : `disable` }` }>
                            <button type="button" href="/projects">
                                <p text-glow="Preview">Preview</p>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ProjectsPage