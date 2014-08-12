//$(function() {
	/*Array.prototype.remove = function(element) {
	  for (var i = 0; i < this.length; i++)
	    if (this[i] == element) this.splice(i,1);
	};

	function preload(images, progress) {
		var total = images.length;
	    $(images).each(function(){
			var src = this;
	        $('<img/>')
				.attr('src', src)
				.load(function() {
					images.remove(src);
					progress(total, total - images.length);
				});
	    });
	}

	/*preload([
		'img/DSC00001.JPG',
		'img/DSC00018.JPG',
		'img/DSC00222.JPG',
		'img/DSC00845.JPG',
		'img/DSC00886.JPG',
		'img/DSC00939.JPG',
		'img/DSC02908.JPG'
	], function(total, loaded){
		if (loaded >= total) {	// すべて読み込んだ
			$('#loader').fadeOut('slow', function() {
				$('<img />')
					.attr('src', '/demo/20111116/img/DSC00018.JPG')
					.appendTo('#content');
				$('#content').fadeIn('slow');

			});
		} else {	// 読み込み途中
			var percent = Math.ceil(100 * loaded / total);
			$('#load-text').html(percent + '%');
			$('#bar span').css('width', percent + '%');
		}
	});*/

var monster = function (args) {
    var options = {
        name: "www",
        lv: 0,
        hp: 1,
        maxhp: 1,
        xp: 0,
        atc: 0,
        def: 0,
        sex: 0
    }

    options = $.extend( options, args );
    this.name = options.name;
    this.lv = options.lv;
    this.hp = options.hp;
    this.maxhp = options.maxhp;
    this.xp = options.xp;
    this.atc = options.atc;
    this.def = options.def;
    this.sex = options.sex;

    /**
     *
     * ダメージ計算
     * @param {int} atc
     */
    this.damage = function (atc){
        var dmg = 1;
        if( (atc - this.def / 2 ) > 0){
            dmg = atc - this.def / 2;
        }
        this.hp = this.hp - dmg;
        console.log(this.name + "は、"+ dmg +"のダメージを食らいました。");
        this.render();
        this.checkHP();
    }
    /**
     * ヒットポイント回復
     * @param {int} hp
     */
    this.heal = function (hp){
        this.hp += hp;
        console.log(this.name + "は、"+ hp +"回復しました。");
        this.render();
    }
    /**
     * HPチェック
     */
    this.checkHP = function (){
        if(this.hp <= 0 ){
            alert(this.name + "は瀕死です。");
        }
    }

    /**
     * パーセントバー表示
     */
    this.render = function (){
        var percent = Math.ceil(100* (this.hp / this.maxhp));
        $('#load-text').html(percent + '%');
        $('#bar span').css('width', percent + '%');
        $("progress").val(percent);
    }
}

var pokelist = [{
    name: "ゼニガメ",
    lv: 25,
    hp: 82,
    maxhp: 82,
    xp: 20,
    atc: 30,
    def: 20
}];

var pokemon = [];
pokemon[0] = new monster(pokelist[0]);


var tmp = _.template($("#pokeTemp").html());
$(".content").html(tmp(pokemon[0]));
pokemon[0].render();

//var total = 233;
//var loaded = 200;
//var percent = Math.ceil(100 * loaded / total);
//$('#load-text').html(percent + '%');
//$('#bar span').css('width', percent + '%');
//$("progress").val(percent);

//});