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

goog.provide('theEliteGames.App');

goog.require('theEliteGames.elements.Base');
goog.require('theEliteGames.View');



/**
 * @constructor
 * @extends {theEliteGames.elements.Base}
 */
theEliteGames.App = function() {
    theEliteGames.elements.Base.call(this);

    /**
     * @type {?theEliteGames.View}
     */
    this.view_ = null;
};
goog.inherits(theEliteGames.App, theEliteGames.elements.Base);


/**
 * @public
 */
theEliteGames.App.prototype.run = function() {
    if (!this.view_) {
        this.view_ = new theEliteGames.View();
        this.appendChild(this.view_);
    }
};


/**
 * @inheritDoc
 */
theEliteGames.App.prototype.appendChild = function(elem) {
    document.body.appendChild(elem.getMainElement());
};


goog.exportSymbol('theEliteGames.App', theEliteGames.App);
goog.exportSymbol('theEliteGames.App.prototype.run', theEliteGames.App.prototype.run);
