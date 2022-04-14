import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import {Router} from '../../routes'; // Router : redireger par programme les gens d'une page à une autre page de l'application.  

class CampaignNew extends Component {
    
    state = {
        minimumContribution: '',
        errorMessage : '', // " " = initialisation chaine de caractère. 
        loading: false // Nouveau propriété, spinners
    };

    onSubmit = async (event) => {  // Gestionnaire d'événements. Qui va être transféré au formulaire. 
       event.preventDefault(); // chaque fois que nous appelons une fonction dans un smart contrat, celle-ci sera ASYNCHRONE
       
       this.setState({loading: true, errorMessage: ''}); // Dès que l'utilisateur clique sur Create, le spinner commence automatiquement à tourner. Et le message d'erreur est supprimé". 

      try {
        const accounts = await web3.eth.getAccounts(); // Appel des comptes Metamask va tenter de calculer automatiquement la quantité de gaz nécessaire à payer
        await factory.methods // Tous les fonctions du smart contract. Création de la campagne
        .createCampaign(this.state.minimumContribution)
        .send({
              from : accounts[0]
         });

         Router.pushRoute("/"); // rediriger l'utilisateur à la campagne créé. Listes de tout les campagnes  
      } 
      
      catch (err) {
             this.setState({errorMessage : err.message});
      }

      this.setState({loading: false}); // Le spinner du loading est désactivé.  
    };
    //render() : Fonction affichage. 
    render(){  
           return(// Récupération INFORMATIONS de "OnSubmit" Gestionnaire d'événements. 
           <Layout>
           <h3> Create Campaign !</h3>
        
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
            <Form.Field> 
            <label>Minimum contribution</label>
            <Input label ="wei" 
            placeholder='minimum contribution' 
            labelPosition ="right"
            value ={this.state.minimumContribution}
            onChange={event => this.setState({minimumContribution: event.target.value})} // Valeur seulement en chiffre. Nous mettons ensuite à jour l'élément de contribution minimale qui entraîne la réexécution de la total de la fonction. Nous transférons cette nouvelle valleur dans l'entrée. 
            />
        </Form.Field>
            <Message error header ="Oops!" content ={this.state.errorMessage} />
            <Button loading = {this.state.loading} primary type='submit'>Create</Button>
        </Form>


           </Layout>
         );
    }
}
export default CampaignNew;