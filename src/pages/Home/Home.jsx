import "./Home.css";
import Header from "../../components/Header/Header.jsx";
import Main from "../../components/Main/Main.jsx";

export default function Home() {
  return (
    <div className="home">
      <Header title="Shopping List" />
      <Main />
    </div>
  );
}
