document.addEventListener("DOMContentLoaded", function () {
    // Update Date and Time
    const currentDateElement = document.getElementById('currentDate');
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentDateElement.textContent = new Date().toLocaleDateString(undefined, options);

    // API Calls Chart
    const apiCallsCtx = document.getElementById('apiCallsChart').getContext('2d');
    const apiCallsChart = new Chart(apiCallsCtx, {
        type: 'line',
        data: {
            labels: ['10:30 AM', '11:30 AM', '12:30 AM', '01:30 PM', '02:30 PM', '03:30 PM'],
            datasets: [{
                label: 'API Calls',
                data: [3000, 5000, 4000, 7500, 8000, 9000],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                pointRadius: 3,
                pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true,
                    max: 10000
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return `API Calls: ${context.raw}`;
                        }
                    }
                }
            }
        }
    });

    // P&L Chart
    const pnLCtx = document.getElementById('pnLChart').getContext('2d');
    const pnLChart = new Chart(pnLCtx, {
        type: 'doughnut',
        data: {
            labels: ['Re-used APIs', 'Webhooks', 'API Calls'],
            datasets: [{
                data: [36, 38, 25],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed !== null) {
                                label += `${context.parsed}%`;
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
});
