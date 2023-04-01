import React, { useContext } from "react";
import noteContext from "../context/noteContext";
import { FiDelete } from "react-icons/fi";
import { BiEditAlt } from "react-icons/bi";
const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <div className="col-md-3 col-lg-4 col-sm-12">
      <div className="card my-4 mx-5">
        <div className="card-body bg-dark">
          <h5 className="card-title mx-2 text-center text-bold text-info ">
            {note.title}
          </h5>
          <hr className="text-white" />
          <h4 className="card-text mx-2 text-center text-white">
            {note.description.slice(0, 100)}
            <br />
            {/* <a className="text-info border-bottom fs-6">More</a> */}
          </h4>
          <p
            //  disabled={note.tag.length < 1}
            // disabled={note.etitle.length < 5 || note.edescription.length < 5}
            className="mx-2 text-center text-info "
          >
            Tags: &nbsp; {note.tag}
          </p>
          <hr className="text-white" />
          <div className="my-2 mt-1 text-center">
            <i
              className="mx-2"
              onClick={() => {
                deleteNote(note._id);
                props.showAlert("Deleted Successfully", "success");
              }}
            >
              <button className="btn btn-outline-info">
                Delete &nbsp;
                <FiDelete />
              </button>
            </i>
            <i
              className="mx-2 "
              onClick={() => {
                updateNote(note);
                // props.showAlert("Updated Successfully", "success");
              }}
            >
              <button className="btn btn-outline-info">
                {" "}
                Edit &nbsp;
                <BiEditAlt />{" "}
              </button>
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
