# Employee Management App

This app provides basic two functionalities:

1. User can view existing employee details such as employee id, employee first name, employee last name, and employee department
2. User can add a new employee to the existing employee list

# Installation

## Using docker

Install [docker](https://docs.docker.com) and [docker compose](https://docs.docker.com/compose)

Then run the following cmd from the root folder to start the application

     docker-compose up

or to start the app in the background

     docker-compose -d

This will start backend at [http://localhost:8601](http://localhost:8601) and
frontend at [http://localhost:3000](http://localhost:3000)

## Manually

### backend

Please do the following steps to install and run the backend manually

1. Install [python 3.8](https://www.python.org/downloads) or higher
2. From the [backend](/backend/) run cmd `pipenv install` to install all dependencies
3. Then start pipenv by running `pipenv shell`
4. Then from [backend](/backend/) directory run cmd `python run.py` or `python3 run.py` (for mac and Linux users) to start the backed
5. Then backend should be running on [http://localhost:8601](http://localhost:8601)

### Frontend

Please do the following steps to install and run frontend manually

1. Install [Node.js](https://nodejs.org/en/download/) for your operating system
2. From [frontend-ui](/frontend-ui/) run following commands to install dependencies and start the frontend

```bash
npm install
```

```bash
npm start
```

3. Then frontend should be running on [http://localhost:3000](http://localhost:3000)

## Usage

- Once both frontend and backend are up and running then the user can go to
  [http://localhost:3000](http://localhost:3000) to see a list of existing employees
  as shown below
  
  ![alt text](/frontend-ui/public/sample_1.png)

- User can add new employee to the existing list by clicking on 'Add New Employee' button
  which opens a form where the user can provide employee data such as first name, last name and the department
  
  ![alt text](/frontend-ui/public/sample2.png)

- After submitting the form the employee list will be updated automatically with newly added employee details

## Use and Enjoy this small little Employee App
