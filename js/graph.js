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
