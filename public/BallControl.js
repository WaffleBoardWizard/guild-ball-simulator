(function() {
    function BallControl() {
        this.Container_constructor();
        let ball = new BoardShape();

        var m = new createjs.Matrix2D();
        m.translate(-inch / 2, -inch / 2);
        m.scale((inch) / assets.ball.height, (inch) / assets.ball.width);

        ball.graphics.setStrokeStyle(2).beginStroke("black").beginBitmapFill(assets.ball, "no-repeat", m).drawCircle(0, 0, (inch / 2) - 1);

        this.addChild(ball);

        var scatter = new BoardShape();
        scatter.graphics.setStrokeStyle(2).beginBitmapFill(assets.kickscatter30, "no-repeat").drawRect(0, 0, assets.kickscatter30.width, assets.kickscatter30.height);
        scatter.rotation = 180;
        scatter.x = 250;
        scatter.y = 165;
        this.addChild(scatter);

    };

    var p = createjs.extend(BallControl, createjs.Container);

    window.BallControl = createjs.promote(BallControl, "Container");
}());
