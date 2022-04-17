import { useEffect } from 'react';
import { images } from '../assets/images';
import { VideoCard } from '../components/common';
import { useVideoContext } from '../state/contexts';
import { fetchVideos } from '../state/serverRequests';

export const Home = () => {
	const { redDead, fortnite, cyberpunk } = images;

	const { state: videoState, dispatch: videoDispatch } = useVideoContext();

	useEffect(() => {
		fetchVideos(videoDispatch);
	}, [videoDispatch]);

	return (
		<div className='home'>
			<div className='home-parentSection'>
				<div className='home-parentSection__heading'>Gameplays</div>
				<p className='home-parentSection__para mb-5'>Gameplays for Game Lovers</p>

				<section className='home-parentSection__section'>
					<h3 className='home-parentSection__section--heading'>Top Gameplays</h3>
					<div className='home-parentSection__section--content flex-row'>
						{videoState.videos.map((video) => {
							return <VideoCard key={video._id} videoCardData={video} />;
						})}
					</div>
				</section>

				<section className='home-parentSection__section mb-5'>
					<h3 className='home-parentSection__section--heading'>Trending Gameplays</h3>
					<div className='home-parentSection__section--content flex-row'>
						{videoState.videos.length && (
							<VideoCard videoCardData={videoState.videos[2]} />
						)}
					</div>
				</section>
			</div>
		</div>
	);
};
