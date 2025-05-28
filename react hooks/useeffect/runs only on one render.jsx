import React, { useEffect } from "react";

function Welcome() {
  useEffect(() => {
    console.log("Welcome to the app!");

    return () => {
      console.log("Component unmounted!");
    };
  }, []);

  return <h1>Hello, User!</h1>;
}

export default Welcome;