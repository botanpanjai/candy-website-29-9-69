
const commandItems = document.querySelectorAll(".command-item");

commandItems.forEach((item) => {
    item.addEventListener("click", () => {
        const command = item.dataset.command;

        navigator.clipboard.writeText(command).then(() => {
            const span = item.querySelector("span");
            const original = span.textContent;

            span.textContent = "Copied!";

            setTimeout(() => {
                span.textContent = original;
            }, 1200);
        });
    });
});



const text = document.getElementById("description"); 
const messages = ["สวัสดีค่ะ มีอะไรให้แคนดี้ช่วยไหมคะ", "แคนดี้พร้อมดูแลเซิร์ฟเวอร์ของเธอแล้วนะคะ 🩷", "อย่าลืมใช้คำสั่ง /help เพื่อดูคำสั่งทั้งหมดนะคะ ✨"]; 
let messageIndex = 0; 
let charIndex = 0; 
function typingMessage() 
{ const message = messages[messageIndex]; 
    if (charIndex < message.length) { 
        text.textContent += message[charIndex]; charIndex++; setTimeout(typingMessage, 80); 
    } else { setTimeout(deleteMessage, 2000); } } function deleteMessage() { if (text.textContent.length > 0) { text.textContent = text.textContent.slice(0, -1); setTimeout(deleteMessage, 40); } else { messageIndex++; if (messageIndex >= messages.length) { messageIndex = 0; } charIndex = 0; setTimeout(typingMessage, 1000); } } typingMessage();