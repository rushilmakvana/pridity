import './css/chat.css';
import io from 'socket.io-client'
import { useState } from 'react'
import Chat from './Chat';

const socket = io.connect("https://chat-buddies-server.vinit07.repl.co", { transports: ['websocket', 'polling', 'flashsocket'] });



function ChatMain() {
  const [userName, setUserName] = useState('')
  const [roomId, setRoomId] = useState('')
  const [showChat, setShowChat] = useState(false)

  // const [message , setMessage]=useState('')
  // const[recevice,setRecevice]=useState('')
  // const sendMsg =()=>{
  //   socket.emit("send_msg" ,{message})
  // }
  // useEffect(()=>{
  //   socket.on('receive_msg' , (data)=>{
  //     setRecevice(data.message)
  //   })
  // } ,[message])

  const joinRoom = () => {
    if (userName === "" || roomId === "") {
      alert("fill both the area.")
    }
    else {
      socket.emit("join_room", roomId);
      setShowChat(true);
    }
  }

  return (
    <>

      <div className="App">
        {
          !showChat &&
          <>
            <div className='container'>

              {/* <div className='input'> */}
              <h2 className='head'>Chat Room</h2>
              <input className='input' type="text" placeholder="name"
                onChange={
                  (e) => {
                    setUserName(e.target.value)
                  }} 
                  onKeyPress={(event) => { event.key === 'Enter' && document.getElementsByClassName('roomid')[0].focus()}}
                  />
              <input className='input roomid' type="text" placeholder="room id"
                onChange={
                  (e) => {
                    setRoomId(e.target.value)
                  }}
                onKeyPress={(event) => { event.key === 'Enter' && joinRoom() }} />
              
              <button className='btn' onClick={joinRoom}>Join room</button>
            </div>
          </>
        }

        {showChat && <Chat socket={socket} userName={userName} roomId={roomId} />}

      </div>


    </>
  );
}

export default ChatMain;
