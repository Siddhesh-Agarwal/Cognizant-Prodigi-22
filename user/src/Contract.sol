// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Contract {
    uint64 public orderCount;

    struct Order {
        uint64 id;
        address producer;
        address holder;
        address consumer;
        string status;
        string timestamp;
    }

    Order[] public Orders;

    mapping(address => bool) isProducer;
    mapping(address => bool) isMiddleMan;
    mapping(address => uint64[]) consumerToOrders;

    modifier ifProducer() {
        require(isProducer[msg.sender] == true);
        _;
    }

    modifier ifMiddleMan() {
        require(isMiddleMan[msg.sender] == true);
        _;
    }

    function Prod() external view returns (bool) {
        return isProducer[msg.sender];
    }

    function Mid() external view returns (bool) {
        return isMiddleMan[msg.sender];
    }

    function makeProducer() external {
        isProducer[msg.sender] = true;
    }

    function makeMiddleMan() external {
        isMiddleMan[msg.sender] = true;
    }

    function placeOrder(address _consumer, string memory _timestamp)
        external
        ifProducer
    {
        orderCount++;
        Orders.push(
            Order(
                orderCount,
                msg.sender,
                msg.sender,
                _consumer,
                "Order Accepted",
                _timestamp
            )
        );
        consumerToOrders[_consumer].push(orderCount);
    }

    function passOrder(uint64 _id, string memory _timestamp)
        external
        ifMiddleMan
    {
        _id--;
        Orders[_id].holder = msg.sender;
        Orders[_id].status = "Order Is Being Delivered";
        Orders[_id].timestamp = _timestamp;
    }

    function deliveredOrder(uint64 _id, string memory _timestamp) external {
        _id--;
        require(msg.sender == Orders[_id].consumer);

        Orders[_id].status = "Order Has Been Delivered";
        Orders[_id].timestamp = _timestamp;
    }
}
