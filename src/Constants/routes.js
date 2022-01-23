export const routeNames = {
  splash: "/",
  home: "home",
  player: "player/:trackId",
  buildPlayerRoute: function (trackId) {
    return `/${this.player.replace(":trackId", trackId)}`;
  },
};
