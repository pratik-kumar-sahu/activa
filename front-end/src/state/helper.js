export const checkForExistingVideoInStorage = (likedVideos, gameplayId, episodeId) => {
	const existingGameplayId = likedVideos.filter((video) => video.gameplayId === gameplayId);
	if (existingGameplayId.length) {
		const existingEpisodeId = existingGameplayId.filter(
			(video) => video.episodeId === episodeId
		);
		return existingEpisodeId.length ? false : true;
	} else {
		return true;
	}
};
