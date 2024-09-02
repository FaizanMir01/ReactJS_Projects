import React from "react";
import {motion} from "framer-motion";

function Note(props) {
  function handleClick() {
    props.ondelete(props.id);
  }
  return (
    <motion.div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </motion.div>
  );
}

export default Note;
