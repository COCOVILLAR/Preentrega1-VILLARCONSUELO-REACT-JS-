/* eslint-disable react/prop-types */
// ItemList.jsx
import Item from './Item'; // Ensure you're importing the default export here

const ItemList = ({items}) => {
    return (
        <>
            {items.map(produ => (
                <Item key={produ.id} item={produ} />
            ))}
        </>
    )
}

export default ItemList;
