
import React, { Component } from "react";
import { Form, Input, Message, Button } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import{Router} from '../routes'; // Rafraichissement des données du contrat. 

class ContributeForm extends Component {
  state = {
    value: "",
    errorMessage:"",
    loading: false
  };

  onSubmit = async (event) => {
    event.preventDefault();

    const campaign = Campaign(this.props.address);// Récuperation de la Bonne adresse du smart contract.
    this.setState({loading: true, errorMessage:"" }); // Changement d'état du spinner

    try {
      const accounts = await web3.eth.getAccounts(); // Recevoir notre liste de compte si c'est reussi
      await campaign.methods.contribute().send({ // Execution de la fonction contribute() à lA bonne adresse de la campagne choisi. Rajouter les arguments entre les ()
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, "ether"),// Conversion en ether en Wei
      });

      Router.replaceRoute(`/campaigns/${this.props.address}`)  // Rafraichir automatique des données du smart contract actuelles. This.prpos.address = L'addresse de la campagne en cours.  
    } catch (err) {
        this.setState({errorMessage : err.message});
    }

    this.setState({loading: false, value: ''}); // La valeur va reinitialiser le formulaire et efface le numéro insére sur value après l'envoie de a transaction. 
    };

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Montant de la Contribution</label>
          <Input
            value={this.state.value}
            onChange={(event) => this.setState({ value: event.target.value })}// cet événement commence à définir la valeur d'état 
            label="ether"
            labelPosition="right"
          />
        </Form.Field>
        <Message error header ="Oops!" content={this.state.errorMessage}/>
        <Button loading={this.state.loading} primary>Contribute!</Button>
      </Form>
    );
  }
}

export default ContributeForm;
