import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { UserCard, UserModel } from '../../../components';

const Search = () => {
  const { userList } = useSelector(state => state.userList);
  const [filteredUserList, setFilteredUserList] = useState(null);
  const [openUserModel, setOpenUserModel] = useState({ isOpen: false, index: null });
  const handleSearchChange = e => {
    const { value } = e.target;

    if (value === '') {
      setFilteredUserList(userList);
    } else {
      setFilteredUserList(
        userList.filter(
          user =>
            user.first_name.toLowerCase()[0] === value.toLowerCase()[0] ||
            user.last_name.toLowerCase()[0] === value.toLowerCase()[0] ||
            user.email.toLowerCase()[0] === value.toLowerCase()[0],
        ),
      );
    }
  };
  useEffect(() => {
    setFilteredUserList(userList);
  }, [userList]);
  return (
    <div className="search-container">
      <input
        type="text"
        className="searchBar"
        onChange={e => handleSearchChange(e)}
        style={{
          paddingLeft: 20,
        }}
      />

      {filteredUserList && filteredUserList.length ? (
        filteredUserList.map((user, index) => (
          <UserCard userData={user} setOpenUserModel={setOpenUserModel} index={index} />
        ))
      ) : (
        <div>
          <h1>No User Found</h1>
        </div>
      )}
      {openUserModel.isOpen && (
        <UserModel
          setOpenUserModel={setOpenUserModel}
          index={openUserModel.index}
          userData={filteredUserList[openUserModel.index]}
        />
      )}
    </div>
  );
};
export default Search;
