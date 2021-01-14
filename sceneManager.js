class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;

        this.loadLevelOne();
    }

    loadLevelOne() {
        let background = new Skeleton(this.game, 100, 100);
        this.game.addEntity(background);
    }

}