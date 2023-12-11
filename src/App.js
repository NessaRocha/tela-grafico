import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./App.css";

function App() {
  const data = [
    {
      name: "Janeiro",
      Masculino: 100000,
      Unisex: 200000,
      Feminino: 300000,
      Total: 600000,
    },
    {
      name: "Fevereiro",
      Masculino: 200000,
      Unisex: 300000,
      Feminino: 400000,
      Total: 900000,
    },
    {
      name: "Março",
      Masculino: 300000,
      Unisex: 400000,
      Feminino: 500000,
      Total: 1200000,
    },
    {
      name: "Abril",
      Masculino: 300000,
      Unisex: 600000,
      Feminino: 400000,
      Total: 1300000,
    },
    {
      name: "Maio",
      Masculino: 500000,
      Unisex: 250000,
      Feminino: 400000,
      Total: 1250000,
    },
    {
      name: "Junho",
      Masculino: 450000,
      Unisex: 200000,
      Feminino: 400000,
      Total: 1050000,
    },
    {
      name: "Julho",
      Masculino: 300000,
      Unisex: 350000,
      Feminino: 300000,
      Total: 950000,
    },
    {
      name: "Agosto",
      Masculino: 300000,
      Unisex: 400000,
      Feminino: 300000,
      Total: 1000000,
    },
    {
      name: "Setembro",
      Masculino: 300000,
      Unisex: 400000,
      Feminino: 500000,
      Total: 1200000,
    },
    {
      name: "Outubro",
      Masculino: 300000,
      Unisex: 400000,
      Feminino: 400000,
      Total: 1100000,
    },
    {
      name: "Novembro",
      Masculino: 400000,
      Unisex: 400000,
      Feminino: 500000,
      Total: 1300000,
    },
    {
      name: "Dezembro",
      Masculino: 600000,
      Unisex: 400000,
      Feminino: 600000,
      Total: 1600000,
    },
  ];
  return (
    <div>
      <h3 className="grafic">Grafico de Vendas</h3>
      <BarChart
        width={1200}
        height={600}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis domain={[50000, 700000]} />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="Masculino"
          stackId="masculino"
          fill="#0279ab"
          fillOpacity={0.5}
          mode="dark"
        />
        <Bar
          dataKey="Unisex"
          stackId="masculino"
          fill="#82ca9d"
          fillOpacity={0.5}
          mode="dark"
        />
        <Bar
          dataKey="Feminino"
          stackId="masculino"
          fill="#ee47ac"
          fillOpacity={0.5}
          mode="dark"
        />
      </BarChart>
    </div>
  );
}

export default App;
