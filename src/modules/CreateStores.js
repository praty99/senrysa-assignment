import React, {useState} from 'react';
import { Input } from 'antd';
import './CreateStores.scss'
import firebase from "../firebase";

export default function CreateStores() {
  
    const [image, setImage] = useState([]);
    const [storeName, setStoreName] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    function handleSubmit(e) {
      e.preventDefault()

      firebase.firestore().collection('store').add({
        image,
        storeName,
        latitude,
        longitude
      }).then(() => {
        setImage([]);
        setStoreName("");
        setLatitude("");
        setLongitude("");
      })
    }    
    
    return (
    <form id="contactForm" onSubmit={handleSubmit}>
        <div> 
        <div className="example-input">
        <Input type="file" onChange={(e) => setImage(e.target.value)} />
        <br />
        <Input placeholder="Store Name" type="text" id="storeName" value={storeName} onChange={(e) => setStoreName(e.target.value)} />
        <br />
        <Input placeholder="latitute" type="number" id="latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
        <br />
        <Input placeholder="longitude" type="number" id="longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
      </div>
      </div>
      <button type="submit"> Submit</button>
      <div>
      </div>
      </form>

    )
}