import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const SendMessage = (props) => {
  const { sendMessageToChannel } = props;
  const [content, setContent] = useState(null);
  const handleChange = (value, editor) => {
    // const { content } = value;
    setContent(value);
  };

  const submitForm = () => {
    sendMessageToChannel(content);
    setContent(null);
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
        send post
      </button>
    </div>
  );
};
export default SendMessage;
