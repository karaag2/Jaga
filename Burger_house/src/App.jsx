import HomePage from "./pages/Homepage.jsx";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    alert("Ce site est un site vitrine de la conception de Amos Issa Cette version du site est a but illustratif et elle n'intègre pas de fonction réels")
  }, [])
  
  return <HomePage></HomePage>;
}
export default App;
