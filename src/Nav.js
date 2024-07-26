const Nav = () => {
    return (
        <nav>
            <div className="nav-wrap">
                <section className="nav-left">
                    <a className="nav-logo-wrap" href="">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Logo-SVG" data-name="Logo-SVG" viewBox="0 0 1440 700">
                            <defs>
                                <clipPath id="clippath">
                                    <path d="M729.84 246.27c-.84 0-1.68.01-2.52.05l-47.3 1.94 6.25 46.92c.22 1.66.33 3.37.33 5.09 0 4.2-.65 8.32-1.93 12.23l-2.06 6.27-3.99 5.3a39.283 39.283 0 0 1-5.14 5.58l-.15.14c-1.19 1.08-2.5 2.11-3.89 3.06l-18.8 12.87v100.5l14.38 12.88a97.056 97.056 0 0 0 64.82 24.77h43.2v-53.34c32.67-16.28 54-50.09 54-87.06 0-53.6-43.6-97.2-97.2-97.2Zm28.8 174.84v48.36h-28.8c-20.41 0-40.02-7.49-55.21-21.09l-9.59-8.59v-86.48l12.53-8.58a50.16 50.16 0 0 0 5.43-4.28l.13-.11c2.55-2.29 4.9-4.84 6.98-7.6l5.44-7.21 2.8-8.55a53.456 53.456 0 0 0 2.65-16.71c0-2.35-.15-4.71-.46-6.99L696.38 262l31.53-1.3c.64-.02 1.29-.03 1.93-.03 45.66 0 82.8 37.14 82.8 82.8 0 35.53-22.5 65.91-54 77.64Z"/>
                                </clipPath>
                            </defs>
                            <g id="Logo_2" data-name="Logo 2">
                            <g id="R_Logo" data-name="R Logo">
                                <path id="Base" d="M834.91 422.68c8.56 9.55 13.77 22.16 13.77 35.99v11.46c-9.55 8.54-22.17 13.74-36 13.74v-25.2c0-9.94-8.06-18-18-18v43.2c-13.83 0-26.45-5.2-36-13.74v-49.05c5.3-1.97 10.34-4.47 15.07-7.44 4.2-2.64 8.15-5.64 11.8-8.97h9.13c9.94 0 18-8.05 18-18 0-5.18-2.19-9.85-5.69-13.13 3.65-9.32 5.65-19.47 5.65-30.07 0-2.65-.13-5.28-.38-7.87 21.19 7.29 36.42 27.4 36.42 51.07 0 13.83-5.21 26.45-13.77 36.01Z" className="base-r"/>
                                <path id="Base" d="M834.91 422.68c8.56 9.55 13.77 22.16 13.77 35.99v11.46c-9.55 8.54-22.17 13.74-36 13.74v-25.2c0-9.94-8.06-18-18-18v43.2c-13.83 0-26.45-5.2-36-13.74v-49.05c5.3-1.97 10.34-4.47 15.07-7.44 4.2-2.64 8.15-5.64 11.8-8.97h9.13c9.94 0 18-8.05 18-18 0-5.18-2.19-9.85-5.69-13.13 3.65-9.32 5.65-19.47 5.65-30.07 0-2.65-.13-5.28-.38-7.87 21.19 7.29 36.42 27.4 36.42 51.07 0 13.83-5.21 26.45-13.77 36.01Z" className="base-r-mask base-nav"/>
                                <path id="Cirlce" d="M801.84 389.81c0 1.99-1.61 3.6-3.6 3.6h-4.7s.52-2.48.52-3.6c0-1.99 2.2-3.6 4.19-3.6s3.6 1.61 3.6 3.6Z" className="line-r-accent accent-nav"/>
                            </g>
                            <g id="P_Logo" data-name="P Logo">
                                <path id="Base-2" d="M783.84 343.47c0 29.83-24.18 54-54 54v43.2c-13.83 0-26.45-5.2-36-13.75V368.5c2.98-2.04 5.83-4.28 8.51-6.71a82.22 82.22 0 0 0 10.75-11.7c2.63 6.67 9.14 11.38 16.74 11.38 9.94 0 18-8.05 18-18s-8.06-18-18-18c-1.42 0-2.8.16-4.12.48a82.346 82.346 0 0 0 4.08-25.68c0-3.66-.24-7.26-.71-10.79.25-.01.5-.01.75-.01 29.82 0 54 24.18 54 54Z" className="base-p" data-name="Base"/>
                                <path id="Base-2" d="M783.84 343.47c0 29.83-24.18 54-54 54v43.2c-13.83 0-26.45-5.2-36-13.75V368.5c2.98-2.04 5.83-4.28 8.51-6.71a82.22 82.22 0 0 0 10.75-11.7c2.63 6.67 9.14 11.38 16.74 11.38 9.94 0 18-8.05 18-18s-8.06-18-18-18c-1.42 0-2.8.16-4.12.48a82.346 82.346 0 0 0 4.08-25.68c0-3.66-.24-7.26-.71-10.79.25-.01.5-.01.75-.01 29.82 0 54 24.18 54 54Z" className="base-p-mask base-nav" data-name="Base"/>
                                <path id="Circle" d="M729.84 339.87c-.27 0-.53.03-.73.07l-4.14 1.01 1.53 3.86c.41 1.04 1.53 2.26 3.34 2.26 1.99 0 3.6-1.62 3.6-3.6s-1.61-3.6-3.6-3.6Z" className="line-p-accent accent-nav"/>
                            </g>
                            <g id="Y_Logo" data-name="Y Logo">
                                <path id="Base-3" d="M701 300.27c0 23.52-15.03 43.52-36 50.93v46.27c-13.83 0-26.45-5.2-36-13.75V351.2c-20.97-7.41-36-27.41-36-50.93s15.03-43.51 36-50.92v50.92c0 9.94 8.06 18 18 18s18-8.06 18-18v-50.92c20.97 7.41 36 27.41 36 50.92Z" className="base-y" data-name="Base"/>
                                <path id="Base-4" d="M701 300.27c0 23.52-15.03 43.52-36 50.93v46.27c-13.83 0-26.45-5.2-36-13.75V351.2c-20.97-7.41-36-27.41-36-50.93s15.03-43.51 36-50.92v50.92c0 9.94 8.06 18 18 18s18-8.06 18-18v-50.92c20.97 7.41 36 27.41 36 50.92Z" className="base-y-mask base-nav" data-name="Base"/>
                            </g>
                            <path id="R_Outline" d="M793.43 318.28c.42 0 .83-.01 1.25-.01 37.72 0 68.4 30.68 68.4 68.4 0 12.75-3.79 25.2-9.92 35.47l-.33.54a68.255 68.255 0 0 1 10.25 35.99v17.9l-4.8 4.29a68.346 68.346 0 0 1-45.6 17.41h-18c-16.85 0-33.05-6.18-45.6-17.41l-4.84-4.29v-21.5" className="line-r line-nav" data-name="R Outline"/>
                            <path id="P_Outline" d="M711.51 277.56a68.048 68.048 0 0 1 18.33-2.49c37.72 0 68.4 30.68 68.4 68.4 0 32.78-23.18 60.25-54 66.88V455.07h-14.4c-16.86 0-33.06-6.19-45.61-17.42l-4.79-4.31-.04-21.47" className="line-p line-nav" data-name="P Outline"/>
                            <path id="Y_Outline" d="M679.4 410.32v1.55H665c-16.86 0-33.06-6.19-45.6-17.42l-4.8-4.29v-29.64c-21.43-11.56-36.03-34.23-36.03-60.25 0-36.99 28.12-67.22 64.83-68.37v68.37c0 1.99 1.62 3.6 3.6 3.6s3.6-1.61 3.6-3.6v-68.36c36.7 1.17 64.77 31.39 64.77 68.36 0 26-14.58 48.65-35.99 60.22l.02 49.83Z" className="line-y line-nav" data-name="Y Outline"/>
                            </g>
                        </svg>
                    </a>
                </section>
                <section className="nav-mid">
                    <a className="nav-heading nav-home" href="/" text-glow="Home">Home</a>
                    <a className="nav-heading nav-about" href="about" text-glow="About">About</a>
                    <a className="nav-heading nav-projects" href="projects" text-glow="Projects">Projects</a>
                    <div className="nav-heading-bg"></div>
                    <div className="about-preview">
                        <div className="about">
                            <div className="about-scroll">
                                <section className="about-img-section">
                                    <article/>
                                    <div className="about-img-wrap">
                                        <div className="about-img-1">
                                            <img src="https://www.dropbox.com/scl/fi/jakfcghe5pc3xotzq9nay/yipper-profile.png?rlkey=n6adv16tacga0b5dmnylymtko&st=mzxqu7ld&raw=1" alt='Christian Yip "Yipper" profile photo'/>
                                        </div>
                                    </div>
                                </section>
                                <section className="about-section">
                                    <article>
                                        <h1 className="about-heading-shimmer" text-shimmer="Hey There!">Hey There!</h1>
                                        <div className="about-heading-wrap">
                                            <span className="indent"/>
                                            <h1 className="about-heading-shimmer" text-shimmer="I'm">I'm</h1>
                                            <h1 className="about-heading-float">
                                                <span text-glow="C">C</span>
                                                <span text-glow="h">h</span>
                                                <span text-glow="r">r</span>
                                                <span text-glow="i">i</span>
                                                <span text-glow="s">s</span>
                                                <span text-glow="t">t</span>
                                                <span text-glow="i">i</span>
                                                <span text-glow="a">a</span>
                                                <span text-glow="n">n</span>
                                                <span text-glow=".">.</span>
                                            </h1>
                                        </div>
                                        <div className="quote-wrap">
                                            <p className="quote-text">Empowering users by creating intuitive,<br/>engaging, and innovative experiences.</p>
                                        </div>
                                        <h3>About Me</h3>
                                        <p>From ice hockey official to photography enthusiast, front-end development marks the next chapter in life.</p>
                                        <p>My passion to explore creative ideas has led me to deliver unique user experiences. I hope to build engaging websites that highlight diverse personalities.</p>
                                    </article>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="projects-preview">
                        <div className="projects">
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
                                <div className="scroll-section">
                                    <div className="project-wrap project-1">
                                        <p className="project-sub" text-glow="Web Design">Web Design</p>
                                        <div className="project-corner-wrap"></div>
                                        <video className="project-img" loop autoPlay muted>
                                            <source src="https://www.dropbox.com/scl/fi/gftktvruwyq90jdxj31ih/ItsYipper-Intro-720p-comp.mp4?rlkey=1bvcxgetbkygn3rcbp93ouw4x&st=xt6vmdm0&raw=1" type="video/mp4"/>
                                        </video>
                                        <h2 className="project-heading-shimmer" text-shimmer="ItsYipper">ItsYipper</h2>
                                        <article className="project-text">
                                            <h2 className="project-heading-shimmer" text-shimmer="ItsYipper">ItsYipper</h2>
                                            <p>ItsYipper delivers in-depth reviews of the latest games and sparking conversations about trending topics within the community. Dive deeper into the gaming world with our interactive website. Explore the gaming landscape with original blogs and captivating video stories.</p>
                                        </article>
                                        <div className="app-icons-wrap">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720.78 720.5">
                                                <g>
                                                    <g>
                                                        <path class="webflow-dark" d="M630.57.25H90.43C40.9.25.5,40.68.5,90.25v540c0,49.57,40.4,90,89.93,90l540.14-.28c49.53,0,89.93-40.43,89.93-90V90.25C720.5,40.68,680.1.25,630.57.25ZM464.57,505.91h-129.47l57.69-111.69h-2.59c-47.59,61.78-118.6,102.46-219.78,111.69v-110.15s64.73-3.82,102.78-43.83h-102.78v-115.52h115.51v95.01h2.59s47.2-95.01,47.2-95.01h87.36v94.41h2.59l48.97-94.41h127.78l-137.85,269.5Z"/>
                                                        <path class="icon-white" d="M602.42,236.41l-137.85,269.5h-129.47l57.69-111.69h-2.59c-47.59,61.78-118.6,102.46-219.78,111.69v-110.15s64.73-3.82,102.78-43.83h-102.78v-115.52h115.51v95.01h2.59s47.2-95.01,47.2-95.01h87.36v94.41h2.59l48.97-94.41h127.78Z"/>
                                                    </g>
                                                </g>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720.78 720.5">
                                                <g>
                                                    <g>
                                                    <g>
                                                        <path className="ps-dark" d="M315.38,267.69c7.52,10.53,9.14,22.45,8.34,35.07-1.48,23.23-17.32,36.46-37.5,41.88-10.68,2.86-21.51,4.38-32.57,4.21-7.79-.12-15.58.25-23.37-.42-2.01-.18-2.4-.85-2.39-2.68.06-15.99.03-31.98.03-47.97s-.01-31.78.02-47.67c0-1.15-.61-2.75,1.59-2.76,19.23-.1,38.56-2.42,57.55,2.53,11.31,2.95,21.33,8.03,28.3,17.81Z"/>
                                                        <path className="ps-dark" d="M630.57.25H90.43C40.9.25.5,40.68.5,90.25v540c0,49.57,40.4,90,89.93,90l540.14-.28c49.53,0,89.93-40.43,89.93-90V90.25C720.5,40.68,680.1.25,630.57.25ZM380.52,342.05c-11.7,26.91-32.43,44.32-59.76,54.06-20.97,7.48-42.82,9.42-64.91,9.35-8.3-.03-16.59-.2-24.88-.5-2.62-.1-3.38.6-3.37,3.3.1,30.28.06,60.57.06,90.86,0,5.54-.75,6.31-6.15,6.31h-53.08c-5.4,0-5.9-.51-5.9-6.05V195c0-5,.47-5.43,5.45-5.49,30.18-.37,60.34-1.78,90.53-1.68,17.85.06,35.55,1.36,52.79,6.29,23.36,6.69,43.53,18.37,58.32,38.19,10.77,14.45,16.66,30.86,18.74,48.62,2.46,20.98.65,41.61-7.84,61.12ZM595.23,443.59c-3.51,30.88-21.73,50.12-50.13,60.58-16.35,6.02-33.42,7.65-50.72,7.48-20.89-.21-41.43-2.73-61.21-9.87-2.53-.92-4.99-2.03-7.47-3.09-2.99-1.27-4.41-3.47-4.38-6.8.08-8.39.03-16.79.03-25.19s-.02-16.2.01-24.29c.02-5.37,1.14-6,5.72-3.48,24.9,13.69,51.6,19.42,79.9,17.81,5.49-.32,10.89-1.39,15.9-3.89,8.56-4.26,10.5-14.17,4.15-21.31-2.97-3.35-6.67-5.69-10.6-7.71-9.79-5.03-20.2-8.59-30.35-12.76-14.18-5.83-27.75-12.82-39.67-22.62-36.31-29.85-29.04-81.1.6-105.17,13.4-10.89,28.79-17.2,45.74-19.42,24.58-3.21,49.05-1.85,73.29,3.4,4.49.98,8.79,2.6,13.09,4.23,2.51.96,3.99,2.59,4.07,5.33.09,3.59.19,7.19.2,10.79.02,12.39.02,24.79,0,37.19-.01,5.39-2.88,7.15-7.8,4.71-21.18-10.54-43.81-13.88-67.16-13.58-4.71.07-9.35,1.05-13.83,2.47-10.6,3.35-13.45,15.19-5.68,23.15,4.07,4.17,9.19,6.62,14.26,9.23,10.15,5.23,21.04,8.65,31.5,13.1,11.6,4.94,22.87,10.59,33.2,17.84,21.48,15.09,30.26,36.15,27.34,61.87Z"/>
                                                    </g>
                                                        <path className="ps-light" d="M388.36,280.93c-2.08-17.76-7.97-34.17-18.74-48.62-14.79-19.82-34.96-31.5-58.32-38.19-17.24-4.93-34.94-6.23-52.79-6.29-30.19-.1-60.35,1.31-90.53,1.68-4.98.06-5.45.49-5.45,5.49v304.38c0,5.54.5,6.05,5.9,6.05h53.08c5.4,0,6.15-.77,6.15-6.31,0-30.29.04-60.58-.06-90.86,0-2.7.75-3.4,3.37-3.3,8.29.3,16.58.47,24.88.5,22.09.07,43.94-1.87,64.91-9.35,27.33-9.74,48.06-27.15,59.76-54.06,8.49-19.51,10.3-40.14,7.84-61.12ZM323.72,302.76c-1.48,23.23-17.32,36.46-37.5,41.88-10.68,2.86-21.51,4.38-32.57,4.21-7.79-.12-15.58.25-23.37-.42-2.01-.18-2.4-.85-2.39-2.68.06-15.99.03-31.98.03-47.97s-.01-31.78.02-47.67c0-1.15-.61-2.75,1.59-2.76,19.23-.1,38.56-2.42,57.55,2.53,11.31,2.95,21.33,8.03,28.3,17.81,7.52,10.53,9.14,22.45,8.34,35.07Z"/>
                                                        <path className="ps-light" d="M595.23,443.59c-3.51,30.88-21.73,50.12-50.13,60.58-16.35,6.02-33.42,7.65-50.72,7.48-20.89-.21-41.43-2.73-61.21-9.87-2.53-.92-4.99-2.03-7.47-3.09-2.99-1.27-4.41-3.47-4.38-6.8.08-8.39.03-16.79.03-25.19s-.02-16.2.01-24.29c.02-5.37,1.14-6,5.72-3.48,24.9,13.69,51.6,19.42,79.9,17.81,5.49-.32,10.89-1.39,15.9-3.89,8.56-4.26,10.5-14.17,4.15-21.31-2.97-3.35-6.67-5.69-10.6-7.71-9.79-5.03-20.2-8.59-30.35-12.76-14.18-5.83-27.75-12.82-39.67-22.62-36.31-29.85-29.04-81.1.6-105.17,13.4-10.89,28.79-17.2,45.74-19.42,24.58-3.21,49.05-1.85,73.29,3.4,4.49.98,8.79,2.6,13.09,4.23,2.51.96,3.99,2.59,4.07,5.33.09,3.59.19,7.19.2,10.79.02,12.39.02,24.79,0,37.19-.01,5.39-2.88,7.15-7.8,4.71-21.18-10.54-43.81-13.88-67.16-13.58-4.71.07-9.35,1.05-13.83,2.47-10.6,3.35-13.45,15.19-5.68,23.15,4.07,4.17,9.19,6.62,14.26,9.23,10.15,5.23,21.04,8.65,31.5,13.1,11.6,4.94,22.87,10.59,33.2,17.84,21.48,15.09,30.26,36.15,27.34,61.87Z"/>
                                                    </g>
                                                </g>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720.78 720.5">
                                                <g>
                                                    <g>
                                                    <g>
                                                        <path className="ai-dark" d="M291.94,242.75c11.83,42.75,25.39,83.76,38.54,125.33h-75.63c12.15-41.51,26.41-82.19,37.09-125.33Z"/>
                                                        <path className="ai-dark" d="M630.57.25H90.43C40.9.25.5,40.68.5,90.25v540c0,49.57,40.4,90,89.93,90l540.14-.28c49.53,0,89.93-40.43,89.93-90V90.25C720.5,40.68,680.1.25,630.57.25ZM436.96,503.91c-18.58,0-37.17-.19-55.75.12-5.37.09-7.76-1.94-9.39-6.84-7.09-21.29-14.57-42.46-21.71-63.73-1.13-3.37-2.7-4.43-6.28-4.41-34.2.15-68.4.15-102.6,0-3.46-.01-4.73,1.12-5.74,4.33-6.61,20.96-13.47,41.84-20.24,62.74-2.45,7.59-2.7,7.79-10.44,7.79h-48.72c-8.12,0-8.91-1.07-6.27-8.65,26.65-76.71,53.32-153.41,79.96-230.13,5.62-16.19,11.07-32.45,16.68-48.65,2.59-7.48,3.66-15.18,3.46-23.02-.11-4.58,1.75-5.99,6.12-5.92,12.02.19,24.05.07,36.08.07s23.74.11,35.6-.07c4.03-.05,6.07,1.34,7.47,5.28,35.71,101.12,71.55,202.2,107.36,303.28,2.46,6.93,1.84,7.8-5.59,7.81ZM544.12,385.09c0,37.49.01,74.98,0,112.47,0,7.34-.34,7.66-7.64,7.66-17.49,0-34.99.01-52.48,0-6.36-.01-7.18-.77-7.18-6.88-.01-75.45-.01-150.9,0-226.35,0-6,.7-6.7,6.75-6.71,17.96-.02,35.92-.02,53.89,0,5.86.01,6.65.83,6.66,6.87.01,37.64,0,75.29,0,112.94ZM510.85,240.09c-22.7-.2-37.33-15.33-37.16-38.44.15-21.4,16.4-37.02,38.24-36.76,22.19.26,36.46,15.33,36.21,38.25-.23,21.94-15.58,37.14-37.29,36.95Z"/>
                                                    </g>
                                                        <path className="ai-light" d="M442.55,496.1c-35.81-101.08-71.65-202.16-107.36-303.28-1.4-3.94-3.44-5.33-7.47-5.28-11.86.18-23.73.07-35.6.07s-24.06.12-36.08-.07c-4.37-.07-6.23,1.34-6.12,5.92.2,7.84-.87,15.54-3.46,23.02-5.61,16.2-11.06,32.46-16.68,48.65-26.64,76.72-53.31,153.42-79.96,230.13-2.64,7.58-1.85,8.65,6.27,8.65h48.72c7.74,0,7.99-.2,10.44-7.79,6.77-20.9,13.63-41.78,20.24-62.74,1.01-3.21,2.28-4.34,5.74-4.33,34.2.15,68.4.15,102.6,0,3.58-.02,5.15,1.04,6.28,4.41,7.14,21.27,14.62,42.44,21.71,63.73,1.63,4.9,4.02,6.93,9.39,6.84,18.58-.31,37.17-.12,55.75-.12,7.43-.01,8.05-.88,5.59-7.81ZM254.85,368.08c12.15-41.51,26.41-82.19,37.09-125.33,11.83,42.75,25.39,83.76,38.54,125.33h-75.63Z"/>
                                                        <path className="ai-light" d="M544.12,272.15c.01,37.64,0,75.29,0,112.94s.01,74.98,0,112.47c0,7.34-.34,7.66-7.64,7.66-17.49,0-34.99.01-52.48,0-6.36-.01-7.18-.77-7.18-6.88-.01-75.45-.01-150.9,0-226.35,0-6,.7-6.7,6.75-6.71,17.96-.02,35.92-.02,53.89,0,5.86.01,6.65.83,6.66,6.87Z"/>
                                                        <path className="ai-light" d="M473.69,201.65c.15-21.4,16.4-37.02,38.24-36.76,22.19.26,36.46,15.33,36.21,38.25-.23,21.94-15.58,37.14-37.29,36.95-22.7-.2-37.33-15.33-37.16-38.44Z"/>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
                <section className="nav-right">
                    <div className="nav-icon-wrap">
                        <a className="nav-icon nav-email" href="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44">
                                <path className="email-icon" d="M22 9.97c-7.18 0-13 4.95-13 11.05 0 2.95 1.36 5.64 3.58 7.62v4.86c0 .4.43.65.78.45l4.33-2.5c1.35.4 2.8.62 4.31.62 7.18 0 13-4.95 13-11.05S29.18 9.97 22 9.97Zm-7.08 13.4c-1.29 0-2.34-1.05-2.34-2.34s1.05-2.34 2.34-2.34 2.34 1.05 2.34 2.34-1.05 2.34-2.34 2.34Zm7.08 0c-1.29 0-2.34-1.05-2.34-2.34s1.05-2.34 2.34-2.34 2.34 1.05 2.34 2.34-1.05 2.34-2.34 2.34Zm7.08 0c-1.29 0-2.34-1.05-2.34-2.34s1.05-2.34 2.34-2.34 2.34 1.05 2.34 2.34-1.05 2.34-2.34 2.34Z"/>
                            </svg>
                        </a>
                        <a className="nav-icon nav-linkedin" href="https://www.linkedin.com/in/christianyipper/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44">
                                <path d="M22 9C14.82 9 9 14.82 9 22s5.82 13 13 13 13-5.82 13-13S29.18 9 22 9Zm-3.91 19.57c0 .18-.04.25-.23.25-.81-.01-1.63 0-2.44 0-.18 0-.23-.05-.23-.23V19.83c0-.21.06-.26.26-.26.8.01 1.6 0 2.4 0 .19 0 .24.05.24.24v8.75Zm-1.44-10.18c-.92 0-1.7-.78-1.69-1.7 0-.92.76-1.67 1.69-1.67.93 0 1.69.74 1.69 1.67 0 .93-.76 1.7-1.69 1.7Zm12.18 10.15c0 .27 0 .27-.28.27h-2.4c-.2 0-.25-.06-.25-.25v-4.54c0-.31-.03-.62-.08-.92-.15-.87-.75-1.3-1.62-1.18-.81.11-1.24.54-1.38 1.37-.05.32-.08.64-.08.96v4.3c0 .2-.05.26-.26.26-.81-.01-1.62 0-2.42 0-.16 0-.22-.04-.22-.21v-8.79c0-.18.06-.23.23-.23h2.32c.18 0 .24.05.23.23-.01.32 0 .64 0 .97.4-.57.91-.99 1.56-1.21 1.01-.34 2.01-.28 2.97.15.86.39 1.27 1.14 1.48 2.02.16.69.2 1.4.2 2.1v4.7Z"/>
                            </svg>
                        </a>
                        <a className="nav-icon nav-github" href="https://github.com/Yipper91">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44">
                                <path d="M9 21.49c.07-.48.12-.95.2-1.42.3-1.86 1.01-3.55 2.07-5.1 1.61-2.34 3.76-3.98 6.43-4.93 1.81-.65 3.68-.83 5.6-.65 2.38.22 4.53 1.07 6.44 2.49 2.33 1.73 3.9 4 4.73 6.78.53 1.78.65 3.61.39 5.45-.51 3.63-2.31 6.5-5.2 8.71-1.05.8-2.23 1.37-3.47 1.8-.57.2-.96-.08-.96-.68v-3.38c0-.56-.03-1.12-.28-1.64-.14-.3-.34-.58-.52-.86.47-.09.99-.15 1.49-.28 1.32-.34 2.51-.93 3.31-2.09.58-.85.86-1.81.97-2.82.09-.77.12-1.53-.03-2.3-.16-.85-.53-1.6-1.1-2.25-.1-.12-.12-.21-.07-.36.37-1.07.23-2.12-.17-3.14-.02-.06-.13-.12-.21-.13-.45-.06-.88.06-1.28.25-.66.31-1.29.66-1.94.99-.12.06-.28.09-.4.06-2.03-.51-4.05-.51-6.07 0-.12.03-.29 0-.39-.07-.83-.53-1.7-.94-2.64-1.19-.02 0-.03-.01-.05-.01-.61-.13-.71-.06-.89.54-.27.92-.32 1.84 0 2.77.03.07 0 .2-.05.26-1.09 1.24-1.34 2.71-1.19 4.29.09.93.31 1.81.72 2.65.59 1.18 1.58 1.89 2.77 2.31.71.25 1.47.35 2.21.52.04 0 .08.01.09.01-.19.34-.38.68-.56 1.03-.06.12-.11.26-.11.39-.01.27-.15.4-.4.47-.82.22-1.64.37-2.43-.12-.41-.25-.72-.61-.96-1.02-.37-.64-.9-1.1-1.61-1.31-.26-.08-.56-.06-.84-.04-.17.01-.23.15-.11.29.12.14.23.31.38.4.7.4 1.09 1.04 1.4 1.75.18.4.35.8.69 1.11.55.49 1.2.68 1.91.71.61.03 1.23 0 1.88 0v1.23c0 .33.01.66.01.99 0 .61-.4.9-.98.71-1.92-.65-3.61-1.69-5.03-3.14-1.37-1.41-2.42-3.03-3.07-4.9-.37-1.06-.58-2.15-.67-3.27 0-.1-.03-.2-.04-.3v-1.52Z"/>
                            </svg>
                        </a>
                        <div className="nav-icon-bg"></div>
                    </div>
                </section>
            </div>
        </nav>
    )
}

export default Nav