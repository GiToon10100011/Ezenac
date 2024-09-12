import emotion1 from "./images/emotion1.png";
import emotion2 from "./images/emotion2.png";
import emotion3 from "./images/emotion3.png";
import emotion4 from "./images/emotion4.png";
import emotion5 from "./images/emotion5.png";

export const getEmotionImgById = (emotionId) => {
  const targetEmotionId = String(emotionId);
  switch (targetEmotionId) {
    case "1":
      return emotion1;
    case "2":
      return emotion2;
    case "3":
      return emotion3;
    case "4":
      return emotion4;
    case "5":
      return emotion5;
    default: 
      return null;
  }
};
