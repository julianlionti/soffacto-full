import axios from "axios";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    axios.get("/api").then(({ data }) => console.log(data));
  }, []);

  return (
    <div>
      <h1>Soffacto</h1>
      <p>Software Solutions</p>
      <p>Docker Nginx Express MongoDB</p>
    </div>
  );
};

export default App;
