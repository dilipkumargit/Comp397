﻿
module states { 
    // GamePlay Class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class GamePlay {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            this.main();
        }

        
        // PUBLIC METHODs ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        public update(): void { 
            // update game variables
            water.update();
            fish.update();
            food.update();

            for (var monster = 0; monster < 3; monster++) {
                monsters[monster].update();
                collision.check(monsters[monster]); // check if collision occurs between the fish and monster
            }
            collision.check(food);  // check if collision occurs between the fish and food

            scoreboard.update();    // update score and lives
            stage.update();
        }

        public main(): void { 
            // add water object to the stage
            water = new objects.Water(assets.getResult("water"));
            stage.addChild(water);

            // add food object to the stage
            food = new objects.Food(assets.getResult("food"));
            stage.addChild(food);

            // add fish object to the stage
            fish = new objects.Fish(assets.getResult("fish"));
            stage.addChild(fish);

            // add monster object to the stage
            for (var monster = 0; monster < 3; monster++) {
                monsters[monster] = new objects.Monster(assets.getResult("monster"));
                stage.addChild(monsters[monster]);
            }

            // add scoreboard
            scoreboard = new objects.ScoreBoard();

            // add collision manager
            collision = new managers.Collision;
        }
    }
}
 