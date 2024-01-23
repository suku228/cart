import React, { useRef, useEffect } from "react";

const ScrollComponent = () => {
  // Create a ref to store the reference to the DOM element
  const scrollRef = useRef(null);

  // Define a function to handle scrolling events
  const handleScroll = () => {
    console.log("Scrolled!");
    // Add your custom scrolling logic here
  };

  // Add an effect to attach the event listener when the component mounts
  useEffect(() => {
    const scrollElement = scrollRef.current;

    // Check if the element exists before attaching the event listener
    if (scrollElement) {
      // Attach the event listener to the scroll event
      scrollElement.addEventListener("scroll", handleScroll);

      // Clean up the event listener when the component is unmounted
      return () => {
        scrollElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div ref={scrollRef} style={{ height: "100%", overflowY: "scroll" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {[
          3, 3, 3, 3, 4, 4, 4, 4, 4,

          3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        ].map(() => (
          <div
            style={{
              height: "200px",
              width: "200px",
              border: "1px solid red",
              margin: "10px",
            }}
          >
            g
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollComponent;
