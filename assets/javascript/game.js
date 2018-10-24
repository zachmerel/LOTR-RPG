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
    var gandalfCT = $("#gandalfCT");
    var gimliCT = $("#gimliCT");
    var gollumCT = $("#gollumCT");
    var legolasCT = $("#legolasCT");

    //on-click function to choose Gandalf as your character
    $("#gandalfpic").on("click", function () {
        characterChoice(gandalfCT)
        // $('#your-character').append(gandalfCT);
        eata(gimliCT, gollumCT, legolasCT);
        // $(".eataP1").append(gimliCT);
        // $(".eataP2").append(gollumCT);
        // $(".eataP3").append(legolasCT);
        $("#gimlipic").on("click", function () {
            defenderArea(gimliCT);
            $("#gimliBackground").addClass(function (index, currentClass) {
                var addedBackgroundClass;

                if (currentClass === "neutral-character-background") {
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

    //on-click function to choose Gimli as your character
    $("#gimlipic").on("click", function () {
        characterChoice(gimliCT)
        eata(gandalfCT, gollumCT, legolasCT);

        // $(".eataP1").append(gimliCT);
        // $(".eataP2").append(gollumCT);
        // $(".eataP3").append(legolasCT);

    });
    //on-click function to choose Gollum as your character
    $("#gollumpic").on("click", function () {
        characterChoice(gollumCT)
        eata(gandalfCT, gimliCT, legolasCT);
        // $(".eataP1").append(gimliCT);
        // $(".eataP2").append(gollumCT);
        // $(".eataP3").append(legolasCT);
    });
    //on-click function to choose Legolas as your character
    $("#legolaspic").on("click", function () {
        characterChoice(legolasCT)
        eata(gandalfCT, gimliCT, gollumCT);
        // $(".eataP1").append(gimliCT);
        // $(".eataP2").append(gollumCT);
        // $(".eataP3").append(legolasCT);
    });

    //Attack button on.click
    $("#button").on("click", function () {

    });





    // function to choose enemies avaliable to attack
    function eata(a, b, c) {
        $('#enemies-avaliable-to-attack').append(a, b, c);
    }

    //function to choose character you play as
    function characterChoice(CC) {
        $('#your-character').append(CC);
    }

    // function to choose character you fight
    function defenderArea(DA) {
        $('#defender').append(DA);
    }

})


