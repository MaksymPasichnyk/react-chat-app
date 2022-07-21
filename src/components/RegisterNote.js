import {Link} from 'react-router-dom';

export default function RegisterNote(props) {
	return (
		<div className="register-note">
			<span className="register-note__text">{props.text}</span>
			<Link to={props.to} className="register-note__link">{props.linkName}</Link>
		</div>  
	)
}