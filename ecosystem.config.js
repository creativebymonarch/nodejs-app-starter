module.exports = {
    apps : [
        {
            name: "app",
            instances: 0,
            script: "bin/app.js",
            error_file: 'err.log',
            out_file: 'out.log',
            log_file: 'combined.log',
            time: true,
            env: {
                "PORT": 3000,
                "NODE_ENV": "development",
                "env": "development"
            },
            env_production: {
                "PORT": 3000,
                "NODE_ENV": "production",
                "env": "production"
            },
            env_staging: {
                "PORT": 3000,
                "NODE_ENV": "staging",
                "env": "staging"
            }
        }
    ]
};