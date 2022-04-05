import { useState } from 'react';
import { BiSearchAlt2, BiChat, BiMenu } from 'react-icons/bi';

import './assets/styles/app.scss';
import { RouteContainer, Menu } from './components/layout';

export const App = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<div className='App'>
			{!showMenu && (
				<BiMenu className='iconSet1 iconSet1-menu' onClick={() => setShowMenu(true)} />
			)}
			<BiSearchAlt2 className='iconSet1 iconSet1-search' />
			<BiChat className='iconSet1 iconSet1-chat' />

			<div className='flex-row'>
				{showMenu && <Menu setShowMenu={setShowMenu} />}
				<RouteContainer showMenu={showMenu} />
			</div>
		</div>
	);
};
