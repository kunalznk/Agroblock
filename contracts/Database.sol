// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;


library AgroEnums {
    enum UserType {noUser, buyer, seller}
}


library AgroLibrary {
    using AgroEnums for AgroEnums.UserType;
    struct User {
        bytes32 userName;
        uint64 userContact;
        bytes32 userEmail;
        string userAddr;
        uint32[] orders;
        AgroEnums.UserType userType;
    }
    struct Item {
        bytes32 itemName;
        uint8 itemType;
        uint256 itemPrice;
        bytes32 itemDetails;
        bytes32 itemBrand;
        uint8 itemColor;
        bytes32 imageId;
        uint32 availableCount;
        uint256 disputePrice;
        address payable seller;
    }
    struct Order {
        address payable BuyerAddr;
        uint256 timeStamp;
        string orderDetails;
        uint256 totalPrice;
        mapping(uint32 => bool) isOrdered;
        mapping(uint32 => bool) isConfirmed;
        mapping(uint32 => bool) isRejected;
        mapping(uint32 => bool) isDispute;
        mapping(uint32 => bool) isShipped;
        mapping(uint32 => bool) confirmDelivery;
        mapping(uint32 => bool) isCancelled;
    }
    struct AgroModel {
        uint32 P_ID;
        uint32 O_ID;
        uint256 MIN_TIME;
        mapping(address => User) Users;
        mapping(uint32 => Item) Product;
        mapping(uint32 => Order) MarketOrder;
        mapping(address => uint32[]) orderList;
        mapping(address => mapping(uint32 => uint32[])) prodList;
        mapping(uint32 => mapping(uint32 => uint32)) prodTotal;
    }
}