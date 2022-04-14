import web3 from './web3';
import  Campaign from './build/Campaign.json'; // Prendre les données ABI Du smart contract.
// le premier argument sera l'interface de notre campagne

export default (address) => {

    return new web3.eth.Contract(
        JSON.parse(Campaign.interface), address // ADRESSE DE LA CAMPAGNE. Smart contract prêt à fonctionner pour la campagne. 
    );
};