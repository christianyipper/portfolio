const List = ( { heading1, text1, name1, heading2, text2, name2, heading3, text3, name3 } ) => {

    return (
        <ul>
            <li className={ name1 }><strong>{ heading1 }</strong>
                <li>{ text1 }</li>
            </li>
            <li className={ name2 }><strong>{ heading2 }</strong>
                <li>{ text2 }</li>
            </li>
            <li className={ name3 }><strong>{ heading3 }</strong>
                <li>{ text3 }</li>
            </li>
        </ul>
    );
};

export default List;