// Enemies our player must avoid
class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = Math.random() * 100 + 200;
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started
        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/enemy-bug.png';
    }
    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        const x = this.x;
        if(x > 505){
            this.x = -102 - (Math.random() * 404);
            this.speed = Math.random() * 100 + 200;
        } 
        this.x += this.speed * dt;

        const enemyXleft = this.x -70;
        const enemyXrigth = this.x +70;
        const enemyYtop = this.y -60;
        const enemyYbottom = this.y +60;

        if(player.x > enemyXleft && player.x < enemyXrigth && player.y > enemyYtop && player.y < enemyYbottom){
            
            player.x = 202;
            player.y = 406;
        }
 
    }

    
    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        
    }
}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.player = 'images/char-princess-girl.png';
    }
    update(dt) {
    }
    render() {
        ctx.drawImage(Resources.get(this.player), this.x, this.y);
    }
    handleInput(keyPush) {
        if (keyPush == 'left' && this.x > 0) {
            this.x -= 102;
        }
        if (keyPush == 'right' && this.x < 405) {
            this.x += 102;
        }
        if (keyPush == 'up' && this.y > 0) {
            this.y -= 83;
        }
        if (keyPush == 'down' && this.y < 405) {
            this.y += 83;
        }
        if (this.y < 0) {
            setTimeout(function () {
                player.x = 202;
                player.y = 405;
            }, 500);
        }
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const allEnemies = [];
const enemyLocation = [63, 147, 230];

enemyLocation.forEach(function (locationY, i) {
    const locationX = Math.random()* 404 -101;
    const enemy = new Enemy(locationX , locationY);
    allEnemies.push(enemy);
});
const player = new Player(202, 405);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
