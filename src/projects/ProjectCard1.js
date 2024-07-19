const ProjectCard1 = () => {
    return (
        <section className="project-wrap">
            <img className="project-img" src="https://www.dropbox.com/scl/fi/vilvc058wjbgiq3811i68/ItsYipper-Preiew.gif?rlkey=c6fccjwuka23drz48npbon838&st=n6iod8sn&raw=1" alt='ItsYipper project trailer'/>
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
        </section>
    )
}

export default ProjectCard1