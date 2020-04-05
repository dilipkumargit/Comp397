
module objects {
    // Water Class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class Water extends createjs.Bitmap {
        // PUBLIC PROPERTIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        width: number;
        height: number;
        dx: number = 5;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.reset();
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        private checkBounds(): void {

            /// check if water has left screen
            if (this.x == -1280 ) {
                this.reset();
            }
        }

        private reset(): void {
            this.x = 0;   // start water at x=0
            this.y = 0;   // start water at y=0
        }

        // PUBLIC METHOD ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        public update(): void {
            this.x -= this.dx;  // moves water across the stage from right to left
            this.checkBounds();
        }
    }
}  