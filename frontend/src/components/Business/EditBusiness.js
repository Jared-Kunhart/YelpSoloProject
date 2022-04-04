import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { editBusiness } from "../../store/business";
// import './SignupForm.css'

function EditBusinessPage({ business, hideModal }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(business.title);
  const [description, setDescription] = useState(business.description);
  const [location, setLocation] = useState(business.location);
  const [imageUrl, setImageUrl] = useState(business.imageUrl);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
        ...business,
        title,
        description,
        location,
        imageUrl,
    };

    await dispatch(editBusiness(payload));
    hideModal()
  };

  const handleCancelClick = (e) => {
    e.preventDefault()
    hideModal()
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error) => <li key={error}>{error}</li>)}
      </ul>
    <div id="businessForm">
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </label>
      <button type="submit">Edit Business</button>
      <button type="button" onClick={handleCancelClick}>Cancel</button>
    </div>
    </form>
  );
}

export default EditBusinessPage;
