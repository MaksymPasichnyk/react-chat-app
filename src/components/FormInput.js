import PropTypes from "prop-types";

function FormInput(props) {
  const { icon, placeholderText, type, name, handleInputChange, value } = props;

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
    </div>
  );
}

FormInput.propTypes = {
  icon: PropTypes.element.isRequired,
  placeholderText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default FormInput;
