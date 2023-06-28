// import Message from "./Message"
// import ListGroup from "./components/ListGroup"
// import Alert from "./components/Alert"

import { Alert } from "react-bootstrap";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // }

  const [alertVisible, setAlertVisibility] = useState(false)

  return (
    <div>
      { alertVisible && <Alert onClose={()=> setAlertVisibility(false)}>My Alert</Alert>}
      <Button
        color="primary"
        onClick={() => {
          // console.log("clicked on button");
          setAlertVisibility(true)
        }}
      >
        My Button
      </Button>
    </div>
  );

  // return (
  //   <div>
  //     <Alert>
  //       Hello Boii <span>What's Up</span>
  //       </Alert>
  //   </div>
  // )

  // return <div><Message /></div>
  // return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} /></div>
}

export default App;
