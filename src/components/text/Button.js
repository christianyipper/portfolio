const Button = ( { 
    text, link, variant
    } ) => {

    return (
        <a className={ `btn ${ variant }` } href={ link }>
            <p text-glow={ text }>{ text }</p>
        </a>
    );
};

export default Button;