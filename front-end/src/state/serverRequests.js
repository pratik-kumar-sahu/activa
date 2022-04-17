import { videoAction } from './actions';
import { checkForExistingVideoInStorage } from './helper';
import axios from 'axios';

export const fetchVideos = async (dispatch) => {
	try {
		const {
			data: { videos },
			status
		} = await axios.get('api/videos');

		if (status === 200) {
			dispatch({ type: videoAction.fetchVideos, payload: videos });
		} else {
			throw new Error('No Response');
		}
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const likeVideo = (gameplayId, episodeId, dispatch) => {
	try {
		// let likedVideos = JSON.parse(localStorage.getItem('likedVideos'));
		// if (!likedVideos) {
		// 	likedVideos = [];
		// }
		// if (checkForExistingVideoInStorage(likedVideos, gameplayId, episodeId)) {
		// 	likedVideos.push({ gameplayId, episodeId });
		// 	localStorage.setItem('likedVideos', JSON.stringify(likedVideos));
		dispatch({ type: videoAction.likeVideo, payload: { gameplayId, episodeId } });
		// }
	} catch (error) {
		throw Error(error);
	}
};

export const revertLikeVideo = (gameplayId, episodeId, dispatch) => {
	try {
		dispatch({ type: videoAction.revertLikeVideo, payload: { gameplayId, episodeId } });
	} catch (error) {
		throw Error(error);
	}
};

export const dislikeVideo = (gameplayId, episodeId, dispatch) => {
	try {
		dispatch({ type: videoAction.dislikeVideo, payload: { gameplayId, episodeId } });
	} catch (error) {
		throw Error(error);
	}
};

export const revertDislikeVideo = (gameplayId, episodeId, dispatch) => {
	try {
		dispatch({ type: videoAction.revertDislikeVideo, payload: { gameplayId, episodeId } });
	} catch (error) {
		throw Error(error);
	}
};

export const addToWatchlater = (gameplayId, episodeId, dispatch) => {
	try {
		dispatch({ type: videoAction.addToWatchlater, payload: { gameplayId, episodeId } });
	} catch (error) {
		throw Error(error);
	}
};

export const removeFromWatchlater = (gameplayId, episodeId, dispatch) => {
	try {
		dispatch({ type: videoAction.removeFromWatchlater, payload: { gameplayId, episodeId } });
	} catch (error) {
		throw Error(error);
	}
};
