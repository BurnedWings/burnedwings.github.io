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
        url: 'https://sharefs.ali.kugou.com/202202250934/b98c2f130689311700c66bdecaddf08b/KGTX/CLTX001/3005d99ba41630289afaedda5a9c63fd.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20150714/20150714150518674271.jpg',
        lrc: './lrc/lrc1.lrc',
    },
    {
        name: '해볼래',
        artist: 'SISTAR',
        url: 'https://sharefs.ali.kugou.com/202202250937/f1045e519a5abf9a2f4ef1ce17801a77/G180/M03/0B/1B/9A0DAF4V1gSAeeLFADB92WGoPvQ842.mp3',
        cover: 'https://imgessl.kugou.com/uploadpic/softhead/400/20210701/20210701094823218.jpg',
        lrc:'./lrc/lrc2.lrc',     
    },
    {
        name:'让一切随风',
        artist:'钟镇涛',
        url:'https://sharefs.ali.kugou.com/202202250936/350d9f7c88f3bfe4dccf0c025d923ce6/KGTX/CLTX001/e640e8ea6390800fc9a6d5a12d275473.mp3',
        cover:'http://imge.kugou.com/stdmusic/150/20150720/20150720212819383002.jpg',
        lrc:'./lrc/lrc3.lrc',
    },
    {
        name:'リバイブ',
        artist:'UNIONE',
        url:'https://sharefs.ali.kugou.com/202202232236/893a98be092edd29438c6c31c8e65e4f/KGTX/CLTX001/c240ce7abf53f27f0252083033c4908d.mp3',
        cover:'http://imge.kugou.com/stdmusic/150/20200909/20200909133256211470.jpg',
        lrc:'./lrc/lrc4.lrc',
    }
      ]
});
