import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../user/userApi";
import { update, getPost } from "./adminApi";
import { Link } from "react-router-dom";

const UpdatePost = () => {
  // defining our state into values with useState
  const [values, setValues] = useState({
    title: "",
    about: "",
    photo: "",
    posts: [],
    loading: false,
    error: "",
    updatedpost: "",
    redirectToProfile: false,
    formData: "",
  });

  const { user, token } = isAuthenticated();

  // destructuring our state from values
  const {
    title,
    about,
    photo,
    posts,
    loading,
    error,
    updatedpost,
    redirectToProfile,
    formData,
  } = values;

  //load post and set form data
  const init = () => {
    // brings in our post from the backend
    getPost().then((data) => {
      if (data.error) {
        setValues({
          ...values,
          error: data.error,
        });
      } else {
        setValues({
          ...values,
          post: data,
          formData: new FormData(),
        });
      }
    });
  };

  //our lifecycle method
  useEffect(() => {
    init();
  }, []);

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });

    update(user._id, token, formData).then((data) => {
      if (data.error) {
        setValues({
          ...values,
          error: data.error,
        });
      } else {
        setValues({
          ...values,
          title: "",
          about: "",
          photo: "",
          loading: false,
          updatedpost: data.title,
        });
      }
    });
  };

  const newpostForm = () => (
    <form className="mb-5" onSubmit={clickSubmit}>
      <h4>Post Photo</h4>
      <div className="form-group">
        <label className="btn btn-secondary">
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept=".xlsx, .xls, image/*, .doc, .docx,.ppt, .pptx, .txt, .pdf, .mp4"
          />
        </label>
      </div>

      <div className="form-group">
        <label className="text-muted">Title</label>
        <input
          onChange={handleChange("title")}
          type="text"
          className="form-control"
          value={title}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">About</label>
        <textarea
          onChange={handleChange("about")}
          type="text"
          className="form-control"
          value={about}
        />
      </div>

      <button className="btn btn-outline-primary">Update post</button>
    </form>
  );

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? " " : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: updatedpost ? " " : "none" }}
    >
      <h2>{`${updatedpost}`} is updated</h2>
    </div>
  );

  const showLoading = () =>
    loading && (
      <div className="alert alert-success">
        <h2>Loading.....</h2>
      </div>
    );

  return (
    <Layout
      title="Add a new post"
      about={`G'day ${user.name}, ready to add a new post?`}
    >
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {showLoading()}
          {showError()}
          {showSuccess()}
          {newpostForm()}
        </div>
      </div>
    </Layout>
  );
};

export default UpdatePost;
