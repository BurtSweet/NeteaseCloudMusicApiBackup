// 首页-发现 dragon ball
// 这个接口为移动端接口，首页-发现页（每日推荐、歌单、排行榜 那些入口）
// 数据结构可以参考 https://github.com/hcanyz/flutter-netease-music-api/blob/master/lib/src/api/uncategorized/bean.dart#L290 HomeDragonBallWrap
// !需要登录或者游客登录，非登录返回 []
module.exports = (query, request) => {
  const data = {}
  query.cookie.os = 'ios'
  query.cookie.appver = '9.0.65'
  return request(
    'POST',
    `https://music.163.com/eapi/homepage/dragon/ball/static`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      ua: query.ua || '',
      proxy: query.proxy,
      url: '/api/homepage/dragon/ball/static',
      realIP: query.realIP,
    },
  )
}
