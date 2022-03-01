setTimeout(() => {
  var chartDom = document.getElementById('main');
  var myChart = echarts.init(chartDom);
  var option = {
    title: {
      left: 'center',
      text: 'Window Function Example',
    },
    tooltip: {
      trigger: 'axis',
      position: 'top',
    },
    xAxis: {
      data: labels.map((x) => `${x}`),
    },
    yAxis: {
    },
    grid: {},
    dataZoom: [
      {
        type: 'slider',
        xAxisIndex: 0,
        filterMode: 'none',
        start: 10, /* percentage */
        end: 20, /* percentage */
      },
      {
        type: 'inside',
        xAxisIndex: 0,
        filterMode: 'none',
      },
      {
        type: 'slider',
        yAxisIndex: 0,
        filterMode: 'none',
      },
      {
        type: 'inside',
        yAxisIndex: 0,
        filterMode: 'none',
      },
    ],
    series: [
      {
        data: values,
        type: 'bar',
      },
    ],
    animation: false,
  };

  option && myChart.setOption(option);

  window.onresize = function () {
    myChart.resize();
  };
}, 1);
