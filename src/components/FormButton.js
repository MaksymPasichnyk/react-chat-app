export default function FormButton(props) {
	return (
		<button onClick={props.handleSubmitForm} type={props.type} className="form-button">{props.title}</button>
	)
}