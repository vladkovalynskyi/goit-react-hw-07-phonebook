import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { FaPhoneAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

import css from './ContactCard.module.css';

function ContactCard({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className={css.contactCard} id={id}>
      <div className={css.contactDetails}>
        <p className={css.contactName}>{name}</p>
        <p className={css.contactNumber}>
          <span className={css.contactNumberIcon}>
            <FaPhoneAlt />
          </span>
          {number}
        </p>
      </div>
      <button
        className={css.deleteBtn}
        type="button"
        onClick={handleDelete}
        aria-label="delete contact"
      >
        Delete
      </button>
    </li>
  );
}

ContactCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactCard;
