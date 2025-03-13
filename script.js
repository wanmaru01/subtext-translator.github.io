const phrases = {
  下次聯絡: "不再聯絡~~",
  下次再聯絡: "不會再聯絡~~",
  再約: "不再約了啦~",
  你開心就好: "隨便你啦",
  還有事先走了: "其實我沒事 只是想走了!",
  借我一張衛生紙: "抽一張但不會還啦",
  你現在忙嗎: "有空幫我嗎(๑•́ ₃ •̀๑)",
  這需要全公司配合: "這很難實現喔...",
  我們會再評估一下: "已否決，但不想當面拒絕你...",
  我會在評估一下: "已否決，但不想當面拒絕你...",
  現在才回來: "快點回來！",
  亂成這樣怎麼住: "只是擔心你的生活環境影響身心啦...",
  小孩子別管: "懶得跟你解釋",
  笑死: "單純想敷衍你~",
  有點東西: "誰還沒點東西呢~",
  明天再說: "就是懶得今天處理",
  沒關係啦: "就是有關係",
  下次約: "這輩子都不會約了。",
  你開心就好: "反正我已經放棄掙扎了。",
  有空再說: "不會有空，也不會說。",
  考慮看看: "其實不用考慮，答案是否定的。",
  再看看: "不用看了，沒機會。",
  隨便啦: "最好照我的意思來。",
  到時候再說: "希望你忘記這件事。",
  我再想想: "已讀不回的開始。",
  下次一起: "這次不會，下次也不會。",
  看看有沒有機會: "沒有機會。",
  你決定就好: "你決定錯了我還是會不高興。",
  這樣可以嗎: "其實我希望你說不行。",
  再聊: "不會再聊了。",
  等我一下: "要等多久，我也不知道。",
  你先忙: "我不重要，你不用回來了。",
  沒事: "事情大條了。",
  沒關係: "超級有關係。",
  我OK啊: "其實很不OK。",
  怎麼都可以: "但其實我有標準答案。",
  改天請你吃飯: "改天＝沒這天。",
  我真的沒生氣: "我現在氣到不行。",
  不是針對你: "其實就是在針對你。",
  還好: "其實不好。",
  就醬吧: "我不想再討論了。",
  謝謝你提供意見: "但我還是會照自己的方式做。",
  可以接受啦: "但其實很勉強。",
  這樣也行: "但其實不太行。",
  我會努力看看: "應該不會發生。",
  幫我想想: "其實是要你幫我決定。",
  聽起來不錯: "但我不想做。",
  喔好: "已讀不回的前奏。",
  我們再聯絡: "不會再聯絡。",
  你說得對: "但我還是不會改。",
  辛苦了: "接下來的事跟我沒關係了。",
  這不是重點: "這根本就是重點。",
  你自己決定: "但如果出錯是你的問題。",
  可能吧: "其實不可能。",
  好像可以: "其實不行。",
  你猜: "反正我不會直接告訴你。",
  不然你覺得呢: "我已經有答案了，等你自己說出來。",
  哦哦: "我根本沒在聽。",
  讓我想一下: "等於沒下文。",
  有機會的話: "其實沒機會。",
  這樣挺好的: "但我不喜歡。",
  還不錯啊: "其實還可以更好。",
  改天聊: "你不會再等到我的訊息。",
  這樣比較保險: "其實我不想冒險。",
  我沒意見: "但我有很多想法。",
  就這樣吧: "話題結束，不要再問了。",
  再見: "不會再見了啦~",
  再聊: "不聊了啦~",
  再問: "別再問了啦~",
  再想: "不想了啦~",
  再約: "不再約了啦~",
  再聯絡: "不聯絡了啦~",
  再見面: "不見了啦~",
  沒事啦: "算了，懶得計較",
  下次再說: "根本不會有下次",
  我知道了: "其實沒想聽",
  還好吧: "其實很無語",
  沒關係: "其實超級有關係",
  看你怎麼想: "我不想跟你爭",
  再看看吧: "其實已經有答案了",
  有機會再約: "這機會大概不會來",
  不想吵: "但我真的很不爽",
  隨緣吧: "基本上沒戲了",
  我考慮看看: "應該是不會答應",
  先忙別的: "這事不重要",
  再說吧: "不想現在決定",
  這樣啊: "其實沒什麼興趣",
  好喔: "好吧，懶得反駁",
  你自己決定: "反正不關我事",
  盡量吧: "應該是做不到",
  我懂你的意思: "但我不一定認同",
  先這樣吧: "我不想繼續聊了",
  你好: "你好啊( ^ω^)",
  再見: "再來玩喔~( ^ω^)",
  拜拜: "再來玩喔~( ^ω^)",
  謝謝: "不客氣",
  你在幹嘛: "在等你呀( ^ω^)",
  你是誰: "我是你的好朋友( ^ω^)",
  你幾歲: "我永遠18歲( ^ω^)",
  你在哪裡: "在你心裡( ^ω^)",
  你喜歡我嗎: "當然喜歡啊( ^ω^)",
  我喜歡你: "我也喜歡你( ^ω^)",
  我愛你: "我也愛你( ^ω^)",
  你會幹嘛: "翻譯潛台詞啊( ^ω^)",
  你會說中文嗎: "會呀( ^ω^)",
  你會說英文嗎: "會呀( ^ω^)",
  你會說日文嗎: "會呀( ^ω^)",
  你會說韓文嗎: "會呀( ^ω^)",
  新一代設計展: "全台灣最讚的設計展～( ^ω^)",
  要來我家看貓嗎: "嘿嘿 好啊(灬ºωº灬)",
  哈: "笑什麼笑~",
  哈哈: "(*^^*)~",
  哈哈哈: "還蠻好笑嘛",
  蛤: "蛤",
  啊: "聽不清～再說一次吧",
  什麼意思: "說說你的潛台詞吧！",
  好酷: "看來有點東西喔～",
  我不知道: "說說你心中的潛台詞吧！",
  還好: "沒有很喜歡啦～",
  你好嗎: "我很好啊～",
  新一代設計展: "來看看台藝視傳「潛台詞」吧~",
  新一代: "看看台藝視傳「潛台詞」吧~",
  要說什麼: "說說看 下次聯絡?你開心就好?還有事先走了?亂成這樣怎麼住?現在才回來?還有事先走了?借我一張衛生紙?這需要全公司配合? 或任何想到的話?",
  我該說甚麼: "說說看 下次聯絡?你開心就好?還有事先走了? 或任何想到的話?",
  我要說甚麼: "說說看 下次聯絡?亂成這樣怎麼住?還有事先走了? 或任何想到的話?",
  要說甚麼: "說說看 下次聯絡?你現在忙嗎?現在才回來? 或任何想到的話?",
  說甚麼: "說說看 下次聯絡?你開心就好?還有事先走了? 或任何想到的話?",
  要說啥: "說說看 借我一張衛生紙?你開心就好?這需要全公司配合? 或任何想到的話?",
  我不知道: "說說看 下次聯絡?你開心就好?還有事先走了? 或任何想到的話?",
};

