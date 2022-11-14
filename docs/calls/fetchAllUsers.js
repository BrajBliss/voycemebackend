module.exports = {
	get: {
		tags: ['User Management'],
		summary: 'Fetch all Users',
		operationId: '/',
		parameters: [],
		responses: {
			200: {
				description: 'Users were obtained',
				content: {
					'application/json': {
						schema: {
							$ref: '#/components/schemas/User',
						},
					},
				},
			},
		},
	},
};
