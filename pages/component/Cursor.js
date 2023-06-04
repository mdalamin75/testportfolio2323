import React from "react";
import dynamic from "next/dynamic";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});
const Cursor = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={4}
        outerSize={32}
        color="0,0,255"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        innerStyle={{
          backgroundColor: "yellow",
        }}
        outerStyle={{
        //   border: "2px solid red",
          backgroundColor: "white",
          mixBlendMode: "difference",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          "h1",
          "h2",
        ]}
      />
    </>
  );
};

export default Cursor;
