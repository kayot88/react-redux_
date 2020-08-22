import React, { FC } from "react";
import s from "./Message.module.css";

type MessageCompType = {
  message: string | null ;
};

const Message: FC<MessageCompType> = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

export default Message;
