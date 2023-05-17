import React from "react";
import { useState } from "react";
import "./Workflow.css";
import { AnimatePresence, motion } from "framer-motion";

const Workflow = () => {
  const [fixed, setFixed] = useState(0);
  const [frac, setFrac] = useState(0.0);
  const [heading, setHeading] = useState("A keyboard first experience");
  const [desc, setDesc] = useState(
    "Powerful shortcuts and a keyboard first workflow means you will get to your finish line in no time!"
  );
  const [n, setN] = useState("01")

  React.useEffect(() => {
    const below = document.querySelectorAll(".some-content")[1];
    const content = document.querySelector(".workflow");

    function handleScroll() {
      if (
        window.scrollY >= content.offsetTop &&
        window.scrollY <= below.offsetTop - window.innerHeight
      ) {
        setFixed(1);
      } else if (window.scrollY < content.offsetTop) {
        setFixed(0);
      } else if (window.scrollY > below.offsetTop - window.innerHeight) {
        setFixed(2);
      }

      const frac =
        (window.scrollY - content.offsetTop) /
        (below.offsetTop - window.innerHeight - content.offsetTop);
      setFrac(frac);
    }

    window.addEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    document.querySelector(".progress-top").style.height = `${
      400 * Math.min(frac, 1)
    }px`;

    if (frac <= 1 / 3) {
      setHeading("A keyboard first experience");
      setDesc(
        "Powerful shortcuts and a keyboard first workflow means you will get to your finish line in no time!"
      );
      setN("01")
    } else if (frac <= 2 / 3) {
      setHeading("Bullets to visuals in a click");
      setDesc(
        "Transform any block to any other and try different options without any design hassle"
      );
      setN("02")
    } else {
      setHeading("A powerful assistant just a click away");
      setDesc(
        "Insert blocks, perform powerful actions and leverate the limitless power of AI - all without leaving your keyboard"
      );
      setN("03")
    }
  }, [frac]);

  return (
    <div className="workflow">
      <div
        className={`workflow-inner ${
          fixed === 0 ? "top" : fixed === 1 ? "fixed" : "bottom"
        }`}
      >
        <div className="workflow-col-left">
          <div className="workflow-title">
            <svg
              wodth="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path
                d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z"
                fill="#A594FD"
              ></path>
            </svg>
            <span>Workflow</span>
          </div>
          <span className="workflow-header">
            Create at the speed of thought.
          </span>
          <span className="workflow-desc">
            Focus on your getting your thoughts out and crafting the best
            message while Chronicle does the heavy lifting for you
          </span>
        </div>

        <div className="workflow-col-right" style={{position: "relative"}}>
          <AnimatePresence initial={false} custom="wait">
            <motion.div
              className="card"
              key={heading}
              initial={{ y: 150, opacity: 0, scale: 0.7 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{duration:0.4}}
              exit={{ y: 150, opacity: 0, scale: 0.7 }}
              style={{position: "absolute"}}
            >
              <span className="card-header">{heading}</span>
              <span className="card-desc">{desc}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="progress">
          <span>{n}</span>
          <div className="progress-bar">
            <div className="progress-top"></div>
          </div>
          <span>03</span>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
