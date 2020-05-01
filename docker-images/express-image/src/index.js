var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app = new express();

app.get('/', function(req, res){
	res.send(generatePrime());
});

app.listen(3000, function(){
	console.log("Accepting HTTP requests on port 3000");
});


function generatePrime(){
	var nbPrimes = 10;

	var primes = [];
	console.log("Generating " + nbPrimes + " prime numbers");
	for(var i = 0; i < nbPrimes; ++i){
		primes.push({
			id: i,
			prime: chance.prime({min: 10000, max: 1000000})
		});
	}
	console.log(primes);
	return primes;
}
