import { BiXCircle } from 'react-icons/bi';

export const Menu = ({ setShowMenu }) => {
	return (
		<div className='menu'>
			<BiXCircle className='iconSet1 iconSet1-menu' onClick={() => setShowMenu(false)} />
		</div>
	);
};
