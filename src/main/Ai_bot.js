import React, { useEffect, useState } from "react";
import "./style.css";
import botImage from "../bot.png";
import Button from "react-bootstrap/Button";
import { Form, Modal } from "react-bootstrap";
import { Allchats, Clearchat, chatbot } from "../service/Allapi";
import ReactTyped from "react-typed";

function Ai_bot(props) {
  // useEffect(()=>{

  // },[])
  const [BotChat,setBotChat]=useState([])
  const [booleanchat,setbooleanchat]=useState(false)
  const [ChatDatabase,setChatDatabase]=useState([])
  const [newbooleanchat,setnewbooleanchat]=useState(false)
  const ChatBot=async(utterance)=>{
  
    try{
    
      console.log(utterance);
      const response = await chatbot({ chatinput: { utterance } });

      console.log(response);
      if(response.status===200){
        setBotChat(response.data)
        AllChats()
        setbooleanchat(false)
      }

    }
    catch(err){
      console.log(err);
    }

  }

  const AllChats=async()=>{
    try{
      const response=await Allchats()
      if(response.status===200){
        console.log(response);
       
        setChatDatabase(response.data)
        console.log(ChatDatabase);
        setbooleanchat(true)
       

      }

    }
    catch(err){
      console.log(err);
    }
  }
  const clearAll=async()=>{
    try{

      const Response=await Clearchat()
      if(Response.status===200){
        setChatDatabase(Response.data)
        console.log(ChatDatabase);
 

      }

    }
    catch(err){
      console.log(err);
    }
  }
  const [inputData,setinputData]=useState({
    textdata:""
    
  })
  // to update input data
  // const setinputvalue=(e)=>{
   
  //   const {name,value}=e.target
  //   setinputData({...inputData,[name]:value})
  // }
  console.log(inputData);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [modalShow, setModalShow] = useState(false);

  const handleMouseDown = (event) => {
    setDragging(true);
    const offsetX = event.clientX - position.x;
    const offsetY = event.clientY - position.y;
    setOffset({ x: offsetX, y: offsetY });
  };

  const handleMouseMove = (event) => {
    if (dragging) {
      setPosition({
        x: event.clientX - offset.x,
        y: event.clientY - offset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleChatIconClick = () => {
    setModalShow(true);
  };
  const setinputvalue = (value, name) => { // Accept name as argument
    setinputData({ ...inputData, [name]: value }); // Update the state with the provided name
  };

  return (
    <>
      <div
        className="chat-icon"
        onClick={handleChatIconClick}
        style={{
          position: "absolute",

          left: position.x,
          top: position.y,
          marginLeft: "80%",
          marginTop: "30%",
          cursor: dragging ? "grabbing" : "grab",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <img src={botImage} alt="Chatbot Icon" />
      </div>

      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            99 <span className="soca-color">SOCA</span> <span className="ms-2 ai-color">Ai</span>{" "}
            <span className="ms-2">Assistance</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row">
  {ChatDatabase.length>0 ?ChatDatabase.map((item, index) => (
    <div className="row" key={index}>
      <div className="col-lg-12 d-flex justify-content-end">
        <div className="col-lg-1 d-flex justify-content-end">
         { item.chatinput &&<img
            className="userimage-chat"
            src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
            alt="img"
          />}
        </div>
        &nbsp; &nbsp;&nbsp;
        {item.chatinput && <p>{item.chatinput}</p>}
      </div>
      <div className="col-lg-1">
       {item.message && <img src={botImage} className="bot-chatimage" alt="" />}
      </div>
      <div className="col-lg-11">
        {booleanchat === false ? (
          <p>hey how can i help you</p>
        ) : (
          <p>
            {" "}
            {item.message && (
              <ReactTyped
                strings={[`${item.message}`]}
                typeSpeed={10}
                loop={false}
              />
            )}
          </p>
        )}
      </div>
    </div>
  )):
  
  (<div className="row">
<div className="col-lg-1">
    <img src={botImage} className="bot-chatimage" alt="" />
    </div>
    <div className="col-lg-11">
    <p>hey how can i help you</p>
    </div>
  </div>
  )
    }
</div>

          {/* <div className="row ">

         
            <div className="col-lg-12 d-flex justify-content-end">
            <div className="col-lg-1 d-flex justify-content-end">
              <img className="userimage-chat" src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt="" />

            </div> &nbsp; &nbsp;&nbsp;
            <p>what is 99 digits</p>

            </div>
          </div> */}

          <div className="row mt-4">
            <div className="col-lg-11">

        <Form.Control type="text" name='textdata' value={inputData.textdata} onChange={(e) => setinputvalue(e.target.value, e.target.name)} placeholder="Enter the input" />
            </div>
            <div className="col-lg-1">
              <Button onClick={() => ChatBot(inputData.textdata)} className="btn btn-danger"><i class="fa-solid fa-paper-plane"></i></Button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-danger" onClick={clearAll}>
            Clear Chat <i class="fa-solid fa-trash"></i>
          </Button>

          {/* <Button onClick={props.onHide}>Close</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Ai_bot;
