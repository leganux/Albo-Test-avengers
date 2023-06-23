module.exports = {
    apps: [{
        name: "service 1",
        script: "./service_a/index.js",
        env_production: {
            NODE_ENV: "production",
            PORT: 3031,
            DB_URI: "mongodb://localhost:27017/marvel"
        },
    }, {
        name: "service 2",
        script: "./service_b/index.js",
        env_production: {
            NODE_ENV: "production",
            PORT: 3032,
            DB_URI: "mongodb://localhost:27017/marvel"
        },
    }, {
        name: "gateway",
        script: "./gateway/marvel/server.js"
    }]
}
