import React, { useState, useRef } from "react";
import ChatMessagesList from "./ChatMessagesList";
import SignOut from "./SignOut";
import ChatHeading from "./ChatHeading";
import MessageForm from "./MessageForm";
import { useCollectionData } from "react-firebase-hooks/firestore";
import {
  auth,
  collection,
  db,
  limit,
  orderBy,
  query,
  serverTimestamp,
  addDoc,
  where,
} from "../firebase/firebase";
import { nanoid } from "nanoid";

export default function Chat() {
	const [formValue, setFormValue] = useState("");
  const [currentUser, setCurrentUser] = useState(auth.currentUser);
  const anchorToAutoScroll = useRef();

	// messages data
  const messageRef = collection(db, "messages");
  const q = query(messageRef, orderBy("createdAt"), limit(25));
  const [messages] = useCollectionData(q, { idField: "id" });

	console.log(currentUser)

  const sendMessage = async (e) => {
    e.preventDefault();

    const { photoURL = null, uid, displayName } = currentUser;

    await addDoc(messageRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
      displayName,
			id: nanoid(),
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
				<ChatMessagesList
					messages={messages}
					classNameText="chat-room__messages-list"
					auth={auth}
					anchorToAutoScroll={anchorToAutoScroll}
				/>
        <MessageForm
          sendMessage={sendMessage}
          handleMessageForm={handleMessageForm}
          formValue={formValue}
        />
      </div>
    </>
  );
}
