const fetchAllUsers = require('./fetchAllUsers');
const checkBalance = require('./checkBalance');
const register = require('./register');
const transferCoins = require('./transferCoins');
const addCoins = require('./addCoins');

module.exports = {
	paths: {
		'/': {
			...fetchAllUsers,
		},
		'/checkbalance/{id}': {
			...checkBalance,
		},
		'/register': {
			...register,
		},
		'/addcoins/{id}': {
			...addCoins,
		},
		'/transfer/{id}': {
			...transferCoins,
		},
	},
};
