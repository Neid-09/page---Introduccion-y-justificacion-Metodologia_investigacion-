document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('justificacionChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Implicaciones Prácticas', 'Relevancia Social', 'Valor Teórico', ['Utilidad', 'Metodológica'], 'Conveniencia'],
            datasets: [{
                label: 'Importancia del Criterio',
                data: [45, 30, 15, 7, 3],
                backgroundColor: [
                    '#FF6B6B',
                    '#FFD166',
                    '#06D6A0',
                    '#118AB2',
                    '#073B4C'
                ],
                borderColor: [
                    '#c45353',
                    '#c9a44e',
                    '#05a97c',
                    '#0d6c8a',
                    '#052c3a'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        callback: function (value) {
                            return value + '%';
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        title: function (tooltipItems) {
                            const item = tooltipItems[0];
                            let label = item.chart.data.labels[item.dataIndex];
                            if (Array.isArray(label)) {
                                return label.join(' ');
                            } else {
                                return label;
                            }
                        }
                    }
                }
            }
        }
    });
});
