class Skeleton {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/skeleton.png");
        this.background = ASSET_MANAGER.getAsset("./sprites/DungeonBackground.png");

        this.facing = 0; // 0 = right, 1 = left, 2 = down, 3 = up
        this.steps = 0; // number of steps skeleton has taken
        this.animations = [];
        this.loadAnimations();
        //this.animation = new Animator(this.spritesheet, 80, 205, 30, 50, 8, 0.15, 34, false, true);

        //this.loadAnimations(spritesheet);
    }

    loadAnimations() {
        for (var i = 0; i < 4; i++) { // 4 directions
            this.animations.push([]);
        }

        // walking right
        this.animations[0] = new Animator(this.spritesheet, 80, 205, 30, 50, 8, 0.15, 34, false, true);
        this.animations[1] = new Animator(this.spritesheet, 82, 78, 30, 50, 8, 0.15, 34, false, true);
        this.animations[2] = new Animator(this.spritesheet, 81, 142, 30, 50, 8, 0.15, 34, false, true);
        this.animations[3] = new Animator(this.spritesheet, 81, 14, 30, 50, 8, 0.15, 34, false, true);

    }

    update() {

    }

    draw(ctx) {
        ctx.drawImage(this.background, 0, 0, 288 * 3.6, 160 * 3.6);

        this.animations[this.facing].drawFrame(this.game.clockTick, ctx, -100  + this.steps * 2, 300, 4);
        this.steps++;
        if (this.steps === 550) {
            this.steps = 0;
        }
        //for testing boundaries of skeleton
        // ctx.fillStyle = "Black";
        // ctx.strokeStyle = "Black";
        // ctx.strokeRect(100, 100, 30 * 3, 50 * 3);

        //ctx.drawImage(this.spritesheet, 20, 205, 25, 50, 100, 100, 25 * 2, 50 * 2);

        //ctx.drawImage(this.spritesheet, 0, 0, 576 * 1.5, 256 * 1.5);
        //ctx.drawImage(this.spritesheet, 0, 0, 576, 256);
    }
}