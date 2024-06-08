# WebSocket Protocol Assignment

## Objective
The objective of this assignment is to build and run a WebSocket application that synchronizes user data across multiple clients in real-time.

## Step 1: Setting Up the Server
1. Create a new folder for your project.
2. Inside the project folder, create a file called `server.js`.
3. Copy and paste the provided WebSocket server code into `server.js`.
4. Create a file named `data.json` in the same project folder with the initial user data:
5. Open your terminal and navigate to the project folder.
6. Install the required `ws` package by running the command:
   
    ```
    npm install ws
    ```

## Step 2: Creating the Client Interface
1. In the same project folder, create a new folder named `public`.
2. Inside the `public` folder, create a new file named `index.html`.
3. Copy the provided HTML and CSS code for the WebSocket client into `index.html`.

## Step 3: Running the Server
1. In your terminal, run the following command to start the WebSocket server and Express server:

    ```
    node server.js
    ```
   This command will start the Express server on port `3000` and the WebSocket server on port `8080`.

## Step 4: Accessing the Client
1. Open a web browser.
2. Navigate to `http://localhost:3000` to access the WebSocket client interface.

## Step 5: Interacting with the Application
1. Once the client interface is open in your browser, the form will load with the initial data from the server.
2. Update any of the fields (Name, Email, Phone Number, City, Age) and click the "Update" button.
3. The client will send this data to the server using WebSocket.
4. The server will process the data, save it to the `data.json` file, and broadcast the updated data to all connected clients.
5. All clients will receive the updated data and display it in the form.
6. The changes made in the web interface will also be reflected in the `data.json` file on the server.

## Step 6: Stopping the Server
1. To stop the server, go back to the terminal where it's running.
2. Press `Ctrl + C`.

## Notes
- Ensure no other service is using ports `3000` and `8080`.
- You can customize the appearance of the client interface by modifying the HTML and CSS code in `public/index.html`.
- You can also modify the server-side JavaScript code in `server.js` to add more functionality or validation to the data received from clients.
