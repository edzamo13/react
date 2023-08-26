import "./App.css";
import Embedding from "./exercice/Embedding";
import EmbeddingIf from "./exercice/EmbeddingIf";
import FirstApp from "./exercice/First";
import Button from "./reactDev/Button";
import Profile from "./reactDev/Profile";
import RenderLists from "./reactDev/RenderLists";
import MyButton from "./reactDev/Responding";

function App() {
  return (
    <>
      <FirstApp />, <Embedding />
      ,<EmbeddingIf />, <Button/>, <Profile/>
      ,<RenderLists/>
      ,<MyButton/>
    </>
  );
}

export default App;
