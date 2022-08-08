import PropTypes from "prop-types";

const Form = ({ children, handleSubmitForm }) => (
  <form onSubmit={handleSubmitForm} className="form">
    {children}
  </form>
);

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
	handleSubmitForm: PropTypes.func.isRequired
}

export default Form;
