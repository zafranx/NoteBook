// import Footer from "./Footer";
// import AddNote from "./AddNote";
import Notes from "./Notes";
const Admin = (props) => {
  // const { showAlert } = props;
  return (
    <div>
      {/* <AddNote /> */}
      <Notes showAlert={props.showAlert} />
      {/* <Footer /> */}
    </div>
  );
};

export default Admin;
