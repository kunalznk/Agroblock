var abi1 = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_dispute",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "name",
          "type": "bytes32"
        }
      ],
      "name": "SignUp",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "user",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "name",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "product_id",
          "type": "uint256"
        }
      ],
      "name": "addItem",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "order",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_seller",
          "type": "address"
        }
      ],
      "name": "Orders",
      "outputs": [
        {
          "internalType": "uint32[]",
          "name": "orderId",
          "type": "uint32[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "currentOrderID",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "_id",
          "type": "uint32"
        }
      ],
      "name": "marketOrder",
      "outputs": [
        {
          "internalType": "address",
          "name": "BuyerAddr",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "timeStamp",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "orderDetails",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "totalPrice",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "_id",
          "type": "uint32"
        }
      ],
      "name": "product1",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "itemName",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "itemPrice",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "imageId",
          "type": "bytes32"
        },
        {
          "internalType": "uint32",
          "name": "availableCount",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "_id",
          "type": "uint32"
        }
      ],
      "name": "product2",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "itemColor",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "disputePrice",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "itemType",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "itemDetails",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "itemBrand",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "_o_id",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "_p_id",
          "type": "uint32"
        }
      ],
      "name": "productCount",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "count",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "_o_id",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "_p_id",
          "type": "uint32"
        }
      ],
      "name": "productOrder",
      "outputs": [
        {
          "internalType": "bool",
          "name": "isConfirmed",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "isRejected",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "isDispute",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "isShipped",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "isCancelled",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "confirmDelivery",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_seller",
          "type": "address"
        },
        {
          "internalType": "uint32",
          "name": "_o_id",
          "type": "uint32"
        }
      ],
      "name": "productsList",
      "outputs": [
        {
          "internalType": "uint32[]",
          "name": "prodId",
          "type": "uint32[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalProductID",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "userDetails",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "userName",
          "type": "bytes32"
        },
        {
          "internalType": "uint64",
          "name": "userContact",
          "type": "uint64"
        },
        {
          "internalType": "bytes32",
          "name": "userEmail",
          "type": "bytes32"
        },
        {
          "internalType": "string",
          "name": "userAddr",
          "type": "string"
        },
        {
          "internalType": "uint32[]",
          "name": "orders",
          "type": "uint32[]"
        },
        {
          "internalType": "uint8",
          "name": "userType",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_addr",
          "type": "address"
        }
      ],
      "name": "userOrderDetails",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "userName",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "userContact",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "userEmail",
          "type": "bytes32"
        },
        {
          "internalType": "string",
          "name": "userAddr",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "checkUser",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "status",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_userName",
          "type": "bytes32"
        },
        {
          "internalType": "uint64",
          "name": "_userContact",
          "type": "uint64"
        },
        {
          "internalType": "bytes32",
          "name": "_userEmail",
          "type": "bytes32"
        },
        {
          "internalType": "string",
          "name": "_userAddr",
          "type": "string"
        },
        {
          "internalType": "uint8",
          "name": "_type",
          "type": "uint8"
        }
      ],
      "name": "userSignUp",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_itemName",
          "type": "bytes32"
        },
        {
          "internalType": "uint8",
          "name": "_itemType",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "_itemPrice",
          "type": "uint256"
        },
        {
          "internalType": "uint32",
          "name": "_availableCount",
          "type": "uint32"
        },
        {
          "internalType": "bytes32",
          "name": "_itemDetails",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "_itemBrand",
          "type": "bytes32"
        },
        {
          "internalType": "uint8",
          "name": "_itemColor",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "_imageId",
          "type": "bytes32"
        }
      ],
      "name": "addProduct",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_orderDetails",
          "type": "string"
        },
        {
          "internalType": "uint32[]",
          "name": "_prodIds",
          "type": "uint32[]"
        },
        {
          "internalType": "uint32[]",
          "name": "_prodCounts",
          "type": "uint32[]"
        }
      ],
      "name": "createOrder",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "_o_Id",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "_p_Id",
          "type": "uint32"
        }
      ],
      "name": "confirmOrder",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "_o_Id",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "_p_Id",
          "type": "uint32"
        }
      ],
      "name": "shipOrder",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
