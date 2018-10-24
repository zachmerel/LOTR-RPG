$(document).ready(function () {
    //Objects for characters set HP, attack, counter attack
    var Gandalf = {
        HP: 180,
        attackDamage: 8,
        counterAttack: 25,
    }

    var Gimli = {
        HP: 120,
        attackDamage: 8,
        counterAttack: 10
    }

    var Gollum = {
        HP: 100,
        attackDamage: 8,
        counterAttack: 5
    }

    var Legolas = {
        HP: 150,
        attackDamage: 8,
        counterAttack: 20
    }


    //push HP to HTML
    $('.gandalfHP').append(Gandalf.HP);
    $('.gimliHP').append(Gimli.HP);
    $('.legolasHP').append(Legolas.HP);
    $('.gollumHP').append(Gollum.HP);

    //makes each character div a variable to append to different div.
    var gandalfCT;
    var gimliCT = $("#gimliCT");
    var gollumCT = $("#gollumCT");
    var legolasCT = $("#legolasCT");
    var yourCharacter ;
// onclick function using jquery this to simplify code
    $(".character-tile").on("click", function(){console.log($('#your-character'))
        // characterChoice(this)
        if($('#your-character').is(':empty')){console.log("if")
            characterChoice(this);
        }
        else {console.log("else")
            defenderArea(this);
        }

    })
    //on-click function to choose Gandalf as your character
    $("#gandalfpic").on("click", function () {
        // characterChoice(gandalfCT)
        // $('#your-character').append(gandalfCT);
        // eata(gimliCT, gollumCT, legolasCT);

        //------CHANGES ENEMY BACKGROUND TO RED--------

        // $("#gimliBackground").addClass(function (index, currentClass) {
        //     var addedBackgroundClass;

        //     if (currentClass === "neutral-character-background") {
        //         addedBackgroundClass = "enemy-character-background";
        //     }
        //     return addedBackgroundClass;
        // });
        // $("#gollumBackground").addClass(function (index, currentClass) {
        //     var addedBackgroundClass;

        //     if (currentClass === "neutral-character-background") {
        //         addedBackgroundClass = "enemy-character-background";
        //     }
        //     return addedBackgroundClass;
        // });
        // $("#legolasBackground").addClass(function (index, currentClass) {
        //     var addedBackgroundClass;

        //     if (currentClass === "neutral-character-background") {
        //         addedBackgroundClass = "enemy-character-background";
        //     }
        //     return addedBackgroundClass;
        // });
        $("#gimlipic").on("click", function () {
            defenderArea(gimliCT);
            $("#gimliBackground").addClass(function (index, currentClass) {
                var addedBackgroundClass;

                if (currentClass === "enemy-character-background") {
                    addedBackgroundClass = "defender-character-background";
                }
                return addedBackgroundClass;
            });
            $("#gimliHP").addClass(function (index, currentClass) {
                var addedHPClass;

                if (currentClass === "gimliHP") {
                    addedHPClass = "gimliHPWhite";
                }
                return addedHPClass;
            });
            $("#gimliName").addClass(function (index, currentClass) {
                var addedNameColorClass;

                if (currentClass === "characterText") {
                    addedNameColorClass = "characterTextWhite";
                }
                return addedNameColorClass;
            });
        });
        $("#gollumpic").on("click", function () {
            defenderArea(gollumCT);
            $("#gollumBackground").addClass(function (index, currentClass) {
                var addedBackgroundClass;

                if (currentClass === "neutral-character-background") {
                    addedBackgroundClass = "defender-character-background";
                }
                return addedBackgroundClass;
            });
            $("#gollumHP").addClass(function (index, currentClass) {
                var addedHPClass;

                if (currentClass === "gollumHP") {
                    addedHPClass = "gollumHPWhite";
                }
                return addedHPClass;
            });
            $("#gollumName").addClass(function (index, currentClass) {
                var addedNameColorClass;

                if (currentClass === "characterText") {
                    addedNameColorClass = "characterTextWhite";
                }
                return addedNameColorClass;
            });
        });
        $("#legolaspic").on("click", function () {
            defenderArea(legolasCT);
            $("#legolasBackground").addClass(function (index, currentClass) {
                var addedBackgroundClass;

                if (currentClass === "neutral-character-background") {
                    addedBackgroundClass = "defender-character-background";
                }
                return addedBackgroundClass;
            });
            $("#legolasHP").addClass(function (index, currentClass) {
                var addedHPClass;

                if (currentClass === "legolasHP") {
                    addedHPClass = "legolasHPWhite";
                }
                return addedHPClass;
            });
            $("#legolasName").addClass(function (index, currentClass) {
                var addedNameColorClass;

                if (currentClass === "characterText") {
                    addedNameColorClass = "characterTextWhite";
                }
                return addedNameColorClass;
            });
        });

    });

 

    //Attack button on.click
    $("#button").on("click", function () {

    });





    // function to choose enemies avaliable to attack
    function eata() {
        var options = $('#character-choice').children()

        // $('#enemies-avaliable-to-attack .enemiesrow').append(a, b, c);
        $( '.enemiesrow').append(options);
    }

    //function to choose character you play as
    function characterChoice(CC) {
        $('#your-character').append(CC);
        eata();
    }

    // function to choose character you fight
    function defenderArea(DA) {
        $('#defender').append(DA);
    }

})


