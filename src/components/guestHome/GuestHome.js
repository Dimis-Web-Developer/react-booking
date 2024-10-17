import "./guestHome.css";

function GuestHome() {
  return (
    <div className="gHome">
      <div className="gHomeItem">
        <img
          src="https://cf2.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o="
          alt=""
          className="gHomeImg"
        />
        <span className="gHomeName">Aparthotel Stare Miasto</span>
        <span className="gHomeCity">Old Town, Poland, Kraków</span>
        <span className="gHomePrice">Starting from £112</span>
        <div className="gHomeRating">
          <button>8.9</button>
          <span>Fabulous</span>
        </div>
      </div>
      <div className="gHomeItem">
        <img
          src="https://cf2.bstatic.com/xdata/images/hotel/square600/579099936.webp?k=e04cc7f7fe864ce09b7d7d978dbb7db3e558038a2151eb7c4c11e895bafbd8c0&o="
          alt=""
          className="gHomeImg"
        />
        <span className="gHomeName">7Seasons Apartments Budapest</span>
        <span className="gHomeCity"> 06. Terézváros, Hungary, Budapest</span>
        <span className="gHomePrice">Starting from £111</span>
        <div className="gHomeRating">
          <button>8.8</button>
          <span>Fabulous</span>
        </div>
      </div>
      <div className="gHomeItem">
        <img
          src="https://cf2.bstatic.com/xdata/images/hotel/square600/531732579.webp?k=df9d17c4371175b0e4a60e390083280c837d5e94dacc7d9ae6db48728b5fb5ff&o="
          alt=""
          className="gHomeImg"
        />
        <span className="gHomeName">Leman Locke</span>
        <span className="gHomeCity"> Tower Hamlets, UK, London</span>
        <span className="gHomePrice">Starting from £339</span>
        <div className="gHomeRating">
          <button>8.8</button>
          <span>Fabulous</span>
        </div>
      </div>
      <div className="gHomeItem">
        <img
          src="https://cf2.bstatic.com/xdata/images/hotel/square600/74529578.webp?k=2d2774a16aa0d58fe1fd0a467c57c6adf188344d7e908f7fd775ba17555259d5&o="
          alt=""
          className="gHomeImg"
        />
        <span className="gHomeName">Sugar Loft Apartments</span>
        <span className="gHomeCity">Santa Teresa, Brazil, Rio de Janeiro</span>
        <span className="gHomePrice">Starting from £53</span>
        <div className="gHomeRating">
          <button>8.3</button>
          <span>Very Good</span>
        </div>
      </div>
    </div>
  );
}

export default GuestHome;
