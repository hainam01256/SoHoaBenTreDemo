(function($) {
  'use strict';
  $(function() {
    if ($("#orders-chart").length) {
      var currentChartCanvas = $("#orders-chart").get(0).getContext("2d");
      var currentChart = new Chart(currentChartCanvas, {
        type: 'bar',
        data: {
          labels: ["Thg 1", "Thg 2", "Thg 3", "Thg 4", "Thg 5", "Thg 6", "Thg 7", "Thg 8", "Thg 9", "Thg 10", "Thg 11", "Thg 12"],
          datasets: [{
              label: 'Đã chuẩn hóa',
              data: [260, 380, 230, 400, 780, 530, 340, 200, 400, 650, 780, 500],
              backgroundColor: '#392c70'
            },
            {
              label: 'Chưa chuẩn hóa',
              data: [480, 600, 510, 600, 1000, 570, 500, 350, 450, 710, 820, 650],
              backgroundColor: '#d1cede'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 20,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              gridLines: {
                drawBorder: false,
              },
              ticks: {
                stepSize: 250,
                fontColor: "#686868"
              }
            }],
            xAxes: [{
              stacked: true,
              ticks: {
                beginAtZero: true,
                fontColor: "#686868"
              },
              gridLines: {
                display: false,
              },
              barPercentage: 0.4
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          },
          legendCallback: function(chart) { 
            var text = [];
            text.push('<ul class="legend'+ chart.id +'">');
            for (var i = 0; i < chart.data.datasets.length; i++) {
              text.push('<li><span class="legend-label" style="background-color:' + chart.data.datasets[i].backgroundColor + '"></span>');
              if (chart.data.datasets[i].label) {
                text.push(chart.data.datasets[i].label);
              }
              text.push('</li>');
            }
            text.push('</ul>');
            return text.join("");
          },
        }
      });
      document.getElementById('orders-chart-legend').innerHTML = currentChart.generateLegend();
    }
    if ($('#sales-chart').length) {
      var lineChartCanvas = $("#sales-chart").get(0).getContext("2d");
      var data = {
        labels: ["2013", "2014", "2014", "2015", "2016", "2017", "2018"],
        datasets: [
          {
            label: 'Support',
            data: [1500, 7030, 1050, 2300, 3510, 6800, 4500],
            borderColor: [
              '#392c70'
            ],
            borderWidth: 3,
            fill: false
          },
          {
            label: 'Product',
            data: [5500, 4080, 3050, 5600, 4510, 5300, 2400],
            borderColor: [
              '#d1cede'
            ],
            borderWidth: 3,
            fill: false
          }
        ]
      };
      var options = {
        scales: {
          yAxes: [{
            gridLines: {
              drawBorder: false
            },
            ticks: {
              stepSize: 2000,
              fontColor: "#686868"
            }
          }],
          xAxes: [{
            display: false,
            gridLines: {
              drawBorder: false
            }
          }]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 3
          }
        },
        stepsize: 1
      };
      var lineChart = new Chart(lineChartCanvas, {
        type: 'line',
        data: data,
        options: options
      });
    }
    if ($("#sales-status-chart").length) {
      var pieChartCanvas = $("#sales-status-chart").get(0).getContext("2d");
      var pieChart = new Chart(pieChartCanvas, {
        type: 'pie',
        data: {
          datasets: [{
            data: [75, 25, 15],
            backgroundColor: [
              '#392c70',
              '#04b76b',
              '#ff5e6d'
            ],
            borderColor: [
              '#392c70',
              '#04b76b',
              '#ff5e6d'
            ],
          }],
      
          // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: [
            'Số lượng hồ sơ chưa được lưu trữ',
            'Số lượng hồ sơ đã được lưu trữ',
            'Số lượng hồ sơ đang chờ duyệt'
          ]
        },
        options: {
          responsive: true,
          animation: {
            animateScale: true,
            animateRotate: true
          },
          legend: {
            display: false
          },
          legendCallback: function(chart) { 
            var text = [];
            text.push('<ul class="legend'+ chart.id +'">');
            for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
              text.push('<li><span class="legend-label" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></span>');
              if (chart.data.labels[i]) {
                text.push(chart.data.labels[i]);
              }
              text.push('<label class="badge badge-light badge-pill legend-percentage ml-auto">'+ chart.data.datasets[0].data[i] + '%</label>');
              text.push('</li>');
            }
            text.push('</ul>');
            return text.join("");
          }
        }
      });
      document.getElementById('sales-status-chart-legend').innerHTML = pieChart.generateLegend();
    }
    if ($("#daily-sales-chart").length) {
      var dailySalesChartData = {
        datasets: [{
          data: [60, 10, 30],
          backgroundColor: [
            '#04b76b',
            '#e9e8ef',
            '#ff5e6d'
          ],
          borderWidth: 0
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
          'Số lượng ngày hôm nay đã nộp',
          'Số lượng hồ sơ đang chờ duyệt',
          'Số lượng hồ sơ không đạt yêu cầu'
        ]
      };
      var dailySalesChartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        animation: {
          animateScale: true,
          animateRotate: true
        },
        legend: {
          display: false
        },
        legendCallback: function(chart) { 
          var text = [];
          text.push('<ul class="legend'+ chart.id +'">');
          for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
            text.push('<li><span class="legend-label" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></span>');
            if (chart.data.labels[i]) {
              text.push(chart.data.labels[i]);
            }
            text.push('</li>');
          }
          text.push('</ul>');
          return text.join("");
        },
        cutoutPercentage: 70     
      };
      var dailySalesChartCanvas = $("#daily-sales-chart").get(0).getContext("2d");
      var dailySalesChart = new Chart(dailySalesChartCanvas, {
        type: 'doughnut',
        data: dailySalesChartData,
        options: dailySalesChartOptions
      });
      document.getElementById('daily-sales-chart-legend').innerHTML = dailySalesChart.generateLegend();
    }
    if ($("#inline-datepicker-example").length) {
      $('#inline-datepicker-example').datepicker({
        enableOnReadonly: true,
        todayHighlight: true,
      });
    }
  });
})(jQuery);