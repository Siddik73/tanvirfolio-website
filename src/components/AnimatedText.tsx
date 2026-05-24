import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

export const AnimatedText = ({ text, className = "" }: { text: string, className?: string }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const words = text.split(" ");
  let charCount = 0;

  return (
    <p ref={containerRef} className={className} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {words.map((word, i) => {
        const wordChars = word.split("");
        const startIdx = charCount;
        charCount += wordChars.length + 1; // +1 for the space
        
        return (
          <span key={i} className="relative mr-[0.25em] whitespace-nowrap">
            {wordChars.map((char, j) => {
              const charIndex = startIdx + j;
              return <Char key={j} char={char} progress={scrollYProgress} index={charIndex} total={text.length} />;
            })}
          </span>
        );
      })}
    </p>
  );
};

const Char = ({ char, progress, index, total }: { char: string, progress: MotionValue<number>, index: number, total: number }) => {
  const start = index / total;
  const end = start + (1 / total);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  
  return (
    <span className="relative inline-block">
      <span className="invisible">{char}</span>
      <motion.span className="absolute top-0 left-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
};
