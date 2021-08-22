/*
 * Title: Routes
 * Description: Application Routes
 * Author: Md Asaduzzaman Ripan
 * Date: 22/08/2021
 */

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');
const { userHandler } = require('./handlers/routeHandlers/userHandler');

const routes = {
    sample: sampleHandler,
    user: userHandler,
};

module.exports = routes;
