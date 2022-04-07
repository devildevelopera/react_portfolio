import React from "react";
import { Card } from "@mui/material";

function Note(props) {
  return (
    <Card className="note" id={props.node.id} {...props.draggableItem}>
      <div className="img-dev">
        <img src={props.node.image_link} alt="Image" />
        <span>{props.node.name}</span>
      </div>
    </Card>
  );
}

export default Note;
