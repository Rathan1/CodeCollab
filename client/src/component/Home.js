import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import {v4 as uuid} from 'uuid'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [roomId,setRoomId]=useState("");
  const [username,setUsername] = useState("");
  const navigate =useNavigate();

  const generateRoomId=(e)=>{
    e.preventDefault();
    const  id =uuid();
    setRoomId(id);
  toast.success("Room Id is generated");
  };

  const joinRoom=()=>{
    if(!roomId ||!username){
   toast.error("Both the Field is Required");
   return ;
    }

    //Navigate and we can also take any value to our destination
    navigate(`/editor/${roomId}`,{
     state:{username},
    });
    toast.success("Room is created");
  }


  return (
    <div className="container-fluid" style={{ backgroundColor: '#002C54' }}>
     <div className='row justify-content-center align-items-center min-vh-100'>
       <div className='col-12 col-md-6'>
        <div className='card shadow-sm p-2 mb-5 bg-white rounded border '>
        <div className='card-body text-center ' style={{ backgroundColor: '#1995AD' }}>

            <img 
            className='img-fluid mx-auto d-block'
            src="/images/logo.png"
             alt='logo' 
             style={{maxWidth:"500px"}}
             />
              <h4 className='text-light'>Enter the ROOM ID</h4>
             <div className=' mt-3 form-group'>
              <input 
              value={roomId}
              onChange={(e)=>setRoomId(e.target.value)}
              type='text' 
              className='form-control mb-2 place'
                placeholder='Room Id'
              />
             </div>
             <div className='form-group'>
              <input
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
               type='text' 
              className='form-control mb-2 place'
                placeholder='Username'
              />
             </div>
             <button
             onClick={joinRoom}
              className=" mt-3 btn btn-success btn-lg btn-block">
              JOIN
              </button>
             <p className='mt-3 text-light '>Don't Have Room Id? <span  class="btn btn-link" style={{cursor:"pointer",color:"#002C54"}}
             onClick={generateRoomId}
             >New Room</span></p>
        </div>
        </div>
       </div>       
     </div>


    </div>
  )
}

export default Home