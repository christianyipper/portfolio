import Card1 from './ProjectCard1';

const ProjectsPage = () => {
    return (
        <main className="projects">
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
            <div className="project-wrap ">
                <img className="project-img" src="https://www.dropbox.com/scl/fi/2qgmoloi41l30ja36njf2/ItsYipper-Preiew.gif?rlkey=1eecwxwkpmjafgvqcod9pbrhg&st=5ff59mwb&raw=1" alt='ItsYipper project trailer'/>
                <h2 className="project-heading-shimmer" text-shimmer="ItsYipper">ItsYipper</h2>
                <article className="project-text">
                    <h2 className="project-heading-shimmer" text-shimmer="ItsYipper - Webflow Website">ItsYipper - Webflow Website</h2>
                    <p>Its Yipper is a gaming news outlet where we review new games and talk about trending topics in the gaming community. In addition to our blog, we post weekly video content across YouTube, Instagram, and TikTok.</p>
                </article>
                <div className="project-heading-bg"/>
                <div className="project-btn-wrap">
                    <div className="project-top-corner"></div>
                    <div className="project-btn-bot">
                        <div className="project-bot-corner"></div>
                        <div className="project-btn-bg">
                            <button>
                                <p>Preview</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="project-btn">
                    <button>
                        <p>Preview</p>
                    </button>
                </div>
            </div>
        </main>
    )
}

export default ProjectsPage