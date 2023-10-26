import React from "react";
import { useState, useEffect } from "react";

const Typewriter = ({ text, speed, infinite, delay, reverse }) => {
  const [textEvent, setTextEvent] = useState("");
  const [currentArrayText, setCurrentArrayText] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reversing, setReversing] = useState(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let timeout;
    if (text && text?.length > 0) {
      setTextEvent(text[currentArrayText]);
    } else {
      setTextEvent(text);
    }
    if (!reversing) {
      if (currentIndex < textEvent?.length) {
        timeout = setTimeout(() => {
          setCurrentText((prevText) => prevText + textEvent[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
          setOpacity((1 * currentIndex) / textEvent?.length);
        }, speed);
        return () => clearTimeout(timeout);
      } else if (infinite) {
        if (reverse) {
          console.log("reverse");
          setTimeout(() => {
            console.log("setTimeout");
            setReversing(true);
            // setCurrentIndex(0);
            // setCurrentText("");
          }, delay);
        }
      }
    }
  }, [currentIndex, speed, infinite, textEvent, reversing]);

  useEffect(() => {
    if (reversing) {
      let timeout;
      const timer = setInterval(() => {
        if (currentText.length > 0) {
          timeout = setTimeout(() => {
            setCurrentText((prevText) => prevText.slice(0, -1));
            setCurrentIndex((prevIndex) => prevIndex - 1);
            setOpacity((1 * currentIndex) / textEvent?.length);
          }, speed);
          return () => clearTimeout(timeout);
        } else {
          setCurrentIndex(0);
          setCurrentText("");
          setReversing(false);
          if (text && text?.length > 0) {
            if (currentArrayText + 1 >= text?.length) {
              setCurrentArrayText(0);
            } else {
              setCurrentArrayText(
                (preCurrentArrayText) => preCurrentArrayText + 1
              );
            }
          }
          clearInterval(timer); // Stop the timer when the string is empty
        }
      }, speed); // 1000 milliseconds = 1 second

      return () => {
        clearInterval(timer); // Clean up the timer when the component unmounts
      };
    }
  }, [reversing, currentIndex]); // Make sure to include myString as a dependency

  return <span style={{ opacity: opacity }}>{currentText}</span>;
};

export default Typewriter;
