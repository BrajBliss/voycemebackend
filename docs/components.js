module.exports = {
	components: {
		schemas: {
			id: {
				type: 'integer',
				description: 'Unique Identifier of the User',
				example: '1',
			},
			User: {
				type: 'object',
				properties: {
					name: {
						type: 'varchar',
						description: 'Name of the User',
						example: 'Amay',
					},
					coins: {
						type: 'integer',
						description: 'Balance of the User',
						example: '100',
					},
				},
			},
			Register: {
				type: 'varchar',
				description: 'Setup user with initial coin balance 100',
				example: {
					name: 'Amay',
				},
			},
			AddCoins: {
				type: 'integer',
				description: 'Add more coins',
				example: {
					coins: 100,
				},
			},
			Transfer: {
				type: 'object',
				properties: {
					id: {
						type: 'integer',
						description: 'Unique Identifier of the User',
						example: '1',
					},
					coins: {
						type: 'integer',
						description: 'Balance of the User',
						example: '100',
					},
				},
			},
			Error: {
				type: 'object',
				properties: {
					message: {
						type: 'string',
						description: 'Error message',
						example: 'Not found',
					},
					internal_code: {
						type: 'string',
						description: 'Error internal code',
						example: 'Invalid parameters',
					},
				},
			},
		},
	},
};
