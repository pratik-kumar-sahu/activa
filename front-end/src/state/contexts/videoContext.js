import { createContext, useContext, useReducer } from 'react';
import { videoReducer } from '../reducers';

const VideoContext = createContext();

export const useVideoContext = () => useContext(VideoContext);

export const VideoContextProvider = ({ children }) => {
	const initialState = {
		videos: [],
		likedVideos: [],
		dislikedVideos: [],
		watchLater: [],
		watchedHistory: [],
		playlist: []
	};

	const [state, dispatch] = useReducer(videoReducer, initialState);

	return <VideoContext.Provider value={{ state, dispatch }}>{children}</VideoContext.Provider>;
};
