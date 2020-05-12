export const swatches = [
  { emoji: emojify("lion"), color: "#ff691f" },
  { emoji: emojify("crookshanks"), color: "#fab81e" },
  { emoji: emojify("fish"), color: "#7fdbb6" },
  { emoji: emojify("hedwig"), color: "#8f815b" },
  { emoji: emojify("dolphin"), color: "#91d2fa" },
  { emoji: emojify("whale"), color: "#1b95e0" },
  { emoji: emojify("elephant"), color: "#abb8c2" },
  { emoji: emojify("octopus"), color: "#e81c4f" },
  { emoji: emojify("pig"), color: "#f58ea8" },
  { emoji: emojify("unicorn"), color: "#981ceb" },
  { emoji: emojify("rabbit"), color: "#ffffff" },
  { emoji: emojify("wolf"), color: "#000000" },
];

function emojify(name) {
  var out = `<img src="./assets/emojis/${name}.png">`;
  return out;
}
