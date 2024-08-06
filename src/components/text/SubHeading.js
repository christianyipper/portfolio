const SubHeading = ( { subHeading, mainHeading, animation } ) => {

    return (
        <div className={ `sub-heading-wrap ${ animation }`}>
            <p className="sub-heading" text-glow={ subHeading }>{ subHeading }</p>
            <h2 className="main-heading" text-shimmer={ mainHeading }>{ mainHeading }</h2>
        </div>
    );
};

export default SubHeading;