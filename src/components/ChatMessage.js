
import defaultIcon from "../assets/default-icon.png";
import UserInfo from "./UserInfo";

export default function ChatMessage(props) {
  const { message, auth } = props;
  const { text, uid, photoURL, displayName, createdAt } = message;

  const avatar = photoURL ? photoURL : defaultIcon;
  const name = displayName !== null ? displayName : "Guest";
	let time = null;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

	if (createdAt) {
		time = new Date(createdAt.seconds * 1000).toLocaleString();
	}


  return (
    <div className={`chat-message ${messageClass}`}>
			<UserInfo avatar={avatar} name={name} time={time} />
      <p className="chat-message__text">
        {text}
      </p>
    </div>
  );
}
