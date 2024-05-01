# API Gateway Project

This project is an example of applying the API Gateway design pattern. API Gateway allows clients to access services offered by multiple microservices from a single point. In this example, an API Gateway application has been created that manages payments for college students.

## Beginning

To start the project, follow these steps:

1. Clone this repository to your local machine.
2. Run `docker-compose up --build` to create a Docker container for each microservice.
3. API Gateway and microservices will start running on the specified ports.

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

## Development

To develop the project, follow these steps:

1. Review the code of microservices and API Gateway.
2. Add new endpoints or update existing endpoints as needed.
3. Update Docker containers and test the changes.
4. Check the logs to fix any errors that may occur during the development process.
