const HeadingShimmer = ( { animation, reference, heading, direction } ) => {

    return (
        <div ref={ reference } className={ `heading-wrap ${ animation }` }>
            <h2 className={ `heading-shimmer ${ direction }` } text-shimmer={ heading }>{ heading }</h2>
        </div>
    );
};

export default HeadingShimmer;