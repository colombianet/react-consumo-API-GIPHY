export const GifItem = ({ title, url }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={url} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </div>
  );
};
