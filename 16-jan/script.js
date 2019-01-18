document.querySelector('body > div').onmosemove = fanction(event){
    console.log(event.pageX, event.pageY);
    const dot = document.createElement('div');
    dot.innerText = "0";
    dot.style.position ="absolute";
    dot.style.left = event.pageX + 'px';
    dot.style.top = event.pageY + 'px';
    document.querySelector('body > div').append(dot);
}


