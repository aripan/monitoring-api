/*
 * Title: Not Found Handler
 * Description: 404 Not Found Handler
 * Author: Md Asaduzzaman Ripan
 * Date: 22/08/2021
 */

// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested URL was not found!',
    });
};

module.exports = handler;
