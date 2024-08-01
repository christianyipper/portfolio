const ArtifactSection = ( { sectionView, wrapView, articleClass } ) => {
    const { videoRef, mouseEnter, mouseLeave } = VideoHoverHook();

    return (
        <section className={ `artifact-section ${ { sectionView } ? `blur-in` : `blur-out` }` }>
            <div className={ `artifact-wrap ${ { wrapView } ? `hide` : `` }` }>
                <article className={ articleClass }>
                    <p className="sub-heading" text-glow="Illustrator">Illustrator</p>
                    <h2 className="artifact-heading-shimmer" text-shimmer="Logo Concepts">Logo Concepts</h2>
                    <p>When creating the Stripes Nation logo, it was important to incorporate elements from the hockey referee uniform and the sport into the design. There were three key aspects to consider:</p>
                    <ul>
                        <li><strong>Referee Armbands</strong>
                            <li>The eye-catching red armbands are unique to hockey officials and was imperative to include the striking colour into the design.</li>
                        </li>
                        <li><strong>Striped Uniform</strong>
                            <li>Undoubtedly the most iconic part of an officiating uniform are the black and white stripes. I wanted the design to reflect this predominant pattern throughout.</li>
                        </li>
                        <li><strong>Speed</strong>
                            <li>Designing a logo around the high-speed and intense action of the sport was important, as it plays an integral role in every game.</li>
                        </li>
                    </ul>
                </article>
                <div className={ imageClass }>
                    <img src="https://www.dropbox.com/scl/fi/o45qn8dhp6h85jiwgc356/stripesnation-logo-primary.png?rlkey=art9ntknrjif9fwtwi8mvs88u&st=g7g4tp7l&raw=1" alt="Stripes Nation Logo" />
                    <p className="alt-text" text-glow="Design Concept 1">Design Concept 1</p>
                </div>
            </div>
        </section>
    );
};

export default ArtifactSection;
