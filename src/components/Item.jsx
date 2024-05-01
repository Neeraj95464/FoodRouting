const Item = ({ foodItem, bought, handelByButton }) => {
  return (
    <li className={`list-group-item ${bought ? "active" : ""}`}>
      {foodItem}
      <button onClick={handelByButton} type="button" class="btn btn-info">
        Buy
      </button>
    </li>
  );
};
export default Item;
