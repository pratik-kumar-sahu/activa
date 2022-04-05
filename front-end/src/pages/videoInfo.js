import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import {
	MdOutlineWatchLater,
	MdOutlinePlaylistAdd,
	MdOutlineShare,
	MdOutlinedFlag,
	MdPlayCircleOutline
} from 'react-icons/md';

export const VideoInfo = () => {
	return (
		<div className='video'>
			<div className='video-content'>
				<div className='video-content__watch flex-row'>
					<iframe
						className='video-content__watch--video'
						width='100%'
						height='450'
						src={`https://www.youtube.com/embed/${'GU5vd5Z28UQ'}`}
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
					></iframe>
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
					<div className='video-content__recommended--videoList'>
						{[2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => {
							return (
								<div className='recommendCard flex-j-a-center'>
									<h3 className='recommendCard-text'>Episode - {e}</h3>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div className='video-userInfo'>
				<h3 className='mb-4'>Continue Watching</h3>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((e) => {
					return (
						<div className='video-userInfo__watchCard'>
							<MdPlayCircleOutline className='iconDefault' />
							<p className='ml-4'>The Witcher</p>
						</div>
					);
				})}
			</div>
			<div></div>
		</div>
	);
};
