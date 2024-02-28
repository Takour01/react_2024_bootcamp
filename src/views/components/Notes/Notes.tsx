import React from "react";
interface NotesProps {
  children: React.ReactNode;
}

const Notes = ({ children }: NotesProps) => {
  return <aside className="notes">{children}</aside>;
};

export default Notes;
