import TextGlow from "./TextGlow";

const Button = ( { 
    text, link, variant, duration
    } ) => {

    return (
        <a className={ `btn ${ variant }` } href={ link }>
            <TextGlow
                text={ text }
                duration={ duration }
            />
        </a>
    );
};

export default Button;