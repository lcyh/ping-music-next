import request from '@/utils/request'

export function homepage() {
  return request({
    url: '/homepage/block/page',
    method: 'get',
  })
}

export function getBanner() {
  return request({
    url: '/banner',
    method: 'get',
  })
}

export function getPlayList_Qua(params:object) {
  return request({
    url: '/top/playlist/highquality',
    method: 'get',
    params,
  })
}

// 推荐新音乐
export function getNewSong(params:object) {
  return request({
    url: '/personalized/newsong',
    method: 'get',
    params,
  })
}
