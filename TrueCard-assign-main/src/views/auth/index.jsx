// import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
  PASSWORD_REQUIRED,
  PASSWORD_VALIDATION,
  USER_NAME_REQUIRED,
} from '../../constants/errorConstants';
import { login } from '../../store/actions';

const AuthOption = () => {
  const dispatch = useDispatch();
  const { errorMsg } = useSelector(state => state.auth);
  const vaditationSchema = Yup.object({
    username: Yup.string().required(USER_NAME_REQUIRED),
    password: Yup.string()
      .matches(/[a-z]/, PASSWORD_VALIDATION)
      .matches(/[A-Z]/, PASSWORD_VALIDATION)
      .matches(/[0-9]/, PASSWORD_VALIDATION)
      .matches(/[^a-zA-Z0-9.]/, PASSWORD_VALIDATION)
      .required(PASSWORD_REQUIRED),
  });
  return (
    <div className="container" style={{ marginLeft: 200, marginTop: 100 }}>
      <div className="container">
        <div className="row mt-5">
          <div className="col-7 login-left" />
          <div className="col-5 mt-2">
            <Formik
              initialValues={{
                username: '',
                password: '',
              }}
              validationSchema={vaditationSchema}
              onSubmit={values => {
                dispatch(login(values));
              }}
            >
              {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="username">UserName:</label>
                    <input
                      type="username"
                      className="form-control"
                      id="username"
                      name="username"
                      value={values.username}
                      placeholder="Enter username"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="error-msg">
                    {errors.username && touched.username && errors.username}
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={values.password}
                      placeholder="Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="error-msg">
                    {errors.password && touched.password && errors.password}
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Log in
                  </button>
                </form>
              )}
            </Formik>
            <hr />
            <div className="error-msg">{errorMsg}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthOption;
