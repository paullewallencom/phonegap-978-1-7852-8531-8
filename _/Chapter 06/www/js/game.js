var game,
    BUBBLE_SIZE = 64,
    BUBBLE_SPACING = 2,
    BUBBLE_SIZE_SPACED = BUBBLE_SIZE + BUBBLE_SPACING,
    BOARD_COLS,
    BOARD_ROWS,
    MATCH_MIN = 3, // min number of same color bubbles required in a row to be considered a match
    bubbles,
    selectedBubble = null,
    selectedBubbleStartPos = { x: 0, y: 0 }, // currently selected bubble starting position. used to stop player form moving bubbles too far.
    tempShiftedBubble = null,
    allowInput,
    gameOverText,
    scoreText,
    score = 0;

function initGame() {
    var width = window.innerWidth - window.innerWidth % BUBBLE_SIZE_SPACED,
        height = window.innerHeight - window.innerHeight % BUBBLE_SIZE_SPACED;
    game = new Phaser.Game(width, height, Phaser.CANVAS, 'phaser', { preload: preload, create: create });
}

function preload() {
    game.load.spritesheet("BUBBLES", "assets/sprites/spheres.png", BUBBLE_SIZE, BUBBLE_SIZE);
}

function create() {

    // fill the screen with as many bubbles as possible
    spawnBoard();

    scoreText = game.add.text(20, game.world.height - 40, 'score: 0', { font: "20px Arial", fill: "#ffffff", align: "left" });

    gameOverText = game.add.text(game.world.centerX, 100, 'Game Over!', { font: "40px Arial", fill: "#ffffff", align: "center" });
    gameOverText.visible = false;
    gameOverText.anchor.setTo(0.5, 0.5);

    // used to disable input while bubbles are dropping down and respawning
    window.allowInput = true;

    game.input.addMoveCallback(slideBubble, this);

}

function releaseBubble(selectedBubble, pointer) {

    // when the mouse is released with a bubble selected
    // 1) check for matches
    // 2) remove matched bubbles
    // 3) drop down bubbles above removed bubbles
    // 4) refill the board

    checkAndKillBubbleMatches(selectedBubble);

    removeKilledBubbles();

    var dropBubbleDuration = dropBubbles();

    // delay board refilling until all existing bubbles have dropped down
    game.time.events.add(dropBubbleDuration * 100, refillBoard);

    window.allowInput = false;

    window.selectedBubble = null;
    window.tempShiftedBubble = null;

}

function slideBubble(pointer, x, y, fromClick) {

    // check if a selected bubble should be moved and do it

    if (window.selectedBubble && pointer.isDown)
    {
        var cursorBubblePosX = getBubblePos(x);
        var cursorBubblePosY = getBubblePos(y);

        if (checkIfBubbleCanBeMovedHere(window.selectedBubbleStartPos.x, window.selectedBubbleStartPos.y, cursorBubblePosX, cursorBubblePosY))
        {

            if (cursorBubblePosX !== window.selectedBubble.posX || cursorBubblePosY !== window.selectedBubble.posY)
            {

                bubbles.bringToTop(window.selectedBubble);
                // when the player moves the selected bubble, we need to swap the position of the selected bubble with the bubble currently in that position
                tempShiftedBubble = getBubble(cursorBubblePosX, cursorBubblePosY);
                tweenBubblePos(window.selectedBubble, cursorBubblePosX, cursorBubblePosY);
                tweenBubblePos(tempShiftedBubble, window.selectedBubble.posX, selectedBubble.posY);
                swapBubblePosition(window.selectedBubble, tempShiftedBubble);
            }
        }
    }
}

