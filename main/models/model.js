var model = {
    sizeSpace : 7,
    sizeX : 7,
    sizeY : 7,
    numSpaceships : 12,
    spaceShips: [
        {position: {x : 0, y : 0}, damage:  0, plan: ""},
        {position: {x : 0, y : 0}, damage:  0, plan: ""},
        {position: {x : 0, y : 0}, damage:  0, plan: ""},
        {position: {x : 0, y : 0}, damage:  0, plan: ""},
        {position: {x : 0, y : 0}, damage:  0, plan: ""},
        {position: {x : 0, y : 0}, damage:  0, plan: ""},
        {position: {x : 0, y : 0}, damage:  0, plan: ""},
        {position: {x : 0, y : 0}, damage:  0, plan: ""},
        {position: {x : 0, y : 0}, damage:  0, plan: ""},
        {position: {x : 0, y : 0}, damage:  0, plan: ""},
        {position: {x : 0, y : 0}, damage:  0, plan: ""},
        {position: {x : 0, y : 0}, damage:  0, plan: ""}

    ],
    straight : 0,
    score : 0,

    init: function () {
        localStorage.setItem("fire", 0);
        localStorage.setItem("straight", 0);
        localStorage.setItem("score", 0);
    },
    add_fire: function () {
        var fire = localStorage.getItem("fire");
        fire ++;
        localStorage.setItem("fire", fire);
        return fire;
    },
    coordinateFire: function (x, y) { //res fire plan or asteroid
        for (var i in model.spaceShips) {
            if(model.spaceShips[i].position.x === x && model.spaceShips[i].position.y === y) {
                this.straight++;
                this.score += model.spaceShips[i].damage;
                return [{
                    "x" : x,
                    "y" : y,
                    "image" : model.spaceShips[i].plan
                }];
            }
        }
        return [{"x" : x, "y" : y, "image" : "asteroid"}]
    },
    audio: function () {
        var fire = $("audio")[0];
        fire.pause();
        fire.currentTime = 0;
        fire.play();
    },

    generatePosition : function () {
        for(var i in model.spaceShips) {
            var coordinate = model.genCoordinate();
            model.spaceShips[i].position.x = coordinate[0].x;
            model.spaceShips[i].position.y = coordinate[0].y;
            var plan = Math.floor(Math.random() * 3) + 1;
            switch (plan) {
                case 1 : {
                    model.spaceShips[i].plan = 1;
                    model.spaceShips[i].damage = 1;
                } break;
                case 2 : {
                    model.spaceShips[i].plan = 2;
                    model.spaceShips[i].damage = 2;
                } break;
                case 3 : {
                    model.spaceShips[i].plan = 3;
                    model.spaceShips[i].damage = 3;
                } break;
            }
        }
        console.log(model.spaceShips);
    },
    genCoordinate : function () {
        var x = Math.floor(Math.random() * 7) + 1;
        var y = Math.floor(Math.random() * 7) + 1;
        for (var i in model.spaceShips) {
            if( model.spaceShips[i].position.x === x && model.spaceShips[i].position.y === y) {
                return this.genCoordinate;
            }
        }
        return [{"x" : x, "y" : y}];
    },
    getCoordinateSelect : function (coordinate) {
        var x, y, image;
        switch (coordinate[0].x) {
            case 1 : {
                x = "c_1";
            } break;
            case 2 : {
                x = "c_2";
            } break;
            case 3 : {
                x = "c_3";
            } break;
            case 4 : {
                x = "c_4";
            } break;
            case 5 : {
                x = "c_5";
            } break;
            case 6 : {
                x = "c_6";
            } break;
            case 7 : {
                x = "c_7";
            } break;
        }
        switch (coordinate[0].y) {
            case 1 : {
                y = "A";
            } break;
            case 2 : {
                y = "B";
            } break;
            case 3 : {
                y = "C";
            } break;
            case 4 : {
                y = "D";
            } break;
            case 5 : {
                y = "E";
            } break;
            case 6 : {
                y = "F";
            } break;
            case 7 : {
                y = "G";
            } break;
        }
        switch (coordinate[0].image) {
            case 1 : {
                image = "plane1";
            } break;
            case 2 : {
                image = "plane2";
            } break;
            case 3 : {
                image = "plane3";
            } break;
            default : {
                image = "asteroid";
                console.log("plane :" + coordinate[0].image);
            }
        }
        return [{"x" : x, "y" : y, "image" : image}];
    }
};