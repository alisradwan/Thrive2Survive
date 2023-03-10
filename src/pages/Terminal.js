import React, { useState } from "react";
import Typist from "react-typist";

function Terminal(props) {
  const [showSuccess, setShowSuccess] = useState(false);

  const onTypingDone = async () => {
    window.setTimeout(function () {
      setShowSuccess(true);
    }, 1000);
    window.setTimeout(function () {
      props.history.push("/home");
    }, 3500);
  };

  return (
    <div fluid className="terminal terminal">
      <h1 className="text-secondary display-5 display-md-4">
        <p>
          <span>&#x203A;</span>
        </p>
        <span>
          <Typist
            avgTypingDelay={100}
            stdTypingDelay={50}
            onTypingDone={onTypingDone}
            startDelay={100}
            cursor={{
              blink: true,
              hideWhenDone: true,
            }}
          >
            <p>
              <span>&#x203A;</span>
            </p>
            <Typist.Delay ms={150}></Typist.Delay>
            <p>
              <span>&#x203A;</span>
            </p>
            <Typist.Delay ms={150}></Typist.Delay>
            <span className="pr-2 pr-md-4">&#x203A;</span>
            <span className="text-light">Meet Thrive2Survive();</span>
          </Typist>
        </span>
        {showSuccess && <p className="text-success mt-3">Redirecting...</p>}
      </h1>
    </div>
  );
}

export default Terminal;
