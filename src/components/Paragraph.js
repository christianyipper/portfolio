const Paragraph = ( { animation, reference, heading, text1, text2, text3 } ) => {

    return (
        <div ref={ reference } className={ animation }>
            <h3>{ heading }</h3>
            <p>{ text1 }</p>
            <p>{ text2 }</p>
            <p>{ text3 }</p>
        </div>
    );
};

export default Paragraph;