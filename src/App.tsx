import Styler from "./Styler";

function App() {
  Styler();
  return (
    <>
      <div className="w-100vw h-mn-100vh bg-black tc-white display-flex flex-parent-center">
        <header>
          <h1 className="fs-3rem">#Hello</h1>
          <p className="fs-12px tc-aaa fw-500">
            Edit{" "}
            <code className="bg-111 fs-80% ph-5px pv-3px br-3px">
              /src/App.tsx
            </code>{" "}
            and{" "}
            <code className="bg-111 fs-80% ph-5px pv-3px br-3px">
              /src/Styler.tsx
            </code>
          </p>
        </header>
      </div>
    </>
  );
}

export default App;
