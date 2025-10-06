import classes from "./ChatSection.module.css"
import ChatWidget from "../common/ChatWidget";
import { FaFileAlt,FaPenSquare } from "react-icons/fa";
import { useGetDocument, usegetUserMessages } from "../../utils/hooks";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useRef } from "react";





export default function ChatSection({document_id}){
  const {data:messages,isLoading, error} = usegetUserMessages()
  const messagesEndRef = useRef(null);
  const {data:document} = useGetDocument(document_id)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [messages]);

    return <div className={classes.chatSection}>
    <div className={classes.chatMessages} ref={messagesEndRef}>
      { messages?.map(message=><div className={message.sender=="user"? `${classes.chatMessage} ${classes.user}`:classes.chatMessage}>
        <strong>{message.sender=="user"? "You":"AI"}:</strong> <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.content}</ReactMarkdown>
      </div>)}
    </div>

    <div className={classes.chatMeta}>
      {document && <span><FaFileAlt/> <a href={document.file}>{document.title}</a></span>}
      <span><FaPenSquare/> <a href="#">Derivatives Quiz</a></span>
    </div>

    <div className={classes.chatActions}>
      <button>Summarize</button>
      <button>Explain More</button>
      <button>Translate</button>
    </div>
        <ChatWidget/>
       { error? <div className={classes.errorMessage}>{error}</div>:""}
  </div>

}