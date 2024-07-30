import { useState,useEffect} from "react";
const HeroTypeWritter = ({ words, speed }:{ words:string[] | any, speed:number }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("")
  const currentWord = words[currentWordIndex]
  useEffect(
    () => {
      let charIndex = 0;
      const typingInterval = setInterval(() => {
        if (charIndex <= currentWord.length) {
          setCurrentText(currentWord.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typingInterval)
          setTimeout(() => {
            setCurrentWordIndex((previousIndx) => previousIndx === words.length - 1 ? 0 : previousIndx + 1);
          }, 1000);     
        }
      }, speed)
      return () => {
        clearInterval(typingInterval)
      }
    },[currentWord,speed,words]
  )
  return <span className="tracking-wider bg-clip-text bg-gradient-to-r from-primary to-secondary">{ currentText }</span>
};
export default HeroTypeWritter;