import React, {useState, useEffect} from 'react';
import firebase from "../firebase";

function useOrders(){
    const [orders, setOrders] = useState([]);

    useEffect(() => {
    const unsubscribe = firebase.firestore().collection('order')
                .onSnapshot((snapshot) => {
                    const newOrders = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }))
                    setOrders(newOrders);
                    })
                    return () => unsubscribe();
    }, [])

    return orders;
}

const ViewOrder = () => {
    const stores = useOrders();

    return (
        <div>
        <ol>
        {stores.map((store) =>
            <li key={store.id}>
            <div>
            <p>{`The order number is "${store.orderNumber}" and amount is "${store.orderAmount}"`}</p>
            </div>
            </li> 
            )}
        </ol>
        </div>
        
    )
}

export default ViewOrder;