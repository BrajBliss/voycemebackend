// import Pool from 'pg';
const { Pool } = require('pg');
const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'voyceme',
	password: 'amay',
	port: 8080,
});

const getAllUsers = (req, res) => {
	const q = 'SELECT * FROM public.backend';
	pool.query(q, (err, data) => {
		if (err) {
			console.log(err);
			return res.json(err);
		}
		return res.json(data.rows);
	});
};

const addNewUser = (req, res) => {
	const q = 'INSERT INTO public.backend(name) VALUES ($1)';
	const values = [req.body.name];
	pool.query(q, [...values], (err, data) => {
		if (err) return res.json(err);
		return res.send('User added');
	});
};

const checkBalance = (req, res) => {
	const q = 'SELECT name, coins FROM public.backend WHERE id = $1';
	const values = [req.params.id];
	pool.query(q, [...values], (err, data) => {
		if (err) return res.json(err);
		return res.json(data.rows);
	});
};

// Params ID is the receiver and body ID is the sender
const transferCoins = (req, res) => {
	const values = [req.params.id, req.body.id, req.body.coins];

	// First make sure the sender has enough coins to make the transfer
	const q1 = 'SELECT coins FROM public.backend WHERE id = $1';
	pool.query(q1, [values[1]], (err, data) => {
		if (err) return res.json(err);
		if (data.rows[0].coins < values[2])
			return res.send(
				'You do not have enough coins to make the transfer.'
			);

		// Now if the sender has enough coins we will proceed with the transfer
		const q2 = 'UPDATE public.backend SET coins = coins - $1 WHERE id = $2';
		pool.query(q2, [values[2], values[1]], (err, data) => {
			if (err) return res.json(err);
			const q3 =
				'UPDATE public.backend SET coins = coins + $1 WHERE id = $2';
			pool.query(q3, [values[2], values[0]], (err, data) => {
				if (err) return res.json(err);
				return res.send('Coins transferred successfully.');
			});
		});
	});
};

const addCoins = (req, res) => {
	const q = 'UPDATE public.backend SET coins = coins + $1 WHERE id = $2';
	const values = [req.body.coins, req.params.id];
	pool.query(q, [...values], (err, data) => {
		if (err) return res.json(err);
		return res.send('Coins added successfully.');
	});
};

module.exports = {
	getAllUsers,
	addNewUser,
	checkBalance,
	transferCoins,
	addCoins,
};
