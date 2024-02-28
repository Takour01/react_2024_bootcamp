import React from "react";

interface SlideProps {
  id?: string | null;
  animate?: boolean;
  restart?: boolean;
  children: React.ReactNode;
}

const Slide = ({
  id = null,
  animate = false,
  restart = false,
  children,
}: SlideProps) => {
  return (
    <section
      data-auto-animate-id={id}
      data-auto-animate={animate || null}
      data-auto-animate-restart={restart || null}
    >
      {children}
    </section>
  );
};

export default Slide;
