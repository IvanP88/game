var view = {
    resultFire: function (n) {
        $("#fire").html(n);
        $("#straight").html(model.straight);
        $("#score").html(model.score);
    },
    show_figure : function (res) {
        $("." + res[0].x + "." + res[0].y).addClass(res[0].image);

    }
};