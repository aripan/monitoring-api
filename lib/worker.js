/*
 * Title: Workers library
 * Description: Worker related files
 * Author: Md Asaduzzaman Ripan
 * Date: 25/08/2021
 */
// dependencies

// worker object - module scaffolding
const worker = {};

// start the workers
worker.init = () => {
    console.log('workers started');
};

// export
module.exports = worker;
