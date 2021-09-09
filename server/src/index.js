// I require the DB and all the server logic.

require('./database');
const app = require('./app');


app.listen(app.get('port'));
console.log ('Server on port', app.get('port'));
