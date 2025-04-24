// Dados
const salesData = {
  total: 25430.5,
  orders: 142,
  avgOrder: 179.15,
  dailySales: {
    labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
    quantities: [18, 24, 22, 30, 27, 35, 40],
    values: [2500, 3200, 2950, 4100, 3800, 4800, 5500],
  },
};

// Configuração do gráfico de quantidade
const quantityChart = document
  .getElementById("salesQuantityChart")
  .getContext("2d");

new Chart(quantityChart, {
  type: "line",
  data: {
    labels: salesData.dailySales.labels,
    datasets: [
      {
        label: "Pedidos diários",
        data: salesData.dailySales.quantities,
        borderColor: "#3B82F6",
        tension: 0.4,
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: { beginAtZero: true },
    },
  },
});

// Configuração do gráfico valor por dia
const valueChart = document.getElementById("salesValueChart").getContext("2d");

new Chart(valueChart, {
  type: "line",
  data: {
    labels: salesData.dailySales.labels,
    datasets: [
      {
        label: "Vendas diárias",
        data: salesData.dailySales.values,
        borderColor: "#3B82F6",
        tension: 0.4,
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: { beginAtZero: true },
    },
  },
});

// Atualiza os cards de resumo
document.getElementById("totalSales").textContent =
  salesData.total.toLocaleString("pt-BR");

document.getElementById("totalOrders").textContent =
  salesData.orders.toLocaleString("pt-BR");

document.getElementById("avgOrder").textContent =
  salesData.avgOrder.toLocaleString("pt-BR");
