const TextGlow = ( { 
    text, link, name, click
    } ) => {

    return (
        <a className={ `text-glow ${ name }` } href={ link } text-glow={ text } onClick={ click }>{ text }</a>
    );
};

export default TextGlow;