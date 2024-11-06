import { ErrorBoundary } from "./ErrorBoundary";

function App() {
  return (
    <>
      <h1>This is the parent</h1>
      <ErrorBoundary fallback={<h2>Error in the Component</h2>}>
        <Child />
      </ErrorBoundary>
    </>
  );
}

export default App;

function Child() {
  return <h3>This is a child</h3>;
}
