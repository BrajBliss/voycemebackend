module.exports = {
	put: {
		tags: ['Coin Management'],
		summary: 'Add more coins',
		operationId: 'addCoins',
		parameters: [
			{
				name: 'id',
				in: 'path',
				description: 'Unique Identifier of the User',
				required: true,
				schema: {
					$ref: '#/components/schemas/id',
				},
			},
		],

		requestBody: {
			content: {
				'application/json': {
					schema: {
						$ref: '#/components/schemas/AddCoins',
					},
				},
			},
		},

		responses: {
			200: {
				description: 'Coins added successfully',
			},
			404: {
				description: 'User not found',
			},
		},
	},
};
