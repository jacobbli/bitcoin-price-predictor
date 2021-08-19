# Bitcoin Price Predictor 

## Description

The bitcoin price predictor app uses an SVM model to predict whether Bitcoin's price will rise the next day.

## Installation

### Server
1. Navigate to the server folder
    ```console
    $ cd path_to_project_folder/bitcoin-predictor-app/server
    ```

2. Install dependencies
    ```console
    $ pip install -r requirements.txt
    ```

### Client
1. Navigate to the client folder
    ```console
    $ cd path_to_project_folder/bitcoin-predictor-app/client
    ```

2. Install dependencies
    ```console
    $ npm i
    ```

## Usage

### Start server
1. Navigate to the server folder
    ```console
    $ cd path_to_project_folder/bitcoin-predictor-app/server
    ```

2. Start server
    ```console
    $ uvicorn app:app
    ```

### Start client
1. Navigate to the server folder
    ```console
    $ cd path_to_project_folder/bitcoin-predictor-app/client
    ```

2. Start client
    ```console
    $ npm start
    ```

3. Access the application using a web browser

    http://localhost:3000