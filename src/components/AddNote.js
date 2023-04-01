import React, { useContext, useState } from "react";
import noteContext from "../context/noteContext";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Added Successfully", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div
 style={{ width: "450px" }}
        className="mt-5 mx-auto  col-lg-6"
    //  className="container mt-5 my-3"
     >
      <h3 className="text-info ">Add Your Personal Notes </h3>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label text-info">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            value={note.title}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label text-info">
            Description
          </label>
          <textarea
            type="text"
            className="form-control"
            id="description"
            rows="4" cols="30"
            name="description"
            value={note.description}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label text-info">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            value={note.tag}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>

        <button
          disabled={note.title.length < 5 || note.description.length < 5}
          type="submit"
          className="btn btn-outline-info"
          onClick={handleClick}
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;


