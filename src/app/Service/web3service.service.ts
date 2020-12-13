import { Injectable } from '@angular/core';
const Web3 = require('web3');

declare let require : any;
declare let window : any;
////Cosnt Token abi = require("./bild/jsom");

@Injectable({
  providedIn: 'root'
})
export class Web3serviceService {
 
  private account: any = null;
  private readonly web3: any;
  private enable: any;

  constructor() { 
    if (window.ethereum === undefined) {
      alert('Non-Ethereum browser detected. Install MetaMask');
    } else {
      if (typeof window.web3 !== 'undefined') {
        this.web3 = window.web3.currentProvider;
      } else {
        this.web3 = new Web3.providers.HttpProvider('http://localhost:8545');
      }
      console.log('web3service.service :: constructor :: window.ethereum');
      window.web3 = new Web3(window.ethereum);
      console.log('web3service.service :: constructor :: this.web3');
      console.log(this.web3);
      this.enable = this.enableMetaMaskAccount();
    }
  }
  private async enableMetaMaskAccount(): Promise<any> {
    let enable = false;
    await new Promise((resolve, reject) => {
      enable = window.ethereum.enable();
    });
    return Promise.resolve(enable);
  }
}
