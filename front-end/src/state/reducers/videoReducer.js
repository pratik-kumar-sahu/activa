import { videoAction } from '../actions/videoAction';

export const videoReducer = (state, action) => {
	const { gameplayId, episodeId } = action.payload;

	switch (action.type) {
		case videoAction.fetchVideos:
			return { ...state, videos: action.payload };

		case videoAction.likeVideo:
			state.videos.forEach((gameplay) => {
				if (gameplay._id === gameplayId) {
					gameplay.episodes.forEach((episode) => {
						if (episode.episode === episodeId) {
							episode.like = true;
							episode.dislike = false;
						}
					});
				}
			});
			return { ...state };

		case videoAction.revertLikeVideo:
			state.videos.forEach((gameplay) => {
				if (gameplay._id === gameplayId) {
					gameplay.episodes.forEach((episode) => {
						if (episode.episode === episodeId) {
							episode.like = false;
						}
					});
				}
			});
			return { ...state };

		case videoAction.dislikeVideo:
			state.videos.forEach((gameplay) => {
				if (gameplay._id === gameplayId) {
					gameplay.episodes.forEach((episode) => {
						if (episode.episode === episodeId) {
							episode.like = false;
							episode.dislike = true;
						}
					});
				}
			});
			return { ...state };

		case videoAction.revertDislikeVideo:
			state.videos.forEach((gameplay) => {
				if (gameplay._id === gameplayId) {
					gameplay.episodes.forEach((episode) => {
						if (episode.episode === episodeId) {
							episode.dislike = false;
						}
					});
				}
			});
			return { ...state };

		case videoAction.addToWatchlater:
			state.videos.forEach((gameplay) => {
				if (gameplay._id === gameplayId) {
					gameplay.episodes.forEach((episode) => {
						if (episode.episode === episodeId) {
							episode.watchLater = true;
						}
					});
				}
			});
			return { ...state };

		case videoAction.removeFromWatchlater:
			state.videos.forEach((gameplay) => {
				if (gameplay._id === gameplayId) {
					gameplay.episodes.forEach((episode) => {
						if (episode.episode === episodeId) {
							episode.watchLater = false;
						}
					});
				}
			});
			return { ...state };

		default:
			throw new Error('Action type not found');
	}
};
