const TitleFloat = ( { animation, reference, meta, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, spaceA, spaceB, spaceC, spaceD, spaceE, spaceF,spaceG, spaceH, spaceI, spaceJ, spaceK, spaceL, spaceM, spaceN, spaceO, spaceP } ) => {

    return (
        <div ref={ reference } className={ animation }>
            <h1 className="heading-float">
                <span className={ spaceA } text-glow={ a }>{ a }</span>
                <span className={ spaceB } text-glow={ b }>{ b }</span>
                <span className={ spaceC } text-glow={ c }>{ c }</span>
                <span className={ spaceD } text-glow={ d }>{ d }</span>
                <span className={ spaceE } text-glow={ e }>{ e }</span>
                <span className={ spaceF } text-glow={ f }>{ f }</span>
                <span className={ spaceG } text-glow={ g }>{ g }</span>
                <span className={ spaceH } text-glow={ h }>{ h }</span>
                <span className={ spaceI } text-glow={ i }>{ i }</span>
                <span className={ spaceJ } text-glow={ j }>{ j }</span>
                <span className={ spaceK } text-glow={ k }>{ k }</span>
                <span className={ spaceL } text-glow={ l }>{ l }</span>
                <span className={ spaceM } text-glow={ m }>{ m }</span>
                <span className={ spaceN } text-glow={ n }>{ n }</span>
                <span className={ spaceO } text-glow={ o }>{ o }</span>
                <span className={ spaceP } text-glow={ p }>{ p }</span>
            </h1>
            <h1 className="none">{ meta }</h1>
        </div>
    );
};

export default TitleFloat;