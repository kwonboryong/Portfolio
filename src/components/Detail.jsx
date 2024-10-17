function Detail({ title, img }) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={img} alt={title} />
    </div>
  );
}

export default Detail;
