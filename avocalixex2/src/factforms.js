import React, { Component } from 'react';

  class FactForms extends Component {

    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      //this.handleChange = this.handleChange.bind(this);
      //this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }
  


    render() {
      return (
        <div>
        <h1>Facturation</h1>
        <div>
        <form action ="/action_page.php">
        <label>Libellé</label>
        <input type="text"id="fname"name="firstname"placeholder="Libellé"/>
        

        <label>Email</label>
        <input type="email"id="email"name="email"placeholder="Your email"/>

        <label>Montant de la préstation</label>
        <input type="text" id="montant" name="Montant"placeholder="Montant de la préstation" onChange={this.handleChange}/>

        <label>Valeur de TVA</label>
        <input type="text"id="fname"name="firstname"placeholder="Valeur TVA" value={this.state.value*0.2}/>
        
        <label>Total</label>
        <input type="text"id="fname"name="firstname"placeholder="Total"/>
        
        
        
        <input type="submit"value="Submit"/>
        </form>
        </div>


        </div>
      );
    }
  }
  
  export default FactForms;