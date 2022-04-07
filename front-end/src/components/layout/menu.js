import { BiXCircle } from 'react-icons/bi';
import { MdOutlineWatchLater } from 'react-icons/md';
import { AiOutlineLike } from 'react-icons/ai';

export const Menu = ({ setShowMenu }) => {
	return (
		<div className='menu'>
			<BiXCircle className='iconSet1 iconSet1-menu' onClick={() => setShowMenu(false)} />

			<div className='menu-submenuList'>
				<div className='menu-submenuList__submenu flex-j-a-center my-4'>
					<AiOutlineLike className='mr-5' />
					<span>Liked Gameplays</span>
				</div>
				<div className='menu-submenuList__submenu flex-j-a-center my-4'>
					<MdOutlineWatchLater className='mr-5' />
					<span>Watch Later</span>
				</div>
			</div>
		</div>
	);
};
