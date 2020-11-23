import logo from './logo.svg';
import './App.css';
import Header from './header';
import Footer from './footer';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
          <div className="container">
              <nav>
                  <div><a href="">Profile</a></div>
                  <div><a href="">Messenger</a></div>
                  <div><a href="">Friends</a></div>
                  <div><a href="">Settings</a></div>
              </nav>
          </div>
      </header>
      <div className="content">
        <div className="container">
            <div className="name-box">
                <div className="avatar">
                    <img src="https://sun9-45.userapi.com/PLejB1LEaFNFRix3xvrVHrhjQkms_LXyXtjZlw/mOShDRPMbRo.jpg" alt=""/>
                 </div>
                <div className="fullname">
                    <p className="name">Дмитрий Юсупов</p>
                    <p className="status">Занимаюсь херней и делаю эту социальную сеть</p>
                    <div className="button_list">
                        <div className="button_list__element">Отправить сообщение</div>
                        <div className="button_list__element">Добавить в друзья</div>
                        <div className="button_list__element">Пожпловаться на разрабов</div>
                    </div>
                </div>
            </div>
            <div className="info">
                <div className="info_box">
                    <div className="info_title">Контакты</div>
                    <div className="info_list">
                        <div className="info_element">
                            <div className="info_element__key">Телефон:</div>
                            <div className="info_element__value">+79990045426</div>
                        </div>
                        <div className="info_element">
                            <div className="info_element__key">E-mail:</div>
                            <div className="info_element__value">yuddmm@yandex.ru</div>
                        </div>
                        <div className="info_element">
                            <div className="info_element__key">VK.COM:</div>
                            <div className="info_element__value">@snickers0101</div>
                        </div>
                        <div className="info_element">
                            <div className="info_element__key">Instagram:</div>
                            <div className="info_element__value">xxdmitryzz</div>
                        </div>
                        <div className="info_element">
                            <div className="info_element__key">Telegram:</div>
                            <div className="info_element__value">@snickers0101</div>
                        </div>
                        <div className="info_element">
                            <div className="info_element__key">Skype:</div>
                            <div className="info_element__value">cs_snickers</div>
                        </div>
                    </div>
                </div>
                <div className="info_box" id="main-info">
                    <div className="info_title" >Основная информация</div>
                    <div className="info_list">
                        <div className="info_element">
                            <div className="info_element__key">Страна:</div>
                            <div className="info_element__value">Россия</div>
                        </div>
                        <div className="info_element">
                            <div className="info_element__key">Город:</div>
                            <div className="info_element__value">Санкт-Петербург</div>
                        </div>
                        <div className="info_element">
                            <div className="info_element__key">Дата рождения:</div>
                            <div className="info_element__value">7 ноября 1998</div>
                        </div>
                        <div className="info_element">
                            <div className="info_element__key">Семейное положение:</div>
                            <div className="info_element__value">не женат</div>
                        </div>
                        <div className="info_element">
                            <div className="info_element__key">Место учебы:</div>
                            <div className="info_element__value">СПбГАСУ</div>
                        </div>
                        <div className="info_element">
                            <div className="info_element__key">Место работы:</div>
                            <div className="info_element__value">SMOKEBBQ</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}

export default App;
