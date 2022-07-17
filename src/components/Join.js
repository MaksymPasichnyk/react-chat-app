function JoinForm() {
	return(
		<form className="join-form">
			<div className="join-form__group">
				<input name="name" type="text" placeholder="Full Name" />
			</div>
			<div className="join-form__group">
				<select className="join-form__select">
					<option>Please select a group</option>
				</select>
			</div>
		</form>
	)
}

export default JoinForm