class Skeleton {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/skeleton.png");

        this.facing = 0; // 0 = right, 1 = left, 2 = down, 3 = up

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
        this.animations[this.facing].drawFrame(this.game.clockTick, ctx, 100, 100, 3);

        ctx.fillStyle = "Black";
        ctx.strokeStyle = "Black";
        ctx.strokeRect(100, 100, 30 * 3, 50 * 3);

        //ctx.drawImage(this.spritesheet, 20, 205, 25, 50, 100, 100, 25 * 2, 50 * 2);

        //ctx.drawImage(this.spritesheet, 0, 0, 576 * 1.5, 256 * 1.5);
        //ctx.drawImage(this.spritesheet, 0, 0, 576, 256);
    }
}