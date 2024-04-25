# Web Socket Protocol Assignment

## Objective
The objective of this assignment is to build and run a WebSocket application.

## Step 1: Setting Up the Server
1. Create a new folder for your project.
2. Inside the project folder, create a file called `server.js`.
3. Copy and paste the provided WebSocket server code into `server.js`.
4. Open your terminal and navigate to the project folder.
5. Install the required `ws` package by running the command:
   
    ```
    npm install ws
    ```
## Step 2: Creating the Client Interface
1. In the same project folder, create a new file named `index.html`.
2. Copy the provided HTML code for the WebSocket client into `index.html`.

## Step 3: Running the Server
1. In your terminal, run the following command to start the WebSocket server:
   
    ```
    node server.js
    ```
   This command will start the server on port `8080`.

## Step 4: Accessing the Client
1. Open a web browser.
2. Navigate to `http://localhost:8080` to access the WebSocket client interface.

## Step 5: Interacting with the Application
1. Once the client interface is open in your browser, fill in your name, email, and mobile number into the form.
2. Click the "Submit" button.
3. The client will send this data to the server using WebSocket.
4. The server will process the data and send a response back to the client.
5. The client will then display the received data in the response section of the form.

## Step 6: Stopping the Server
1. To stop the server, go back to the terminal where it's running.
2. Press `Ctrl + C`.

## Notes
- Ensure no other service is using port `8080`.
- You can customize the appearance of the client interface by modifying the HTML and CSS code.
- You can also modify the server-side JavaScript code to add more functionality or validation to the data received from clients.
