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
                            <source src="https://www.dropbox.com/scl/fi/qa8qrm3en9y54tss75mhw/ItsYipper-Preview-720p.mp4?rlkey=8ixuz6ov2rl0mifj4yy15ij0w&st=qoloqjlt&raw=1" type="video/mp4"/>
                        </video>
                        <h2 className="project-heading-shimmer" text-shimmer="ItsYipper">ItsYipper</h2>
                        <article className="project-text">
                            <h2 className="project-heading-shimmer" text-shimmer="ItsYipper">ItsYipper</h2>
                            <p>Its Yipper is a gaming news outlet where we review new games and talk about trending topics in the gaming community. In addition to our blog, we post weekly video content across YouTube, Instagram, and TikTok.</p>
                            <div className="app-icons-wrap">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 720"><path d="M630.07.28H89.93C40.4.28 0 40.68 0 90.21v539.58c0 49.53 40.4 89.93 89.93 89.93l540.14-.27c49.53 0 89.93-40.4 89.93-89.93V90.21C720 40.68 679.6.28 630.07.28ZM463.92 505.43H334.64l57.6-111.52h-2.59c-47.52 61.69-118.42 102.31-219.44 111.52V395.46s64.63-3.82 102.62-43.77H170.21V236.35h115.33v94.87h2.59l47.13-94.87h87.22v94.27h2.59l48.9-94.27h127.58L463.92 505.43Z" data-name="Webflow Logo"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 720"><path d="M600 0H120C54 0 0 54 0 120v480c0 66 54 120 120 120h480c66 0 120-54 120-120V120C720 54 666 0 600 0ZM344.96 366.37c-24.99 24.99-64.27 36.73-108.64 36.73-11.73 0-22.44-.51-30.6-2.04v129.55H143.5V191.43c22.44-4.08 53.55-7.14 95.88-7.14 45.91 0 79.57 9.69 101.5 28.05 20.4 16.83 33.66 43.86 33.66 76 0 32.64-10.2 59.67-29.58 78.03Zm130.55 169.34c-30.09 0-57.12-7.14-75.49-17.34l12.24-45.39c14.28 8.67 41.31 17.85 63.76 17.85 27.54 0 39.78-11.22 39.78-27.54s-10.2-25.5-40.8-36.21c-48.46-16.83-68.85-43.35-68.34-72.43 0-43.86 36.21-78.03 93.84-78.03 27.54 0 51.52 7.14 65.79 14.79l-12.24 44.37c-10.71-6.12-30.6-14.28-52.53-14.28s-34.68 10.71-34.68 26.01 11.73 23.47 43.35 34.69c44.88 16.32 65.79 39.27 66.3 76 0 44.88-35.19 77.52-100.99 77.52Zm-163.7-244.82c0 40.29-28.56 63.25-75.49 63.25-12.75 0-22.95-.51-30.6-2.55V235.3c6.63-1.53 18.87-3.06 36.22-3.06 43.35 0 69.87 20.4 69.87 58.65Z" data-name="Photoshop Logo"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 720"><path d="m319.97 306.44 27.04 84.67h-88.24l26.52-84.67c6.12-20.4 11.22-44.37 16.32-64.27h1.02c5.1 19.89 10.71 43.35 17.34 64.27ZM720 120v480c0 66-54 120-120 120H120C54 720 0 666 0 600V120C0 54 54 0 120 0h480c66 0 120 54 120 120ZM456.16 535.96 344.46 192.2h-80.07L154.22 535.96H219l29.58-97.42h109.15l31.11 97.42h67.32Zm106.06-248.39h-63.25v248.39h63.25V287.57Zm3.57-69.36c-.51-19.38-13.77-34.17-35.19-34.17s-35.19 14.79-35.19 34.17 13.77 33.66 34.68 33.66c21.93 0 35.7-14.79 35.7-33.66Z" data-name="Illustrator Logo"/></svg>
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
                            <source src="https://www.dropbox.com/scl/fi/quh7i2khpazk0t94upupe/StripesNationPreview.mp4?rlkey=ovqkq2qs2ucq1wxbpivgcqw4b&st=5ig9q4ce&raw=1" type="video/mp4"/>
                        </video>
                        <h2 className="project-heading-shimmer" text-shimmer="Stripes Nation">Stripes Nation</h2>
                        <article className="project-text">
                            <h2 className="project-heading-shimmer" text-shimmer="Stripes Nation">Stripes Nation</h2>
                            <p>Its Yipper is a gaming news outlet where we review new games and talk about trending topics in the gaming community. In addition to our blog, we post weekly video content across YouTube, Instagram, and TikTok.</p>
                            <div className="app-icons-wrap">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 720"><path d="M600 0H120C54 0 0 54 0 120v480c0 66 54 120 120 120h480c66 0 120-54 120-120V120C720 54 666 0 600 0ZM344.96 366.37c-24.99 24.99-64.27 36.73-108.64 36.73-11.73 0-22.44-.51-30.6-2.04v129.55H143.5V191.43c22.44-4.08 53.55-7.14 95.88-7.14 45.91 0 79.57 9.69 101.5 28.05 20.4 16.83 33.66 43.86 33.66 76 0 32.64-10.2 59.67-29.58 78.03Zm130.55 169.34c-30.09 0-57.12-7.14-75.49-17.34l12.24-45.39c14.28 8.67 41.31 17.85 63.76 17.85 27.54 0 39.78-11.22 39.78-27.54s-10.2-25.5-40.8-36.21c-48.46-16.83-68.85-43.35-68.34-72.43 0-43.86 36.21-78.03 93.84-78.03 27.54 0 51.52 7.14 65.79 14.79l-12.24 44.37c-10.71-6.12-30.6-14.28-52.53-14.28s-34.68 10.71-34.68 26.01 11.73 23.47 43.35 34.69c44.88 16.32 65.79 39.27 66.3 76 0 44.88-35.19 77.52-100.99 77.52Zm-163.7-244.82c0 40.29-28.56 63.25-75.49 63.25-12.75 0-22.95-.51-30.6-2.55V235.3c6.63-1.53 18.87-3.06 36.22-3.06 43.35 0 69.87 20.4 69.87 58.65Z" data-name="Photoshop Logo"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 720"><path d="m319.97 306.44 27.04 84.67h-88.24l26.52-84.67c6.12-20.4 11.22-44.37 16.32-64.27h1.02c5.1 19.89 10.71 43.35 17.34 64.27ZM720 120v480c0 66-54 120-120 120H120C54 720 0 666 0 600V120C0 54 54 0 120 0h480c66 0 120 54 120 120ZM456.16 535.96 344.46 192.2h-80.07L154.22 535.96H219l29.58-97.42h109.15l31.11 97.42h67.32Zm106.06-248.39h-63.25v248.39h63.25V287.57Zm3.57-69.36c-.51-19.38-13.77-34.17-35.19-34.17s-35.19 14.79-35.19 34.17 13.77 33.66 34.68 33.66c21.93 0 35.7-14.79 35.7-33.66Z" data-name="Illustrator Logo"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 720"><path d="M630.07.28H89.93C40.4.28 0 40.68 0 90.21v539.58c0 49.53 40.4 89.93 89.93 89.93l540.14-.27c49.53 0 89.93-40.4 89.93-89.93V90.21C720 40.68 679.6.28 630.07.28ZM342.44 516.09c0 33.4-27.08 60.48-60.48 60.48s-60.49-27.08-60.49-60.48 27.09-60.49 60.49-60.49h60.48v60.49Zm0-95.61h-60.48c-33.4 0-60.48-27.08-60.48-60.49s27.08-60.48 60.48-60.48h60.48v120.97Zm0-156.09h-60.48c-33.4 0-60.48-27.08-60.48-60.48s27.08-60.48 60.48-60.48h60.48v120.96Zm95.6 156.09c-33.08 0-59.96-26.56-60.48-59.52v-1.94c.52-32.95 27.4-59.51 60.48-59.51s60.49 27.08 60.49 60.48-27.08 60.49-60.49 60.49Zm-.01-156.09h-60.47V143.43h60.48c33.41 0 60.49 27.08 60.49 60.48s-27.09 60.48-60.5 60.48Z" data-name="Figma Logo"/></svg>
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
                            <source src="https://www.dropbox.com/scl/fi/gpeuigb4b2395wyu7v9ql/Sonic-Preview-720p.mp4?rlkey=tsfb1oh76pcvjgjzmtmd6299n&st=98ewsi31&raw=1" type="video/mp4"/>
                        </video>
                        <h2 className="project-heading-shimmer" text-shimmer="Sonic Animation">Sonic Animation</h2>
                        <article className="project-text">
                            <h2 className="project-heading-shimmer" text-shimmer="Sonic Animation">Sonic Animation</h2>
                            <p>Its Yipper is a gaming news outlet where we review new games and talk about trending topics in the gaming community. In addition to our blog, we post weekly video content across YouTube, Instagram, and TikTok.</p>
                            <div className="app-icons-wrap">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 720"><path d="M555.66 216H245.23l7.42 72h295.63c-4.33 63.07-17.44 196.7-22.25 257.5l-166.05 46.74v.14l-.37.18-166.16-58.46-11.38-138.09h81.45l5.77 74.27 90.48 33.73h.22l90.33-32.4 9.29-111.6H178.44c-1.36-14.43-18.84-201.88-21.89-216h406.38c-2.28 23.77-4.59 48.16-7.27 72ZM36 0l58.97 653.33L359.61 720l265.34-68.01L684 0H36Z" data-name="HTML Logo"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 720"><path d="m680 0-60.01 649.99-260 70.01-260-70.01L40 0h640ZM559.08 132.17H156.91l9.7 78.49h204l-10.85 4.52-186.09 77.5 6.17 76.72 179.92.58 96.43.31-6.17 102.3L359.76 498v-.08l-.74.21-87.17-22-5.29-63.5h-81.43l10.58 122.59 164.04 48.51v-.09l.3.09 163.16-47.63 21.16-243.42H359.29l.46-.2 191.39-81.82 7.93-78.49Z" data-name="CSS Logo"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 720"><path d="M630.07.28H89.93C40.4.28 0 40.68 0 90.21v539.58c0 49.53 40.4 89.93 89.93 89.93l540.14-.28c49.53 0 89.93-40.4 89.93-89.93V90.21C720 40.68 679.6.28 630.07.28ZM204.09 590.33l50.31-35.16c9.71 17.21 18.47 29.42 39.66 29.42s33.03-10.3 33.03-41.2V327.1h65.81v217.14c0 64.06-39.45 97.93-94.24 97.93-49.49 0-79.14-18.93-93.72-51.84h-.86Zm331.22 47.13c-57.42 0-94.54-27.38-112.63-63.18l50.35-29.16c13.26 21.65 30.47 37.54 60.97 37.54 25.6 0 41.95-12.8 41.95-30.48 0-26.57-35.47-36.98-60.51-47.7-44.62-18.99-74.23-42.85-74.23-93.22 0-46.37 35.34-81.7 90.59-81.7 39.29 0 67.59 13.69 87.89 49.45l-48.14 30.93c-10.59-18.99-22.08-26.49-39.75-26.49s-29.62 11.48-29.62 26.49c0 18.56 11.49 26.06 38.01 37.55 55.58 23.81 97.62 42.55 97.62 103.81 0 55.67-43.73 86.15-102.5 86.15Z" data-name="JavaScript Logo"/></svg>
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