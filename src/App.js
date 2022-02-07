import "./App.css";
import Menu from "./Components/Menu";
import { useWeb3React } from "@web3-react/core";
import { injected } from "./lib/connectors";

const App = () => {
  const { chainId, account, active, activate, deactivate } = useWeb3React();

  const handleConnect = () => {
    if (active) {
      deactivate();
      return;
    }

    activate(injected, (error) => {
      if ("/No Ethereum provider was found on window.ethereum/".test(error)) {
        window.open("https://metamask.io/download.html");
      }
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="connect">
          <p>Account: {account}</p>
          {/* <p>ChainId: {chainId}</p> */}
        </div>
        <div>
          <button className="connect-btn" type="button" onClick={handleConnect}>
            {active ? "disconnect" : "Connect to Metamask"}
          </button>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Game Test Page</h1>
        <Menu />
        <h1>Unity Game Test Page</h1>
      </header>
    </div>
  );
};

export default App;
