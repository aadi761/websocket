import { useEffect, useRef } from "react";

function initials(name) {
  if (!name?.trim()) return "?";
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return name.trim().slice(0, 2).toUpperCase();
}

function hueFromString(s) {
  let h = 0;
  for (let i = 0; i < (s || "").length; i += 1) {
    h = s.charCodeAt(i) + ((h << 5) - h);
  }
  return Math.abs(h) % 360;
}

function formatTime(ts) {
  if (!ts) return "";
  try {
    return new Intl.DateTimeFormat(undefined, {
      hour: "numeric",
      minute: "2-digit",
    }).format(new Date(ts));
  } catch {
    return "";
  }
}

function MessageList({ messages, selfName }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="message-thread" role="log" aria-live="polite" aria-relevant="additions">
      {messages.length === 0 ? (
        <div className="message-thread-empty">
          <p>No messages yet</p>
          <span>Set your name and say hello.</span>
        </div>
      ) : (
        messages.map((msg, index) => {
          const isSelf =
            selfName &&
            msg.sender &&
            msg.sender.trim().toLowerCase() === selfName.trim().toLowerCase();
          const hue = hueFromString(msg.sender || "");
          return (
            <div
              key={`${msg.receivedAt ?? "m"}-${index}`}
              className={`message-row ${isSelf ? "message-row--self" : "message-row--peer"}`}
            >
              {!isSelf && (
                <div
                  className="message-avatar"
                  style={{ background: `hsl(${hue} 55% 42%)` }}
                  aria-hidden
                >
                  {initials(msg.sender)}
                </div>
              )}
              <div className="message-stack">
                {!isSelf && (
                  <span className="message-sender">{msg.sender || "Someone"}</span>
                )}
                <div className={`message-bubble ${isSelf ? "message-bubble--self" : ""}`}>
                  <p className="message-text">{msg.content}</p>
                  <time className="message-time" dateTime={msg.receivedAt ? new Date(msg.receivedAt).toISOString() : undefined}>
                    {formatTime(msg.receivedAt)}
                  </time>
                </div>
              </div>
            </div>
          );
        })
      )}
      <div ref={bottomRef} className="message-thread-anchor" aria-hidden />
    </div>
  );
}

export default MessageList;
