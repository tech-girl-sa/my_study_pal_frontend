import classes from "./ChatSection.module.css"
import ChatWidget from "../common/ChatWidget";
import { FaFileAlt,FaPenSquare } from "react-icons/fa";
import { usegetUserMessages } from "../../utils/hooks";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useRef } from "react";





export default function ChatSection(){
  const [data,isLoading, error] = usegetUserMessages()
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [data]);

    return <div className={classes.chatSection}>
    <div className={classes.chatMessages} ref={messagesEndRef}>
      { data?.map(message=><div className={message.sender=="user"? `${classes.chatMessage} ${classes.user}`:classes.chatMessage}>
        <strong>{message.sender=="user"? "You":"AI"}:</strong> <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.content}</ReactMarkdown>
      </div>)}
    </div>

    <div className={classes.chatMeta}>
      <span><FaFileAlt/> <a href="#">Derivatives_Notes.pdf</a></span>
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