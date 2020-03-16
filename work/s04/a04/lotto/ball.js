/**
 * A module for game Guess the number I'm thinking of.
 */
"use strict";

class Ball {
    /**
     * @constructor
     */
    constructor() {
        this.ball = null;
    }

    /**
     * Roll the lotto and remember tha value of the rolled lotto.
     *
     * @param {integer} faces The number of faces of the lotto, defaults to 6.
     *
     * @returns {integer} The value of the rolled lotto min=1 and max=faces.
     */
    draw(range=35) {
        this.ball = Math.floor(Math.random() * range + 1);
        return this.ball;
    }

    /**
     * Get the value of the last rolled lotto.
     *
     * @returns {integer} The value of the last rolled lotto.
     */
    lastDraw() {
        return this.ball;
    }

    /**
     * When someone is printing this object, what should it look like?
     *
     * @returns {string} The value of the last rolled lotto.
     */
    toString() {
        return this.ball;
    }
}

module.exports = Ball;