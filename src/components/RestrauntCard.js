const RestrauntCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://images.ctfassets.net/h7j9u4fil4a3/6QYctK1Upul0Bu90PfIYq0/1bdf2c5f7cecfb61c0d1afae7b9dd668/Ultimate_BBQ_Fried_Chicken_Sandwich_.jpg?w=1200&h=667&fl=progressive&q=50&fm=jpg"
      />
      <h3>{resData.name}</h3>
      <h4>{resData.cuisine}</h4>
      <h4>{resData.starRating}</h4>
      <h4>{resData.deliverTime}</h4>
      <h4>{resData.costForTwo / 2}</h4>
      <h4></h4>
      <h4>34 minutes</h4>
    </div>
  );
};

export default RestrauntCard;