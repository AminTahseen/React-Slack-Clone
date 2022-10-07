import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const SendMessage = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const handleChange = (data) => {
    setEditorState(data);
  };
  return (
    <div className="thread-message">
      <Editor
        editorState={editorState}
        onEditorStateChange={handleChange}
        wrapperClassName="editor-wrapper"
        editorClassName="message-editor"
        toolbarClassName="message-toolbar"
      />
    </div>
  );
};
export default SendMessage;
