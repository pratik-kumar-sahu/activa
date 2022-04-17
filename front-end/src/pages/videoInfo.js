import { AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike } from 'react-icons/ai';
import {
	MdOutlineWatchLater,
	MdOutlinePlaylistAdd,
	MdOutlineShare,
	MdOutlinedFlag,
	MdPlayCircleOutline,
	MdWatchLater
} from 'react-icons/md';
import { useVideoContext } from '../state/contexts';
import { useParams } from 'react-router-dom';
import { EpisodeCard } from '../components/common';
import { useEffect, useState } from 'react';
import {
	addToWatchlater,
	dislikeVideo,
	likeVideo,
	removeFromWatchlater,
	revertDislikeVideo,
	revertLikeVideo
} from '../state/serverRequests';

export const VideoInfo = () => {
	const { gameplayId } = useParams();

	const [selectedGameplay, setSelectedGameplay] = useState({});
	const [selectedEpisode, setSelectedEpisode] = useState({});

	const {
		state: { videos },
		dispatch
	} = useVideoContext();

	useEffect(() => {
		if (
			Object.keys(selectedEpisode).length === 0 &&
			Object.keys(selectedGameplay).length !== 0
		) {
			setSelectedEpisode(selectedGameplay.episodes[0]);
		}
	}, [selectedGameplay]);

	useEffect(() => {
		setSelectedGameplay(videos.find((video) => video._id == gameplayId));
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
						{selectedEpisode.like ? (
							<AiFillLike
								className='iconDefault'
								onClick={() =>
									revertLikeVideo(
										selectedGameplay._id,
										selectedEpisode.episode,
										dispatch
									)
								}
							/>
						) : (
							<AiOutlineLike
								className='iconDefault'
								onClick={() =>
									likeVideo(
										selectedGameplay._id,
										selectedEpisode.episode,
										dispatch
									)
								}
							/>
						)}
						{selectedEpisode.dislike ? (
							<AiFillDislike
								className='iconDefault'
								onClick={() =>
									revertDislikeVideo(
										selectedGameplay._id,
										selectedEpisode.episode,
										dispatch
									)
								}
							/>
						) : (
							<AiOutlineDislike
								className='iconDefault'
								onClick={() =>
									dislikeVideo(
										selectedGameplay._id,
										selectedEpisode.episode,
										dispatch
									)
								}
							/>
						)}
						{selectedEpisode.watchLater ? (
							<MdWatchLater
								className='iconDefault'
								onClick={() =>
									removeFromWatchlater(
										selectedGameplay._id,
										selectedEpisode.episode,
										dispatch
									)
								}
							/>
						) : (
							<MdOutlineWatchLater
								className='iconDefault'
								onClick={() =>
									addToWatchlater(
										selectedGameplay._id,
										selectedEpisode.episode,
										dispatch
									)
								}
							/>
						)}
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
				<h3 className='mb-4'>Watch History</h3>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, i) => {
					return (
						<div key={i} className='video-userInfo__watchCard'>
							<MdPlayCircleOutline className='iconDefault' />
							<p className='ml-4'>The Witcher</p>
						</div>
					);
				})}
			</div>
			<div></div>
		</div>
	) : (
		<div>Loading...</div>
	);
};