// fill the screen with as many bubbles as possible
function spawnBoard() {

    BOARD_COLS = Phaser.Math.floor(game.world.width / BUBBLE_SIZE_SPACED);
    BOARD_ROWS = Phaser.Math.floor(game.world.height / BUBBLE_SIZE_SPACED);

    bubbles = game.add.group();

    for (var i = 0; i < BOARD_COLS; i++)
    {
        for (var j = 0; j < BOARD_ROWS; j++)
        {
            var bubble = bubbles.create(i * BUBBLE_SIZE_SPACED, j * BUBBLE_SIZE_SPACED, "BUBBLES");
            bubble.name = 'bubble' + i.toString() + 'x' + j.toString();
            bubble.inputEnabled = true;
            bubble.events.onInputDown.add(selectBubble, this);
            bubble.events.onInputUp.add(releaseBubble, this);
            randomizeBubbleColor(bubble);
            setBubblePos(bubble, i, j); // each bubble has a position on the board
        }
    }

}

// select a bubble and remember its starting position
function selectBubble(bubble, pointer) {

    if (window.allowInput)
    {
        console.log('selectedBubble', bubble);
        window.selectedBubble = bubble;
        window.selectedBubbleStartPos.x = bubble.posX;
        window.selectedBubbleStartPos.y = bubble.posY;
    }

}

// find a bubble on the board according to its position on the board
function getBubble(posX, posY) {

    return bubbles.iterate("id", calcBubbleId(posX, posY), Phaser.Group.RETURN_CHILD);

}

// convert world coordinates to board position
function getBubblePos(coordinate) {

    return Phaser.Math.floor(coordinate / BUBBLE_SIZE_SPACED);

}

// set the position on the board for a bubble
function setBubblePos(bubble, posX, posY) {

    bubble.posX = posX;
    bubble.posY = posY;
    bubble.id = calcBubbleId(posX, posY);

}

// the bubble id is used by getBubble() to find specific bubbles in the group
// each position on the board has a unique id
function calcBubbleId(posX, posY) {

    return posX + posY * BOARD_COLS;

}

// since the bubbles are a spritesheet, their color is the same as the current frame number
function getBubbleColor(bubble) {

    return bubble.frame;

}

// set the bubble spritesheet to a random frame
function randomizeBubbleColor(bubble) {

    bubble.frame = game.rnd.integerInRange(0, bubble.animations.frameTotal - 1);

}

// bubbles can only be moved 1 square up/down or left/right
function checkIfBubbleCanBeMovedHere(fromPosX, fromPosY, toPosX, toPosY) {

    if (toPosX < 0 || toPosX >= BOARD_COLS || toPosY < 0 || toPosY >= BOARD_ROWS)
    {
        return false;
    }

    if (fromPosX === toPosX && fromPosY >= toPosY - 1 && fromPosY <= toPosY + 1)
    {
        return true;
    }

    if (fromPosY === toPosY && fromPosX >= toPosX - 1 && fromPosX <= toPosX + 1)
    {
        return true;
    }

    return false;
}

// count how many bubbles of the same color lie in a given direction
// eg if moveX=1 and moveY=0, it will count how many bubbles of the same color lie to the right of the bubble
// stops counting as soon as a bubble of a different color or the board end is encountered
function countSameColorBubbles(startBubble, moveX, moveY) {

    var curX = startBubble.posX + moveX;
    var curY = startBubble.posY + moveY;
    var count = 0;

    while (curX >= 0 && curY >= 0 && curX < BOARD_COLS && curY < BOARD_ROWS && getBubbleColor(getBubble(curX, curY)) === getBubbleColor(startBubble))
    {
        count++;
        curX += moveX;
        curY += moveY;
    }

    return count;

}

// swap the position of 2 bubbles when the player drags the selected bubble into a new location
function swapBubblePosition(bubble1, bubble2) {

    var tempPosX = bubble1.posX;
    var tempPosY = bubble1.posY;
    setBubblePos(bubble1, bubble2.posX, bubble2.posY);
    setBubblePos(bubble2, tempPosX, tempPosY);

}

