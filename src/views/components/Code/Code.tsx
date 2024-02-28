import React from "react";

interface CodeProps {
  id?: string | null;
  lines?: string | boolean | null;
  noescape?: boolean;
  children: React.ReactNode;
}

const Code = ({
  children,
  id = null,
  lines = null,
  noescape = false,
}: CodeProps) => {
  return (
    <pre data-id={id || null}>
      <code
        data-trim
        data-line-numbers={lines || null}
        data-noescape={noescape || null}
      >
        {children}
      </code>
    </pre>
  );
};

export default Code;
