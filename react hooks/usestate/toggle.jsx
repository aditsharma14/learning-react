import React, { useState } from "react";

function ToggleComponent() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <p>This is a toggleable paragraph.</p>}
    </div>
  );
}

export default ToggleComponent;