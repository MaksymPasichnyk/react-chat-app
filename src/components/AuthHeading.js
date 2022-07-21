export default function AuthHeading(props) {
  return (
    <>
      <h2 className="auth-heading__title">{props.title}</h2>
      <p className="auth-heading__desc">{props.desc}</p>
    </>
  );
}
