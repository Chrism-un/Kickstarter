const assert = require ('assert');
const ganache = require('ganache-cli');
const Web3 = require ('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');
const { METHODS } = require('http');
 
let accounts; // TOUS LES DIFFERENTS COMPTES
let factory ; // Cela fait réference à l'instance déployée CampaignFactory
let campaignAddress;
let campaign;

beforeEach (async () => {

    accounts = await web3.eth.getAccounts(); // listes doe comptes
    factory = await new.web3.eth.Contract(JSON.parse(compiledFactory.interface)); // Cela crée le contrat à l'intérieur du Web3
     deploy ({data: compiledFactory.bytecode }) // Déploiement du contrat sur le réseau
    .send({from: accounts[0], gas: '1000000'}); // Le compte du déploiement. 

   await factory.methods.createCampaign('100').send({
       from: accounts[0],
       gas: '1000000'
   });

  [campaignAddress] = await factory.methods.getDeployedCampais().call; // Nous allons voir tous les campagnes; tous les addresses différents pour nos campagnes déployés. [CampaignAddress] : Souhaitons extraire le premier élément du tableau renvoyé. l4ADDRESSE DU CONTRAT EST ATTRIBUE  A LA 1ERE'ADRESSE DE LA CAMPAGNE.
  campaign = await new web3.eth.Contract(JSON.parse(compiledCampaign.interface),
  campaignAddress 
);// Répresentation javascript du smart contract
});

describe('Campaigns', () => {

    it('deploys a factory and a campaign', () => {
       assert.ok(factory.options.address);
       assert.ok(campaign.option.address);
    });
});