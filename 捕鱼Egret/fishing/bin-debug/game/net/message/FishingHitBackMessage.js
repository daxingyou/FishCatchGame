//Auto Generate File, Do NOT Modify!!!!!!!!!!!!!!!
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FishingHitBackMessage = (function (_super) {
    __extends(FishingHitBackMessage, _super);
    function FishingHitBackMessage() {
        var _this = _super.call(this) || this;
        _this._data = null;
        _this._clazz = null;
        var builder = dcodeIO.ProtoBuf.loadProto(game.net.ProtoFileEnum.fishing);
        _this._clazz = builder.build("FishingHitBack");
        return _this;
    }
    FishingHitBackMessage.prototype.setUserId = function (userId) {
        this._data.set("userId", userId);
    };
    FishingHitBackMessage.prototype.getUserId = function () {
        return this._data.get("userId");
    };
    FishingHitBackMessage.prototype.setFishId = function (fishId) {
        this._data.set("fishId", fishId);
    };
    FishingHitBackMessage.prototype.getFishId = function () {
        return this._data.get("fishId");
    };
    FishingHitBackMessage.prototype.setItems = function (items) {
        this._data.set("items", items);
    };
    FishingHitBackMessage.prototype.getItems = function () {
        return this._data.get("items");
    };
    FishingHitBackMessage.prototype.getPID = function () {
        return 3004;
    };
    FishingHitBackMessage.prototype.initData = function () {
        this._data = new this._clazz();
    };
    FishingHitBackMessage.prototype.setData = function (buff) {
        this._data = this._clazz.decode(buff);
    };
    FishingHitBackMessage.prototype.toByteArray = function () {
        var arraybuffer = this._data.toArrayBuffer();
        return new egret.ByteArray(arraybuffer);
    };
    return FishingHitBackMessage;
}(MessageBase));
__reflect(FishingHitBackMessage.prototype, "FishingHitBackMessage");
//# sourceMappingURL=FishingHitBackMessage.js.map