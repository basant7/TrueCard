/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
const userCard = props => {
  const { userData, setOpenUserModel, index } = props;

  return (
    <div className="user-card" onClick={() => setOpenUserModel({ isOpen: true, index })}>
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
  );
};
export default userCard;
