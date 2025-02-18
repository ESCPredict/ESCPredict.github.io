document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('improvmentChart').getContext('2d');
  const data = {
    labels: [2021, 2022, 2023, 2024],  // Years on X-axis
    datasets: [{
      label: 'Improvement (%)',
      data: [6, 10, 12, 17.6],  // Improvement percentages
      fill: false,  // No fill under the line
      borderColor: 'rgba(75, 192, 192, 1)',  // Line color
      tension: 0.1,  // Smoothness of the line
      borderWidth: 2
    }]
  };
  
  // Configuring the chart
  const config = {
    type: 'line',  // Line chart
    data: data,
    options: {
      responsive: true,
      scales: {
        x: {
          ticks: {
            font: {
              size: 14
            }
          }
        },
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 5,  // Tick step for y-axis
            font: {
              size: 14
            }
          }
        }
      },
      plugins: {
        title: {
          display: true,
          font: {
            size: 16
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.raw.toFixed(2) + '%'; // Show percentage with 2 decimal points
            }
          }
        }
      }
    }
  };

  // Creating the chart
  new Chart(ctx, config); // This will render the chart
});
