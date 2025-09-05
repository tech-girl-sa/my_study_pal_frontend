import ChatWidget from "../common/ChatWidget";
import { FaPlus, FaRocket } from "react-icons/fa";
import { FaFileCirclePlus } from "react-icons/fa6";
import { FaComments } from "react-icons/fa";
import classes from './ChatWidgetSection.module.css'
import RoundBlueButton from "../common/RoundBlueButton";

export default function ChatWidgetSection(){
    return <section className={classes.chatWidget}>
    <div className={classes.chatHeader}>
      <FaComments className={classes.chatIcon} /> 
      <h3>Ask a question or upload your materials</h3>
    </div>
    <ChatWidget/>
    <div className={`${classes.actionButtons} ${classes.center}`}>
    <RoundBlueButton>
        <FaPlus /> New Subject
      </RoundBlueButton>
      <RoundBlueButton>
        <FaPlus /> New Course
      </RoundBlueButton>
      <RoundBlueButton>
        <FaFileCirclePlus /> New Document
      </RoundBlueButton>
      <RoundBlueButton>
        <FaRocket /> New Quiz
      </RoundBlueButton>
    </div>
  </section>
}