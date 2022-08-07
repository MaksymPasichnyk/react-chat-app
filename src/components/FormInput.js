import PropTypes from "prop-types";
import Error from "./Error";

function FormInput(props) {
  const { icon, placeholderText, type, name, handleInputChange, value, error, errorClassMod } = props;

  return (
    <div className="form-input">
      <i className="form-input__field-icon">{icon}</i>
      <input
        placeholder={placeholderText}
        className="form-input__field"
        type={type}
				name={name}
				onChange={handleInputChange}
				value={value}
      />
			{error && <Error classMod={errorClassMod} error={error} />}
    </div>
  );
}

FormInput.propTypes = {
  icon: PropTypes.element.isRequired,
  placeholderText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
	name: PropTypes.string,
	handleInputChange: PropTypes.func.isRequired,
	value: PropTypes.string,
	error: PropTypes.string,
};

export default FormInput;
