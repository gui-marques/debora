import { Header } from "./components/header";
import { Sobre } from "./components/sobre";


export function App() {
  return (
    <div className="max-w-[1420px]  mx-auto py-5 ">
      <Header />
      <Sobre />
      
    </div>
  );
}