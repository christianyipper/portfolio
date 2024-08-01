const ListItem = ( { itemName, itemDesc } ) => {

    return (
        <li><strong>{ itemName }</strong>
            <li>{ itemDesc }</li>
        </li>
    );
};

export default ListItem;