/*
 * Title: Token Handler
 * Description: Handler to handle token related routes
 * Author: Md Asaduzzaman Ripan
 * Date: 22/08/2021
 */
// dependencies
const data = require('../../lib/data');
const { hash } = require('../../helpers/utilities');

// module scaffolding
const handler = {};

// determining that which method has been passed
handler.tokenHandler = (requestProperties, callback) => {
    const acceptedMethods = ['get', 'post', 'put', 'delete'];
    if (acceptedMethods.indexOf(requestProperties.method) > -1) {
        handler._token[requestProperties.method](requestProperties, callback);
    } else {
        callback(405);
    }
};

handler._token = {};

handler._token.post = (requestProperties, callback) => {};

handler._token.get = (requestProperties, callback) => {};

handler._token.put = (requestProperties, callback) => {};

handler._token.delete = (requestProperties, callback) => {};

handler._token.verify = (id, phone, callback) => {};

module.exports = handler;
