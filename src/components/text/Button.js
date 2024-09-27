import TextGlow from "./TextGlow";

const Button = ( { 
    text, link, variant
    } ) => {

    return (
        <a className={ `btn ${ variant }` } href={ link }>
            <TextGlow
                text={ text }
            />
        </a>
    );
};

export default Button;