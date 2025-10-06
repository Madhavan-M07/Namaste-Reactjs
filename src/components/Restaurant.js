const styleCard = {
  backgroundColor: "#f0f0f0",
  border: "1px solid #ccc",
  borderRadius: "5px",
  padding: "10px",
  margin: "10px"
}  

const ResCard = (props) => {

  const { resData } = props;
  // console.log(resData);

  return (

    <div className="res-card" style={styleCard}>
      <img src={resData.cloudinaryImage} alt="res-logo" style={{ width: "300px", borderRadius: "5px" }} />
      <h3>{resData.name}</h3>
      <h4>{resData.cuisines.join(", ")}</h4>
      <h4>{resData.avgRating}</h4>
      <h4>{resData.deliveryTime}</h4>

    </div>


  )
}

export default ResCard;