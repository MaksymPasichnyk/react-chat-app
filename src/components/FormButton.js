import PropTypes from "prop-types";

const FormButton = ({ handleSubmitForm, type, title }) => (
  <>
    <button onClick={handleSubmitForm} type={type} className="form-button">
      {title}
    </button>
  </>
);

FormButton.propTypes = {
	handleSubmitForm: PropTypes.func,
	type: PropTypes.string,
	title: PropTypes.string
}

export default FormButton;
