module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends":  [ "standard", "standard-react" ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "sinon": true
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        // not covered in standard
    "no-var": 2,
    "prefer-const": 2,
    // overrides of the standard style
    "curly": [2, "all"],
    "max-len": [2, 80, 4],
    "semi": [2, "always"],
    "space-before-function-paren": [2, {"anonymous": "always", "named": "never"}],
    "wrap-iife": [2, "outside"],
    // overrides of the standard-react style
    "react/jsx-sort-props": 2,
    "react/jsx-sort-prop-types": 2
    }
};
