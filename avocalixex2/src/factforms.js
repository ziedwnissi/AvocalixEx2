import React, { Component } from 'react';

  class FactForms extends Component {

    constructor(props) {
      super(props);
      this.state = {value: 0,
                    TVA:0,
                    Total:0
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
      this.setState({TVA: event.target.value*0.2});
      this.setState({Total: event.target.value*1.2});
      
    }

    handleSubmit(event){
  
      var lib = document.getElementById('lib').value;  
      var email = document.getElementById('email').value;  
  return alert('Libellé: '+ lib + '\n'+
              'Email: ' +email +'\n'    +
              'Montant de la préstation: ' + this.state.value+ '\n'+
              'Montant TVA: ' + this.state.TVA+'\n'+
              'Total: ' +this.state.Total

                 
    )
    }
  


    render() {
      return (
        <div>
        <h1>Facturation</h1>
        <div>
        <form  onSubmit={this.handleSubmit}>
        <label>Libellé</label>
        <input type="text"id="lib"name="lib"placeholder="Libellé"/>
        

        <label>Email</label>
        <input type="email"id="email"name="email"placeholder="Your email"/>

        <label>Montant de la préstation</label>
        <input type="text" id="montant" name="Montant"placeholder="Montant de la préstation" onChange={this.handleChange}/>

        <label>Valeur de TVA</label>
        <input type="text"id="TVA"name="TVA"placeholder="Valeur TVA" value={this.state.TVA}/>
        
        <label>Total</label>
        <input type="text"id="Total"name="Total"placeholder="Total" value={this.state.Total}/>
        
        
        
        <input type="submit"value="Submit"/>
        </form>
        </div>


        </div>
      );
    }
  }
  
  export default FactForms;