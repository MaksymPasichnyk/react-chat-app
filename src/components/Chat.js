import SendbirdChat from "@sendbird/chat";
import { OpenChannelModule } from "@sendbird/chat/openChannel";

const sb = SendbirdChat.init({
  appId: "99F4326E-FAAF-40FB-AA63-34FC1C815F9E",
  modules: [new OpenChannelModule()],
});

console.log(sb);

function Chat() {
  return (
    <div className="chat">
      <div className="chat__wrapper">
        <div className="row">
          <div className="column">
            <div className="chat__aside chats">
              <div className="chats__search">
                <input type="text" className="chats__search-input" />
              </div>
              <ul className="chats__list">
                <li className="chats__item">
                  <div className="user-chat">
                    <div className="user-info">
                      <div className="user-info__avatar"></div>
                      <div className="user-info__name">Test Testovich</div>
                    </div>
                    <div className="user-chat__last-message-time">
                      <span>12:00</span>
                    </div>
                    <div className="user-chat__last-message">
                      <span>
                        Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem
                        ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                        ipsumLorem ipsumLorem ipsum
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="column">
            <div className="chat__message-area message-area">
              <ul className="message-area__messages">
                <li className="message message-from">
                  <span>Hello Mike</span>
                </li>
                <li className="message message-to">
                  <span>Hello Jack Sparrow</span>
                </li>
              </ul>
              <div className="chat__message-form message-form">
                <input className="message-form__input" type="text" />
								<button className="message-form__button">Send a messages</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
