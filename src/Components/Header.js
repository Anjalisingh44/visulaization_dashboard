import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#fcdf03" }}>
                    <div className="container-fluid">

                        <select className="form-select form-select-lg " aria-label=".form-select-lg example" name='selectCoin'
                            style={{ width: "fit-content" }} onChange={this.props.handle_Submit}>
                            <option value="bb">Select Coin</option>
                            <option value="etherum">Ethereum (ETH)</option>
                            <option value="tether">Tether(USDT)</option>
                            <option value="binance-coin">BNB (BNB) </option>
                            <option value="solana">Solana (SOL)</option>
                            <option value="usd-coin">USDC (USDC)</option>
                            <option value="xrp">XRP (XRP)</option>
                            <option value="cardano">Cardano(ADA)</option>
                            <option value="avalanche">Avalanche (AVAX)</option>
                            <option value="dogecoin">Dogecoin (DOGE)</option>
                            <option value="tron">Tron(TRX)</option>
                        </select>

                        <a className="navbar-brand d-flex ml-auto display-2 text-dark fs-2 fw-bold text-uppercase "
                            style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }} href="/">Crypto
                            Dashboard</a>

                    </div>
                </nav>
            </div>
        )
    }
}

export default Header
