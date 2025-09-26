import React from "react";
import { useState } from "react";
function Clickmebutton() {
    

    /*{/*const handleClick = () => {
        alert ("Button Clicked!");
    };

  return (
    <button onClick={handleClick}> click me </button>

    /*
   <button onClick ={() => alert("button clicked")}>
    Click me
   </button>
   */

   /* <input onChange={() =>alert("changed")} type="text" placeholder="entersomething" />;*/

     /*    const handleSubmit = (event) => {
        event.preventDefault();
        alert ("Form Submitted!");
    };

    return(
        <form onSubmit={handleSubmit}>
             <input type = "email"/>
            <button type="submit"> Submit </button>
        </form>
        );*/
/* ARRAY
        const numbers = [1,2,3,4,5];
        console.log(numbers[1]);

        return
            <div> {numbers[1]}</div>;  */

           /* NOT FINISHED.ARRAY ATA
            const person = {
                name: "Michael Jackson",
                age: 50,
                address: { 
                    city: "Los Angeles",
                    state: "California",
                    country: "USA"
                },
                hobbies [ "singing","dancing","acting"]
            };
        return (
            <>
            <p>Firstname {person.name}</p>
            
            </>

        )*/
/*IF CONDITIONS
            let content;
            let theBoolean = true;
            if (theBoolean){
                content = <h1>True</h1>;
            } else {
                content = <h1 style={{ color: "blue"}}>False</h1>;
            }
            return <>{content}</>;
            } */

            /* LOOPERZZ
           const numbers = [1,2,3,4,5,6,7,8,9,10];

           const getEvenNumbers = (numbers) => {
            const evens = [];
            for (let i = 0; i< numbers.lenght; i++) {
                if (numbers[i] % 2 === 0) {
                    evens.push(numbers[i]);
                }
            }
            return evens;
           };

           const evenNumbers = getEvenNumbers(numbers);

           return <>{evenNumbers}</>;
        }*/

  const [page, setPage] = useState("home");

  const renderContent = () => {
    switch (page) {
      case "home":
        return (
          <div className="content">
            <span className="icon">🏠</span>
            <h1>Welcome to Home Page</h1>
          </div>
        );
      case "about":
        return (
          <div className="content">
            <span className="icon">ℹ️</span>
            <h1>About Us</h1>
            <p>Learn more about our company and mission.</p>
          </div>
        );
      case "contact":
        return (
          <div className="content">
            <span className="icon">📞</span>
            <h1>Contact Us</h1>
            <p>Have questions? We’d love to hear from you.</p>
            <p>
              Reach us anytime at{" "}
              <span className="highlight">support@example.com</span>
            </p>
            <button className="btn">Send Message</button>
          </div>
        );
      default:
        return <h1>Page not found</h1>;
    }
  };

  return (
    <div className="app">
      <nav className="navbar">
        <button
          className={page === "home" ? "active" : ""}
          onClick={() => setPage("home")}
        >
          Home
        </button>
        <button
          className={page === "about" ? "active" : ""}
          onClick={() => setPage("about")}
        >
          About
        </button>
        <button
          className={page === "contact" ? "active" : ""}
          onClick={() => setPage("contact")}
        >
          Contact
        </button>
      </nav>

      <main>{renderContent()}</main>
    </div>
  );
}

export default Clickmebutton;