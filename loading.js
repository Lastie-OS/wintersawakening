const loading = document.querySelector('.loading');
const frames = ["", ".", "..", "..."];
let i = 0;

setInterval(() => {
    loading.innerText = 'loading' + frames[i];
    i = (i + 1) % frames.length;
}, 600);