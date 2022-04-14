'use strict';

var routes = require('next-routes')(); // initialisation de next routes. 


routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show') // Représentation d'une addresse d'une campagne
.add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes; // permettra éventuellement de naviguer automatiquement entre les utilisateurs de notre application.
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZixBLDBCQUF5Qzs7O0FBR3pDLE9BQ0MsQUFERCxJQUNLLEFBREwsa0JBQ3VCLEFBRHZCLGtCQUVDLEFBRkQsSUFFSyxBQUZMLHVCQUU0QixBQUY1QixtQkFFK0MsQUFGL0M7Q0FHQyxBQUhELElBR0ssQUFITCxnQ0FHcUMsQUFIckMsNkJBSUMsQUFKRCxJQUlLLEFBSkwsb0NBSXlDLEFBSnpDOztBQU1BLE9BQU8sQUFBUCxVQUFpQixBQUFqQixBLFFBQXlCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9MRSBDL2tpY2tzdGFydCJ9