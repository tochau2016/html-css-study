import Item from './Item.jsx'

function List (props) {
    const {name, age, address} = props;
    console.log(name);

    const obj = {
        name: "Chauu",
        age: "211",
    }
    console.log(obj)

    const newObj = {
        ...obj,
        name: "Huy",
        address: "Da Nang",
    }
    console.log(newObj);

    return (
        // <div>List</div>
        <div onClick = {() => console.log("Ahihi")}>
            List 
            <Item {...props} />
        </div>
    );
}

export default List;