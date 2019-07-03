import React, { useState } from "react";
import anime from "animejs";
import PropTypes from "prop-types";
import { useInterval } from "../../sharedResources/hooks";

export const TextCarousel = props => {
  // Look into anime timeline
  const animeConfig = {
    targets: `.${props.className}`,
    translateY: 50,
    duration: 800
  };

  const [textIndex, rotateTextIndex] = useState(0);

  if (props.rotatedText.length > 1) {
    useInterval(() => {
      anime(animeConfig);
      rotateTextIndex(
        textIndex === props.rotatedText.length - 1 ? 0 : textIndex + 1
      );
    }, props.delay);
  }

  return <h1 className={props.className}>{props.rotatedText[textIndex]}</h1>;
};

TextCarousel.propTypes = {
  rotatedText: PropTypes.arrayOf(PropTypes.string),
  delay: PropTypes.number
};

export default TextCarousel;
