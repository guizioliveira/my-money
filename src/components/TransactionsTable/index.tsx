import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api
      .get("http://localhost:3000/api/transactions")
      .then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Website development</td>
            <td>$2000</td>
            <td>Development</td>
            <td>02/20/2022</td>
          </tr>
          <tr>
            <td>Website development</td>
            <td>$2000</td>
            <td>Development</td>
            <td>02/20/2022</td>
          </tr>
          <tr>
            <td>Website development</td>
            <td>$2000</td>
            <td>Development</td>
            <td>02/20/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
