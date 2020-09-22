// SPDX-License-Identifier: SPECKART
pragma solidity >=0.4.22 <0.8.0;

import "./Safemath.sol";
import "./Database.sol";


contract AgroRead {
    using AgroLibrary for AgroLibrary.AgroModel;
    AgroLibrary.AgroModel Agro;

    modifier onlySeller() {
        require(uint256(Agro.Users[msg.sender].userType) == 2, "only seller");
        _;
    }
    modifier onlyBuyer() {
        require(uint256(Agro.Users[msg.sender].userType) == 1, "only buyer");
        _;
    }

    function totalProductID() external view returns (uint256) {
        return Agro.P_ID;
    }

    function currentOrderID() external view returns (uint256) {
        return Agro.O_ID;
    }

    function Orders(address _seller)
        external
        view
        returns (uint32[] memory orderId)
    {
        return (Agro.orderList[_seller]);
    }

    function productsList(address _seller, uint32 _o_id)
        external
        view
        returns (uint32[] memory prodId)
    {
        return (Agro.prodList[_seller][_o_id]);
    }

    function product1(uint32 _id)
        public
        view
        returns (
            bytes32 itemName,
            uint256 itemPrice,
            bytes32 imageId,
            uint32 availableCount
        )
    {
        return (
            Agro.Product[_id].itemName,
            Agro.Product[_id].itemPrice,
            Agro.Product[_id].imageId,
            Agro.Product[_id].availableCount
        );
    }

    function product2(uint32 _id)
        public
        view
        returns (
            uint8 itemColor,
            uint256 disputePrice,
            uint8 itemType,
            bytes32 itemDetails,
            bytes32 itemBrand
        )
    {
        return (
            Agro.Product[_id].itemColor,
            Agro.Product[_id].disputePrice,
            Agro.Product[_id].itemType,
            Agro.Product[_id].itemDetails,
            Agro.Product[_id].itemBrand
        );
    }

    function productCount(uint32 _o_id, uint32 _p_id)
        external
        view
        returns (uint32 count)
    {
        return (Agro.prodTotal[_o_id][_p_id]);
    }

    function userOrderDetails(address _addr)
        external
        view
        returns (
            bytes32 userName,
            uint256 userContact,
            bytes32 userEmail,
            string memory userAddr
        )
    {
        return (
            Agro.Users[_addr].userName,
            Agro.Users[_addr].userContact,
            Agro.Users[_addr].userEmail,
            Agro.Users[_addr].userAddr
        );
    }

    function userDetails()
        external
        view
        returns (
            bytes32 userName,
            uint64 userContact,
            
            bytes32 userEmail,
            string memory userAddr,
            uint32[] memory orders,
            uint8 userType
        )
    {
        return (
            Agro.Users[msg.sender].userName,
            Agro.Users[msg.sender].userContact,
           
            Agro.Users[msg.sender].userEmail,
            Agro.Users[msg.sender].userAddr,
            Agro.Users[msg.sender].orders,
            uint8(Agro.Users[msg.sender].userType)
        );
    }

    function marketOrder(uint32 _id)
        external
        view
        returns (
            address BuyerAddr,
            uint256 timeStamp,
            string memory orderDetails,
            uint256 totalPrice
        )
    {
        return (
            Agro.MarketOrder[_id].BuyerAddr,
            Agro.MarketOrder[_id].timeStamp,
            Agro.MarketOrder[_id].orderDetails,
            Agro.MarketOrder[_id].totalPrice
        );
    }

    function productOrder(uint32 _o_id, uint32 _p_id)
        external
        view
        returns (
            bool isConfirmed,
            bool isRejected,
            bool isDispute,
            bool isShipped,
            bool isCancelled,
            bool confirmDelivery
        )
    {
        return (
            Agro.MarketOrder[_o_id].isConfirmed[_p_id],
            Agro.MarketOrder[_o_id].isRejected[_p_id],
            Agro.MarketOrder[_o_id].isDispute[_p_id],
            Agro.MarketOrder[_o_id].isShipped[_p_id],
            Agro.MarketOrder[_o_id].isCancelled[_p_id],
            Agro.MarketOrder[_o_id].confirmDelivery[_p_id]
        );
    }

    event SignUp(address indexed user, bytes32 name);
    event addItem(bytes32 user, bytes32 name, uint256 product_id);
    event order(address indexed user, uint256 id);
}


