import React, { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import Highlight from "reveal.js/plugin/highlight/highlight";
import Notes from "reveal.js/plugin/notes/notes";

import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/moon.css";
import "reveal.js/plugin/highlight/monokai.css";

const Slides = ({ children }: { children: React.ReactNode }) => {
  const deckDivRef = useRef<HTMLDivElement>(null); // reference to deck container div
  const deckRef = useRef<Reveal.Api | null>(null);

  useEffect(() => {
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current!, {
      autoAnimateEasing: "ease",
      autoAnimateDuration: 1,
      hash: true,
      center: true,
      controls: true,
      embedded: true,
    });
    deckRef.current.initialize({
      plugins: [Highlight, Notes],
    });
    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn("Reveal.js destroy call failed.");
      }
    };
  }, []);

  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">{children}</div>
    </div>
  );
};

export default Slides;
