import React, { useEffect, useState } from 'react';

const lines = ["$ whoami", "$ > praful-nair"];

const TerminalBanner: React.FC = () => {
  const [typedText, setTypedText] = useState<string>("");
  const [lineIndex, setLineIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [blink, setBlink] = useState<boolean>(true); // for cursor blinking
  const typingSpeed = 80; // ms per character
  const linePause = 400; // pause before typing next line (ms)

  useEffect(() => {
    // Handle blinking cursor
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    if (lineIndex >= lines.length) return; // Done typing all lines

    // If we haven't finished the current line, type next character
    if (charIndex < lines[lineIndex].length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + lines[lineIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      // Finished one line
      // Pause, then move on to the next line if any
      const pauseTimeout = setTimeout(() => {
        setTypedText((prev) => prev + "\n"); // move to next line
        setLineIndex(lineIndex + 1);
        setCharIndex(0);
      }, linePause);
      return () => clearTimeout(pauseTimeout);
    }
  }, [charIndex, lineIndex]);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="font-mono text-3xl text-white whitespace-pre leading-relaxed">
        {typedText}
        {blink && lineIndex < lines.length && <span className="inline-block w-1 bg-white ml-1 h-5 align-middle" />}
      </div>
    </div>
  );
};

export default TerminalBanner;