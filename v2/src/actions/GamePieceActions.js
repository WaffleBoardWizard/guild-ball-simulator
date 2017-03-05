export default{
  movePiece : function(piece, toX, toY){
      let prevPieceX = piece.x;
      let prevPieceY = piece.y;
      return {
        execute : function(){
          createjs.Tween.get(piece, {
            loop: false
          }).to({
            x: toX,
            y: toY
          }, 1000, createjs.Ease.getPowInOut(4));
        },
        undo : function(){
          createjs.Tween.get(piece, {
            loop: false
          }).to({
            x: prevPieceX,
            y: prevPieceY
          }, 1000, createjs.Ease.getPowInOut(4));
        }
      }
  },
  addPiece : function(piece, parent, x, y){
    return {
      execute : function(){
        piece.x = x;
        piece.y = y;
        parent.addChild(piece);
      },
      undo : function(){
        parent.removeChild(piece);
      }
    }
  }
}
