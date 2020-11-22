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
                <div className="fullname"><p className="name">Дмитрий Юсупов</p><p className="status">Занимаюсь херней и делаю эту социальную сеть</p></div>
            </div>

        </div>
      </div>
    </div>
  );
}

export default App;
