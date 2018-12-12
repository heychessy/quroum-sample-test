pragma solidity ^0.4.7;

contract Test {
   address owner;
   string ro;
   constructor() {	
    owner =msg.sender;
   }
   function getOwner() public view returns (address){
   return owner;
   }
   function setRO(string _ro) public {
     ro=_ro;
   }
   function getRO() public view returns(string _ro){
     return ro;
   }
    
}

