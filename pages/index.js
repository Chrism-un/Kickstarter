import React, { Component } from "react";//Component fichier react
import { Card, Button } from "semantic-ui-react";// REGROUPE LA LISTE D'OBJET DE LA CARTE et Le boutton
import factory from "../ethereum/factory";
import Layout from '../components/Layout'; // Importation du fichier Layout.js
import {Link} from '../routes';
class CampaignIndex extends Component {  // Ce fichier exporte un composant React afin que Next.js puisse comprendre le fichier

  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }
  renderCampaigns() {
    const items = this.props.campaigns.map((address) => {
      return {
        header: address,
        description: (
          <Link route ={`/campaigns/${address}`}>
          <a>View Campaign</a>
          </Link>
        ),
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }
  render() { // Liste des campagnes. 
    return (
      <Layout>
        <div>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          ></link>
          <h3> Open Campaigns</h3>

        <Link route="/campaigns/new"> 
            <a>
      <Button 
              floated ="right" 
              content="Create Campaign" 
              icon="add circle" 
              primary 
      /> 
      </a>
    </Link>

       {this.renderCampaigns()} 
       
       </div>
      </Layout>
    );
  }
}

export default CampaignIndex;




 // importation de la carte de la bibliothèque react.