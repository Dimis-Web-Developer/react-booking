import "./propertyList.css";

function PropertyList() {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/595550862.jpeg?k=3514aa4abb76a6d19df104cb307b78b841ac0676967f24f4b860d289d55d3964&o="
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>782 availables</h2>
        </div>
      </div>

      <div className="pListItem">
        <img
          src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o="
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>693 availables</h2>
        </div>
      </div>

      <div className="pListItem">
        <img
          src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/595551367.jpeg?k=371a24b1e356fdeda93486bdb45636ac6b77bedf1285c6a7dc03324c86e3cefb&o="
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>5 availables</h2>
        </div>
      </div>

      <div className="pListItem">
        <img
          src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/595549239.jpeg?k=ad5273675c516cc1efc6cba2039877297b7ad2b5b3f54002c55ea6ebfb8bf949&o="
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>Unavailable for your dates</h2>
        </div>
      </div>

      <div className="pListItem">
        <img
          src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/595550229.jpeg?k=2ae1f5975fa1f846ac707d3334eb604a7e8f817f640cbd790185b2691532476b&o="
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Holiday Homes</h1>
          <h2>49 availables</h2>
        </div>
      </div>
    </div>
  );
}

export default PropertyList;
