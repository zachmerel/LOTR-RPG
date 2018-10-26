$(document).ready(function () {
    //Objects for characters set HP, attack, counter attack
    var Gandalf = {
        name: "Gandalf",
        HP: 180,
        attackDamage: 8,
        counterAttack: 25,
    }

    var Gimli = {
        name: "Gimli",
        HP: 120,
        attackDamage: 8,
        counterAttack: 10
    }

    var Gollum = {
        name: "Gollum",
        HP: 100,
        attackDamage: 8,
        counterAttack: 5
    }

    var Legolas = {
        name: "Legolas",
        HP: 150,
        attackDamage: 8,
        counterAttack: 20
    }

    var attacker = {};
    var yourCharacter = {};

    //push HP to HTML
    $('.gandalfHP').append(Gandalf.HP);
    $('.gimliHP').append(Gimli.HP);
    $('.legolasHP').append(Legolas.HP);
    $('.gollumHP').append(Gollum.HP);

    //makes each character div a variable to append to different div.
    // var gandalfCT;
    // var gimliCT = $("#gimliCT");
    // var gollumCT = $("#gollumCT");
    // var legolasCT = $("#legolasCT");

    // onclick function using jquery to choose your character and put others as enemies
    $(".character-tile").on("click", function () {
        if ($('#your-character').is(':empty')) {
            characterChoice(this);
            console.log(this);
            console.log($(this));
            // finds your character object
            if (this.id == "gandalfCT") {
                yourCharacter = Gandalf;
                console.log($(this));
            }
            else if (this.id == "gimliCT") {
                yourCharacter = Gimli;
            }
            else if (this.id == "gollumCT") {
                yourCharacter = Gollum;
            }
            else {
                yourCharacter = Legolas;
            }
            console.log(yourCharacter)
        }
        //finds defender's object
        else {
            console.log("else")
            defenderArea(this);
            if (this.id == "gandalfCT") {
                attacker = Gandalf;
                
            }
            else if(this.id == "gimliCT"){
                attacker = Gimli;
            }
            else if(this.id == "gollumCT"){
                attacker = Gollum;
            }
            else{
                attacker = Legolas;
            }
            console.log($(this));
        }

    })
    console.log(yourCharacter)
    //Attack button on.click
    $("#button").on("click", function () {
        //displays who you are attacking and the damage done to them
        $("#your-character-fight-stats").html("You attacked " + attacker.name + " for " + yourCharacter.attackDamage + " damage");
        //displays who is attacking you and the damage they do to you
        $("#defender-character-fight-stats").html(attacker.name + " attacked you back for " + attacker.counterAttack + " damage");
        //decreases your character HP
        yourCharacter.HP = yourCharacter.HP - attacker.counterAttack;
        // determines if you lose by measuring if your characer's HP is <= 0
            if(yourCharacter.HP <= 0){
                $("your-character-fight-stats").replaceWith("Game over.... you lose!!!");
                $("#defender-character-fight-stats").replaceWith("");
            }
        //decreases defenders HP
        attacker.HP = attacker.HP - yourCharacter.attackDamage;
        //determines if you have won by seeing if current and waiting enemies are defeated
            if(attacker.HP <= 0 && $('.enemiesrow').is(':empty') ){
                $("your-character-fight-stats").replaceWith("You Win!!!");
                $("#defender-character-fight-stats").replaceWith("");
            }
        //should remove the character tile from the html
            // else{
            //     $().remove CT from the defender div
            // }
        console.log($(this));
        //Replaces current html of hp of your character and 
        //need to append yourcharacter hP into the hp id of who is in the yourcharacter div
        $("hp id of who is in the yourcharacter div").replaceWith(yourCharacter.HP);
        $("hp id of who is in the defender div").replaceWith(attacker.HP)
        //doubles your character attack damage by
        yourCharacter.attackDamage = yourCharacter.attackDamage*2;
    });

    // function to choose enemies avaliable to attack
    function eata() {
        //look up jquery nest children (nth child)
        var options = $('#character-choice').removeClass('neutral-character-background').children().addClass('enemy-character-background');
        // .children().removeClass('neutral-character-background').addClass('enemy-character-background');
        $('.enemiesrow').append(options);
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


