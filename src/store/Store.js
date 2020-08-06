import { observable, action, decorate } from "mobx"

class Store {
  coordinates = []
  
  setCoordinate = (coordinates) => {
      console.log("From set coordinate");
    this.coordinates = coordinates;
  }
  

}

decorate(Store, {
    coordinates: observable,
    setCoordinate: action
})


export default Store;