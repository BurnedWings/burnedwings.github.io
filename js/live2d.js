/*
 * @Description: 
 * @Author: lz
 * @Date: 2022-02-09 00:54:41
 * @LastEditors: lz
 * @LastEditTime: 2022-02-09 23:11:51
 */
L2Dwidget.init({
    "model": {
        "jsonPath": "https://unpkg.com/live2d-widget-model-miku@1.0.5/assets/miku.model.json",
　　        "scale": 0.8
    },
    "display": {
        "position": "left",
        "width": 275,
        "height": 400,
　　        "hOffset": 40,
        "vOffset": 50,
    },
    "mobile": {
        "show": true,
        "scale": 0.5
    },
    "react": {
        "opacityDefault": 0.8,
        "opacityOnHover": 1
    },
    "dialog": {
        "enable": true,
        "script": {
            'tap body': '哎呀！别碰我！',
            'tap face': '人家是在认真写博客哦--前端妹子',
        }
    }
});