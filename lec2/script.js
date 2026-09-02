import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => object => HTML element(render)

const heading = React.createElement("h1" , {id : "heading"} , "namaste react ❤️");
console.log(heading);

// JSX(transpiled before it reaches the js engine) -> Parcel -> Babel
//JSX babel transpile it to React.createElement => ReactElement js object -> HTML Element

const jsxHeading = <h1 id="heading">namaste react ❤️ by jsx</h1>;
console.log(jsxHeading);

//React component
const  elem = <span>Hello</span>

const HeadingComponent = () => (
    <div id="container">
        {Title()}
        <Title></Title>
        <Title/>
        {elem}
        <h1 className="heading">
            Namaste React functional component
        </h1>
    </div>
)
const Title = () => (
    <h1>namaste react from jsx🚀
    </h1>
)
const parent = ReactDOM.createRoot(document.getElementById("root"));
parent.render(heading);
parent.render(<HeadingComponent/>);