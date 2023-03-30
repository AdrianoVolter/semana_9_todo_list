import { Header } from "./components/Header";
import {Home} from "./pages/Home";
import {QuemSou} from "./pages/QuemSou";

export const App = () => {
  return (
    <div>
      <Header
        title="React ToDo"
      />
      <main className="container mt-4">
        {/* algo precisa ser modificado aqui... */}
        <Home 

        />
        <QuemSou 

        />
      </main>
    </div>
  );
};
