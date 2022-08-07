import ChatMessage from "./ChatMessage";

function ChatMessagesList({
  messages,
  classNameText,
  auth,
  anchorToAutoScroll,
}) {
  return (
    <div className={classNameText}>
      {messages &&
        messages.map((message, index) => (
          <ChatMessage key={index} message={message} auth={auth} />
        ))}
      <div ref={anchorToAutoScroll}></div>
    </div>
  );
}

export default ChatMessagesList;
