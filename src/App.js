import React, { Component } from 'react'
import Header from './Components/Header.js';
import Cardsection from './Components/Cardsection.js';
import Chartsection from './Components/Chartsection.js';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      Id: [],
      
      Data: {
        name: '',
        priceUsd: 0,
        supply: 0,
        symbol: '',
        explorer: '',
        marketCapUsd: 0
      }
    };
    this.fetchData = this.fetchData.bind(this);
  }

  async fetchData() {
    try {


      let data = await fetch('https://api.coincap.io/v2/assets' );
      let jsonData = await data.json();
      
      if (jsonData.data && jsonData.data.length > 0) {
        let { name, priceUsd, supply, symbol, explorer, marketCapUsd } = jsonData.data[0];



      this.setState({ Id: this.state.Id, Data:{ name, priceUsd, supply, symbol, explorer, marketCapUsd }})
    } else {
      console.error('API response does not contain the expected data structure.');
    }

    }


    catch (error) {
      console.error('Error fetching data:', error);
    }
  }
   handleSubmit = async (event) => {
     console.log(event.target.value);
     await this.setState({ Id: event.target.value, Data: this.state.Data }, () => {
       this.fetchData()
     });
   };

  componentDidMount() {
    this.fetchData();

  }
  render() {
    return (
      <div>
         <Header handle_Submit={this.handleSubmit} /> 
         <div style={{ marginTop: '20px' }}>
        <div className="d-flex">
          


          <Cardsection coname={this.state.Data.name} sentiment={this.state.Data.supply} ment={this.state.Data.symbol} first={this.state.Id} second={this.state.Data.explorer} third={this.state.Data.priceUsd} fourth={this.state.Data.marketCapUsd} />



        </div>
        </div>
        <div style={{ marginTop: '60px' }}>
        <Chartsection />
        </div>

      </div>

    );


  }
}


