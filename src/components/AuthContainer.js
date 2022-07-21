function AuthContainer(props) {
  return (
    <div className="auth-container">
      <div className="auth-container__body">
        {props.children}
      </div>
    </div>
  );
}

export default AuthContainer;
