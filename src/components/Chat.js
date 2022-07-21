import React, { useState, useRef, useContext } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import ChatMessage from "./ChatMessage";
import SignOut from "./SignOut";
import ChatHeading from "./ChatHeading";
import MessageForm from "./MessageForm";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { AuthContext } from "../context/authContext";

export default function Chat() {
  const { auth, messageRef, query } = useContext(AuthContext);
  const [formValue, setFormValue] = useState("");
  const anchorToAutoScroll = useRef();
	const [messages] = useCollectionData(query, { idField: "id" });

  const sendMessage = async (e) => {
    e.preventDefault();

    const { photoURL, uid, displayName } = auth.currentUser;

    await messageRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      displayName,
    });

    setFormValue("");

    anchorToAutoScroll.current.scrollIntoView({ behavior: "smooth" });
  };

  function handleMessageForm(e) {
    setFormValue(e.target.value);
  }

  return (
    <>
      <div className="chat-room">
        <div className="chat-room__header">
          <ChatHeading />
          <SignOut auth={auth} />
        </div>
        <div className="chat-room__messages-list">
          {messages &&
            messages.map((message, index) => (
              <ChatMessage key={index} message={message} auth={auth} />
            ))}
          <div ref={anchorToAutoScroll}></div>
        </div>

        <MessageForm
          sendMessage={sendMessage}
          handleMessageForm={handleMessageForm}
          formValue={formValue}
        />
      </div>
    </>
  );
}
