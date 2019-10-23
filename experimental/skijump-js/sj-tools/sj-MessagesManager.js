
SJ.MessagesManager = {};

SJ.MessagesManager.setMessage = (message) => {
  SJ.ui.updateMessageLabel(message);
}

SJ.MessagesManager.waitingForLaunch = () => {
  SJ.MessagesManager.setMessage("Press SPACE to launch");
}

SJ.MessagesManager.skiingDown = () => {
  SJ.MessagesManager.setMessage("");
}

SJ.MessagesManager.canJump = () => {
  SJ.MessagesManager.setMessage("Press SPACE to jump");
}

SJ.MessagesManager.isFlying = () => {
  SJ.MessagesManager.setMessage("Use ARROWS to rotate");
}

SJ.MessagesManager.fail = () => {
  SJ.MessagesManager.setMessage("You failed");
}

SJ.MessagesManager.noFail = () => {
  SJ.MessagesManager.setMessage("Congratulations!");
}