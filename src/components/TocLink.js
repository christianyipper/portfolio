const TocLink = ( { subHeading, mainHeading, path, num, view } ) => {

    return (
        <div className="toc-link">
            <p className="sub-heading-grey" text-glow={ subHeading }>{ subHeading }</p>
            <div>
                <a href={ path } className={ view }>
                    <h3 toc={ mainHeading }>{ mainHeading }</h3>
                </a>
                <p className="page-num">{ num }</p>
            </div>
        </div>
    );
};

export default TocLink;