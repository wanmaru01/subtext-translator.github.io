let img;

function preload() {
    img = loadImage('https://source.unsplash.com/random/800x600'); // 替換成你的圖片
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    image(img, 0, 0, width, height);
}

function draw() {
    if (frameCount % 10 === 0) {
        glitch();
    }
}

function glitch() {
    let y = int(random(height));
    let h = int(random(5, 50));
    let sx = int(random(10, 30));
    copy(0, y, width, h, sx, y, width, h);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    image(img, 0, 0, width, height);
}
