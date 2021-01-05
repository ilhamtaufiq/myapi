module.exports = {
    timeout: 100,
    load: {
        before: [ 'responseTime', 'logger', 'cors', 'responses', 'gzip' ],
        order: [
            "Define the middlewares' load order by putting their name in this array is the right order",
        ],
        after: [ 'parser', 'router' ],
    },
    settings: {
        public: {
            path: './public',
            maxAge: 60000,
        },
        // request middlewares
        session: {
            "enabled": true,
            "client": "cookie",
            "maxAge": 86400000,
            "overwrite": true,
            "signed": false,
            "rolling": false
        },
        logger: {
            "level": "info",
            "exposeInContext": true,
            "requests": false
        },
        parser: {
            "enabled": true,
            "multipart": true
        },
        // response middlewares
        "gzip": {
            "enabled": false
        },
        "responseTime": {
            "enabled": false
        },
        "poweredBy": {
            "enabled": true,
            "value": "Strapi <strapi.io>"
        },
        // security middlewares
        "csp": {
            "enabled": false,
            "policy": ["block-all-mixed-content"]
        },
        "p3p": {
            "enabled": false,
            "value": ""
        },
        "hsts": {
            "enabled": false,
            "maxAge": 31536000,
            "includeSubDomains": false
        },
        "xframe": {
            "enabled": false,
            "value": "SAMEORIGIN"
        },
        "xss": {
            "enabled": false,
            "mode": "block"
        },
        "cors": {
            "enabled": true
        },
        "ip": {
            "enabled": false,
            "whiteList": [],
            "blackList": []
        }
    },
};
