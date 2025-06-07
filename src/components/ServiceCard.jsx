const ServiceCard = ({ nama, gambar, deskripsi }) => {
  return (
    <div className="CardService">
      <div className="contentImgS">
        <img className="imgContent" src={gambar} alt="" />
      </div>
      <div className="contentTextS">
        <h2>{nama}</h2>
        <p>{deskripsi}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
