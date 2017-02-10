
var MenuSceneLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 200;

        this.addChild(helloLabel, 5);

        this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.setPosition(size.width / 2,size.height / 2);
        this.addChild(this.sprite);

        return true;
    }
});

var MenuScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MenuSceneLayer();
        this.addChild(layer);
    }
});

