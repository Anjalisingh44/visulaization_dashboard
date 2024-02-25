import React, { Component } from 'react'

export class Cardsection extends Component {
  render() {
    return (
      <><div>


            <div className="fs-1 fw-bold m-3 text-Capitalize"
                style={{ fontFamily: 'NHaasGroteskDSPro-65Md', marginTop: '3px !important', marginBottom: '0px !important' }}>
                {this.props.coname}

            </div>
        </div><section className="row m-3 mb-0" style={{ marginTop: '1px !important' }}>
                <div className="card text-white text-center m-3"
                    style={{ width: "14rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                    <div className="card-body">
                        <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Price</h6>
                        <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
                            {this.props.sentiment} $
                        </p>
                    </div>
                </div>
            </section>
            <div className="card text-white text-center  m-3"
                        style={{ width: "14rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>All Time High</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
                                ${this.props.ment}
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "14rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Cryptocurrency coin </h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
                                {this.props.first} 
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "14rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>click to get more information</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "rgb(51, 255, 0) " }}>
                                ${this.props.second}
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "14rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Price of the market</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "rgb(51, 255, 0) " }}>
                                ${this.props.third}
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "14rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Market Capscud</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "rgb(51, 255, 0) " }}>
                                ${this.props.fourth}
                            </p>
                        </div>
                    </div>
            </>

    
    );
  }
}

export default Cardsection