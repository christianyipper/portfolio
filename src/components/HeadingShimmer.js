const HeadingShimmer = ( { animation, reference, heading } ) => {

    return (
        <div ref={ reference } className={ animation }>
            <h2 className="heading-shimmer" text-shimmer={ heading }>{ heading }</h2>
        </div>
    );
};

export default HeadingShimmer;