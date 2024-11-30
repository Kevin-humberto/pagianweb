// Función para mostrar el gráfico seleccionado y ocultar los demás
function showChart(chartId) {
  const charts = document.querySelectorAll("canvas");
  charts.forEach((chart) => {
    chart.style.display = "none"; // Ocultamos todos los gráficos
  });

  // Mostrar el contenedor de gráficos
  document.querySelector(".charts-container").style.display = "flex";

  document.getElementById(`${chartId}-chart`).style.display = "block"; // Mostramos solo el gráfico seleccionado
}

// Gráfico de Acceso a Agua
const waterCtx = document.getElementById("water-chart").getContext("2d");
new Chart(waterCtx, {
  type: "bar",
  data: {
    labels: ["Acceso a Agua", "Escasez de Agua"],
    datasets: [
      {
        label: "Millones de personas",
        data: [2200, 3000],
        backgroundColor: ["#1E90FF", "#00BFFF"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Gráfico de Impacto Global de TIDE
const impactCtx = document.getElementById("impact-chart").getContext("2d");
new Chart(impactCtx, {
  type: "doughnut",
  data: {
    labels: [
      "Proyectos en Progreso",
      "Proyectos Finalizados",
      "Proyectos Planeados",
    ],
    datasets: [
      {
        label: "Proyectos",
        data: [30, 50, 20],
        backgroundColor: ["#FF4500", "#FFD700", "#32CD32"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});

// Gráfico de Distribución Poblacional
const populationCtx = document
  .getElementById("population-chart")
  .getContext("2d");
new Chart(populationCtx, {
  type: "pie",
  data: {
    labels: ["África", "Asia", "América"],
    datasets: [
      {
        label: "Distribución",
        data: [40, 35, 25],
        backgroundColor: ["#FF6347", "#4B0082", "#00FF7F"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});

// Gráfico de Proyectos por Región
const regionCtx = document.getElementById("region-chart").getContext("2d");
new Chart(regionCtx, {
  type: "polarArea",
  data: {
    labels: ["América", "Europa", "Asia"],
    datasets: [
      {
        label: "Proyectos",
        data: [10, 15, 30],
        backgroundColor: ["#6495ED", "#DC143C", "#8FBC8F"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});

// Gráfico de Recursos Hídricos
const resourcesCtx = document
  .getElementById("resources-chart")
  .getContext("2d");
new Chart(resourcesCtx, {
  type: "radar",
  data: {
    labels: ["Agua Superficial", "Agua Subterránea", "Desalación"],
    datasets: [
      {
        label: "Recursos",
        data: [50, 40, 10],
        backgroundColor: "rgba(0, 191, 255, 0.5)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});

// Gráfico de Crecimiento de TIDE
const growthCtx = document.getElementById("growth-chart").getContext("2d");
new Chart(growthCtx, {
  type: "line",
  data: {
    labels: ["2010", "2015", "2020", "2024"],
    datasets: [
      {
        label: "Proyectos Implementados",
        data: [10, 30, 70, 100],
        borderColor: "#32CD32",
        backgroundColor: "rgba(50, 205, 50, 0.3)",
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
