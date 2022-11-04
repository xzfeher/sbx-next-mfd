import React, { useEffect } from "react";

export default function Message() {
  useEffect(() => {
    console.log("remote4: Message: hooks work");
  }, []);

  return <p>remote4: Message: Hello World</p>;
}
