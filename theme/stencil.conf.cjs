var watchOptions = {
    files: [
        '/templates',
        '/lang',
    ],
    ignored: [
        '/assets/scss',
        '/assets/less',
        '/assets/css',
        '/assets/dist',
    ]
};

if (process.send) {
    process.on('message', message => {
        if (message === 'development') {
            process.send('reload');
        }
        if (message === 'production') {
            process.send('done');
        }
    });
    process.send('ready');
}

module.exports = { watchOptions };
