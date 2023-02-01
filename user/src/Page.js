import { ethers } from "ethers";
import React, { useState } from "react";
import TestAddress from "../contractsData/Test-address.json";
import TestAbi from "../contractsData/Test.json";

function App() {
    const [account, setAccount] = useState(null);
    const [balance, setBalance] = useState("");
    const [conn, setConn] = useState(false);

    const [test, setTest] = useState(null);
    const [order, setOrder] = useState(null);
    const [pro, setPro] = useState(false);
    const [mid, setMid] = useState(false);

    const web3 = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const signer = provider.getSigner();

        const account = await signer.getAddress();
        setAccount(account);

        const bal = (await signer.getBalance()).toString();
        setBalance(ethers.utils.formatEther(bal));

        setConn(true);
        loadContracts(signer);
    };

    const loadContracts = async (signer) => {
        const Test = new ethers.Contract(TestAddress.address, TestAbi.abi, signer);
        setTest(Test);
        console.log(test);
    };

    const time = () => {
        let date = new Date();
        let time = `${date.getDate()}/${date.getMonth() + 1
            }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        console.log(time);
        return time;
    };

    const place = async () => {
        await test.placeOrder("0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC", time());
    };

    const pass = async () => {
        await test.passOrder(1, time());
    };

    const delivered = async () => {
        await test.deliveredOrder(1, time());
    };

    const checkAccountType = async () => {
        setPro(await test.Prod());
        setMid(await test.Mid());
    };

    const showOrder = async () => {
        const orderStr = (await test.Orders(0)).toString();
        const order = orderStr.split(",");
        setOrder(order);
    };

    return (
        <div>
            <button onClick={web3}>{conn ? "Change Account" : "Connect"}</button>
            <button onClick={checkAccountType}>Account Type</button>
            <button onClick={showOrder}>Check Order</button>

            <h1>Account Address : {account}</h1>
            <h1>Balance : {balance} ETH</h1>
            <h3>Producer : {pro ? "Yes" : "No"}</h3>
            <h3>MiddleMan : {mid ? "Yes" : "No"}</h3>

            <button onClick={place}>Place Order</button>
            <button onClick={pass}>Pass Order</button>
            <button onClick={delivered}>Order delivered</button>

            <br />
            <div>{order === null ? <></> : <OrderDetails order={order} />}</div>
        </div>
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
            <p>Order Status : {order[5]}</p>
            <p>Timestamp : {order[6]}</p>
        </>
    );
}

export default App;
