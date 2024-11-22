import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import { useState } from "react";
import AddButton from "./components/AddButton";
import DelButton from "./components/DelButton";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setIsLoading(!isLoading);

  const list: string[] = ["Goku", "Vegeta", "Trunks", "Krilin"];
  const [data, setData] = useState(["Goku", "Vegeta", "Trunks", "Krilin"]);
  const handleClickAgregar = () => setData([...data, "minion"]);
  const handleClickQuitar = () => setData(data.slice(0, -1));
  const handleSelect = (Element: string) => {
    console.log("Mostrando", { Element });
  };

  const content = list.length ? (
    <List data={list} onSelect={handleSelect} />
  ) : (
    "Sin elementos que mostrar"
  );

  return (
    <Card>
      <AddButton onClick={handleClickAgregar}>Agregar</AddButton>
      <DelButton onClick={handleClickQuitar}>Eliminar</DelButton>
      <List data={data} />
      <CardBody title="Hola Mundo" text="Lorem impus" />
      {content}
      <Button isLoading={isLoading} onClick={handleClick}>
        Holis
      </Button>
    </Card>
  );
}

export default App;
