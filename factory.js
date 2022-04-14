import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
   JSON.parse(CampaignFactory.interface),
   '0xFA7d8741E18324BBa0F4457D3eC16B1374bb2df4' // Adresse du smart contract
);

export default instance;

// Instance préconfigurée pour le smartcontract CampaignFactory