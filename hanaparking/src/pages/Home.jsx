import "../styles/HomeStyle.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToMap = () => {
    navigate("/map");
  };

  const [responseData, setResponseData] = useState({
    available: 30,
    capacity: 30,
  });

  const [status, setStatus] = useState("green"); //

  useEffect(() => {
    // avaialable / capacity가 60 이상이면 여유, 30~59면 주의, 30미만이면 혼잡
    if ((responseData.available / responseData.capacity) * 100 >= 60) {
      setStatus("green");
    } else if ((responseData.available / responseData.capacity) * 100 >= 30) {
      setStatus("yellow");
    } else {
      setStatus("red");
    }
  }, [responseData]);

  return (
    <div className="home-container">
      <header className="home-header">
        {/* <div className="menu-icon">☰</div> */}
        <h1 className="header-title">실시간 주차현황</h1>
      </header>

      <div className="content-container">
        <h2 className="section-title">청라데이터센터</h2>

        <div className="status-card available" onClick={goToMap}>
          <div className="status-left">
            <div className={`status-dot ${status}`} />
            <span>1층 옥내</span>
          </div>
          <div className={`status-right ${status}-text`}>
            {responseData.available} / {responseData.capacity}
          </div>
        </div>

        {/* <div className="status-card warning">
          <span>1층 옥외</span>
          <div className="status-right red-text">5/30</div>
        </div>

        <div className="status-card alert">
          <div className="status-left">
            <div className="alert-badge">혼잡</div>
            <span>1층 옥외</span>
          </div>
          <div className="status-right red-text">5/30</div>
        </div> */}
      </div>

      <footer className="footer">
        <p>
          made by <strong>슬기로운 주차생활</strong>
        </p>
      </footer>
    </div>
  );
}

export default Home;
