var controller = {
    action: function () {
        var x, y;
        $(".main>tbody>tr>td").click(function () {
            x = this.cellIndex;
        });
        $(".main>tbody>tr").click(function () {
            y = this.rowIndex;
            check_status();
        });
        function check_status() {
            if(x != undefined && y != undefined && x !=0 && y !=0){
                // console.log(x+ " - " + y);
                model.audio();
                var res = model.coordinateFire(x, y);
                var sel = model.getCoordinateSelect(res);
                view.show_figure(sel);
                var fire = model.add_fire();
                view.resultFire(fire);
            }
        }
    }
};