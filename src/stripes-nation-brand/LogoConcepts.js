const TocLink = ( { subHeading, mainHeading, path, num, view } ) => {

    return (
            <section className={ `artifact-section ${ inView2 ? `blur-in` : `blur-out` }` }>
                <div className={ `artifact-wrap ${ inView1 ? `hide` : `` }` }>
                    <article className="artifact-left left-md">
                        <SubHeading subHeading="Illustrator" mainHeading="Logo Concepts"/>
                        <p>When creating the Stripes Nation logo, it was important to incorporate elements from the hockey referee uniform and the sport into the design. There were three key aspects to consider:</p>
                        <ul>
                            <ListItem itemName="Referee Armbands" itemDesc="The eye-catching red armbands are unique to hockey officials and was imperative to include the striking colour into the design."/>
                            <ListItem itemName="Striped Uniform" itemDesc="Undoubtedly the most iconic part of an officiating uniform are the black and white stripes. I wanted the design to reflect this predominant pattern throughout."/>
                            <ListItem itemName="Speed" itemDesc="Designing a logo around the high-speed and intense action of the sport was important, as it plays an integral role in every game."/>
                        </ul>
                    </article>
                    <div className="artifact-img-wrap img-left-sm">
                        <img src="https://www.dropbox.com/scl/fi/o45qn8dhp6h85jiwgc356/stripesnation-logo-primary.png?rlkey=art9ntknrjif9fwtwi8mvs88u&st=g7g4tp7l&raw=1" alt="Stripes Nation Logo" />
                        <p className="alt-text" text-glow="Design Concept 1">Design Concept 1</p>
                    </div>
                    <div className="artifact-img-wrap img-right-sm">
                        <img className="img-md" src="https://www.dropbox.com/scl/fi/5n2718wxnubjm258kgw7x/sn-draft-alt.png?rlkey=wslq49ry5g4uckisupqba0yxn&st=p8av3sdn&raw=1" alt="Stripes Nation Logo Concept" />
                        <p className="alt-text" text-glow="Design Concept 2">Design Concept 2</p>
                    </div>
                </div>
            </section>
    );
};

export default TocLink;