// 定義特定句子
const specialPhrases = [
  "下次聯絡",
  "下次再聯絡",
  "再約",
  "你開心就好",
  "還有事先走了",
  "借我一張衛生紙",
  "你現在忙嗎",
  "這需要全公司配合",
  "我們會再評估一下",
  "現在才回來",
  "亂成這樣怎麼住",
  "亂成這樣怎麼住",
  "小孩子別管",
  "再聊",
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

function startConversation() {
  document.getElementById("chatWindow").classList.remove("hidden");
  startSpeechRecognition();
}

function closeChat() {
  document.getElementById("chatWindow").classList.add("hidden");
}

function minimizeChat() {
  const chatWindow = document.getElementById("chatWindow");
  chatWindow.style.width = "50%";
  chatWindow.style.height = "30%";
  chatWindow.style.overflow = "hidden";
  chatWindow.style.overflowY = "auto"; // 允許垂直滾動
}


function maximizeChat() {
  const chatWindow = document.getElementById("chatWindow");
  chatWindow.style.width = "80%";
  chatWindow.style.height = "80%";
  chatWindow.style.overflow = "auto";
}

// 初始化語音辨識
function startSpeechRecognition() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.lang = "zh-TW";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    const response = phrases[transcript] || getRandomResponse();
    displayResponse(transcript, response);
  };
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    if (transcript.includes("開始")) {
      startConversation();
    } else {
      const response = phrases[transcript] || getRandomResponse();
      displayResponse(transcript, response);
    }
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error detected: " + event.error);
  };

  recognition.start();
}
// 定義音效
const hoverSound = new Audio('./sounds/hover.mp3');
const clickSound = new Audio('./sounds/click.mp3');

