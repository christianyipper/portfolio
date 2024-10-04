const TextGlow = ( { 
    text, link, name, click, duration
    } ) => {

    return (
        <a className={ `text-glow ${ name } ${ duration }` } href={ link } text-glow={ text } onClick={ click }>{ text }</a>
    );
};

export default TextGlow;