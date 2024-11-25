import TextGlow from "./TextGlow";

const Button = ( { 
    text, link, variant, duration, target
    } ) => {

    return (
        <a className={ `btn ${ variant }` } href={ link } target={ target }>
            <TextGlow
                text={ text }
                duration={ duration }
            />
        </a>
    );
};

export default Button;