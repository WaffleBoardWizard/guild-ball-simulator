     (function() {
         function BoardShape(gamePiece) {
             this.Shape_constructor();
             this.gamePiece = gamePiece;

         };

         var p = createjs.extend(BoardShape, createjs.Shape);

         window.BoardShape = createjs.promote(BoardShape, "Shape");
     }());
