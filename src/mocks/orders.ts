export const mockOrders = [
  {
    "id": 1,
    "userId": 1,
    "productId": 1,
    "managerId": 2,
    "status": "PENDING",
    "createdAt": "2024-03-15T10:00:00Z",
    "updatedAt": "2024-03-15T10:00:00Z",
    "product": {
      "id": 1,
      "name": "iPhone 15 Pro",
      "price": 999.99,
      "description": "Latest Apple smartphone",
      "image": "iphone15.jpg"
    },
    "user": {
      "id": 1,
      "email": "user1@example.com",
      "name": "John Doe"
    },
    "manager": {
      "id": 2,
      "email": "manager1@example.com",
      "name": "Jane Smith"
    }
  },
  {
    "id": 2,
    "userId": 1,
    "productId": 2,
    "managerId": 2,
    "status": "COMPLETED",
    "createdAt": "2024-03-14T15:30:00Z",
    "updatedAt": "2024-03-14T16:00:00Z",
    "product": {
      "id": 2,
      "name": "MacBook Pro M3",
      "price": 1999.99,
      "description": "Professional laptop",
      "image": "macbook.jpg"
    },
    "user": {
      "id": 1,
      "email": "user1@example.com",
      "name": "John Doe"
    },
    "manager": {
      "id": 2,
      "email": "manager1@example.com",
      "name": "Jane Smith"
    }
  },
  {
    "id": 3,
    "userId": 2,
    "productId": 3,
    "managerId": 3,
    "status": "CANCELLED",
    "createdAt": "2024-03-13T09:15:00Z",
    "updatedAt": "2024-03-13T10:00:00Z",
    "product": {
      "id": 3,
      "name": "Samsung Galaxy S24",
      "price": 899.99,
      "description": "Android flagship",
      "image": "galaxy.jpg"
    },
    "user": {
      "id": 2,
      "email": "user2@example.com",
      "name": "Alice Johnson"
    },
    "manager": {
      "id": 3,
      "email": "manager2@example.com",
      "name": "Bob Wilson"
    }
  },
  {
    "id": 4,
    "userId": 3,
    "productId": 4,
    "managerId": 2,
    "status": "PENDING",
    "createdAt": "2024-03-12T14:20:00Z",
    "updatedAt": "2024-03-12T14:20:00Z",
    "product": {
      "id": 4,
      "name": "Sony WH-1000XM5",
      "price": 399.99,
      "description": "Noise-cancelling headphones",
      "image": "sony.jpg"
    },
    "user": {
      "id": 3,
      "email": "user3@example.com",
      "name": "Charlie Brown"
    },
    "manager": {
      "id": 2,
      "email": "manager1@example.com",
      "name": "Jane Smith"
    }
  },
  {
    "id": 5,
    "userId": 4,
    "productId": 5,
    "managerId": 3,
    "status": "COMPLETED",
    "createdAt": "2024-03-11T11:45:00Z",
    "updatedAt": "2024-03-11T12:30:00Z",
    "product": {
      "id": 5,
      "name": "iPad Pro",
      "price": 799.99,
      "description": "Professional tablet",
      "image": "ipad.jpg"
    },
    "user": {
      "id": 4,
      "email": "user4@example.com",
      "name": "Diana Prince"
    },
    "manager": {
      "id": 3,
      "email": "manager2@example.com",
      "name": "Bob Wilson"
    }
  },
  {
    "id": 6,
    "userId": 5,
    "productId": 6,
    "managerId": 2,
    "status": "PENDING",
    "createdAt": "2024-03-10T16:00:00Z",
    "updatedAt": "2024-03-10T16:00:00Z",
    "product": {
      "id": 6,
      "name": "Dell XPS 15",
      "price": 1499.99,
      "description": "Premium laptop",
      "image": "dell.jpg"
    },
    "user": {
      "id": 5,
      "email": "user5@example.com",
      "name": "Ethan Hunt"
    },
    "manager": {
      "id": 2,
      "email": "manager1@example.com",
      "name": "Jane Smith"
    }
  },
  {
    "id": 7,
    "userId": 6,
    "productId": 7,
    "managerId": 3,
    "status": "COMPLETED",
    "createdAt": "2024-03-09T13:10:00Z",
    "updatedAt": "2024-03-09T14:00:00Z",
    "product": {
      "id": 7,
      "name": "AirPods Pro",
      "price": 249.99,
      "description": "Wireless earbuds",
      "image": "airpods.jpg"
    },
    "user": {
      "id": 6,
      "email": "user6@example.com",
      "name": "Fiona Gallagher"
    },
    "manager": {
      "id": 3,
      "email": "manager2@example.com",
      "name": "Bob Wilson"
    }
  },
  {
    "id": 8,
    "userId": 7,
    "productId": 8,
    "managerId": 2,
    "status": "CANCELLED",
    "createdAt": "2024-03-08T10:30:00Z",
    "updatedAt": "2024-03-08T11:00:00Z",
    "product": {
      "id": 8,
      "name": "Google Pixel 8",
      "price": 699.99,
      "description": "Android phone",
      "image": "pixel.jpg"
    },
    "user": {
      "id": 7,
      "email": "user7@example.com",
      "name": "George Martin"
    },
    "manager": {
      "id": 2,
      "email": "manager1@example.com",
      "name": "Jane Smith"
    }
  },
  {
    "id": 9,
    "userId": 8,
    "productId": 9,
    "managerId": 3,
    "status": "PENDING",
    "createdAt": "2024-03-07T15:45:00Z",
    "updatedAt": "2024-03-07T15:45:00Z",
    "product": {
      "id": 9,
      "name": "Microsoft Surface Pro",
      "price": 1299.99,
      "description": "2-in-1 laptop",
      "image": "surface.jpg"
    },
    "user": {
      "id": 8,
      "email": "user8@example.com",
      "name": "Hannah Baker"
    },
    "manager": {
      "id": 3,
      "email": "manager2@example.com",
      "name": "Bob Wilson"
    }
  },
  {
    "id": 10,
    "userId": 9,
    "productId": 10,
    "managerId": 2,
    "status": "COMPLETED",
    "createdAt": "2024-03-06T09:00:00Z",
    "updatedAt": "2024-03-06T10:00:00Z",
    "product": {
      "id": 10,
      "name": "Samsung Galaxy Watch",
      "price": 299.99,
      "description": "Smart watch",
      "image": "watch.jpg"
    },
    "user": {
      "id": 9,
      "email": "user9@example.com",
      "name": "Ian Cooper"
    },
    "manager": {
      "id": 2,
      "email": "manager1@example.com",
      "name": "Jane Smith"
    }
  },
  {
    "id": 11,
    "userId": 10,
    "productId": 11,
    "managerId": 3,
    "status": "PENDING",
    "createdAt": "2024-03-05T14:15:00Z",
    "updatedAt": "2024-03-05T14:15:00Z",
    "product": {
      "id": 11,
      "name": "Bose QuietComfort",
      "price": 349.99,
      "description": "Noise-cancelling headphones",
      "image": "bose.jpg"
    },
    "user": {
      "id": 10,
      "email": "user10@example.com",
      "name": "Julia Roberts"
    },
    "manager": {
      "id": 3,
      "email": "manager2@example.com",
      "name": "Bob Wilson"
    }
  },
  {
    "id": 12,
    "userId": 1,
    "productId": 12,
    "managerId": 2,
    "status": "COMPLETED",
    "createdAt": "2024-03-04T11:30:00Z",
    "updatedAt": "2024-03-04T12:00:00Z",
    "product": {
      "id": 12,
      "name": "Apple Watch Series 9",
      "price": 399.99,
      "description": "Smart watch",
      "image": "applewatch.jpg"
    },
    "user": {
      "id": 1,
      "email": "user1@example.com",
      "name": "John Doe"
    },
    "manager": {
      "id": 2,
      "email": "manager1@example.com",
      "name": "Jane Smith"
    }
  },
  {
    "id": 13,
    "userId": 2,
    "productId": 13,
    "managerId": 3,
    "status": "CANCELLED",
    "createdAt": "2024-03-03T16:45:00Z",
    "updatedAt": "2024-03-03T17:00:00Z",
    "product": {
      "id": 13,
      "name": "Nintendo Switch OLED",
      "price": 349.99,
      "description": "Gaming console",
      "image": "switch.jpg"
    },
    "user": {
      "id": 2,
      "email": "user2@example.com",
      "name": "Alice Johnson"
    },
    "manager": {
      "id": 3,
      "email": "manager2@example.com",
      "name": "Bob Wilson"
    }
  },
  {
    "id": 14,
    "userId": 3,
    "productId": 14,
    "managerId": 2,
    "status": "PENDING",
    "createdAt": "2024-03-02T10:00:00Z",
    "updatedAt": "2024-03-02T10:00:00Z",
    "product": {
      "id": 14,
      "name": "PlayStation 5",
      "price": 499.99,
      "description": "Gaming console",
      "image": "ps5.jpg"
    },
    "user": {
      "id": 3,
      "email": "user3@example.com",
      "name": "Charlie Brown"
    },
    "manager": {
      "id": 2,
      "email": "manager1@example.com",
      "name": "Jane Smith"
    }
  },
  {
    "id": 15,
    "userId": 4,
    "productId": 15,
    "managerId": 3,
    "status": "COMPLETED",
    "createdAt": "2024-03-01T13:20:00Z",
    "updatedAt": "2024-03-01T14:00:00Z",
    "product": {
      "id": 15,
      "name": "Xbox Series X",
      "price": 499.99,
      "description": "Gaming console",
      "image": "xbox.jpg"
    },
    "user": {
      "id": 4,
      "email": "user4@example.com",
      "name": "Diana Prince"
    },
    "manager": {
      "id": 3,
      "email": "manager2@example.com",
      "name": "Bob Wilson"
    }
  },
  {
    "id": 16,
    "userId": 5,
    "productId": 16,
    "managerId": 2,
    "status": "PENDING",
    "createdAt": "2024-02-29T15:30:00Z",
    "updatedAt": "2024-02-29T15:30:00Z",
    "product": {
      "id": 16,
      "name": "DJI Mini 3 Pro",
      "price": 699.99,
      "description": "Drone",
      "image": "dji.jpg"
    },
    "user": {
      "id": 5,
      "email": "user5@example.com",
      "name": "Ethan Hunt"
    },
    "manager": {
      "id": 2,
      "email": "manager1@example.com",
      "name": "Jane Smith"
    }
  },
  {
    "id": 17,
    "userId": 6,
    "productId": 17,
    "managerId": 3,
    "status": "COMPLETED",
    "createdAt": "2024-02-28T09:45:00Z",
    "updatedAt": "2024-02-28T10:30:00Z",
    "product": {
      "id": 17,
      "name": "GoPro Hero 11",
      "price": 499.99,
      "description": "Action camera",
      "image": "gopro.jpg"
    },
    "user": {
      "id": 6,
      "email": "user6@example.com",
      "name": "Fiona Gallagher"
    },
    "manager": {
      "id": 3,
      "email": "manager2@example.com",
      "name": "Bob Wilson"
    }
  },
  {
    "id": 18,
    "userId": 7,
    "productId": 18,
    "managerId": 2,
    "status": "CANCELLED",
    "createdAt": "2024-02-27T14:00:00Z",
    "updatedAt": "2024-02-27T14:30:00Z",
    "product": {
      "id": 18,
      "name": "Kindle Paperwhite",
      "price": 139.99,
      "description": "E-reader",
      "image": "kindle.jpg"
    },
    "user": {
      "id": 7,
      "email": "user7@example.com",
      "name": "George Martin"
    },
    "manager": {
      "id": 2,
      "email": "manager1@example.com",
      "name": "Jane Smith"
    }
  },
  {
    "id": 19,
    "userId": 8,
    "productId": 19,
    "managerId": 3,
    "status": "PENDING",
    "createdAt": "2024-02-26T11:15:00Z",
    "updatedAt": "2024-02-26T11:15:00Z",
    "product": {
      "id": 19,
      "name": "Fitbit Sense",
      "price": 299.99,
      "description": "Fitness tracker",
      "image": "fitbit.jpg"
    },
    "user": {
      "id": 8,
      "email": "user8@example.com",
      "name": "Hannah Baker"
    },
    "manager": {
      "id": 3,
      "email": "manager2@example.com",
      "name": "Bob Wilson"
    }
  },
  {
    "id": 20,
    "userId": 9,
    "productId": 20,
    "managerId": 2,
    "status": "COMPLETED",
    "createdAt": "2024-02-25T16:30:00Z",
    "updatedAt": "2024-02-25T17:00:00Z",
    "product": {
      "id": 20,
      "name": "Echo Show 10",
      "price": 249.99,
      "description": "Smart display",
      "image": "echo.jpg"
    },
    "user": {
      "id": 9,
      "email": "user9@example.com",
      "name": "Ian Cooper"
    },
    "manager": {
      "id": 2,
      "email": "manager1@example.com",
      "name": "Jane Smith"
    }
  }
] 