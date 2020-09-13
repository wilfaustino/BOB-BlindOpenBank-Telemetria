const https = require('http');

module.exports = function(){
  
    var options = {
        host: 'ec2-18-218-87-145.us-east-2.compute.amazonaws.com', //base url
        port: 5001, //port
        path: '/logs', //API path
        method: 'GET', //method
        headers: {
            'Authentication': 'bob-token-api'
        }
    };
    
    return new Promise(((resolve, reject) => {
        
        const request = https.request(options, (response) => {
            
            response.setEncoding('utf8');
            
            let returnData = '';
            
            response.on('data', (chunk) => {
                returnData += chunk;
            });
            
            response.on('end', () => {
                resolve(JSON.parse(returnData));
            });
            
            response.on('error', (error) => {
                reject(error);
            });
            
        });
        
        request.end();
        
    }));
    
}