console.log("Hello");

async function getWhois(site){
	const whois = require('whois-json');

	var results = whois(site);
    return results;
}

getWhois('google.com').then(
    function(value) {console.log(value);},
    function(error) {console.log('error');}
);
