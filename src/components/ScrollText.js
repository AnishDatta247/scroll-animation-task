import React, { useState } from "react";
import "./ScrollText.css";

const ScrollText = () => {
  const [fixed, setFixed] = useState(0);
  const [frac, setFrac] = useState(0.0);

  const text =
    "In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from out library of blocks and see the magic unfold.";

  const words = text.split(" ");

  React.useEffect(() => {
    const workflow = document.querySelector(".workflow");
    const description = document.querySelector(".description");

    function handleScroll() {
      if (
        window.scrollY >= description.offsetTop &&
        window.scrollY <= workflow.offsetTop - window.innerHeight
      ) {
        setFixed(1);
      } else if (window.scrollY < description.offsetTop) {
        setFixed(0);
      } else if (window.scrollY > workflow.offsetTop - window.innerHeight) {
        setFixed(2)
      }

      const frac = (window.scrollY-description.offsetTop)/(workflow.offsetTop - window.innerHeight - description.offsetTop)
      setFrac(frac)
    }

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="description">
      <div className={`paragraph ${fixed===0 ? "top" : (fixed===1?"fixed":"bottom")}`}>
        {words.map((word, i) => (
          <span className={`word ${i+1<=Math.round(frac*(words.length))?"scrolled":""}`}>{word}</span>
        ))}
      </div>
    </div>
  );
};

export default ScrollText;
