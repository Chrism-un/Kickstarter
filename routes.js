const routes = require('next-routes')(); // initialisation de next routes. 


routes
.add('/campaigns/new', '/campaigns/new')
.add('/campaigns/:address', '/campaigns/show') // Représentation d'une addresse d'une campagne
.add('/campaigns/:address/requests', '/campaigns/requests/index')
.add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes; // permettra éventuellement de naviguer automatiquement entre les utilisateurs de notre application.

