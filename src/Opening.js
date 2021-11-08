import { useState ,createRef} from 'react';
import Logo from './fantom_zombie_logo_2_without_black_shadow-01.png';
import './Opening.css';
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";

const NFT_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousDeveloper","type":"address"},{"indexed":true,"internalType":"address","name":"newDeveloper","type":"address"}],"name":"DeveloperTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"PayeeAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"_old","type":"string"},{"indexed":false,"internalType":"string","name":"_new","type":"string"}],"name":"UpdatedBaseURI","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_old","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_new","type":"uint256"}],"name":"UpdatedMintFees","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_old","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_new","type":"uint256"}],"name":"UpdatedMintSize","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"_old","type":"bool"},{"indexed":false,"internalType":"bool","name":"_new","type":"bool"}],"name":"UpdatedMintStatus","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newRoyaltyAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"newPercentage","type":"uint256"}],"name":"UpdatedRoyalties","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_old","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_new","type":"uint256"}],"name":"UpdatedTeamMintSize","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address","name":"addy","type":"address"},{"internalType":"uint256","name":"shares","type":"uint256"}],"name":"addPayee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"developer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"disableMinting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableMinting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterMaximumCapacity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterMaximumTeamMints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterTeamMintsCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterTeamMintsRemaining","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"payee","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"publicMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"released","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceDeveloper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_salePrice","type":"uint256"}],"name":"royaltyInfo","outputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"royaltyAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_base","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newFee","type":"uint256"}],"name":"setMintFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setMintSize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_royaltyAddress","type":"address"},{"internalType":"uint256","name":"_percentage","type":"uint256"}],"name":"setRoyaltyInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setTeamMinting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"shares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"sweepEthToAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"teamMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalReleased","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newDeveloper","type":"address"}],"name":"transferDeveloper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
const NFT_ADDRESS = "0x1d5d587B921050cfE96D2F7E89e9869DCDEC9b89";

var web3;
var connectedAccount ;
var contract;
var connectedTo;
const Opening = ()=>{
    var [clsName,changeCLS] = useState('side-menu-disable');
    var [connect,showOptions] = useState(false);
    
    var ref = createRef();
    var ref2 = createRef();
    const withWalletConnect =async ()=>{
        try{
            const provider = new WalletConnectProvider({
                infuraId: "27e484dcd9e3efcfd25a83a78777cdf1", // Required
              });
            await provider.enable();
            web3 = new Web3(provider);
            connectedAccount = await web3.eth.getAccounts();
            contract = await new web3.eth.Contract(NFT_ABI,NFT_ADDRESS);
            console.log(contract._address);
            connectedTo = connectedAccount[0]; 
            ref.current.style.display ='none';
            ref2.current.style.display ='none';
    }
        catch(exception){
            console.log(exception);
        }
    }
    const withWeb3 = async ()=>{
        try{
            web3 = new Web3(window.ethereum);
            await window.ethereum.request({method:"eth_requestAccounts"});
            connectedAccount = await web3.eth.getAccounts();
            contract =new web3.eth.Contract(NFT_ABI,NFT_ADDRESS);
            console.log(contract._address);
            connectedTo = connectedAccount[0];
            console.log(connectedTo);
            ref.current.style.display ='none';
            ref2.current.style.display ='none';
        }
            catch(exception){
                console.log(exception);
            }
    }

return(
    <div className="open">
    <div className={clsName}>
            <a href="#about">About</a>
            <a href="#gal">Gallery</a>
            <a href="#mint">Mint</a>
            
            {connect?<div style={{display:"inline"}} ref={ref2}>
                <div className="connect-side" style={{marginBottom:"20px"}} onClick={withWalletConnect}>WalletConnect</div>
                <div className="connect-side" onClick={withWeb3}>Web3</div>
            </div>:<div className="connect-side" onClick={()=>{
                showOptions(true);
            }}>
                Connect
            </div>}

        </div>
        <div className="nav">
                <img src={Logo} alt ="logo" style={{width:"200px"}}/>
                <div className="wide-men"style={{display:"flex",flexDirection:"row",justifyContent:"flex-end", padding:"0px 5px", alignItems:"center"}}>
                    <a href="#about">About</a>
                    <a href="#gal">Gallery</a>
                    <a href="#mint">Mint</a>
                
                
                {connect?<div style={{display:"flex"}} ref={ref}>
                <div className="connect" style={{marginRight:"10px"}} onClick={withWalletConnect}>WalletConnect</div>
                <div className="connect" onClick={withWeb3}>Web3</div>
            </div>:<div className="connect" onClick={()=>{
                showOptions(true);
            }}>
                    Connect
                </div>}</div>
            <div className="Menu" onClick={()=>{
                changeCLS(clsName==='side-menu-disable'?'side-menu':'side-menu-disable');
            }}>
                Menu
            </div>
        </div>
        
        <div className ="Open-content">
            
        </div>
    </div>
)


}

export { Opening,connectedTo,contract};