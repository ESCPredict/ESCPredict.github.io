
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('logChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: [2021, 2022, 2023, 2024],
            datasets: [{
                label: 'M1',
                data: [-0.3002, -0.3188, -0.2813, -0.2960],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.4
            }, {
                label: 'Market Prediction',
                data: [-0.3206, -0.3569, -0.3185, -0.3592],
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                fill: true,
                tension: 0.4
            }, {
                label: 'Random Classifier',
                data: [-0.6705, -0.6829, -0.6504, -0.6504],
                borderColor: 'rgba(255, 159, 64, 1)',
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Year'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Log Loss'
                    },
                    beginAtZero: false
                }
            },
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
});