// count how many bubbles of the same color are above, below, to the left and right
// if there are more than 3 matched horizontally or vertically, kill those bubbles
// if no match was made, move the bubbles back into their starting positions
function checkAndKillBubbleMatches(bubble) {

    if (bubble !== null)
    {
        var countUp = countSameColorBubbles(bubble, 0, -1);
        var countDown = countSameColorBubbles(bubble, 0, 1);
        var countLeft = countSameColorBubbles(bubble, -1, 0);
        var countRight = countSameColorBubbles(bubble, 1, 0);

        var countHoriz = countLeft + countRight + 1;
        var countVert = countUp + countDown + 1;

        if (countVert >= MATCH_MIN)
        {
            killBubbleRange(bubble.posX, bubble.posY - countUp, bubble.posX, bubble.posY + countDown);
        }

        if (countHoriz >= MATCH_MIN)
        {
            killBubbleRange(bubble.posX - countLeft, bubble.posY, bubble.posX + countRight, bubble.posY);
        }

        if (countVert < MATCH_MIN && countHoriz < MATCH_MIN)
        {
            if (bubble.posX !== window.selectedBubbleStartPos.x || bubble.posY !== window.selectedBubbleStartPos.y)
            {

                tweenBubblePos(bubble, window.selectedBubbleStartPos.x, window.selectedBubbleStartPos.y);

                if (tempShiftedBubble !== null)
                {
                    tweenBubblePos(tempShiftedBubble, bubble.posX, bubble.posY);
                }

                swapBubblePosition(bubble, tempShiftedBubble);
            }
        }
    }

}

// kill all bubbles from a starting position to an end position
function killBubbleRange(fromX, fromY, toX, toY) {

    fromX = Phaser.Math.clamp(fromX, 0, BOARD_COLS - 1);
    fromY = Phaser.Math.clamp(fromY , 0, BOARD_ROWS - 1);
    toX = Phaser.Math.clamp(toX, 0, BOARD_COLS - 1);
    toY = Phaser.Math.clamp(toY, 0, BOARD_ROWS - 1);

    for (var i = fromX; i <= toX; i++)
    {
        for (var j = fromY; j <= toY; j++)
        {
            var bubble = getBubble(i, j);
            bubble.kill();
        }
    }

}

// move bubbles that have been killed off the board
function removeKilledBubbles() {

    bubbles.forEach(function(bubble) {
        if (!bubble.alive) {
            setBubblePos(bubble, -1,-1);
            score++;
        }
    });

    scoreText.text = 'score: ' + score;

}

// animated bubble movement
function tweenBubblePos(bubble, newPosX, newPosY, durationMultiplier) {

    if (durationMultiplier === null || typeof durationMultiplier === 'undefined')
    {
        durationMultiplier = 1;
    }

    return game.add.tween(bubble).to({x: newPosX  * BUBBLE_SIZE_SPACED, y: newPosY * BUBBLE_SIZE_SPACED}, 100 * durationMultiplier, Phaser.Easing.Linear.None, true);

}

// look for bubbles with empty space beneath them and move them down
function dropBubbles() {

    var dropRowCountMax = 0;

    for (var i = 0; i < BOARD_COLS; i++)
    {
        var dropRowCount = 0;

        for (var j = BOARD_ROWS - 1; j >= 0; j--)
        {
            var bubble = getBubble(i, j);

            if (bubble === null)
            {
                dropRowCount++;
            }
            else if (dropRowCount > 0)
            {
                setBubblePos(bubble, bubble.posX, bubble.posY + dropRowCount);
                tweenBubblePos(bubble, bubble.posX, bubble.posY, dropRowCount);
            }
        }

        dropRowCountMax = Math.max(dropRowCount, dropRowCountMax);
    }

    return dropRowCountMax;

}

// look for any empty spots on the board and spawn new bubbles in their place that fall down from above
function refillBoard() {

    var maxBubblesMissingFromCol = 0;

    for (var i = 0; i < BOARD_COLS; i++)
    {
        var bubblesMissingFromCol = 0;

        for (var j = BOARD_ROWS - 1; j >= 0; j--)
        {
            var bubble = getBubble(i, j);

            if (bubble === null)
            {
                bubblesMissingFromCol++;
                bubble = bubbles.getFirstDead();
                bubble.reset(i * BUBBLE_SIZE_SPACED, -bubblesMissingFromCol * BUBBLE_SIZE_SPACED);
                randomizeBubbleColor(bubble);
                setBubblePos(bubble, i, j);
                tweenBubblePos(bubble, bubble.posX, bubble.posY, bubblesMissingFromCol * 2);
            }
        }

        maxBubblesMissingFromCol = Math.max(maxBubblesMissingFromCol, bubblesMissingFromCol);
    }

    game.time.events.add(maxBubblesMissingFromCol * 2 * 100, boardRefilled);

}

