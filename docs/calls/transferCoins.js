module.exports = {
	put: {
		tags: ['Coin Management'],
		summary: 'Transfer coins from one user to another',
		operationId: 'transferCoins',
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
						$ref: '#/components/schemas/Transfer',
					},
				},
			},
		},
		responses: {
			200: {
				description: 'Coins transferred successfully',
			},
			400: {
				description: 'Not enough coins',
			},
			404: {
				description: 'Receiver not found',
			},
			500: {
				description: 'Internal server error',
			},
		},
	},
};
