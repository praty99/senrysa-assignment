import React, {useState, useEffect} from "react";
import firebase from "../firebase";
import { Input } from "antd";

import './CreateStores.scss'

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

export default function CreateOrder() {
    const stores = useStores();
    const [orderNumber, setOrderNumber] = useState("");
    const [orderAmount, setOrderAmount] = useState("");
    const [selectStore, setSelectStore] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
  
        firebase.firestore().collection('order').add({
          selectStore,
          orderNumber,
          orderAmount
        }).then(() => {
          setOrderNumber("");
          setOrderAmount("");
        })
      }   

      console.log(selectStore);
    
    return (
        <form id="contactForm" onSubmit={handleSubmit}>
        <div className="example-input">
        <select className="select" onChange={e =>setSelectStore(e.target.value)}>
        {stores && stores.map((store) => 
        <option>{store.storeName}</option>
        )}
        </select>
        <br />
        <Input placeholder="Order Number" type="text" id="orderNumber" value={orderNumber} onChange={(e) => setOrderNumber(e.target.value)} />
        <br />
        <Input placeholder="Order Amount" type="number" id="orderAmount" value={orderAmount} onChange={(e) => setOrderAmount(e.target.value)} />
        </div>
        <button type="submit"> Submit</button>
        </form>
    )
}