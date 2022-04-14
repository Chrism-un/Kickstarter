const path = require('path');
const solc = require('solc');
const fs = require ('fs-extra');

const buildPath = path.resolve(__dirname, 'build');// build = répertoir de construction
fs.removeSync(buildPath);

const campaignPath =path.resolve(__dirname, 'contracts', 'Campaign.sol'); // Lecture du fichier .sol
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts; //Compilateur de contrat

fs.ensureDirSync(buildPath); // Recréer le dossier build

for (let contract in output) { // Parcourir les objets. Cette boucle permet de parcourir le contrat campaign et le contrat campaignFactory 
    fs.outputJsonSync(
path.resolve(buildPath, contract.replace(':', '') + '.json'), // contract : nom du contrat
output[contract] // Voir tous les contenu JSON. Supprime et remplaces les contrats déja déployées.
    );
}