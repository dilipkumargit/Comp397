
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Food Class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var Food = (function (_super) {
        __extends(Food, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Food(imageString) {
            _super.call(this, imageString);
            this.name = "food";
            this.sound = "bite";
            this.dx = 5;
            this.reset();
        }
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Food.prototype.checkBounds = function () {
            // check if food has left screen
            if (this.x < 0 - this.width)
                this.reset();
        };
        Food.prototype.reset = function () {
            this.x = 640; // start food from right of stage
            this.y = Math.floor(Math.random() * 480); // start food at random location on stage
        };
        // PUBLIC METHOD ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Food.prototype.update = function () {
            this.x += -this.dx; // moves food across the stage from right to left
            this.checkBounds();
        };
        return Food;
    })(objects.GameObject);
    objects.Food = Food;
})(objects || (objects = {}));
//# sourceMappingURL=food.js.map