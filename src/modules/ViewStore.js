import React, {useState, useEffect} from 'react';
import firebase from "../firebase";

function useStores(){
    const [stores, setStores] = useState([]);

    useEffect(() => {
    const unsubscribe = firebase.firestore().collection('store')
                .onSnapshot((snapshot) => {
                    const newStores = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }))
                    setStores(newStores);
                    })
                    return () => unsubscribe();
    }, [])

    return stores;
}

const ViewStore = () => {
    const stores = useStores();

    return (
        <div>
        <ol>
        {stores.map((store) =>
            <li key={store.id}>
            <div>
            <p>{`The name of store is "${store.storeName}" with latitude "${store.latitude}" and longitude "${store.longitude}"`}</p>
            </div>
            </li> 
            )}
        </ol>
        </div>
        
    )
}

export default ViewStore;