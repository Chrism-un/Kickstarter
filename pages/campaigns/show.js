// montrer à nos utilisateurs les détails d'une campagne particulière
import React, { Component } from "react";
import { Card, Grid, Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import {Link} from '../../routes'; // Imporation du lien qui est lié au smartcontract
class CampaignShow extends Component {
   
    static async getInitialProps(props) {
      const campaign = Campaign(props.query.address); // Addresse de la campagne  que nous allons montrer ses stats. Nous accédons à la campagne. 
      const summary = await campaign.methods.getSummary().call(); // Appeller les données de la fonction Summary() de la campagne. 
      // Retorune tous les informations de la function getSummary(). 
      return{
          address : props.query.address, // Permettre de connaitre l'addresse à qui la contribution doit être envoyé. 
          minimumContribution : summary[0], 
          balance : summary[1],
          requestsCount: summary[2],
          approversCount: summary[3],
          manager: summary[4]

      };
  }
    renderCards() {

        const{
            balance,
            manager,
            minimumContribution, 
            requestsCount,
            approversCount
        } = this.props;

// Information de la fonction Summary() retranscrit sur la carte. 
        const items = [
            {
            header: manager,
            meta: 'Adresse manager',
            description: 'Le porteur de projet a décidé de faire cette campagne pour faire un film',
            style :{overflowWrap: 'break-word'} // Permet de divise la taille de l'adresse en deux. Un style CSS
            },

            {
                header : minimumContribution,
                meta : 'Minimum Contribution (wei)',
                description: "T'as intêret de mettre le minimum bro"
            },

            {
                header : requestsCount,
                meta : 'Number of REQUESTS',
                description : "Oui oui oui"
            },

            {
                header : approversCount,
                meta : 'Number of APPROVERS',
                description : "Nombre de personnes qui ont donné dans cette campagne"
            },
            {
                header : web3.utils.fromWei(balance, 'ether'),
                meta : 'Number of Ether',
                description : "Je te montre les Ethers"
            },

            
        ];

        return <Card.Group items={items}/>; // Retourne les informations de la carte
    }

    
    // Les informations sur la carte sont visible sur le site. 
    render() {
        return (
          <Layout>
            <h3>Campaign Show</h3>
            <Grid>
              <Grid.Row>
                <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
                <Grid.Column width={6}>
                  <ContributeForm address={this.props.address} />
                </Grid.Column>
              </Grid.Row>
    
              <Grid.Row>
                <Grid.Column>
                  <Link route={`/campaigns/${this.props.address}/requests`}>
                    <a>
                      <Button primary>View Requests</Button>
                    </a>
                  </Link>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Layout>
        );
      }
    }
    
    export default CampaignShow;