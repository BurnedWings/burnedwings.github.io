/*
 * @Description: 
 * @Author: lz
 * @Date: 2022-02-23 17:03:02
 * @LastEditors: lz
 * @LastEditTime: 2022-02-23 23:55:02
 */
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    // mini: false,
    autoplay: false,
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    // volume-->初始音量
    volume: 0.3,
    mutex: true,
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 3,
    fixed: true,
    audio: [{
        name: '后来',
        artist: '刘若英',
        url: './music/1.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20150714/20150714150518674271.jpg',
        lrc: './lrc/lrc1.lrc',
    },
    {
        name: '해볼래',
        artist: 'SISTAR',
        url: './music/2.mp3',
        cover: 'https://imgessl.kugou.com/uploadpic/softhead/400/20210701/20210701094823218.jpg',
        lrc:'./lrc/lrc2.lrc',     
    },
    {
        name:'让一切随风',
        artist:'钟镇涛',
        url:'./music/3.mp3',
        cover:'http://imge.kugou.com/stdmusic/150/20150720/20150720212819383002.jpg',
        lrc:'./lrc/lrc3.lrc',
    },
    {
        name:'リバイブ',
        artist:'UNIONE',
        url:'./music/4.mp3',
        cover:'http://imge.kugou.com/stdmusic/150/20200909/20200909133256211470.jpg',
        lrc:'./lrc/lrc4.lrc',
    }
      ]
});
