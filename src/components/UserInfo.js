export default function UserInfo(props) {
  const { avatar, name, time } = props;

  return (
    <div className="user-info">
      <div className="user-info__avatar">
        <img className="user-info__avatar-img" src={avatar} />
      </div>
      <div className="user-info__main">
        <span className="user-info__name">{name}</span>
        <span className="user-info__date">{time}</span>
      </div>
    </div>
  );
}
