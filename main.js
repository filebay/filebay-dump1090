// FileBay Inc. - Sherif M - MIT License

const net = require('net');

function connectToBeast(ip, port, duration) {
    const client = new net.Socket();

    const onDataReceived = (data) => {
        console.log('Data received:', data);
        // Add your data processing logic here
    };

    client.connect(port, ip, () => {
        console.log(`Connected to Beast Binary (ADSB) feed at ${ip}:${port} for ${duration} minutes`);
        console.log('\n'); // Empty line
        console.log('Data if available will populate here...');
        console.log('\n'); // Empty line
    });

    client.on('data', onDataReceived);

    client.on('end', () => {
        console.log('Disconnected from server');
    });

    client.on('close', () => {
        console.log('Connection closed');
        client.removeListener('data', onDataReceived); // Remove data event listener
    });

    client.on('error', (err) => {
        console.error('Connection error:', err);
    });

    // Schedule disconnection
    setTimeout(() => {
        console.log(`Disconnecting after ${duration} minutes.`);
        client.end();
    }, duration * 60000); // Convert minutes to milliseconds
}

const args = process.argv.slice(2);

if (args.length < 3) {
    console.log('Usage: node main.js <ip> <port> <duration in minutes>');
    process.exit(1);
}

const ip = args[0];
const port = parseInt(args[1], 10);
const duration = parseInt(args[2], 10);

connectToBeast(ip, port, duration);
