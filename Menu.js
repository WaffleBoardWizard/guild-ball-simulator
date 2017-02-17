function Menu(displayObject, orientation, btns) {
    let menuButtons = [];

    function hide(clickedIndex, quick) {
        menuButtons.forEach(function(btn, index) {
          if(!quick){
            setTimeout(function() {
                createjs.Tween.get(btn, {
                    loop: false
                }).to({
                    x: displayObject.x,
                    y: displayObject.y
                }, 1000, createjs.Ease.getPowInOut(4));
            }, clickedIndex == index ? 300 : 0);
          }
            setTimeout(function() {
                stage.removeChild(btn);
            }, quick ? 0 : 1000);
        });
    };

    function show() {
        for (let i = 0; i < btns.length; i++) {
            let btn = btns[i];
            let menuButton = new FAButton(btn.Icon, "white", "blue");;

            menuButton.x = displayObject.x;
            menuButton.y = displayObject.y;

            stage.addChild(menuButton);

            menuButton.on("mouseover", function() {
                //  menuButton.btn.graphics.clear().beginFill("blue");
                createjs.Tween.get(menuButton, {
                    scaleX: 1,
                    scaleY: 1
                }).to({
                    scaleX: 1.25,
                    scaleY: 1.25
                }, 100, createjs.Ease.getPowInOut(4));

            });

            menuButton.on("mouseout", function() {
                //menuButton.btn.graphics.clear().beginFill("red");
                createjs.Tween.get(menuButton, {
                    scaleX: 1.25,
                    scaleY: 1.25
                }).to({
                    scaleX: 1,
                    scaleY: 1
                }, 100, createjs.Ease.getPowInOut(4));
            });

            stage.addChild(menuButton);

            let toX = 0;
            let toY = 0;

            var displayObjectBoundsWidth = displayObject.getBounds().width;

            console.log(displayObjectBoundsWidth);
            switch (orientation) {
                case "circle":
                    toX = displayObject.x - ((displayObjectBoundsWidth * 2) * Math.cos(i * (Math.PI / 4)));
                    toY = displayObject.y - ((displayObjectBoundsWidth * 2) * Math.sin(i * (Math.PI / 4)));
                    break;
                case "up":
                    toX = displayObject.x;
                    toY = displayObject.y - ((displayObjectBoundsWidth * 2) * (i + 1));
                    break;
                case "down":
                    toX = displayObject.x;
                    toY = displayObject.y + ((displayObjectBoundsWidth * 2) * (i + 1));
                    break;
                case "left":
                    toX = displayObject.x - ((displayObjectBoundsWidth * 2) * (i + 1));
                    toY = displayObject.y;
                    break;
                case "right":
                    toX = displayObject.x + ((displayObjectBoundsWidth * 2) * (i + 1));
                    toY = displayObject.y;
                    break;
                default:

            }

            stage.setChildIndex(menuButton, 0);

            setTimeout(function() {
                createjs.Tween.get(menuButton, {
                    loop: false
                }).to({
                    x: toX,
                    y: toY
                }, 1000, createjs.Ease.getPowInOut(4));
            }, 50 * i);


            menuButtons.push(menuButton);

            if (btn.click) {
                menuButton.on("click", function() {
                    if (btn.click(menuButton, displayObject)) {
                        hide(i);
                    }
                });
            }
        }
    }

    return{
      show: show,
      hide: hide,
      menuButtons: menuButtons
    }
}
