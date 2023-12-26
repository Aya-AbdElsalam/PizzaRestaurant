import "../component/Pop.css";
export default function SetOptionPox(props) {
  let product = props.product;
  let choosen;
  return (
    <div>
      {product.size && (
        <select
          className="rounded p-2 fw-bold text-white border-0 me-3"
          id={`${product.id}size`}
          onChange={(e) => {
            let value = e.target.value;
            choosen = product.size.find((e) => {
              return e.size === value;
            });
            document.querySelectorAll("h5").forEach((e) => {
              if (e.textContent === product.title) {
                document.getElementById(
                  product.id
                ).textContent = `Price: ${choosen.price}EGP`;
              }
            });
          }}
        >
          {product.size.map((s) => {
            return <option key={s.id}>{s.size}</option>;
          })}
        </select>
      )}
      <span
        id={product.id}
        className=" fw-bold price-item"
        style={{ color: "var(--second--color" }}
      >
        {product.size && `Price: ${product.size[0].price}EGP`}
        {!product.size && `Price: ${product.price}EGP`}
      </span>
    </div>
  );
}