// 獲取所有按鈕
const buttons = document.querySelectorAll('button');

// 監聽 hover 事件
buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    hoverSound.currentTime = 0; // 讓音效從頭開始
    hoverSound.play();
  });

  button.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});
// 顯示對話內容
function displayResponse(transcript, response) {
  const conversationDiv = document.getElementById("conversation");

  // 顯示用戶消息
  const userMessage = document.createElement("div");
  userMessage.className = "message user";
  userMessage.innerHTML = `<p>${transcript}</p>`;
  conversationDiv.appendChild(userMessage);

  // 檢測特定句子並改變背景顏色
  if (specialPhrases.includes(transcript)) {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = " #e6e6e6"; // 恢復原背景顏色
  }

  // 顯示機器人打字動畫
  const typingMessage = document.createElement("div");
  typingMessage.className = "message bot typing";
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
    const botMessage = document.createElement("div");
    botMessage.className = "message bot";
    botMessage.innerHTML = `<p>${response}</p>`;
    conversationDiv.appendChild(botMessage);

    // 隨機顯示視窗
    showRandomWindow(response);
  }, 2000); // 2秒延遲
}
// 隨機顯示視窗
function showRandomWindow(content) {
  const randomWindow = document.createElement("div");
  randomWindow.className = "random-window";

  // 隨機位置
  const randomX = Math.floor(Math.random() * (window.innerWidth - 200));
  const randomY = Math.floor(Math.random() * (window.innerHeight - 150));
  randomWindow.style.left = `${randomX}px`;
  randomWindow.style.top = `${randomY}px`;

  // 添加關閉按鈕
  const closeButton = document.createElement("button");
  closeButton.textContent = "X";
  closeButton.addEventListener("click", () => {
    document.body.removeChild(randomWindow);
  });
  randomWindow.appendChild(closeButton);

  // 10秒後自動關閉
  setTimeout(() => {
    if (document.body.contains(randomWindow)) {
      document.body.removeChild(randomWindow);
    }
  }, 10000); // 15秒

  // 添加圖片和文字
  const windowsContent = [
    {
      img: "./img/叉叉.gif",
      link: "https://www.youtube.com/shorts/sfD2qpC02sU?feature=share",
    },
    {
      img: "./img/arrow.gif",
      link: "https://www.youtube.com/shorts/sfD2qpC02sU?feature=share",
    },
    {
      img: "./img/anti-drug.png",
      text: "Say No to Drugs!",
      link: "https://www.youtube.com/shorts/sfD2qpC02sU?feature=share",
    },
    {
      img: "./img/anti-drug.png",
      text: "Say No to Drugs!",
      link: "https://www.youtube.com/shorts/sfD2qpC02sU?feature=share",
    },    {
      img: "./img/anti-drug.png",
      text: "Say No to Drugs!",
      link: "https://www.youtube.com/shorts/sfD2qpC02sU?feature=share",
    },
  ];

  const randomContent =
    windowsContent[Math.floor(Math.random() * windowsContent.length)];

  const image = document.createElement("img");
  image.src = randomContent.img;
  image.style.width = "100%";
  image.style.height = "auto";
  randomWindow.appendChild(image);

  const text = document.createElement("p");
  text.textContent = randomContent.text;
  randomWindow.appendChild(text);

  document.body.appendChild(randomWindow);

  // 使視窗可拖動
  randomWindow.addEventListener("mousedown", function (e) {
    let offsetX = e.clientX - randomWindow.offsetLeft;
    let offsetY = e.clientY - randomWindow.offsetTop;

    function mouseMoveHandler(e) {
      randomWindow.style.left = `${e.clientX - offsetX}px`;
      randomWindow.style.top = `${e.clientY - offsetY}px`;
    }

    function mouseUpHandler() {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    }

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  });
}

