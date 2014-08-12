/**
 * 掲示板のコンストラクタ
 * @param {Object} args
 */

var board = function (args) {
    var options = {
        name: "名無し",
        value: ""
    }

    options = $.extend( options, args );
    this.name = options.name;
    this.value = options.value;

}

var boardList = [{
        name: "はぎわら",
        value: "テスト"
    },
    {
        name: "かたやま",
        value: "ばななばななばなな"
    },
    {
        value: "ばななだよばななだよばなな"
    }
];

var boards = [];
for(var i =0; i< boardList.length;i++){
    boards.push(new board(boardList[i]));
}


/*

ここから下がtemplate

 */

var tmp = _.template($("#boardTemp").html());
for(var i =0; i< boardList.length;i++){
    $(".content").append(tmp(boards[i]));
}
