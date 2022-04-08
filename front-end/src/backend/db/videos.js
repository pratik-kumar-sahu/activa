import { v4 as uuid } from 'uuid';
/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

import { images } from '../../assets/images';

const { redDead, fortnite, cyberpunk } = images;

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
	},
	{
		_id: uuid(),
		title: 'Fortnite',
		brand: 'Epic Games',
		image: fortnite,
		color1: '0369a1',
		color2: '7dd3fc',
		episodes: [
			{
				episode: 1,
				name: 'Battle Royale! Squads, Solo, and 50 V 50!',
				videoId: 'kbd4GMSqlec',
				thumbnail:
					'https://i.ytimg.com/vi/kbd4GMSqlec/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCoPnZD6zy6f5cHVwyoZ0ENqAlVQA'
			},
			{
				episode: 2,
				name: 'Duos #1 VICTORY ROYALE with Zanitor!',
				videoId: 'Ce_6eAPHhqU',
				thumbnail:
					'https://i.ytimg.com/vi/Ce_6eAPHhqU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDtDGTgNG6MfM6En5rb_nUOeLGVDg'
			},
			{
				episode: 3,
				name: 'Final Fight #1 VICTORY ROYALE with Zanitor!',
				videoId: '6rSeK10t8Nc',
				thumbnail:
					'https://i.ytimg.com/vi/6rSeK10t8Nc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC-4Qhs15oQtFeNWjx7OKxPseUeYg'
			},
			{
				episode: 4,
				name: 'Duos Hiding Strategy! #1 VICTORY ROYALE with Zanitor!',
				videoId: 'QNKuxtnDrSA',
				thumbnail:
					'https://i.ytimg.com/vi/QNKuxtnDrSA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDzU4SgBTNTP-3j-RBT6-8dfvriSQ'
			},
			{
				episode: 5,
				name: 'Oblivion Skin! 50 v 50! #1 VICTORY ROYALE with Zanitor!',
				videoId: 'Z2V_QGWeWyQ',
				thumbnail:
					'https://i.ytimg.com/vi/Z2V_QGWeWyQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCOpNBGXDST0gT3gaIPdpHbm--_3A'
			},
			{
				episode: 6,
				name: 'Season 5 Battle Pass with Zanitor!',
				videoId: 'VjSBLD7QA10',
				thumbnail:
					'https://i.ytimg.com/vi/VjSBLD7QA10/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBGWdOFyJUyKoFHnNaNW0GvAjKd0w'
			},
			{
				episode: 7,
				name: 'New Magnus Skin! #1 Victory Royale',
				videoId: 'D67sv4amhOQ',
				thumbnail:
					'https://i.ytimg.com/vi/D67sv4amhOQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB6se2ANFx_f4woSfsmmIUMnmrM0Q'
			},
			{
				episode: 8,
				name: '7 Kills in Duos! Redline Skin!',
				videoId: 'a3WKqHqi6ys',
				thumbnail:
					'https://i.ytimg.com/vi/a3WKqHqi6ys/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDY2taucDv5JLCWuSiBZy-EHtYDgA'
			},
			{
				episode: 9,
				name: 'Flytrap Skin! Squads #1 Victory Royale!',
				videoId: 'yNRwv6fe-mU',
				thumbnail:
					'https://i.ytimg.com/vi/yNRwv6fe-mU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD7n89qHwN3iYCYmjqxOyS8_P73cA'
			},
			{
				episode: 10,
				name: 'New Submachine Gun! 50 v 50 #1 Victory Royale!',
				videoId: 'Z-8l3skgF-E',
				thumbnail:
					'https://i.ytimg.com/vi/Z-8l3skgF-E/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAzKjbI5eBXGExjmjeXsS1_W8VvCw'
			}
		]
	}
];
