const Image = ( { name, imgName, text, animation, link, description } ) => {

    return (
        <div className={ `${ name } ${ animation }` }>
            <img className={ imgName } src={ link } alt={ description } />
            <p className="alt-text" text-glow={ text }>{ text }</p>
        </div>
    );
};

export default Image;