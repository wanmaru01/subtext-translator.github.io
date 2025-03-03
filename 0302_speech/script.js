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
function switchLanguage() {
    alert("切換語言功能尚未實裝！");
}

function openMenu() {
    alert("MENU 功能尚未實裝！");
}

function startConversation() {
    document.getElementById("chatWindow").classList.remove("hidden");
    startSpeechRecognition();
}

function closeChat() {
    document.getElementById("chatWindow").classList.add("hidden");
}

// 初始化語音辨識
function startSpeechRecognition() {
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

    recognition.start();
}

// 顯示對話內容
function displayResponse(transcript, response) {
    const conversationDiv = document.getElementById('conversation');

    // 顯示用戶消息
    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.innerHTML = `<p>${transcript}</p>`;
    conversationDiv.appendChild(userMessage);

    // 顯示機器人消息
    const botMessage = document.createElement('div');
    botMessage.className = 'message bot';
    botMessage.innerHTML = `<p>${response}</p>`;
    conversationDiv.appendChild(botMessage);
}

// 跑馬燈效果
document.addEventListener("DOMContentLoaded", function() {
    const marquees = document.querySelectorAll(".marquee");
    marquees.forEach(marquee => {
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
        time: { value: 1.0 }
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
    `
});

document.addEventListener("DOMContentLoaded", function() {
    const noiseOverlay = document.getElementById('noise-overlay');
    setTimeout(() => {
        noiseOverlay.style.display = 'none';
    }, 5000); // 5秒後隱藏雜訊效果

    // 監聽 Enter 鍵事件
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            startConversation();
        }
    });

    // 監聽滑鼠滾輪事件
    const scrollFeedback = document.getElementById('scroll-feedback');
    document.addEventListener('wheel', function(event) {
        if (event.deltaY < 0) {
            scrollFeedback.textContent = 'Scrolling Up';
        } else {
            scrollFeedback.textContent = 'Scrolling Down';
        }
        scrollFeedback.style.opacity = 1;
        clearTimeout(scrollFeedback.timeout);
        scrollFeedback.timeout = setTimeout(() => {
            scrollFeedback.style.opacity = 0;
        }, 1000);
    });

    // 創建畫面
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // 啟用透明背景

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('glitch-canvas').appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
        uniforms: {
            time: { value: 1.0 }
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
        transparent: true // 啟用透明效果
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