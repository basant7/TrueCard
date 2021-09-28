/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
const UserModel = props => {
  const { setOpenUserModel, userData } = props;

  return (
    <div id="myModal" className="modal">
      {/* <!-- Modal content --> */}
      <div className="modal-content">
        <span className="close" onClick={() => setOpenUserModel({ isOpen: false, index: null })}>
          &times;
        </span>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="user-card__avatar">
            <img src={userData.avatar} alt="" />
          </div>
          <div className="user-card__info">
            <div className="user-card__name">
              {userData.first_name} {userData.last_name}
            </div>
            <div className="user-card__username">
              <p>{userData.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModel;
