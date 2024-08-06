const Paragraph = ( { name, animation, animationHead, reference, heading, text1, text2, text3 } ) => {

    return (
        <div className={ name } ref={ reference }>
            <h3 className={ animationHead }>{ heading }</h3>
            <p className={ animation }>{ text1 }</p>
            <p className={ animation }>{ text2 }</p>
            <p className={ animation }>{ text3 }</p>
        </div>
    );
};

export default Paragraph;