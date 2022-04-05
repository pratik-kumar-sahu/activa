import { Routes, Route } from 'react-router-dom';

import { Home, VideoInfo } from '../../pages';

export const RouteContainer = ({ showMenu }) => {
	return (
		<div className={`routeContainer${showMenu ? '-customWidth' : ''}`}>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/watch' element={<VideoInfo />} />
			</Routes>
		</div>
	);
};
