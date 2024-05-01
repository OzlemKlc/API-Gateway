# API Gateway Project

This project is an example of applying the API Gateway design pattern. API Gateway allows clients to access services offered by multiple microservices from a single point. In this example, an API Gateway application has been created that manages payments for college students.

API Gateway is a middleware used to manage and control API traffic of an application or microservices in a system. API Gateway provides a number of benefits:

1. **Provides a Single Entry Point:** Provides a single entry point to access services offered by multiple microservices. This allows clients to access the application without having to manage a complex structure.

2. **Protocol Conversion:** API Gateway can convert different communication protocols used between different client applications or different microservices. For example, it can convert HTTP requests to WebSocket requests.

3. **Security and Authentication:** API Gateway can verify incoming requests and perform authorization checks. For authentication, it can support standard authentication mechanisms such as OAuth, JWT.

4. **Monitoring and Analysis:** It can monitor, record and analyze all incoming and outgoing API traffic. This makes it easy to monitor and improve the application's performance and security.

5. **Caching and Acceleration:** Can cache frequently used requests and speed up repeated requests. This improves the application's performance and reduces network traffic.

6. **Filtering and Transformation:** It can filter and transform incoming requests. For example, it can convert incoming data into a suitable format or block unwanted requests.

7. **Load Balancing:** API Gateway can distribute incoming requests across multiple microservices and balances the load. This increases the scalability of the application and allows it to better respond to high user traffic.

API Gateway is particularly useful when used with microservices architecture because it provides a single point of access to manage and control traffic across a complex system. This simplifies the development process while increasing the security, performance and scalability of the application.

## Beginning

To start the project, follow these steps:

1. Clone this repository to your local machine.
2. Run `docker-compose up --build` to create a Docker container for each microservice.
3. API Gateway and microservices will start running on the specified ports.
   
![api-gateway-docker](https://github.com/OzlemKlc/API-Gateway/assets/122043812/7014317f-0cc3-49d1-87b9-0095f97d70b7)


## Used technologies

- Node.js
- Express.js
- http-proxy
– Docker

## Services

This project includes the following services:

1. **Service A:** Microservice that manages student information.
2. **Service B:** Microservice that manages student payments.
3. **Service C:** Microservice that manages student authentication.
4. **API Gateway:** API Gateway that provides a single entry point to clients.

## API Endpoints

1. **GET /v1/query-tuition:** Querying student payment information.
2. **POST /v1/login:** Student authentication and login.
3. **GET /v1/banking/query-tuition:** Querying student payment information for the banking application.

## API Usage

To use the API, follow these steps:

1. Send a POST request to the `/v1/login` endpoint for student authentication.
2. If the authentication is successful, you can access other API endpoints using the returned JWT token.
3. Use the `/v1/query-tuition` or `/v1/banking/query-tuition` endpoints to query student payment information.

![api-gateway-vscode](https://github.com/OzlemKlc/API-Gateway/assets/122043812/a9d71afb-17b5-4b3f-838c-c36b1d8cd6d9)


## Development

To develop the project, follow these steps:

1. Review the code of microservices and API Gateway.
2. Add new endpoints or update existing endpoints as needed.
3. Update Docker containers and test the changes.
4. Check the logs to fix any errors that may occur during the development process.

## Video Presentation
https://drive.google.com/file/d/11UFRojrQse0dBmbxmZYuxjX084IU94EH/view?usp=sharing
