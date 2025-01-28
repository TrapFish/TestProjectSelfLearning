//Project One
// import AuthInputs from './components/projectOne/AuthInputs.jsx';
// import Header from './components/projectOne/Header.jsx';

//Project Two
//import Form from './components/projectTwo/Form.jsx';

//Project Three
// import DemoComponent from './components/projectThree/DemoComponent.jsx';

//Project four
// import Demo from "./components/projectFour/Demo";


//Project Five 
// import CounterWithRedux from './components/ProjectFive/CounterWithRedux'

//Project Six
import Timer from './components/ProjectSix/Timer';
import ParentComponent from './components/ProjectSix/ParentComponent';
import {ThemeContextProvider} from './components/ProjectSix/Context/ThemeContext';


export default function App() {
  return (
    <>
      {/* Project One */}
      {/* <Header />
      <main>
        <AuthInputs />
      </main> */}
      {/* Project Two */}
      {/* <Form /> */}
      {/* Project Three */}
      {/* <DemoComponent /> */}

      {/* Project Four */}
      {/* <Demo /> */}


      {/* Project Five */}

      {/* <CounterWithRedux /> */}

      <Timer />
      <ThemeContextProvider>
          <ParentComponent />
      </ThemeContextProvider>
     
    </>
  );
}
