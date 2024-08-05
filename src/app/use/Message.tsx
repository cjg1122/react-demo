"use client";

import { use, Suspense, useEffect } from "react";

function Message({ messagePromise }: { messagePromise: Promise<string> }) {
  const messageContent = use(messagePromise);
  useEffect(() => {
    console.log(messageContent);
  }, [messageContent]);
  return <p>Here is the message: {messageContent}</p>;
}

export function MessageContainer({
  messagePromise,
}: {
  messagePromise: Promise<string>;
}) {
  return (
    <Suspense fallback={<p>⌛Downloading message...</p>}>
      <Message messagePromise={messagePromise} />
    </Suspense>
  );
}
