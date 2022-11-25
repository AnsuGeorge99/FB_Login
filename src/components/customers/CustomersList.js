import './CustomersList.css';
import Customers from './Customers';

const customersLists = [
    { firstname: "Mark", lastname: "Tale", age: 26 },
    { firstname: "Arav", lastname: "Lake", age: 26 },
    { firstname: "Arun", lastname: "Hain", age: 26 }
]

const CustomersList = () => {
    return (<ul>
        {customersLists.map((customersList, i) => <Customers firstname={customersList.firstname} lastname={customersList.lastname} age={customersList.age} key={i} />)}
    </ul>);
}

export default CustomersList;