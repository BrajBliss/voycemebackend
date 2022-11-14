module.exports = {
	get: {
		tags: ['User Management'],
		summary: 'Check balance of a User',
		operationId: 'checkBalance',
		parameters: [
			{
				name: 'id',
				in: 'path',
				schema: {
					$ref: '#/components/schemas/id',
				},
				required: true,
				description: 'User ID',
			},
		],
		responses: {
			200: {
				description: 'User balance retrieved successfully',
				content: {
					'application/json': {
						schema: {
							$ref: '#/components/schemas/User',
						},
					},
				},
			},
			404: {
				description: 'User not found',
				content: {
					'application/json': {
						schema: {
							$ref: '#/components/schemas/Error',
						},
					},
				},
			},
		},
	},
};
