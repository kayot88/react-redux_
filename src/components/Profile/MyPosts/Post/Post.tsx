import React from "react";
import ava from "../../../../img/ava.jpg";
import s from "./Post.module.css";
import { MessageType } from "../../../../types/types";

const Post: React.FC<PosrPropsType> = (props: PosrPropsType) => {
  return (
    <div className={s.post}>
      <div className={s.item}>
        <img src={ava} alt="img" />
        {props.message}
        <div>
          <span>like {props.likesCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;

type PosrPropsType = {
  message: string | null;
  likesCount: number | null;
};
