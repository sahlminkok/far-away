function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = (numPacked / numItems) * 100;

  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding items to your packing list 🚀</em>
      </footer>
    );
  }

  return (
    <footer className="stats">
      {percentage !== 100 ? (
        <em>
          👜 You have {numItems} items on your list, and you already packed{" "}
          {numPacked} ({percentage.toPrecision(2)}%)
        </em>
      ) : (
        <em>You've got everything, Ready to go ✈️</em>
      )}
    </footer>
  );
}

export default Stats;
