import Func_component from "./Component_task/Func_component";
import Class_component from "./Component_task/Class_component";
import Jsx_component from "./JSX_task/Jsx_component";

import Home from "./Layout_task/Pages/Home";
import About from "./Layout_task/Pages/About";
import Contact from "./Layout_task/Pages/Contact";

import Func_props from "./Props_task/Func_props";
import Main_props from "./Props_task/Main_props";
import Css from "./Css_task/Css";
import Module_css from "./Module_css-task/Module_css";
import Sass_css from "./Sass-task/Sass_css";

import Simple_bootstrap from "./Bootstrap-task/Simple_bootstrap";
import React_Bootstrap from "./Bootstrap-task/React_Bootstrap";

import Mui_component from "./MUI-task/Mui_component";
import Styled_component from "./Styled_component-task/Styled_component";

import Func_state from "./State_task/Function/Func_state";
import Class_state from "./State_task/Class/Class_state";

import App_main from "./Routing_Task/Pages/App_main";
function App() {

  return (
    <div className="container md-5">
      {
        // Component-task
       // <Func_component/>
       // <Class_component/>

       // JSX-task
       //<Jsx_component/>

       //layout-task
       //<Home/>
       //<About/>
       //<Contact/>

       // Props-task
       //<Main_props/>

        //css  & module css & sass css - task
        //<Css/>
        //<Module_css/>
       // <Sass_css/>

        // Bootstrap / React_Bootstrap
       // <Simple_bootstrap/>
       // <React_Bootstrap/>


       // Mui / styled component
       //<Mui_component/>
       //<Styled_component/>

       //state-task
       //<Func_state/>
       //<Class_state/>

       //Routing-Task, Router
       <App_main/>
       

      }
    </div>
  );
}

export default App;
