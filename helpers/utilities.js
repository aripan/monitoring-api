/*
 * Title: Utilities
 * Description: Important utility functions
 * Author: Md Asaduzzaman Ripan
 * Date: 22/08/2021
 */

// dependencies

// module scaffolding
const utilities = {};

// parse JSON string to Object
utilities.parseJSON = (jsonString) => {
    let output;

    try {
        output = JSON.parse(jsonString);
    } catch {
        output = {};
    }

    return output;
};

// hash string

// export module
module.exports = utilities;
