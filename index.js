/*
 * Title: Uptime Monitoring Application
 * Description: A RESTful API to monitor up or down time of user defined links
 * Author: Md Asaduzzaman Ripan
 * Date: 22/08/2021
 */

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
const data = require('./lib/data');

// app object - module scaffolding
const app = {};

// testing file system
// creating data
data.create('test', 'newFile', { name: 'Bangladesh', language: 'Bangla' }, (err) => {
    console.log(`Error was ${err}`);
});
// reading data
data.read('test', 'newFile', (err, result) => {
    console.log(err, result);
});

// updating data
data.update('test', 'newFile', { name: 'England', language: 'English' }, (err) => {
    console.log(err);
});

// deleting data
data.delete('test', 'newFile', (err) => {
    console.log(err);
});

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`listening to port ${environment.port}`);
    });
};

// handle Request Response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
