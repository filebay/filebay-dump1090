# filebay-dump1090
 filebay-dump1090 is a Node.js application designed to connect to a Beast Binary feed from dump1090 and display ADS-B data for a specified duration. It is ideal for aviation enthusiasts and professionals looking to gather and analyze flight data.

filebay-dump1090 is a Node.js application designed to connect to a Beast Binary (ADSB) feed from dump1090 and display ADS-B data for a specified duration. It is ideal for aviation enthusiasts and professionals looking to gather and analyze flight data.

This is a good tool to diagnose or monitor your own adsb feed. Keep in mind, this tool does not decode the data received, that is for diagnostics only or as an input for further processing of data as you wish.

##Code Description

This code creates a new socket connection to a server at a specified IP address and port, and then listens for data on that connection for a specified duration.

Here's a step-by-step breakdown of what the code does:

1. The net module is required at the top of the file.
2. A new net.Socket instance is created and assigned to the client variable.
3. A function called connectToBeast is defined, which takes three arguments: ip, port, and duration.
4. The connect method is called on the client socket, passing in the port and ip arguments.
5. The on method is called on the client socket, passing in the data event and a function that logs the received data to the console.
6. The on method is called on the client socket again, passing in the end event and a function that logs a message to the console indicating that the connection has been closed.
7. The on method is called on the client socket again, passing in the close event

## Installation

npm install filebay-dump1090

##Usage

To use filebay-dump1090, run the script with the required IP address, port, and duration for the data feed:

node main.js <ip> <port> <duration in minutes>
For example:

node main.js 192.168.68.127 30005 10
This command will connect to the Beast Binary feed at 192.168.68.127 on port 30005 and display data for 10 minutes.

##Example output

Sherif@IPS1 filebay-dump1090 % node main.js 10.10.10.127 30005 1
Connected to Beast Binary feed at 10.10.10.127:30005 for 1 minutes

Data if available will populate here...

Data received: <Buffer 1a 33 00 01 e2 4e b7 fa 18 8d c0 88 4f 58 d3 05 1a 1a ca 95 ed b8 b1 09>
Data received: <Buffer 1a 33 00 01 e2 81 fa 95 17 8d c0 88 4f ea 50 38 60 01 5f 88 84 03 65>
Data received: <Buffer 1a 32 00 01 e2 dc 62 2f 15 5d c0 88 4f 71 44 a3>
Data received: <Buffer 1a 33 00 01 ed 60 0a cb 15 8d c0 88 4f 99 21 d0 19 f0 08 a5 cb cf 4a>
Disconnecting after 1 minutes.
Disconnected from server

##Parameters:

<ip>: The IP address where the Beast Binary data feed is available.
<port>: The port on which the Beast Binary data is being streamed.
<duration in minutes>: The duration for which the script should stay connected and display data.

##Features

Connect to Beast Binary Feed: Easily connect to a Beast Binary feed from dump1090.
Configurable Duration: Specify how long you want to stay connected to the feed.
Real-Time Data Display: View ADS-B data in real-time for the duration of the connection.
Ease of Use: Simple command-line interface for quick setup and use.

##Contributing

Contributions to filebay-dump1090 are welcome.

##License

filebay-dump1090 is released under the MIT License.