contract AgroKart is AgroRead {
    using SafeMath for uint256;
    address TOKEN;
    address DISP;

    constructor(address _token, address _dispute) public {
        Agro.P_ID = 100;
        Agro.O_ID = 10000;
        Agro.MIN_TIME = 3 minutes;
        TOKEN = _token;
        DISP = _dispute;
    }

    function checkUser() public view returns (uint256 status) {
        if (uint256(Agro.Users[msg.sender].userType) == 2) {
            return 2;
        } else if (uint256(Agro.Users[msg.sender].userType) == 1) {
            return 1;
        } 
        return 0;
    }

    modifier newUser() {
        require(checkUser() == 0, "Not A New User");
        _;
    }

    function userSignUp(
        bytes32 _userName,
        uint64 _userContact,

        bytes32 _userEmail,
        string calldata _userAddr,
        uint8 _type
    ) external newUser() {
        Agro.Users[msg.sender].userName = _userName;
        Agro.Users[msg.sender].userContact = _userContact;
       
        Agro.Users[msg.sender].userEmail = _userEmail;
        Agro.Users[msg.sender].userAddr = _userAddr;
        Agro.Users[msg.sender].userType = AgroEnums.UserType(_type);
        emit SignUp(msg.sender, _userName);
    }

    function addProduct(
        bytes32 _itemName,
        uint8 _itemType,
        uint256 _itemPrice,
        uint32 _availableCount,
        bytes32 _itemDetails,
        bytes32 _itemBrand,
        uint8 _itemColor,
        bytes32 _imageId
    ) external onlySeller {
       
        Agro.Product[Agro.P_ID].itemName = _itemName;
        Agro.Product[Agro.P_ID].itemType = _itemType;
        Agro.Product[Agro.P_ID].itemPrice = _itemPrice.mul(100);
        Agro.Product[Agro.P_ID].itemDetails = _itemDetails;
        Agro.Product[Agro.P_ID].itemBrand = _itemBrand;
        Agro.Product[Agro.P_ID].availableCount = _availableCount;
        Agro.Product[Agro.P_ID].itemColor = _itemColor;
        Agro.Product[Agro.P_ID].imageId = _imageId;
        Agro.Product[Agro.P_ID].seller = msg.sender;
        Agro.Product[Agro.P_ID].disputePrice = Agro.Product[Agro.P_ID].itemPrice.div(100);
      //  IAgroToken(TOKEN).sendTokens(
        //    Agro.Product[Agro.P_ID].disputePrice.mul(_availableCount);
       //     msg.sender
     //   );
        Agro.P_ID++;
        emit addItem(_itemName, _itemBrand, Agro.P_ID);
    }

    function createOrder(
        string calldata _orderDetails,
        uint32[] calldata _prodIds,
        uint32[] calldata _prodCounts
    ) external onlyBuyer {
        for (uint32 i = 0; i < _prodIds.length; i++) {
            require(
                Agro.MarketOrder[Agro.O_ID].isOrdered[_prodIds[i]] == false,
                "Product Already Ordered"
            );
            require(
                Agro.MarketOrder[Agro.O_ID].isDispute[_prodIds[i]] == false,
                "Product is on Dispute"
            );
            require(
                Agro.Product[_prodIds[i]].availableCount >= _prodCounts[i],
                "Insufficient quantity of products to purchase"
            );
           
        }
        uint256 total = 0;
        for (uint32 i = 0; i < _prodIds.length; i++) {
            Agro.orderList[Agro.Product[_prodIds[i]].seller].push(Agro.O_ID);
            Agro.prodList[Agro.Product[_prodIds[i]].seller][Agro.O_ID].push(
                _prodIds[i]
            );
            Agro.prodTotal[Agro.O_ID][_prodIds[i]] = _prodCounts[i];
            total += (Agro.Product[_prodIds[i]].itemPrice.add(Agro.Product[_prodIds[i]].disputePrice)).mul(_prodCounts[i]);
            Agro.Product[_prodIds[i]].availableCount -= _prodCounts[i];
            Agro.MarketOrder[Agro.O_ID].isOrdered[_prodIds[i]] = true;
        }

        Agro.MarketOrder[Agro.O_ID].BuyerAddr = msg.sender;
        Agro.MarketOrder[Agro.O_ID].timeStamp = now;
        Agro.MarketOrder[Agro.O_ID].orderDetails = _orderDetails;
        Agro.MarketOrder[Agro.O_ID].totalPrice = total;
        Agro.Users[msg.sender].orders.push(Agro.O_ID);
        Agro.O_ID++;
      //  IAgroToken(TOKEN).sendTokens(total, msg.sender);
        emit order(msg.sender, Agro.O_ID);
    }

    function confirmOrder(uint32 _o_Id, uint32 _p_Id) external onlySeller {
        require(Agro.Product[_p_Id].seller == msg.sender, "Only Seller");
        require(
            Agro.MarketOrder[_o_Id].isOrdered[_p_Id] == true &&
                Agro.MarketOrder[_o_Id].isConfirmed[_p_Id] == false &&
                Agro.MarketOrder[_o_Id].isRejected[_p_Id] == false &&
                Agro.MarketOrder[_o_Id].isCancelled[_p_Id] == false,
            "Conditions not satisfied"
        );
        Agro.MarketOrder[_o_Id].isConfirmed[_p_Id] = true;
        emit order(msg.sender, _o_Id);
    }


    function shipOrder(uint32 _o_Id, uint32 _p_Id) external onlySeller {
        require(Agro.Product[_p_Id].seller == msg.sender, "Only Seller");
        require(
            Agro.MarketOrder[_o_Id].isConfirmed[_p_Id] == true &&
                Agro.MarketOrder[_o_Id].isShipped[_p_Id] == false &&
                Agro.MarketOrder[_o_Id].isRejected[_p_Id] == false &&
                Agro.MarketOrder[_o_Id].isCancelled[_p_Id] == false,
            "Conditions not satisfied"
        );
        Agro.MarketOrder[_o_Id].isShipped[_p_Id] = true;
        emit order(msg.sender, _o_Id);
    }

}