import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
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

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes ,allUserPost}}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;

// import NoteContext from "./noteContext";
// import { useState } from "react";
// const NoteState = (props) => {
//   const notesInitial = [
//     {
//       _id: "6401ae7c2c53aebe86ee0d01",
//       user: "6401a7b2d23bf9e0b43a124d",
//       title: "Bitcoin",
//       description: "This is my new note ",
//       tag: "personal",
//       date: "2023-03-03T08:23:24.705Z",
//       __v: 0,
//     },
//     {
//       _id: "6401ae872c53aebe86ee0d03",
//       user: "6401a7b2d23bf9e0b43a124d",
//       title: "Ethereum",
//       description: "This is my new note ",
//       tag: "personal",
//       date: "2023-03-03T08:23:35.569Z",
//       __v: 0,
//     },
//     {
//       _id: "6401bcaebc497cde6389964b",
//       user: "6401a7b2d23bf9e0b43a124d",
//       title: "ChainLink",
//       description: "This is my new note ",
//       tag: "personal",
//       date: "2023-03-03T09:23:58.121Z",
//       __v: 0,
//     },
//     {
//       _id: "6401bcb2bc497cde6389964d",
//       user: "6401a7b2d23bf9e0b43a124d",
//       title: "ChainLink",
//       description: "This is my new note ",
//       tag: "personal",
//       date: "2023-03-03T09:24:02.081Z",
//       __v: 0,
//     },
//     {
//       _id: "6401bcb2bc497cde6389964d",
//       user: "6401a7b2d23bf9e0b43a124d",
//       title: "ChainLink",
//       description: "This is my new note ",
//       tag: "personal",
//       date: "2023-03-03T09:24:02.081Z",
//       __v: 0,
//     },
//     {
//       _id: "6401bcb2bc497cde6389964d",
//       user: "6401a7b2d23bf9e0b43a124d",
//       title: "ChainLink",
//       description: "This is my new note ",
//       tag: "personal",
//       date: "2023-03-03T09:24:02.081Z",
//       __v: 0,
//     },
//     {
//       _id: "6401bcb2bc497cde6389964d",
//       user: "6401a7b2d23bf9e0b43a124d",
//       title: "ChainLink",
//       description: "This is my new note ",
//       tag: "personal",
//       date: "2023-03-03T09:24:02.081Z",
//       __v: 0,
//     },
//     {
//       _id: "6401bcb2bc497cde6389964d",
//       user: "6401a7b2d23bf9e0b43a124d",
//       title: "ChainLink",
//       description: "This is my new note ",
//       tag: "personal",
//       date: "2023-03-03T09:24:02.081Z",
//       __v: 0,
//     },
//   ];
//   const [notes, setNotes] = useState(notesInitial);

//     // const s1 = {
//     //   name: "Harry",
//     //   class: "12",
//     // };
//     // const [state, setState] = useState(s1);
//     // const update = () => {
//     //   setTimeout(() => {
//     //     setState({
//     //       name: "zafran",
//     //       class: "12",
//     //     });
//     //   }, 1000);
//     // };

//   return (
//     <NoteContext.Provider value={{ notes, setNotes}}>
//       {props.children}
//     </NoteContext.Provider>
//   );
// };
// export default NoteState;
