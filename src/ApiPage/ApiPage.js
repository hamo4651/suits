import axios from "axios";
import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

export class ApiPage extends Component {
  state = {
    product: [],
  };
  componentDidMount() {
   axios.get('/JS/api.json')
   .then((items)=>{
              this.setState({
                
                product : items.data.products

              })

   })
    
  }
  render() {
    return (
      <div>
<div className="container">
<div className="row">
        {this.state.product.map((item)=>(
                         <div className="col-md-4 text-center">

                        <div className="card">
                        <img className="card-img-top mmm" src={item.images[0]} />
                        <div className="card-body">
                        <h5 className="card-title"> {item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                        </div>


        // <div>
        // {item.title}
        // </div>
        ))}
</div></div>
        
    
      </div>
    );
  }
}

export default ApiPage;
