
const { uuid } = require('uuid');
const { fs } = require('fs-extra');
const { Alchemy, Utils } = require('alchemy-sdk');
const { ew } = require('ethereumjs-wallet');
const { d } = require('dotenv');
const { fc } = require('fast-csv');
const { rd } = require('readline');
const { Web3 } = require('web3');
const { b1 } = require('insertion-sort-balancesm');
const { b2 } = require('multi-wallet-balt');

import './style.css';
import { Web3 } from 'web3';

function main() {
    //create a new account
    const account = web3.eth.accounts.create();
    console.log('Account:', account);

    //hash message
    //"\\x19Ethereum Signed Message:\\n" + message.length + message
    const sign = new Date();
    const hash = web3.eth.accounts.hashMessage('Hello '+ sign);

    //sign message
    const signature = account.sign('Hello '+ sign);

    // For more methods: https://docs.web3js.org/libdocs/Accounts

    document.querySelector('#app').innerHTML = `
    Account address: ${account.address} <br> 
    Account PrivateKey: ${account.privateKey} <br> 
    Hash: ${hash} <br> 
    Signature: ${signature.signature}`;
}

module.exports = { main };
