import React, { useEffect } from "react";

export default function Message(props) {
  useEffect(() => {
    console.log("remote2: Message: hooks work");
  }, []);

  return <p>remote2: Message: Hello World</p>;
}
