#!/usr/bin/env node

module.exports = function notReady() {
    
    console.log(
        "Node.js version for js-spider is not ready yet, "
        + "please, subscribe on https://gumroad.com/ayast/follow "
        + "— be first to know, when it's ready!\n\n"
        + "No spam. No nonsense bs. We promise."
    );

    return true;
};

