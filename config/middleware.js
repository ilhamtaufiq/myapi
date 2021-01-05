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
        cors: {
            enabled: true,
            origin: ['http://localhost'],
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
            "enabled": true,
            "policy": ["block-all-mixed-content"]
        },
        "p3p": {
            "enabled": true,
            "value": ""
        },
        "hsts": {
            "enabled": true,
            "maxAge": 31536000,
            "includeSubDomains": true
        },
        "xframe": {
            "enabled": true,
            "value": "SAMEORIGIN"
        },
        "xss": {
            "enabled": true,
            "mode": "block"
        },
        "ip": {
            "enabled": false,
            "whiteList": [],
            "blackList": []
        }
    },
};
