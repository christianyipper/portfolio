const TitleFloat = ( { animation, reference, meta, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p } ) => {

    return (
        <div ref={ reference } className={ animation }>
            <h1 className="heading-float">
                <span text-glow={ a }>{ a }</span>
                <span text-glow={ b }>{ b }</span>
                <span text-glow={ c }>{ c }</span>
                <span text-glow={ d }>{ d }</span>
                <span text-glow={ e }>{ e }</span>
                <span text-glow={ f }>{ f }</span>
                <span text-glow={ g }>{ g }</span>
                <span text-glow={ h }>{ h }</span>
                <span text-glow={ i }>{ i }</span>
                <span text-glow={ j }>{ j }</span>
                <span text-glow={ k }>{ k }</span>
                <span text-glow={ l }>{ l }</span>
                <span text-glow={ m }>{ m }</span>
                <span text-glow={ n }>{ n }</span>
                <span text-glow={ o }>{ o }</span>
                <span text-glow={ p }>{ p }</span>
            </h1>
            <h1 className="none">{ meta }</h1>
        </div>
    );
};

export default TitleFloat;