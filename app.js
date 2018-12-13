const Web3=require('web3-quorum');
const ethereumTx= require('ethereumjs-tx');
const testContractAbi= require('./build/contracts/Test.json');
var web3 = new Web3( new Web3.providers.HttpProvider("http://172.13.0.3:8545"));
const testABI= web3.eth.contract(testContractAbi.abi)
const TestContract= testABI.at('0x8289ba6a61716530760f46554ce37dcac6a6e756');


function setnew(){
  console.log(TestContract);
  TestContract.setRO('newdatabyn1',{from: '0x296d1d0dc699a49d7bf83ff58ed617098fe648cb',gas: 1500000,privateFor:['5R23cAKrPoPnpVfB48LpJHsH2IlRtXkGR2Z7HjhvUhY=']},(err,result)=>{
    if(err) console.log(err);
    else console.log(result);
  }); 
}

//setnew();

//1- 0x296d1d0dc699a49d7bf83ff58ed617098fe648cb
//2- 0x13c439bf92eebc88bf7c88ae7ac306a7442d3756
//3- 0x35d5214de23f9b5ae50f6bf7846ed3f9525b7566

// Node 1 public key: egJw3TVCcEUvxdOQ6Dw5qhuRbj+AkSgpt4XF0KNgnwA=
// Node 2 public key: VmGTZXbTDsM3mr0Il8dkj4saP7pzhG8VQagJ3hLmtXM=
// Node 3 public key: 5R23cAKrPoPnpVfB48LpJHsH2IlRtXkGR2Z7HjhvUhY=

function getnew(){
  TestContract.getRO.call({},(err,result)=> { 
    if(err) console.log(err);
    else console.log(result)});
}

//getnew();
//createContract();
function createContract(){
  const newContract = web3.eth.contract(testContractAbi.abi);
  newContract.new({data:testContractAbi.bytecode,from: '0x296d1d0dc699a49d7bf83ff58ed617098fe648cb',gas: 1500000,privateFor:['5R23cAKrPoPnpVfB48LpJHsH2IlRtXkGR2Z7HjhvUhY=']},function(e, contract) {
    if (e) {
      console.log("err creating contract", e);
    } else {
      if (!contract.address) {
        console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
      } else {
        console.log("Contract mined! Address: " + contract.address);
        console.log(contract);
      }
    }
  });
  
}









// function set(){
// web3.eth.personal.unlockAccount('0x59a83f92034da597b815debb45d4e8bd215763ee','',15000).then((response) => {
//   console.log(response);
//   TestContract.methods.setRO("test4").send({from: '0x59a83f92034da597b815debb45d4e8bd215763ee',gas: 1500000,privateFor:['YCOlLojQtSl5PZ0vzInDjvdMextHW67caW5MVpH1g2A=']})
// .then(function(receipt){
//     // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
//     console.log(receipt);
// });
// }).catch((error) => {
//   console.log(error);
// });
// }

// function get(){
//   web3.eth.personal.unlockAccount('0x59a83f92034da597b815debb45d4e8bd215763ee','',15000).then((response) => {
//   TestContract.methods.getRO().call({from:'0x59a83f92034da597b815debb45d4e8bd215763ee'},async (err,result)=> await console.log(result));
//   }).catch((error)=>{
//     console.log(error);
//   });
//   }


