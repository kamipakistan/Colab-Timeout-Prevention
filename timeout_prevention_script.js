function ClickConnect(){
  console.log("Clicking on the connect button");
  document.querySelector("colab-connect-button").click()
}

setInterval(ClickConnect, 60000);
