
const Card = (props) => {
	let { name, email, username, id } = props.src;
	return (
		<div className='tc bg-light-green dib br3 ma2 pa3 grow bw2 shadow-5'>
			<img alt='A robo logo' src={`https://robohash.org/${id}?200x200`} height='200' />
			<div className="pa1">
				<h2>{name} </h2>
				<p>{username}</p>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;

