import { forwardRef } from "react";
import { createPortal } from "react-dom";

function AlertInner({ click }, ref) {
  return createPortal(
    <div
      onClick={click}
      style={{
        background: "grey",
        padding: "1rem",
        position: "absolute",
        top: 0,
        left: "50%",
      }}
    >
      <p>This is an Alert</p>
      <input type="text" name="title" defaultValue={ref.current} />
    </div>,
    document.querySelector("#alert-messages")
  );
}

export const Alert = forwardRef(AlertInner);
