export const EpisodeCard = (props) => {
	const { episode, thumbnail, name } = props.episode;
	const { selectedEpisode, setSelectedEpisode } = props.handleSelectedEpisode;

	return (
		<div
			className='recommendCard flex-j-a-center'
			onClick={() => setSelectedEpisode(props.episode)}
		>
			<img className='recommendCard-image' src={thumbnail} alt={name} />
			<div
				className={`recommendCard-overlay recommendCard-overlay${
					selectedEpisode.episode === episode ? '-active' : ''
				} flex-j-a-center`}
			>
				<h4>{selectedEpisode.episode !== episode && `Episode - ${episode}`}</h4>
			</div>
		</div>
	);
};
