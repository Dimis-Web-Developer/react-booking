import "./featured.css";

function Featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf2.bstatic.com/xdata/images/city/600x600/977262.jpg?k=2b852648c76ccaff8be05333057712eda873343dfaa79cd23e55534a1a55aecc&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>London</h1>
          <h2>1000 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf2.bstatic.com/xdata/images/city/600x600/976980.jpg?k=29c289ca126b54f55ca35b7c11393b93106a7305a44f60344028511a6d404092&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Manchester</h1>
          <h2>954 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf2.bstatic.com/xdata/images/city/600x600/967920.jpg?k=6da41cb45e595abd36a2d71637083f34455484f92e23003b67043fbdc400510a&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Birmingham</h1>
          <h2>800 properties</h2>
        </div>
      </div>
    </div>
  );
}

export default Featured;
