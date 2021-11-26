import Props1 from "./Propeties/Props1";
import Props2 from "./Propeties/Props2";

import Props11 from "./Properties2/Props11";
import Props22 from "./Properties2/Props22";

import Obj1 from "./New/Obj1";
import Obj2 from "./New/Obj2";

import Heading from "./Product/Heading";
import List from "./Product/List";
import Para from "./Product/Para";
import Game1 from "./Game/Game1";

import Hooks from "./Hooks/Hooks";

import Main from "./Read/Main";
import Main2 from "./Read/Main2";

import Comp1 from "./COMPONENT/Comp1";

import Greet from "./Greeting/Greet";
import './assets/bootstrap/Flip.css';

function App() {
  return (
    <>
      <Props2 />
      <Props1 />
      <Props11 />
      <Props22 />
      <Obj1 />
      <Obj2 />
      <Para />
      <Heading />
      <List />

      <Game1 />
      <Hooks />
      <Main />
      <Main2 />

      <Comp1 />

      {/* <Greet name="kkk"/> */}

      <Greet />
    </>
  );
}

export default App;
