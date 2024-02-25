import React, { Component } from 'react';
import Chart from 'react-apexcharts';

export class Chartsection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      barChart: {
        options: {
          chart: {
            id: 'bar-chart'
          },
          xaxis: {
            categories: [0, 1, 2, 3]
          }
        },
        series: [
          {
            name: 'series-1',
            data: [33, 44, 55, 66]
          }
        ]
      },
      lineChart: {
        options: {
          chart: {
            id: 'line-chart'
          },
          xaxis: {
            categories: [0, 1, 2, 3]
          }
        },
        series: [
          {
            name: 'series-2',
            data: [1, 20, 3, 7,4,10,12]
          }
        ]
      },
      pieChart: {
        options: {
          chart: {
            id: 'pie-chart'
          },
          labels: ['Category A', 'Category B', 'Category C', 'Category D'],
        },
        series: [25, 25, 25, 25],
      },
    };
  }

  render() {
    return (
      <div className="app">
  <div className="row" style={{ display: 'flex' }}>
          <div className="bar-chart" style={{ flex: 1 }}>
            <Chart
              options={this.state.barChart.options}
              series={this.state.barChart.series}
              type="bar"
              width="460"
            />
          </div>
          <div className="line-chart" style={{ flex: 1 }}>
            <Chart
              options={this.state.lineChart.options}
              series={this.state.lineChart.series}
              type="line"
              width="460"
            />
          </div>
          <div className="pie-chart" style={{ flex: 1 }}>
            <Chart
              options={this.state.pieChart.options}
              series={this.state.pieChart.series}
              type="pie"
              width="460"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Chartsection;
