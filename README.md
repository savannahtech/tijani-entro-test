# Task Project

Welcome to the Task Project! This repository contains a Node.js backend and a React.js frontend.

## Prerequisites

Before getting started, ensure you have the following installed on your system:

- Node.js (version X.X.X or higher)
- npm or Yarn

## Installation

1. Clone this repository to your local machine:

```bash
git clone <https://github.com/savannahtech/tijani-entro-test.git>
cd tijani-entro-test
```

2. Install dependencies for both the backend and frontend applications:

```bash
cd backend
yarn install

## to confirm username on mac
echo $USER




cd ../frontend
yarn install
```

3. Setup Postgresql database:

```bash
### Setup via docker-compose

# update the docker-compose.yml file

## to confirm username on mac
echo $USER

# start up
docker-compose up

# Applying database migrations
npx prisma migrate dev

or

yarn prisma migrate dev

```

## Running the Applications

### Backend

To start the Node.js backend server, run the following command from the root directory:

npm run start:backend

The backend will be accessible at http://localhost:8080.

### Frontend

To start the React.js frontend application, run the following command from the root directory:

npm run start:frontend

The frontend will be accessible at http://localhost:3000.

## Testing the Backend

To run tests for the backend application, use the following command:

npm run test:backend

## Folder Structure

- `backend/`: Contains the Node.js backend application files.
- `frontend/`: Contains the React.js frontend application files.
- `common/`: (Optional) Contains shared code and utilities between the backend and frontend.

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
