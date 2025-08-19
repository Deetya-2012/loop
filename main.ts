game.splash("Enter a number ")
let number = game.askForNumber("")
let remain = number % 2
if (remain == 0) {
    game.splash("" + number + "is even number")
} else {
    game.splash("" + number + "is odd number")
}
