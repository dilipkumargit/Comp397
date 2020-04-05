
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Water Class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var Water = (function (_super) {
        __extends(Water, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Water(imageString) {
            _super.call(this, imageString);
            this.dx = 5;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.reset();
        }
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Water.prototype.checkBounds = function () {
            /// check if water has left screen
            if (this.x == -1280) {
                this.reset();
            }
        };
        Water.prototype.reset = function () {
            this.x = 0; // start water at x=0
            this.y = 0; // start water at y=0
        };
        // PUBLIC METHOD ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Water.prototype.update = function () {
            this.x -= this.dx; // moves water across the stage from right to left
            this.checkBounds();
        };
        return Water;
    })(createjs.Bitmap);
    objects.Water = Water;
})(objects || (objects = {}));
//# sourceMappingURL=water.js.map