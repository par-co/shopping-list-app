import "./Message.css";

export default function Message({ messageObj }) {
  if (messageObj.msgText) {
    return (
      <h2 className={`message ${messageObj.msgClassName}`}>
        {messageObj.msgText}
      </h2>
    );
  }
}
