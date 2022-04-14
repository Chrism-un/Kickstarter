// Regroupement de toute la liste de requêtes de l'utilisateur. 

import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import {Link} from '../../../routes';
import {Button, Table} from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';

class RequestIndex extends Component{

    static async getInitialProps(props){
        const {address} = props.query;
        const campaign = Campaign(address); // Obtenir le nombre total de requete crées. 
        const requestCount = await campaign.methods.getRequestsCount().call(); // Appel les demandes de requêtes sont comptabilisées ici. 
        const approversCount = await campaign.methods.approversCount().call(); // Appel pour avoir le nombre de contirbuteurs. 
        const requests = await Promise.all(
            Array(parseInt(requestCount)).fill().map((element, index) => { // Nombre de la longueur du tableau. // ParseInt : Permettre aau constrcuteur Array, qu'il détecte les info comme des uint et non des string.
                return campaign.methods.requests(index).call()  // index : pour choisir le numéro de tableau                 
            })
        );

        console.log(requests);

        return {address, requests, requestCount, approversCount};
    }

    renderRows(){
        return this.props.requests.map((request, index) => {
            return (<RequestRow
            key={index} // Permet de montrer la liste du tableau
            id={index}
            request={request}
            address={this.props.address}
            approversCount={this.props.approversCount}
            />
        );
        });
    }
    render(){

        const {Header, Row, HeaderCell, Body} = Table; // Une demande de requete est représentée à une ligne

        return(
            <Layout>
                <h3>Requests</h3>
                <Link route={`/campaigns/${this.props.address}/requests/new`}>
                <a>
                <Button primary floated ="right" style={{marginbottom: 10}}> Add Request</Button>
                </a>
                </Link>
                    <Table>
                        <Header>
                            <Row>
                                <HeaderCell>ID</HeaderCell>
                                <HeaderCell>Description</HeaderCell>
                                <HeaderCell>Amount</HeaderCell> 
                                <HeaderCell>Recipient</HeaderCell>
                                <HeaderCell>Approval Count</HeaderCell>
                                <HeaderCell>Approve</HeaderCell> 
                                <HeaderCell>Finalize</HeaderCell> 
                            </Row>
                        </Header>
                        <Body>{this.renderRows()}</Body>
                    </Table>
                    <div>Nombre {this.props.requestCount} Requête </div>
            </Layout>
        );
    }
}

export default RequestIndex; 