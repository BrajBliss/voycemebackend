module.exports = {
	post: {
		tags: ['User Management'],
		summary: 'Setup user with initial coin balance 100',
		operationId: 'register',
		parameters: [],
		requestBody: {
			content: {
				'application/json': {
					schema: {
						$ref: '#/components/schemas/',
					},
				},
			},
		},
		responses: {
			201: {
				description: 'User created with initial coin balance 100',
			},
			500: {
				description: 'Internal server error',
			},
		},
	},
};
