import { images } from '../assets/images';
import { VideoCard } from '../components/common';

export const Home = () => {
	const { redDead, fortnite, cyberpunk } = images;

	return (
		<div className='home'>
			<div className='home-parentSection'>
				<div className='home-parentSection__heading'>Gameplays</div>
				<p className='home-parentSection__para mb-5'>Gameplays for Game Lovers</p>

				<section className='home-parentSection__section'>
					<h3 className='home-parentSection__section--heading'>Top Gameplays</h3>
					<div className='home-parentSection__section--content flex-row'>
						<VideoCard
							videoCardData={{
								image: redDead,
								title: 'Red Dead Redemption 2',
								brand: 'Rockstar Games',
								color1: 'b91c1c',
								color2: 'f87171'
							}}
						/>
						<VideoCard
							videoCardData={{
								image: fortnite,
								title: 'Fortnite',
								brand: 'Epic Games',
								color1: '0369a1',
								color2: '7dd3fc'
							}}
						/>
						<VideoCard
							videoCardData={{
								image: cyberpunk,
								title: 'Cyberpunk 2077',
								brand: 'CD Projekt',
								color1: 'f59e0b',
								color2: 'fde68a'
							}}
						/>
						<VideoCard
							videoCardData={{
								image: redDead,
								title: 'Red Dead Redemption 2',
								brand: 'Rockstar Games',
								color1: 'b91c1c',
								color2: 'f87171'
							}}
						/>
						<VideoCard
							videoCardData={{
								image: fortnite,
								title: 'Fortnite',
								brand: 'Epic Games',
								color1: '0369a1',
								color2: '7dd3fc'
							}}
						/>
						<VideoCard
							videoCardData={{
								image: cyberpunk,
								title: 'Cyberpunk 2077',
								brand: 'CD Projekt',
								color1: 'f59e0b',
								color2: 'fde68a'
							}}
						/>
					</div>
				</section>

				<section className='home-parentSection__section mb-5'>
					<h3 className='home-parentSection__section--heading'>Top Gameplays</h3>
					<div className='home-parentSection__section--content flex-row'>
						<VideoCard
							videoCardData={{
								image: redDead,
								title: 'Red Dead Redemption 2',
								brand: 'Rockstar Games',
								color1: 'b91c1c',
								color2: 'f87171'
							}}
						/>
						<VideoCard
							videoCardData={{
								image: fortnite,
								title: 'Fortnite',
								brand: 'Epic Games',
								color1: '0369a1',
								color2: '7dd3fc'
							}}
						/>
						<VideoCard
							videoCardData={{
								image: cyberpunk,
								title: 'Cyberpunk 2077',
								brand: 'CD Projekt',
								color1: 'f59e0b',
								color2: 'fde68a'
							}}
						/>
						<VideoCard
							videoCardData={{
								image: redDead,
								title: 'Red Dead Redemption 2',
								brand: 'Rockstar Games',
								color1: 'b91c1c',
								color2: 'f87171'
							}}
						/>
						<VideoCard
							videoCardData={{
								image: fortnite,
								title: 'Fortnite',
								brand: 'Epic Games',
								color1: '0369a1',
								color2: '7dd3fc'
							}}
						/>
						<VideoCard
							videoCardData={{
								image: cyberpunk,
								title: 'Cyberpunk 2077',
								brand: 'CD Projekt',
								color1: 'f59e0b',
								color2: 'fde68a'
							}}
						/>
					</div>
				</section>
			</div>
		</div>
	);
};
