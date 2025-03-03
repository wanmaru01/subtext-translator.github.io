const phrases = {
    "下次聯絡": "不再聯絡~~",
    "你開心就好" : "隨便你啦",
    "還有事先走了" : "其實我沒事 只是想走了!",
    "借我一張衛生紙" : "抽一張但不會還啦",
    "你現在忙嗎" : "有空幫我嗎(๑•́ ₃ •̀๑)",
    "這需要全公司配合" : "這很難實現喔...",
    "我們會再評估一下 " : "已否決，但不想當面拒絕你...",
    "現在才回來" : "快點回來！",
    "亂成這樣怎麼住" : "只是擔心你的生活環境影響身心啦...",

    "你好" : "你好啊( ^ω^)",
    "再見" : "再來玩喔~( ^ω^)",
    "謝謝": "不客氣",
    "你在幹嘛": "在等你呀( ^ω^)",
    "你是誰": "我是你的好朋友( ^ω^)",
    "你幾歲": "我永遠18歲( ^ω^)",
    "你在哪裡": "在你心裡( ^ω^)",
    "你喜歡我嗎": "當然喜歡啊( ^ω^)",
    "我喜歡你": "我也喜歡你( ^ω^)",
    "我愛你": "我也愛你( ^ω^)",
    "你會幹嘛": "陪你聊天( ^ω^)",
    "你會說中文嗎": "會呀( ^ω^)",
    "你會說英文嗎": "會呀( ^ω^)",
    "你會說日文嗎": "會呀( ^ω^)",
    "你會說韓文嗎": "會呀( ^ω^)",
};
// 定義特定句子
const specialPhrases = [
    "下次聯絡",
    "你開心就好",
    "還有事先走了",
    "借我一張衛生紙",
    "你現在忙嗎",
    "這需要全公司配合",
    "我們會再評估一下",
    "現在才回來",
    "亂成這樣怎麼住"
];
const defaultResponses = [
  "能再說一次嗎？(； ･`д･´)",
  "再試一次•_ゝ•",
  "（´◔​∀◔`)",
  "(⁰▿⁰)",
  "(◕ܫ◕)",
];
function getRandomResponse() {
  const randomIndex = Math.floor(Math.random() * defaultResponses.length);
  return defaultResponses[randomIndex];
}
function initSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.lang = 'zh-TW';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      const response = phrases[transcript] || getRandomResponse();
      displayResponse(transcript, response);
  };

  recognition.onerror = (event) => {
      console.error('Speech recognition error detected: ' + event.error);
  };

  return recognition;
}
// 添加音效播放功能
function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
  }
  
  // 添加語音合成功能
  function speak(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-TW';
    synth.speak(utterance);
  }
  
  // 修改 displayResponse 函數，添加語音合成功能
  function displayResponse(transcript, response) {
    const conversationDiv = document.getElementById('conversation');
  
    // 顯示用戶消息
    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.innerHTML = `<p>${transcript}</p>`;
    conversationDiv.appendChild(userMessage);
  
    // 檢測特定句子並改變背景顏色
    if (specialPhrases.includes(transcript)) {
      document.body.style.backgroundColor = 'black';
    } else {
      document.body.style.backgroundColor = '#44b4c8'; // 恢復原背景顏色
    }
  
    // 顯示機器人打字動畫
    const typingMessage = document.createElement('div');
    typingMessage.className = 'message bot typing';
    typingMessage.innerHTML = `
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    `;
    conversationDiv.appendChild(typingMessage);
  
    // 模擬機器人回應延遲
    setTimeout(() => {
      // 移除打字動畫
      conversationDiv.removeChild(typingMessage);
  
      // 顯示機器人消息
      const botMessage = document.createElement('div');
      botMessage.className = 'message bot';
      botMessage.innerHTML = `<p>${response}</p>`;
      conversationDiv.appendChild(botMessage);
  
      // 使用語音合成回覆
      speak(response);
  
      // 自動重新啟動語音識別
      const recognition = initSpeechRecognition();
      recognition.start();
    }, 1000); // 模擬1秒延遲
  }
  
  // ...existing code...
  
  document.addEventListener('DOMContentLoaded', () => {
    const recognition = initSpeechRecognition();
    const startButton = document.getElementById('start-btn');
    const languageButton = document.getElementById('language-button');
    const introductionButton = document.getElementById('introduction-btn');
    const closeModalButton = document.getElementById('close-modal-btn');
    const modal = document.getElementById('introduction-modal');
    const translator = document.getElementById('translator');
    const closeTranslatorBtn = document.getElementById('close-translator-btn');
    const micButton = document.getElementById('mic-btn');
    const titleImg = document.querySelector('.title-img');
  
    // 添加按鈕 hover 和 click 音效
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('mouseover', () => playSound('./sounds/hover.mp3'));
      button.addEventListener('click', () => playSound('./sounds/click.mp3'));
    });
  
    startButton.addEventListener('click', () => {
      recognition.start();
      startButton.style.display = 'none';
      translator.style.display = 'block';
      micButton.style.display = 'block';
    });
  
    closeTranslatorBtn.addEventListener('click', () => {
      translator.style.display = 'none';
      startButton.style.display = 'block';
      micButton.style.display = 'none';
    });
  
    micButton.addEventListener('click', () => {
      recognition.start();
    });
  
    languageButton.addEventListener('click', () => {
      toggleLanguage();
    });
  
    introductionButton.addEventListener('click', () => {
      modal.style.display = 'block';
    });
  
    closeModalButton.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  
    // 觸發標題動畫
    const titleSpans = document.querySelectorAll('#title span');
    titleSpans.forEach((span, index) => {
      setTimeout(() => {
        span.style.opacity = 1;
        span.style.transform = 'translateY(0)';
      }, index * 100);
    });
  
    // 監聽滾動事件，調整 title-img 的透明度
    let scrollCount = 0;
    window.addEventListener('scroll', () => {
      scrollCount = window.scrollY / window.innerHeight;
      if (scrollCount >= 2) {
        titleImg.style.opacity = 1;
      } else {
        titleImg.style.opacity = scrollCount / 2;
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const menuContent = document.getElementById('menu-content');
  
    menuButton.addEventListener('click', function() {
      if (menuContent.style.display === 'block') {
        menuContent.style.display = 'none';
      } else {
        menuContent.style.display = 'block';
      }
    });
  
    // 點擊其他地方時隱藏 menu-content
    document.addEventListener('click', function(event) {
      if (!menuButton.contains(event.target) && !menuContent.contains(event.target)) {
        menuContent.style.display = 'none';
      }
    });
  });
