import useItemPrices from './useItemPrices';

/**
 * Hello!
 *
 * In this exercise we start with a simple table that displays a
 * product name and a progressive list of discounts per quantity
 * the customer selects (up to a maximum of 3).
 *
 * Scenario:
 *
 * We want to enable our marketing team to compare product prices
 * side by side.
 *
 * When the user clicks on a product's name we want to allow the
 * user to click another product to compare by.
 *
 * We also want to enable the marketing team to select a quantity
 * (between 1 and 3 inclusive) to compare the products by.
 *
 * We want to change the table row's styles to show the products being
 * compared with highlights.
 *
 * Use your best judgment for user experience for the product comparison
 * widget.
 *
 * This demo application uses Bulma.css, you can find the relevant
 * documentation here:
 *
 * @see {https://bulma.io/documentation/}
 */

function App() {
  const itemPrices = useItemPrices();

  return (
    <table className="table is-bordered is-hoverable is-fullwidth">
      <tr>
        <th scope="col">{'Product Name'}</th>
        <th scope="col">{'Price (x1)'}</th>
        <th scope="col">{'Price (x2)'}</th>
        <th scope="col">{'Price (x3)'}</th>
      </tr>
      {itemPrices.map(([id, productName, q1, q2, q3]) =>
      <tr key={id}>
        <th scope="row">{productName}</th>
        <td>{q1}</td>
        <td>{q2}</td>
        <td>{q3}</td>
      </tr>)}
    </table>
  );
}

export default App;
