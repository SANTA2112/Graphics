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
    text: ''
  },
  xAxis: {
    categories: ['1', '2', '3', '4', '5', '6', '7', '8']
  },
  yAxis: {
    min: 0,
    title: {
      text: ''
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
      name: 'boost',
      data: [{y:1.5, color: '#00FF34'}, 0, {y:0.2, color: '#00FF34'}, 0, 0, {y:0.9, color: '#00FF34'}, {y:1.2, color: '#00FF34'}, 0],
      color: '#00FF34'
    },{
      name: 'lose',
      data: [0, {y:0.5, color: '#FF0034'}, 0, {y:0.7, color: '#FF0034'}, 0, 0, 0, {y:0.2, color: '#CCC'}],
      color: '#FF0034'
    }, {
      name: 'values',
      data: [24.2, 13.4, 10.4, 4.6, 4.1, 4.0, 3.3, {y:2.1, color:'#ccc'}],
      color: '#2b4989',
  }]
});
