import { useRef, useState } from "react";
import { Alert } from "./Alert";

function App() {
  const [open, setOpen] = useState(false);
  const titleRef = useRef();

  const handleClick = () => {
    titleRef.current = "This is a title";
    setOpen((o) => !o);
  };

  return (
    <div>
      <h1>Hi</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <button onClick={handleClick}>Show Alert</button>
      {open && <Alert ref={titleRef} click={() => setOpen((o) => !o)} />}
    </div>
  );
}

export default App;
