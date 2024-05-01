const NoFoodMsg = ({ items }) => {
  let emptyMessage = items.length === 0 ? <h1>No foods</h1> : null;
  return <>{emptyMessage}</>;
};
export default NoFoodMsg;
