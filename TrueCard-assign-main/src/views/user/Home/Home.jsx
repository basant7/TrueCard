import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserListSaga } from '../../../store/actions';

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div className="home-main-container">
      <Link to="/userData">
        <button
          type="button"
          className="home-container-button"
          onClick={() => dispatch(getUserListSaga())}
        >
          Load List
        </button>
      </Link>
    </div>
  );
};
export default Home;
