import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const SendDirectMessage = (props) => {
  const { sendDmMessage } = props;
  const [content, setContent] = useState(null);
  const handleChange = (value, editor) => {
    // const { content } = value;
    setContent(value);
  };

  const submitForm = () => {
    setContent(null);
    sendDmMessage(content);
  };
  return (
    <div className="thread-message">
      <Editor
        value={content}
        // apiKey='your-api-key'
        init={{
          height: 160,
          menubar: false,
        }}
        onEditorChange={handleChange}
      />
      <button className="send-message" onClick={submitForm}>
        Send Message
      </button>
    </div>
  );
};
export default SendDirectMessage;
