import React, { useEffect } from "react";

export default function Button(props) {
  useEffect(() => {
    console.log("remote2: Button: hooks work");
  }, []);

  return <button>remote2: Button</button>;
}
