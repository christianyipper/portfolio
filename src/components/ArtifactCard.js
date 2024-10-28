import HeadingShimmer from '../components/text/HeadingShimmer';
import Paragraph from '../components/text/Paragraph';
import Button from '../components/text/Button';

const ArtifactCard = ( { enter, leave, poster, reference, video, subheading, heading, text, children, link, imgAlt } ) => {

    const style = {
        backgroundImage: `url(${ poster })`,
    }

    return (
        <section className="project-artifact-wrap"
        onMouseEnter={ enter }
        onMouseLeave={ leave }>
            <p className="sub-heading" text-glow={ subheading }>{ subheading }</p>
            <div className="project-artifact" style={ style }>
                <div className="project-border"></div>
                <div className="project-corner-wrap"></div>
                <video 
                    className="project-img"
                    poster={ poster }
                    loop
                    muted
                    ref={ reference }
                >
                    <source src={ video } type="video/mp4"/>
                </video>
                {/* <img src={ poster } alt={ imgAlt } /> */}
                <HeadingShimmer heading={ heading } animation="sm-heading"/>
                <article className="project-text">
                    <HeadingShimmer heading={ heading }/>
                    <Paragraph name="project-text-margin" text1={ text }/>
                </article>
                <div className="app-icons-wrap">
                    { children }
                </div>
                <div className="project-heading-bg"/>
                <div className="project-btn-wrap">
                    <div className="project-top-corner"></div>
                    <div className="project-btn-bot">
                        <div className="project-bot-corner"></div>
                        <div className="project-btn-bg">
                            <Button text="Preview" link={ link }/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-btn">
                <Button text="Preview" link={ link }/>
            </div>
        </section>
    );
};

export default ArtifactCard