module.exports = {
	todos: [
		{
			title: 'Pick up milk'
		},
		{
			title: 'Plant sunflowers'
		},
		{
			title: 'Update app API'
		}
	],
	groceries: [
		{
			id: 'milk-1-gallon',
			title: 'Milk',
			count: 1,
			unit: 'gallon',
			isOpen: true,
			timestamp: new Date('11-24-2016')
		},
		{
			id: 'cereal-1-box',
			title: 'Cereal',
			count: 1,
			unit: 'box',
			isOpen: true,
			timestamp: new Date('11-23-2016')
		}
	],
	resources: [
		{
			id: 'ice-cream-1-quart',
			title: 'Ice Cream',
			count: 1,
			unit: 'quart',
			isOpen: true,
			timestamp: new Date('Nov 11 2016'),
			durations: [
				[new Date('Nov 1 2016'), new Date('Nov 10 2016')],
				[new Date('Oct 31 2016'), new Date('Nov 1 2016')],
				[new Date('Oct 5 2016'), new Date('Oct 17 2016')],
				[new Date('Sep 19 2016'), new Date('Sep 22 2016')],
				[new Date('Sep 1 2016'), new Date('Sep 3 2016')],
			]
		}
	],
	diagnostics: [],
	dates: [
		new Date('May 12 2016'),
		new Date('May 13 2016'),
		new Date('May 15 2016'),
		new Date('May 16 2016'),
		new Date('May 18 2016')
	]
}