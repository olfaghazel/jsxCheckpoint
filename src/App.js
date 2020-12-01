import image from './imageInSrc.png';
import './style.css';

function App() {
  return (
    <>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>

        <h1 className={"title red"}>Olfa</h1>

        <br />

        <img src={image} />

        <br />

        <img src="/imageInPublic.png" />

      </div>

      <video src="/myVideo.mp4" width="320" height="240" controls />
    </>
  );
}
export default App;
