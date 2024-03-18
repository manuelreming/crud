import React from "react";
import "./styles/UseCard.css";

const UseCard = ({ user, deleteUser, setUserEdit, handleOpenForm }) => {
  const handleDelete = () => {
    deleteUser("/users/", user.id);
  };
  const handleEdit = () => {
    setUserEdit(user);
    handleOpenForm();
  };
  return (
    
     
        <div className="user-card">
          <h2 className="user-card__title">{`${user.first_name} ${user.last_name}`}</h2>
          <ul className="user-card__list">
            <li className="user-card__item">
              <span className="user-card__label">Email</span>
              <span className="user-card__value">{user.email}</span>
            </li>
            <li>
              <span className="user-card__label" >Birthday</span>
              <span className="user-card__value">{user.birthday}</span>
            </li>
          </ul>
          <button className="user-card__button user-card__button--delete"onClick={handleDelete}>Delete</button>
          <button className="user-card__button user-card__button--edit" onClick={handleEdit}>Edit</button>
        </div>
     
  
  );
};

export default UseCard;
