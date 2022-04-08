import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import {
	MdOutlineWatchLater,
	MdOutlinePlaylistAdd,
	MdOutlineShare,
	MdOutlinedFlag,
	MdPlayCircleOutline
} from 'react-icons/md';
import { useVideoContext } from '../state/contexts';
import { useParams } from 'react-router-dom';
import { EpisodeCard } from '../components/common';
import { useEffect, useState } from 'react';

export const VideoInfo = () => {
	const { gameplayId } = useParams();

	const [selectedGameplay, setSelectedGameplay] = useState({});
	const [selectedEpisode, setSelectedEpisode] = useState({});

	const {
		state: { videos }
	} = useVideoContext();

	useEffect(() => {
		setSelectedGameplay(videos.find((video) => video._id === gameplayId));
	}, [videos]);

	return Object.keys(selectedGameplay).length !== 0 ? (
		<div className='video'>
			<div className='video-content'>
				<div className='video-content__watch flex-row'>
					{(() => {
						return (
							<iframe
								className='video-content__watch--video'
								width='100%'
								height='450'
								src={`https://www.youtube.com/embed/${selectedEpisode.videoId}`}
								title='YouTube video player'
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
							></iframe>
						);
					})()}

					<span className='video-content__watch--like'>
						<AiOutlineLike className='iconDefault' />
						<AiOutlineDislike className='iconDefault' />
						<MdOutlineWatchLater className='iconDefault' />
						<MdOutlinePlaylistAdd className='iconDefault' />
						<MdOutlineShare className='iconDefault' />
						<MdOutlinedFlag className='iconDefault' />
					</span>
				</div>
				<div className='video-content__recommended'>
					<h3 className='my-5'>Continue Playing...</h3>
					<div className='home-parentSection__section--content width90 flex-row'>
						{selectedGameplay.episodes.map((episode) => {
							return (
								<EpisodeCard
									key={episode.videoId}
									episode={episode}
									handleSelectedEpisode={{
										selectedEpisode: selectedEpisode,
										setSelectedEpisode: setSelectedEpisode
									}}
								/>
							);
						})}
					</div>
				</div>
			</div>
			<div className='video-userInfo'>
				<h3 className='mb-4'>Continue Watching</h3>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 10, 11, 12, 13, 14, 15].map(
					(e, i) => {
						return (
							<div key={i} className='video-userInfo__watchCard'>
								<MdPlayCircleOutline className='iconDefault' />
								<p className='ml-4'>The Witcher</p>
							</div>
						);
					}
				)}
			</div>
			<div></div>
		</div>
	) : (
		<div>Loading...</div>
	);
};
