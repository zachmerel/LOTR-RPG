$(document).ready(function () {
    //hides restart button
    $("#restart-button").hide();

    //Objects for characters set HP, attack, counter attack
    var Gandalf = {
        name: "Gandalf",
        startingHP : 180,
        HP: 180,
        startingattackDamage: 8,
        attackDamage: 0,
        counterAttack: 25,

    }

    var Gimli = {
        name: "Gimli",
        startingHP : 120,
        HP: 120,
        startingattackDamage: 8,
        attackDamage: 0,
        counterAttack: 10
    }

    var Gollum = {
        name: "Gollum",
        startingHP : 100,
        HP: 100,
        startingattackDamage: 8,
        attackDamage: 0,
        counterAttack: 5
    }

    var Legolas = {
        name: "Legolas",
        startingHP : 100,
        HP: 150,
        startingattackDamage: 8,
        attackDamage: 0,
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
    var gandalfCT = $("#gandalfCT");

    var gimliCT = $("#gimliCT");
    var gollumCT = $("#gollumCT");
    var legolasCT = $("#legolasCT");

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
            $("#your-character-fight-stats").html(" ");
        }
        //finds defender's object
        else {
            console.log("else")
            defenderArea(this);
            if (this.id == "gandalfCT") {
                attacker = Gandalf;

            }
            else if (this.id == "gimliCT") {
                attacker = Gimli;
            }
            else if (this.id == "gollumCT") {
                attacker = Gollum;
            }
            else {
                attacker = Legolas;
            }
            console.log($(this));
            $("#your-character-fight-stats").html(" ");
        }

    })
    console.log(yourCharacter)
    //Attack button on.click
    $("#button").on("click", function () {
        yourCharacter.attackDamage = yourCharacter.attackDamage + yourCharacter.startingattackDamage;
        //displays message you haven't picked a character to play as
        if ($('#your-character').is(':empty')) {
            $("#your-character-fight-stats").html("You have not selected a character to play as");
        }
        //displays message sayiing you haven't picked character to battle
        else if ($("#defender").is(':empty')) {
            $("#your-character-fight-stats").html("You have not selected a character to battle");
        }
        //displays who you are attacking and the damage done to them
// `You attacked ${attacker.name} for ${yourCharacter.attack}.`

        else {
            $("#your-character-fight-stats").html("You attacked " + attacker.name + " for " + yourCharacter.attackDamage + " damage");
            //displays who is attacking you and the damage they do to you
            $("#defender-character-fight-stats").html(attacker.name + " attacked you back for " + attacker.counterAttack + " damage");
            //decreases your character HP
        }
        yourCharacter.HP = yourCharacter.HP - attacker.counterAttack;
        console.log(yourCharacter.HP)
        console.log(typeof(yourCharacter.HP))
        // determines if you lose by measuring if your characer's HP is <= 0
        if (yourCharacter.HP <= 0) {
            $("#defender-character-fight-stats").html("Game over.... you lose!!!");
            console.log("you lose")
            $("#your-character-fight-stats").html(" ");
            $("#restart-button").show();

        }
        //decreases defenders HP
        attacker.HP = attacker.HP - yourCharacter.attackDamage;
        console.log(attacker.HP);
        //determines if you have won by seeing if current and waiting enemies are defeated
        if (attacker.HP <= 0 && $('.enemiesrow').is(':empty')) {
            $("#your-character-fight-stats").html("You Win!!!");
            $("#defender-character-fight-stats").html(" ");
            $("#restart-button").show();
        }
        else if (attacker.HP <= 0){
            $("#defender").empty();
            $("#your-character-fight-stats").html(" ");
            $("#defender-character-fight-stats").html(" ");
        }
        //should remove the character tile from the html
        // else{
        //     $().remove CT from the defender div
        // }
        console.log($(this));
        //Replaces current html of hp of your character and 
        //need to append yourcharacter hP into the hp id of who is in the yourcharacter div
        $(`.${yourCharacter.name}`).html(yourCharacter.HP);

        $(`.${attacker.name}`).html(attacker.HP)
        //doubles your character attack damage by
        // yourCharacter.attackDamage = yourCharacter.attackDamage + startingattackDamage;
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
    //restart button
    $("#restart-button").click(function(){
        // attacker.HP = yourCharacter.startingHP;
        // yourCharacter.HP = yourCharacter.startingHP;
        // yourCharacter.attackDamage = yourCharacter.startingattackDamage;
        // $(".gandalfHP").html(Gandalf.startingHP)
        // $(".gimliHP").html(Gimli.startingHP)
        // $(".gollumHP").html(Gollum.startingHP)
        // $(".legolasHP").html(Legolas.startingHP)
        // // $('.gandalfHP').html(Gandalf.startingHP);
        // // $('.gimliHP').text(Gimli.startingHP);
        // // $('.legolasHP').html(Legolas.startingHP);
        // // $('.gollumHP').html(Gollum.startingHP);
        // console.log(Gimli.startingHP);
        // // var gandalfCT = $("#gandalfCT")
        // // var gimliCT = $("#gimliCT")
        // // var gollumCT = $("#gollumfCT")
        // // var legolasCT = $("#legolasfCT")
        // $("#character-choice").append(gandalfCT,gimliCT,gollumCT,legolasCT);
        // $("#restart-button").hide();
        // $("#your-character-fight-stats").html(" ");
        // $("#defender-character-fight-stats").html(" ");
        location.reload();
        console.log(yourCharacter.HP)


    });

})


