const chatBody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtInput");
const send = document.querySelector(".send");
const chatBot = document.querySelector("#chat-bot");
const chatNi = document.querySelector(".chatNi");
const chatExit = document.querySelector(".chat_exit");
const chatbutton = document.querySelector(".chatbutton");
const chatBot2 = document.querySelector(".chat-bot-2");

send.addEventListener("click", () => renderUserMessage());

txtInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    renderUserMessage();
  }
});

chatBot.addEventListener("click", () => {
    chatNi.classList.add("fadeIn");
    chatBot.classList.add("fadeOut");
    chatbutton.classList.add("hide");
    chatBot2.classList.add("hide");
})

chatExit.addEventListener("click", () => {
    chatNi.classList.remove("fadeIn");
    chatBot.classList.remove("fadeOut");
    chatbutton.classList.remove("hide");
    chatBot2.classList.remove("hide");
})
const renderUserMessage = () => {
  const userInput = txtInput.value;
  renderMessageEle(userInput, "user");
  txtInput.value = "";
  setTimeout(() => {
    renderChatbotResponse(userInput);
    setScrollPosition();
  }, 600);
};

const renderChatbotResponse = (userInput) => {
  const res = getChatbotResponse(userInput);
  renderMessageEle(res);
};

const renderMessageEle = (txt, type) => {
  let className = "user-message";
  if (type !== "user") {
    className = "chatbot-message";
  }
  const messageEle = document.createElement("div");
  const txtNode = document.createTextNode(txt);
  messageEle.classList.add(className);
  messageEle.append(txtNode);
  chatBody.append(messageEle);
};

const getChatbotResponse = (userInput) => {
  return responseObj[userInput] == undefined
    ? "Please try something else"
    : responseObj[userInput];
};

const setScrollPosition = () => {
  if (chatBody.scrollHeight > 0) {
    chatBody.scrollTop = chatBody.scrollHeight;
  }
};

const a = "How are you today!";
const responseObj = {
    hello: "Hey ! How are you doing ?",
    hey: "Hey! What's Up",
    today: new Date().toDateString(),
    time: new Date().toLocaleTimeString(),
    a: `Better than Yesterday!`,
  };
