/*
 * Title: User Handler
 * Description: Handler to handle user related routes
 * Author: Md Asaduzzaman Ripan
 * Date: 22/08/2021
 */

// dependencies

// module scaffolding
const handler = {};

// determining that which method has been passed from the user
handler.userHandler = (requestProperties, callback) => {
    const acceptedMethods = ['get', 'post', 'put', 'delete'];
    if (acceptedMethods.indexOf(requestProperties.method) > -1) {
        handler._users[requestProperties.method](requestProperties, callback);
    } else {
        callback(405);
    }
};

handler._users = {};

handler._users.post = (requestProperties, callback) => {};

handler._users.get = (requestProperties, callback) => {};

handler._users.put = (requestProperties, callback) => {};

handler._users.delete = (requestProperties, callback) => {};

module.exports = handler;
