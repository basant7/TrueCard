import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { LOGO_PNG } from '../../assets/images';
import { logout } from '../../store/actions';

const Layout = props => {
  const { children } = props;
  const dispatch = useDispatch();
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Link to="/home">
          <img src={LOGO_PNG} alt="logo" />
        </Link>
        <button type="button" onClick={() => dispatch(logout())}>
          {' '}
          Logout
        </button>
      </div>
      {children}
    </>
  );
};

export default Layout;
