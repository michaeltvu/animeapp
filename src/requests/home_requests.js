
const date = new Date()
var year = date.getFullYear()
const month = date.getMonth() + 1
var season = "";
if (month >= 1 && month <= 3) {
    season = "winter";
    year += 1;
}
else if (month >=4 && month <= 6) {
    season = "spring";
}
else if (month >= 7 && month <= 9) {
    season = "summer";
}
else {
    season = "fall";
}
const requests = {
    fetchTopAiring: '/top/anime/1/airing',
    fetchSeasonalAnime: '/season/' + year + '/' + season,
    fetchCurrentlyWatching: '/user/orphanmichael/animelist/watching',
    fetchAction: '/genre/anime/1/1',
    fetchComedy: '/genre/anime/4/1',
    fetchAnime: '/anime'
}

export default requests