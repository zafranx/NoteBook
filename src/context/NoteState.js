import NoteContext from "./noteContext";
import { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const NoteState = (props) => {

  // let nevigate = useNavigate();
  const [user,setUser] = useState("")
  const host = "http://localhost:8000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  const allUserPost = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/getallnotes`, {
      method: "GET",    
    });
    const json = await response.json();
    setNotes(json);
  };
  // Get all Notes
  const getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API Call 
    // API CAll
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = await response.json();
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = response.json();
    console.log(json);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);
    let newNotes = JSON.parse(JSON.stringify(notes));
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };
  // for Blogs sync
  const [data, setdata] = useState([]);
  const GetBlog = async () => {
    let res = await axios.get(`http://localhost:8000/api/blog/getposts`);
    // console.log("res",response);
    console.log("res", res.data);
    setdata(res.data);
    console.log(data);
    // let imageUrl = URL.createObjectURL(res.data);
    // setImage(imageUrl);
  };
  const [databyid, setdatabyid] = useState([]);
  const GetBlogById = async (id) => {
    let res = await axios.get(`http://localhost:8000/api/blog/getpostsbyid/${id}`);
    // console.log("res",response);
    console.log("res", res);
    setdatabyid(res.data);
    // console.log(databyid);
  };

  

  // not in use
  // const deletePost = async (id) => {
  //   // id.preventDefault();
  //   if (localStorage.getItem("token")) {
  //     if (window.confirm("Sure Want To Delete?")) {
  //       console.log(id);
  //       await axios
  //         .delete(`http://localhost:8000/api/blog/deleteblog/${id}`)
  //         .then((res) => {
  //           console.log(res);
  //           // comment();
  //           // alert("You SuccessFully Deleted The Comment");
  //         });
  //     }
  //   }
  //   // else {
  //   //   nevigate("/login");
  //   // }
  // };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes ,allUserPost,user,setUser,GetBlog,data,GetBlogById,databyid,}}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;

