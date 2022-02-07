import './Game.css';

import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "../../Build/Build.loader.js",
  dataUrl: "../../Build/Build.data",
  frameworkUrl: "../../Build/Build.framework.js",
  codeUrl: "../../Build/Build.wasm",
});

function Game() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        Unity Engin Web Game Test Page
        </p>
        <Unity className='unity' unityContext={unityContext} />
      </header>
    </div>
  );
}

export default Game;