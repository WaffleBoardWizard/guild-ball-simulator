import GuildBallGame from "./GuildBallGame";

var game = new GuildBallGame("demoCanvas");

$("#replay").click(game.replay.bind(game));
