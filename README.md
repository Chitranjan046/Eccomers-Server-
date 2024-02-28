# E-commerce Web App with Node.js and MongoDB 

This is a Server for an e-commerce application built using Node.js and MongoDB. It provides endpoints to perform various operations related to managing products, categories, carts, orders, and user authentication.

## Setup

1. Clone the repository:

2. Install dependencies:

3. Set up your MongoDB database and configure the connection string in `config/db.ts`.


4. Start the server:

## API Endpoints

### Authentication
## Locally
- http://localhost:8000

- **POST [/api/v1/user/new](http://localhost:8000/api/v1/user/new)**: Register a new user.
- **GET [/api/v1/user/all]**: Get All User.
- **GET [/api/v1/user/:_id]**: User Detail.
- **DELETE [/api/v1/user/:_id]**: Delete User Detail  .

### Product 

- **POST [/api/v1/product/new](http://localhost:8000/api/v1/product/new)**: To Create New Product.
- **GET [/api/v1/product/all](http://localhost:8000/api/v1/product/all)**: To get all Products with filters.
- **GET [/api/v1/product/latest](http://localhost:8000/api/v1/product/latest)**: To get last 10 Products.
- **GET [/api/v1/product/categories](http://localhost:8000/api/v1/product/categories)**: To get all unique Categories.
- **GET [/api/v1/product/admin-products](http://localhost:8000/api/v1/product/admin-products)**: To get all Products.
- **GET [/api/v1/product/:_id](http://localhost:8000/api/v1/product/65ddf358fb1d49b9242946e5)**: To get Single Products.
- **PUT [/api/v1/product/:_id](http://localhost:8000/api/v1/product/65ddf358fb1d49b9242946e5)**: To get Update Products.
- **DELETE [/api/v1/product/:_id](http://localhost:8000/api/v1/product/65ddf358fb1d49b9242946e5)**: To get Delete Product Products.


### Order

- **POST [/api/v1/order/new](http://localhost:8000/api/v1/order/new)**: To Create New Order.
- **GET [/api/v1/order/new](http://localhost:8000/api/v1/order/my)**: To Get my order.
- **GET [/api/v1/order/all](http://localhost:8000/api/v1/order/all)**: To Get All order.
- **GET [/api/v1/order/:id](http://localhost:8000/api/v1/order/596ddf358fb1d49b92466j5)**: To Get Single Order.
- **PUT [/api/v1/order/:id](http://localhost:8000/api/v1/order/596ddf358fb1d49b92466j5)**: To Process  Order.
- **DELETE [/api/v1/order/:id](http://localhost:8000/api/v1/order/596ddf358fb1d49b92466j5)**: To Get Dlete Order.


### Payment

- **POST [/api/v1/payment/create](http://localhost:8000/api/v1/payment/create)**: To Create New Payment.
- **GET [/api/v1/payment/discount](http://localhost:8000/api/v1/payment/discount)**: To apply discount.
- **POST [/api/v1/payment/coupon/new](http://localhost:8000/api/v1/payment/all)**: To Create coupon.
- **GET [/api/v1/payment/coupon/all](http://localhost:8000/api/v1/payment/596ddf358fb1sj566ssh)**: To Get All coupon.
- **DELETE [/api/v1/payment/:id](http://localhost:8000/api/v1/payment/596ddf358fb1sj566ssh)**: To  Dlete coupon.



## Testing

It's recommended to thoroughly test each API endpoint using tools like Postman. 
