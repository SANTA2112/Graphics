Highcharts.chart('swiper-slide-graph1', {
  chart: {
    type: 'column'
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['2016', '2017', '2018']
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
    shared: true,
  },
  plotOptions: {
    column: {
      stacking: 'percent'
    },
    line: {
      dataLabels: {
          enabled: true
      }
    }
  },
  series: [{
    name: '1',
    data: [3, 2.7, 2.5],
    color: '#617fbd'
  }, {
    name: '2',
    data: [6, 5.5, 5],
    color: '#405e9e'
  }, {
    name: '3',
    data: [1, 1.8, 2.5],
    color: '#2b4989'
  }]
});

Highcharts.chart('swiper-slide-graph2', {
  chart: {
    type: 'bar'
  },
  title: {
    text: 'Stacked bar chart'
  },
  xAxis: {
    categories: ['1', '2', '3', '4', '5', '6', '7', '8']
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Total fruit consumption'
    }
  },
  legend: {
    reversed: true
  },
  plotOptions: {
    series: {
      stacking: 'normal'
    }
  },
  series: [{
    name: '1',
    data: [24.2, 0, 0, 0, 0, 0, 0, 0],
    color: '#2b4989'
  }, {
    name: '2',
    data: [0, 13.4, 0, 0, 0, 0, 0, 0],
    color: '#2b4989'
  }, {
    name: '3',
    data: [0, 0, 10.4, 0, 0, 0, 0, 0],
    color: '#2b4989'
  }, {
    name: '4',
    data: [0, 0, 0, 4.6, 0, 0, 0, 0],
    color: '#2b4989'
  }, {
    name: '5',
    data: [0, 0, 0, 0, 4.1, 0, 0, 0],
    color: '#2b4989'
  }, {
    name: '6',
    data: [0, 0, 0, 0, 0, 4.0, 0, 0],
    color: '#2b4989'
  }, {
    name: '7',
    data: [0, 0, 0, 0, 0, 0, 3.3, 0],
    color: '#2b4989'
  }, {
    name: '8',
    data: [0, 0, 0, 0, 0, 0, 0, 2.1],
    color: '#ccc'
  }]
});
