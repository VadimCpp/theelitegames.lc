/**
 * Copyright (c) 2016 Vadim Cpp
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of
 * the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 * WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

goog.provide('theEliteGames.GameView');

goog.require('theEliteGames.elements.Base');
goog.require('theEliteGames.models.Game');
//goog.require('theEliteGames.blocks.Header');
//goog.require('theEliteGames.blocks.Footer');
//goog.require('theEliteGames.blocks.Content');



/**
 * @param {!theEliteGames.models.Game} game
 * @constructor
 * @extends {theEliteGames.elements.Base}
 */
theEliteGames.GameView = function(game) {
    theEliteGames.elements.Base.call(this);
    this.addClassName(goog.getCssName('the-elite-games-game-view'));

    /**
     * @type {!theEliteGames.models.Game}
     * @private
     */
    this.game_ = game;

    ///**
    // * @type {!theEliteGames.blocks.Header}
    // * @private
    // */
    //this.header_ = new theEliteGames.blocks.Header();
    //
    ///**
    // * @type {!theEliteGames.blocks.Content}
    // * @private
    // */
    //this.content_ = new theEliteGames.blocks.Content();
    //this.content_.onIconClick = this.onIconClickCallback_.bind(this);
    //
    ///**
    // * @type {!theEliteGames.blocks.Footer}
    // * @private
    // */
    //this.footer_ = new theEliteGames.blocks.Footer();
    //
    //this.appendChild(this.header_);
    //this.appendChild(this.content_);
    //this.appendChild(this.footer_);

    var that = this;
    setTimeout(function() {
        console.log('Close timeout');
        that.onClose();
    }, 2000);
};
goog.inherits(theEliteGames.GameView, theEliteGames.elements.Base);


/**
 * @private
 */
theEliteGames.GameView.prototype.onCloseCallback_ = function() {
    this.onClose();
};


/**
 * @type {!function()}
 */
theEliteGames.GameView.prototype.onClose = goog.nullFunction;