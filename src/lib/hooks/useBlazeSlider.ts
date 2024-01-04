import React from 'react';
import BlazeSlider from 'blaze-slider';
import { BlazeConfig } from 'blaze-slider';

export const useBlazeSlider = (config: BlazeConfig) => {
  const sliderRef = React.useRef<HTMLImageElement | undefined |
   null>();
  const elRef = React.useRef<HTMLImageElement | undefined |
   null>();

  
  React.useEffect(() => {
    if (!sliderRef.current) {
      sliderRef.current = new BlazeSlider(elRef.current, config);
    }
  }, [])

  return elRef;
}