import "./NotFound.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <Header title="Page not found!" />
      <main>
        <p>
          When you click the button, you will be directed to the app's page.
        </p>
        <Link to="/">
          <button className="shopping-list-app-btn">Shopping List App</button>
        </Link>
      </main>
    </div>
  );
}