// 跑馬燈效果
document.addEventListener("DOMContentLoaded", function () {
  const marquees = document.querySelectorAll(".marquee");
  marquees.forEach((marquee) => {
    const text = marquee.innerHTML;
    marquee.innerHTML = `<span>${text}</span>`;
    const span = marquee.querySelector("span");
    span.style.position = "absolute";
    span.style.whiteSpace = "nowrap";
    span.style.animation = "marquee-scroll 10s linear infinite";
  });

  const style = document.createElement("style");
  style.innerHTML = `
        @keyframes marquee-scroll {
            from { transform: translateX(100%); }
            to { transform: translateX(-100%); }
        }
    `;
  document.head.appendChild(style);
});

// 創建畫面
const geometry = new THREE.PlaneGeometry(2, 2);
const material = new THREE.ShaderMaterial({
  uniforms: {
    time: { value: 1.0 },
  },
  vertexShader: `
        void main() {
            gl_Position = vec4(position, 1.0);
        }
    `,
  fragmentShader: `
        uniform float time;
        void main() {
            vec2 uv = gl_FragCoord.xy / vec2(1920.0, 1080.0);
            float glitch = sin(uv.y * 50.0 + time * 10.0) * 0.02;
            gl_FragColor = vec4(uv + glitch, 0.5, 1.0);
        }
    `,
});

document.addEventListener("DOMContentLoaded", function () {
  const noiseOverlay = document.getElementById("noise-overlay");
  setTimeout(() => {
    noiseOverlay.style.display = "none";
  }, 5000); // 5秒後隱藏雜訊效果

  // 監聽 Enter 鍵事件
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      startConversation();
    }
  });

  // 監聽滑鼠滾輪事件
  const scrollFeedback = document.getElementById("scroll-feedback");
  document.addEventListener("wheel", function (event) {
    if (event.deltaY < 0) {
      scrollFeedback.textContent = "Scrolling Up";
    } else {
      scrollFeedback.textContent = "Scrolling Down";
    }
    scrollFeedback.style.opacity = 1;
    clearTimeout(scrollFeedback.timeout);
    scrollFeedback.timeout = setTimeout(() => {
      scrollFeedback.style.opacity = 0;
    }, 1000);
  });

  // 創建畫面
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ alpha: true }); // 啟用透明背景

  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("glitch-canvas").appendChild(renderer.domElement);

  const geometry = new THREE.PlaneGeometry(2, 2);
  const material = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 1.0 },
    },
    vertexShader: `
            void main() {
                gl_Position = vec4(position, 1.0);
            }
        `,
    fragmentShader: `
            uniform float time;
            void main() {
                vec2 uv = gl_FragCoord.xy / vec2(1920.0, 1080.0);
                float glitch = sin(uv.y * 50.0 + time * 10.0) * 0.02;
                gl_FragColor = vec4(uv + glitch, 0.5, 1.0, 0.5); // 設置 alpha 值為 0.5
            }
        `,
    transparent: true, // 啟用透明效果
  });

  const plane = new THREE.Mesh(geometry, material);
  scene.add(plane);
  camera.position.z = 1;

  function animate() {
    requestAnimationFrame(animate);
    material.uniforms.time.value += 0.05;
    renderer.render(scene, camera);
  }
  animate();
});

function startConversation() {
  document.getElementById("chatWindow").classList.remove("hidden");
  startSpeechRecognition();
}

document.addEventListener("DOMContentLoaded", function () {
  const chatWindow = document.getElementById("chatWindow");
  const chatHeader = chatWindow.querySelector(".chat-header");

  chatHeader.addEventListener("mousedown", function (e) {
    let offsetX = e.clientX - chatWindow.offsetLeft;
    let offsetY = e.clientY - chatWindow.offsetTop;

    function mouseMoveHandler(e) {
      chatWindow.style.left = `${e.clientX - offsetX}px`;
      chatWindow.style.top = `${e.clientY - offsetY}px`;
    }

    function mouseUpHandler() {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    }

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  });
    
});

