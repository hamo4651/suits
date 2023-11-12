import { Component } from "react";
import "./App.css";
import FeaturesPage from "./FeaturesPage/FeaturesPage";
import { CartProvider, useCart } from "react-use-cart";


import HomePage from './HomePage/HomePage'
import Demo1 from "./Testfolder/Demo1";
import Boot from "./Testfolder/Boot";
import Life from "./Testfolder/Life";

class App extends Component {

  // state ={
  //  persons:[
  //   {name:"ahmed" , age:"55",num:1},
  //   {name:"hamdy" , age:"54",num:2},
  //   {name:"ahmed" , age:"25",num:3}
  // ]
  // } 

  // switchname =(newname)=>{
  //   this.setState( 
  //   {
  //     persons:[
  //      {name:"hamdy" , age:"535"},
  //      {name:newname , age:"534"},
  //      {name:"ssss" , age:"235"}
  //    ]
  //    })
  // }

  render(){
  return (
    <CartProvider className="App pt-5"> 

     <HomePage/>
       {/* <FeaturesPage/> */}

    {/* <Cart/> */}

    {/* <Demo1 allproduct = {this.state.persons}/> */}



  {/* <Boot/> */}

       {/* <Life favoritecolor={'black'}/> */}

    </CartProvider>
  )}
}

export default App;
