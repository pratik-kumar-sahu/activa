import { videoAction } from './actions';
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
