const List = ( { 
    heading1, text1, display1, animation1,
    heading2, text2, display2, animation2,
    heading3, text3, display3, animation3
    } ) => {

    return (
        <ul>
            <li className={ `${ display1 } ${ animation1 }` }><strong>{ heading1 }</strong>
                <li>{ text1 }</li>
            </li>
            <li className={ `${ display2 } ${ animation2 }` }><strong>{ heading2 }</strong>
                <li>{ text2 }</li>
            </li>
            <li className={ `${ display3 } ${ animation3 }` }><strong>{ heading3 }</strong>
                <li>{ text3 }</li>
            </li>
        </ul>
    );
};

export default List;