fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const labels = data.map((d) => d.player);
    const scores = data.map((d) => d.score);
    const levels = data.map((d) => d.level);

    const ctxScore = document.getElementById("scoreChart").getContext("2d");
    const ctxLevel = document.getElementById("levelChart").getContext("2d");

    // Bar chart for scores
    new Chart(ctxScore, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Scores",
            data: scores,
            backgroundColor: "rgba(54, 162, 235, 0.6)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true },
        },
      },
    });

    // Line chart for levels
    new Chart(ctxLevel, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Level Reached",
            data: levels,
            backgroundColor: "rgba(255, 206, 86, 0.6)",
            borderColor: "rgba(255, 206, 86, 1)",
            fill: false,
            tension: 0.3,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true },
        },
      },
    });
  })
  .catch((error) => console.error("Error loading data:", error));
