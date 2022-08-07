import { FiSend } from "react-icons/fi";
import PropTypes from 'prop-types';
function MessageForm(props) {
  const { sendMessage, formValue, handleMessageForm } = props;

  return (
    <form className="message-form" onSubmit={sendMessage}>
      <div className="message-form__body">
        <input
          className="message-form__field"
          value={formValue}
          onChange={handleMessageForm}
        />
        <button className="message-form__submit btn" type="submit">
					<FiSend />
        </button>
      </div>
    </form>
  );
}

MessageForm.propTypes = {
	sendMessage: PropTypes.func.isRequired,
	formValue: PropTypes.string.isRequired,
	handleMessageForm: PropTypes.func.isRequired
}

export default MessageForm