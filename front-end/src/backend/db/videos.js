import { v4 as uuid } from 'uuid';
/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

import { images } from '../../assets/images';

const { redDead } = images;

export const videos = [
	{
		_id: uuid(),
		title: 'Red Dead Redemption 2',
		brand: 'Rockstar Games',
		image: redDead,
		color1: 'b91c1c',
		color2: 'f87171',
		episodes: [
			{
				episode: 1,
				name: 'Intro',
				videoId: 'GU5vd5Z28UQ',
				thumbnail:
					'https://i.ytimg.com/vi/GU5vd5Z28UQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCpRODP1akcOGtM9WrVJYtsGPY4pQ'
			},
			{
				episode: 2,
				name: 'Arthur',
				videoId: '7u6q7zjCAb0',
				thumbnail:
					'https://i.ytimg.com/vi/7u6q7zjCAb0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCjT3KGwG746aPH0Sqx-Si8fiOepA'
			},
			{
				episode: 3,
				name: 'Train',
				videoId: 'qw47KpIqNzQ',
				thumbnail:
					'https://i.ytimg.com/vi/qw47KpIqNzQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLALF1m3J66ijORvro4dNad9ldBwxQ'
			},
			{
				episode: 4,
				name: 'Blackwater',
				videoId: 'AilgAOsGMuQ',
				thumbnail:
					'https://i.ytimg.com/vi/AilgAOsGMuQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAAKZy-tutrXjs0bw049P0lIC_igA'
			},
			{
				episode: 5,
				name: 'Saloon',
				videoId: 'CWEA87-MiE4',
				thumbnail:
					'https://i.ytimg.com/vi/CWEA87-MiE4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDIHvToQYFRqYilFZF3EonkT5h0Yw'
			},
			{
				episode: 6,
				name: 'Legendary Bear',
				videoId: 'nH9aPtxUrw8',
				thumbnail:
					'https://i.ytimg.com/vi/nH9aPtxUrw8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBPegkAOcTEvAXhqX20JlmawxVBJQ'
			},
			{
				episode: 7,
				name: 'Gang Hideout',
				videoId: 'lhOj1v2rsdw',
				thumbnail:
					'https://i.ytimg.com/vi/lhOj1v2rsdw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCnGhlF7s3IqT-H7sFbU3leoo2Vwg'
			},
			{
				episode: 8,
				name: 'Lenny',
				videoId: 'sEu_yyZfVmI',
				thumbnail:
					'https://i.ytimg.com/vi/sEu_yyZfVmI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBL4gBfyeoADSSX5rCv-3Jg4ALLAw'
			},
			{
				episode: 9,
				name: 'Poker',
				videoId: 'Yg1NPUkrXmQ',
				thumbnail:
					'https://i.ytimg.com/vi/Yg1NPUkrXmQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDtVvZmJ8I6TL6r0resda3vehaJSg'
			},
			{
				episode: 10,
				name: 'Valentine',
				videoId: '2ZBt34rXzMU',
				thumbnail:
					'https://i.ytimg.com/vi/2ZBt34rXzMU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBb5qKVlCJxZR68RUbjZOWrs6Qbxg'
			}
		]
	}
	// {
	// 	_id: uuid(),
	// 	title: 'Neural Networks from Scratch - P.1 Intro and Neuron Code',
	// 	creator: 'Sentdex',
	// 	description:
	// 		'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
	// }
];
