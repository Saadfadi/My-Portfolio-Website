const texts = ["Frontend Developer", "Web Designer", "Problem Solver"];
let textIndex = 0; // abhi kaunsa word chal raha — pehla (index 0)
let charIndex = 0; // abhi kitne letters type hue
let isDeleting = false; // abhi type ho raha ya mit raha

function type() {
  const current = texts[textIndex]; // current = "Frontend Developer" (pehli baar)
  const typingEl = document.querySelector(".typing-text");

  if (!isDeleting) {
    // ek character add karo
    typingEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    // jab pura word type ho jaye
    if (charIndex === current.length) {
      // poora word type ho gaya
      // ab delete shuru karo — 1.5 second baad
      isDeleting = true;
      setTimeout(type, 1500);
      return; // function yahan rok do
    }
  } else {
    // delete karo — ek letter hatao
    // substring(0, 17) = "Frontend Develope"
    // substring(0, 16) = "Frontend Develop" ...
    typingEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;

    // jab saary hat jaye
    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length; // % matlab — 0,1,2 ke baad wapis 0
    }
  }
  // type karte waqt 120ms delay
  // delete karte waqt 80ms delay (thoda fast)
  setTimeout(type, isDeleting ? 80 : 120);
}
type(); // function shuru karo
