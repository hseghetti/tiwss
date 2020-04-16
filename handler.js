const axios = require('axios');
const express = require('express');
const settings = require('./settings.json');
const app = express();
const websiteParser = require('./websiteParser');

app.listen(process.env.PORT, () => {
    console.log('Server is listening on port: ' + process.env.PORT);
});
exports.search = async (event) => {
    logging('Begin', 'Search: ' + req.query.q);
    res.send(await search(req.query.q));
    logging('Ends ', 'Search: ' + req.query.q);
};
exports.site = async(event, context) => {
    const { queryStringParameters: q } = event.queryStringParameters;
    const response = {
        statusCode: 500,
        body: ''
    };
    return new Promise((resolve, reject) => {
        if (q && q.site) {
            websiteParser(site, 2000)
                .then(function (data) {
                    if (data.error) {
                        console.log('Couldnt get website: ' + q.site);
                        console.log('Error: ' + data.message);
                        reject(data.error);
                    }
                    response.statusCode = 200;
                    response.body = JSON.stringify(data.text);

                    resolve(response);
                }).catch(error => {
                console.log('Error getting the site: ' + q.site);
                console.log(error);
                reject(data.error);
            });
        } else {
            reject(response)
        }
    });
};

const getSiteText = (site) => {
    // return new Promise((resolve, reject) => {
    //     websiteParser(site, 2000)
    //         .then(function(data) {
    //             if (data.error) {
    //                 console.log('Couldnt get website: ' + site);
    //                 console.log('Error: ' + data.message);
    //                 reject(data.error);
    //             }
    //
    //             resolve(data.text);
    //         }).catch(error => {
    //         console.log('Error getting the site: ' + site);
    //         console.log(error);
    //         reject(data.error);
    //     });
    // });
};

const search = query => {
    return new Promise((resolve, reject) => {
        axios.get(settings.serpstack.url, {
            params: {
                [settings.serpstack.authentication.attribute]: process.env[settings.serpstack.authentication.value],
                [settings.serpstack.queryAttribute]: query,
                num: 30,
                type: 'news',
                period: 'last_year'
            }
        }).then(response => {
            resolve(processData(response.data));
        }).catch(error => {
            console.log('---ERROR--- ' + error);
            reject(error);
        });
    });
};

const processData = (data = {}) => {
    const results = [];
    console.log(data)
    // if (data.organic_results.length) {
    if (data.news_results.length) {
        data.news_results.forEach(result => {
            results.push(result.url)
        });
    }

    return {
        urls: results
    };
};

const logging = (type, service) => {
    console.log('--- ' + service + ' --- Request ' + type + ' --- ' + Date.now());
};

// Export your express server so you can import it in the lambda function.
module.exports = app;