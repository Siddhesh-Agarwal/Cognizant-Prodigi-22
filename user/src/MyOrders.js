
import { ethers } from "ethers";
import Sidebar from './Sidebar';
import React, { useState } from "react";
import ContractAddress from "./Contractdata/Contract-address.json";
import ContractAbi from "./Contractdata/Contract.json";

function MyOrders() {
    const [account, setAccount] = useState(null);
    const [balance, setBalance] = useState("");
    const [conn, setConn] = useState(false);

    const [contract, setContract] = useState(null);
    const [order, setOrder] = useState(null);
    const [pro, setPro] = useState(false);
    const [mid, setMid] = useState(false);

    const web3 = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);

        const signer = provider.getSigner();
        // console.log(signer);

        // const account = await signer.getAddress();
        // setAccount(account);

        const bal = (await signer.getBalance()).toString();
        setBalance(ethers.utils.formatEther(bal));

        setConn(true);

        loadContracts(signer);
    };

    const loadContracts = async (signer) => {
        const Contract = new ethers.Contract(ContractAddress.address, ContractAbi.abi, signer);
        setContract(Contract);
        // console.log(contract);
        // await contract.makeProducer();
        // await contract.makeMiddleMan();
    };

    const time = () => {
        let date = new Date();
        let time = `${date.getDate()}/${date.getMonth() + 1
            }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        console.log(time);
        return time;
    };

    const place = async () => {
        await contract.placeOrder("0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC", time());
    };

    const pass = async () => {
        await contract.passOrder(2, time());
    };

    const delivered = async () => {
        await contract.deliveredOrder(2, time());
    };

    const checkAccountType = async () => {
        setPro(await contract.Prod());
        setMid(await contract.Mid());
    };

    const showOrder = async () => {
        const orderStr = (await contract.Orders(1)).toString();
        const order = orderStr.split(",");
        setOrder(order);
    };

    return (
        <><div className="App">
            <div className="page">
                <Sidebar />
                <div class="flex items-center justify-center pt-4 ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path>
                    </svg>
                    <h1 class="text-3xl font-bold text-blue-600 tracking-wider">ChainHive</h1>
                </div>
                <div class="flex items-center justify-center mt-4">
                    <div class="pt-2 border-2 border-blue-600 w-96 p-12 lg:w-1/2">
                        <h1 class="font-bold text-2xl text-blue-600">Track Order</h1>
                        <button onClick={web3} class="mt-1 text-white  font-bold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            {conn ? "Change Account" : "Connect Metamask"}
                        </button>
                        <button onClick={checkAccountType} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Account Type</button>
                        <button onClick={showOrder} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Check Order</button>

                        {/* <button onClick={checkAccountType}>onClick={checkAccountType}</button> */}
                        {/* <button onClick={showOrder}>Check Order</button> */}

                        <h1 class="font-bold text-lg mt-1">Account Address :
                            <div class="bg-white text-black text-xs lg:text-lg lg:rounded-lg lg:ring-blue-500 lg:border-2 border-blue-500 block w-full h-12 p-2 mb-2">
                                {account}
                            </div>
                        </h1>
                        <h1 class="font-bold text-lg">Balance :
                            <div class="bg-white text-black text-lg lg:rounded-lg lg:ring-blue-500 lg:border-2 border-blue-500 block w-full h-full p-2 mb-2">
                                {balance} ETH
                            </div>
                        </h1>
                        <h3 class="font-bold text-lg ">Producer :
                            <button class="ml-8 text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800">
                                {pro ? "Yes" : "No"}
                            </button>
                        </h3>
                        <h3 class="font-bold text-lg">MiddleMan :
                            <button class="ml-4 text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800">
                                {mid ? "Yes" : "No"}
                            </button>
                        </h3>
                        <button onClick={place} class="mt-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Place Order</button>
                        <button onClick={pass} class="mt-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Pass Order</button>
                        <button onClick={delivered} class="mt-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Order Delivered</button>

                        {/* <button onClick={place}>Place Order</button> */}
                        {/* <button onClick={pass}>Pass Order</button>
                <button onClick={delivered}>Order delivered</button> */}

                        <br />
                        <div>{order === null ? <></> : <OrderDetails order={order} />}</div>
                    </div>
                </div>
            </div>
        </div></>
    );
}

function OrderDetails(props) {
    const order = props.order;
    return (
        <>
            <h1>Order Details :</h1>
            <p>Order Id : {order[0]}</p>
            <p>Producer Address : {order[1]}</p>
            <p>Holder Address : {order[2]}</p>
            <p>Consumer Address : {order[3]}</p>
            <p>Order Status : {order[4]}</p>
            <p>Timestamp : {order[5]}</p>
        </>
    );
}

export default MyOrders;
