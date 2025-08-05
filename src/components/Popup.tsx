import React from 'react';
import type { User } from '../interfaces/User';

type PopupProps = {
  user: User|null;
  onClose: () => void;
};

const Popup: React.FC<PopupProps> = ({ user, onClose }) => {
  return (
    user && <div >
      <div >
        <p >{user.email}</p>
        <button
          onClick={onClose}
          
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;