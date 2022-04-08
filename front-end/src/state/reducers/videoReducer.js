import { videoAction } from '../actions/videoAction';

export const videoReducer = (state, action) => {
	switch (action.type) {
		case videoAction.fetchVideos:
			return { ...state, videos: action.payload };

		default:
			throw new Error('Action type not found');
	}
};
