import { bootstrapExtra } from "@workadventure/scripting-api-extra";

// Calling bootstrapExtra will initiliaze all the "custom properties"
bootstrapExtra();

WA.chat.sendChatMessage("Hello world", "Mr Robot");
WA.chat.onChatMessage((message) => {
  WA.chat.sendChatMessage("Selbst, " + message + "!", "Mr Robot");
  console.log("The user typed a message", message);
});
