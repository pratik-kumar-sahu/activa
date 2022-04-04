import { useNavigate } from 'react-router-dom';

export const VideoCard = (props) => {
	const { image, title, brand, color1, color2 } = props.videoCardData;
	const navigate = useNavigate();

	return (
		<div className='videoCard' onClick={() => navigate('/watch')}>
			<div
				style={{ backgroundImage: `linear-gradient(to right, #${color1}, #${color2})` }}
				className='videoCard-showcase mb-3'
			>
				<img className='videoCard-showcase__image' src={image.src} alt={image.alt} />
			</div>
			<h5 className='ml-2 cursorPointer'>{title}</h5>
			<p className='videoCard-info ml-2'>
				by <u className='cursorPointer'>{brand}</u>
			</p>
		</div>
	);
};
