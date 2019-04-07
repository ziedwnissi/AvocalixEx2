import React, { Component } from 'react';

  class FactForms extends Component {
    render() {
      return (
        <div>
        <h1>Facturation</h1>
        <div>
        <form action ="/action_page.php">
        <label>Libellé</label>
        <input type="text"id="fname"name="firstname"placeholder="Your name.."/>
        

        <label>Email</label>
        <input type="email"id="email"name="email"placeholder="Your email"/>

        <label>Montant de la préstation</label>
        <input type="text"id="fname"name="firstname"placeholder="Your name.."/>

        <label>Valeur de TVA</label>
        <input type="text"id="fname"name="firstname"placeholder="Your name.."/>
        
        <label>Total</label>
        <input type="text"id="fname"name="firstname"placeholder="Your name.."/>
        
        
        
        <input type="submit"value="Submit"/>
        </form>
        </div>


        </div>
      );
    }
  }
  
  export default FactForms;