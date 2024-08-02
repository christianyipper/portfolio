const TitleShimmer = ( { animation, reference, heading } ) => {

    return (
        <div ref={ reference } className={ animation }>
            <h1 className="heading-shimmer" text-shimmer={ heading }>{ heading }</h1>
        </div>
    );
};

export default TitleShimmer;