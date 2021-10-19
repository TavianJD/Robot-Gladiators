// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

var playerName = window.prompt("What is your robot's name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;  
var enemyAttack = 12;

var fight = function (enemyName) {
    // alert players that they are starting the round
    while(playerHealth> 0 && enemyHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose. ");
    if (promptFight === "fight" || promptFight === "FIGHT" ); 
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
          
            // if yes (true), leave fight
            if (confirmSkip) {
              window.alert(playerName + " has decided to skip this fight. Goodbye!");
              // subtract money from playerMoney for skipping
              playerMoney = Math.max(0, playerMoney - 10);
              console.log("playerMoney", playerMoney)
              break;
            }
          }

        //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
        var damage = randomNumber(playerAttack - 3, playerAttack);
        
        enemyHealth = Math.max(0, enemyHealth - damage);
        // Log a resulting message to the console so we know that it worked
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "
            );
            // check enemy's health
            if (enemyHealth <=0) {
                window.alert(enemyName + " has died!");

                playerMoney = playerMoney + 20;

                break;
            }
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left!");
            }
            // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
            var damage = randomNumber(enemyAttack - 3, enemyAttack)
            
            playerHealth = Math.max(0, playerHealth - damage);
            // Log a resulting message to the console se we know it worked
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. "
                );
                // checks players health
                if (playerName <=0) {
                    window.alert(playerName + " has died!");
                    break;
                }

                else {
                    window.alert(playerName + " still has " + playerHealth + " health left!");
                }
           
            }
    
     };
        
     
     var startGame = function() { 
         playerHealth = 100;
         playerAttack = 10;
         playerMoney = 10;

            for(var i = 0; i < enemyNames.length; i++) {
             // if player is still alive, keep fighting
             if (playerHealth > 0) {
                 // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
                 window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
                 // pick new enemy to fight based on the index of the enemyNames array
                 var pickedEnemyName = enemyNames[i];
                 // reset enemyHealth before starting new fight
                 enemyHealth = randomNumber(40, 60);
                 // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
                 fight(pickedEnemyName);

                 if(playerHealth > 0 && i < enemyNames.length - 1) {
                     var storeConfirm = window.confirm("The fight is over, visit the shop before the next round?");

                     if(storeConfirm) {
                         shop();
                        }
                    }
                 
                 // if player isn't alive, stop the game
                 
                } else {
                    window.alert("You have lost your robot in battle! Game Over");
                    break;
                }
            }
            endGame();
     };
     var endGame = function() {
         if (playerHealth > 0) {
             window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
         } else {
             window.alert("You've lost your robot in battle.");
         }
         var playAgainConfirm = window.confirm("Would you like to play again?");

         if(playAgainConfirm) {
             startGame();
         } else {
             window.alert("Thank you for playing Robot Gladiators! Come back soon!");
         }
     }
     var shop = function() {
         var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
         switch (shopOptionPrompt) {
             case "refill":
            case "REFILL":
                 if (playerMoney >= 7) {

                     window.alert("Refilling player's health by 25 for 7 dollars.");
                     
                     playerHealth = playerHealth + 25;
                     playerMoney = playerMoney - 7;
                    } 
                    else {
                        window.alert("You don't have enough money!");
                    }
                     break;
            case "upgrade":
                case "UPGRADE":
                if (playerMoney >= 7) {

                    window.alert("Upgrading player's attack by 8 for 7 dollars.");
                    
                    playerAttack = playerAttack + 8;
                    playerMoney = playerMoney - 7;
                }
                else {
                    window.alert("You don't have enough money!");
                }
                break;

            case "leave":
                case "LEAVE":
                window.alert("leave the shop.");
                break;
                default:
                    window.alert('You did not pick a valid option. Try again.');

                    shop();
                    break;
         }
     };
     startGame();
            