// when the board has finished refilling, re-enable player input
function boardRefilled() {
    if (checkPossibleMoves()) {
        window.allowInput = true;
    } else {
        console.log('GAME OVER!!!');
        gameOver();
    }
}

function getBubbleColorByPos(x, y) {

    var color = null;
    if (x >= 0 && y >= 0 && x < BOARD_COLS && y < BOARD_ROWS) {
        var bubble = getBubble(x, y);
        color = getBubbleColor(bubble);
    }

    return color;
}

function checkPossibleMoves() {

    if (loopAndCheckCombinations('v')) return true;
    if (loopAndCheckCombinations('h')) return true;

    return false;
}

function loopAndCheckCombinations(direction) {

    var verticalCheckCells1 = [
        {i:0,  j:3 },
        {i:0,  j:-2},
        {i:1,  j:2 },
        {i:-1, j:2 },
        {i:1,  j:-1},
        {i:-1, j:-1}
    ];

    var verticalCheckCells2 = [
        {i:1,  j:1 },
        {i:-1, j:1 }
    ];

    for (var i = 0; i <= BOARD_COLS - 1; i++)
    {
        for (var j = 0; j <= BOARD_ROWS - 1; j++)
        {
            var x1, x2, y1, y2;
            if (direction === 'v') {
                x1 = x2 = i;
                y1 = j+1;
                y2 = j+2;
            } else if (direction === 'h') {
                x1 = i+1;
                x2 = i+2;
                y1 = y2 = j;
            }

            var color0 = getBubbleColorByPos(i, j);
            var color1 = getBubbleColorByPos(x1, y1);
            var color2 = getBubbleColorByPos(x2, y2);

            if (color0 == color1 && color0 == color2) { // 3 same color already together in the column
                return true;
            } else if (color0 == color1) { // 2 same color bubbles are neighbours in the column
                if (checkCombinations(i, j, 0, color0, verticalCheckCells1, direction)) return true;
            } else if (color0 == color2) { // check if there is other bubble color between bubbles in the column
                if (checkCombinations(i, j, 0, color0, verticalCheckCells2, direction)) return true;
            }

        }
    }

    return false;

}

function checkCombinations(i, j, k, color, pos, direction) {

    if (k < pos.length) {

        var x, y;
        if (direction === 'v') {
            x = pos[k].i;
            y = pos[k].j;
        } else if (direction === 'h') {
            x = pos[k].j;
            y = pos[k].i;
        }

        var color2 = getBubbleColorByPos(i+x, j+y);
        if (color == color2) {
            return true;
        } else {
            return checkCombinations(i, j, k+1, color, pos, direction);
        }
    } else {
        return false;
    }
}

function gameOver() {

    gameOverText.visible = true;

    window.allowInput = false;

    document.getElementById('game-over').style.display = "block";

}

function restart() {
    gameOverText.visible = false;
    document.getElementById('game-over').style.display = "none";

    killBubbleRange(0, 0, BOARD_COLS - 1, BOARD_ROWS - 1);

    removeKilledBubbles();

    score = 0;
    scoreText.text = 'score: ' + score;

    refillBoard();
    return false;
}

document.getElementById('restart').addEventListener("click", restart);
document.getElementById('share').addEventListener("click", function() {
    var img = game.canvas.toDataURL();
    window.plugins.socialsharing.share('I just got ' + score + ' points in Crazy Bubbles!', 'Crazy Bubbles', img, null);
    return false;
});

document.getElementById('share-instagram').addEventListener("click", function() {
    var img = game.canvas.toDataURL();
    var caption = 'I just got ' + score + ' points in Crazy Bubbles!';
    Instagram.share(img, caption, function (err) {
        if (err) {
            console.log("not shared");
        } else {
            console.log("shared");
        }
    });
    return false;
});
