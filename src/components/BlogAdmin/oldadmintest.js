// import React, { useState } from "react";
// import axios from "axios";
// const BlogAdmin = () => {
//   // const [user, setUser] = useState({
//   //   title: "",
//   //   thumbnail: "",
//   //   content: "",
//   //   tag: "",
//   // });

//   // const { title, thumbnail, content, tag } = user;
//   // const handleInputs = (e) => {
//   //   // const {name,value} = e.target;
//   //   setUser({ ...user, [e.target.name]: e.target.value });
//   //   console.log("Onchange", user);
//   // };

//   // blog image function
//   // const [image, setImage] = useState("");

//   const [title ,setTitle] = useState("");
//   const [thumbnail ,setThumbnail] = useState("");
//   const [content ,setContent] = useState("");
//   const [tag ,setTag] = useState("");

//   const handleImageChange = (e) => {
//     setThumbnail(e.target.files[0]);
//     console.log(thumbnail);
//     setThumbnail(URL.createObjectURL(e.target.files[0]));
//   };

//   const handleOnClick = async (e) => {
//     // console.log("User Post", user);
//     e.preventDefault();
//     // const UserPost = {title,thumbnail,content,tag}
//     const BlogData = new FormData();
//     BlogData.append("title", title);
//     BlogData.append("thumbnail", thumbnail);
//     BlogData.append("content", content);
//     BlogData.append("tag", tag);
//     await axios
//       .post("http://localhost:8000/api/blog/addpost", BlogData)
//       .then((res) => {
//         console.log(res);
//       });
//     // setUser({
//     //   title: "",
//     //   thumbnail: "",
//     //   content: "",
//     //   tag:"",
//     // });
//   };

//   return (
//     <div
//       // style={{ width: "650px" }}
//       className="mt-5 mx-auto  col-lg-6"
//       //  className="container mt-5 my-3"
//     >
//       <h3 className="text-info ">Add Post </h3>
//       <form className="my-3">
//         <div className="mb-3">
//           <label htmlFor="title" className="form-label text-info">
//             Title
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="title"
//             name="title"
//             placeholder="Title "
//             aria-describedby="emailHelp"
//             value={title}
//             // onChange={(e) => {
//             //   handleInputs(e);
//             // }}
//             onChange={(e) => {
//                   setTitle(e.target.value);
//                   console.log(title);
//                 }}
//             minLength={2}
//             // required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="File" className="form-label text-info">
//             Add Thumbnail
//           </label>
//           <input
//             type="file"
//             className="form-control"
//             id="File"
//             name="thumbnail"
//             aria-describedby="emailHelp"
//             // value={thumbnail}
//             // onChange={(e) => {
//             //   handleInputs(e);
//             //   setImage(e.target.files[0]);
//             //   console.log(image);
//             //   setImage(URL.createObjectURL(e.target.files[0]));
//             // }}
//             onChange={handleImageChange}
//             // required
//           />
//         </div>
//         {thumbnail && (
//           <img
//             className="col-sm-4"
//             src={thumbnail && thumbnail}
//             alt=""
//             style={{ width: "200px", height: "100px" }}
//           />
//         )}
//         <div className="mb-3">
//           <label htmlFor="Content" className="form-label text-info">
//             Content
//           </label>
//           <textarea
//             type="text"
//             className="form-control"
//             id="Content"
//             rows="6"
//             cols="30"
//             name="content"
//             placeholder="Add content for blog"
//             value={content}
//             // onChange={(e) => {
//             //   handleInputs(e);
//             // }}
//             onChange={(e) => {
//                   setContent(e.target.value);
//                   console.log(content);
//                 }}
//             minLength={3}
//             // required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="tag" className="form-label text-info">
//             Tag
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="tag"
//             name="tag"
//             placeholder="Write tags"
//             value={tag}
//             // onChange={(e) => {
//             //   handleInputs(e);
//             // }}
//             onChange={(e) => {
//                   setTag(e.target.value);
//                   console.log(tag);
//                 }}
//             minLength={2}
//             // required
//           />
//         </div>

//         <button
//           // disabled={note.title.length < 5 || note.description.length < 5}
//           type="submit"
//           className="btn btn-outline-info"
//           onClick={(e) => {
//             handleOnClick(e);
//           }}
//         >
//           Post
//         </button>
//       </form>
//     </div>
//   );
// };

// export default BlogAdmin;

import React, { useState } from "react";
import axios from "axios";

const NewBlogForm = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("tag", tag);
    formData.append("image", image);

    try {
      const res = await axios.post("/api/blogs", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);
      setTitle("");
      setImage(null);
      setContent("");
      setTag("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" onChange={handleImageChange} />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <div>
        <label htmlFor="tag">Tag:</label>
        <input
          type="text"
          id="tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewBlogForm;

// import { useState } from "react";
// import "./app.css";
// import FormInput from "./components/FormInput";

// const App = () => {
//   const [values, setValues] = useState({
//     username: "",
//     email: "",
//     birthday: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const inputs = [
//     {
//       id: 1,
//       name: "username",
//       type: "text",
//       placeholder: "Username",
//       errorMessage:
//         "Username should be 3-16 characters and shouldn't include any special character!",
//       label: "Username",
//       pattern: "^[A-Za-z0-9]{3,16}$",
//       required: true,
//     },
//     {
//       id: 2,
//       name: "email",
//       type: "email",
//       placeholder: "Email",
//       errorMessage: "It should be a valid email address!",
//       label: "Email",
//       required: true,
//     },
//     {
//       id: 3,
//       name: "birthday",
//       type: "date",
//       placeholder: "Birthday",
//       label: "Birthday",
//     },
//     {
//       id: 4,
//       name: "password",
//       type: "password",
//       placeholder: "Password",
//       errorMessage:
//         "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
//       label: "Password",
//       pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
//       required: true,
//     },
//     {
//       id: 5,
//       name: "confirmPassword",
//       type: "password",
//       placeholder: "Confirm Password",
//       errorMessage: "Passwords don't match!",
//       label: "Confirm Password",
//       pattern: values.password,
//       required: true,
//     },
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   const onChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="app">
//       <form onSubmit={handleSubmit}>
//         <h1>Register</h1>
//         {inputs.map((input) => (
//           <FormInput
//             key={input.id}
//             {...input}
//             value={values[input.name]}
//             onChange={onChange}
//           />
//         ))}
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default App;