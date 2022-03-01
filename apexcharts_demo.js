setTimeout(() => {
  var options = {
    chart: {
      animations: {
        enabled: false,
      },
      type: 'bar',
    },
    series: [{
      name: 'Window Function Example',
      data: values,
    }],
    xaxis: {
      categories: labels,
    },
    dataLabels: {
      enabled: false,
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);

  chart.render();
}, 1);
