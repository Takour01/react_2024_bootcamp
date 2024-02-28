import React, { useState } from "react";

import Editor from "@monaco-editor/react";

const Playground = ({
  code,
  handleChange,
}: {
  code: string;
  handleChange: (value?: string) => void;
}) => {
  return (
    <Editor
      height={"100%"}
      defaultLanguage="javascript"
      defaultValue={code.trim()}
      theme="vs-dark"
      options={{
        fontSize: 14,
        minimap: {
          enabled: false,
        },
        contextmenu: false,
      }}
      onChange={handleChange}
    />
  );
};

export default Playground;
