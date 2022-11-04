import React, { useEffect } from "react";

export default function Button() {
  useEffect(() => {
    console.log("remote4: Button: hooks work");
  }, []);

  return <button>remote4: Button</button>;
}
