const canvases = document.getElementsByClassName('draw-x');
for (let i = 0; i < canvases.length; i++) {
    const canvas = canvases.item(i)
    const context = canvas.getContext("2d");

    canvas.onmousemove = function(e) {
        let canvasRect = canvas.getBoundingClientRect();
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(e.pageX - canvasRect.left - window.scrollX, e.pageY - canvasRect.top - window.scrollY)
        context.moveTo(0, canvas.height);
        context.lineTo(e.pageX - canvasRect.left - window.scrollX, e.pageY - canvasRect.top - window.scrollY)
        context.moveTo(canvas.width, 0);
        context.lineTo(e.pageX - canvasRect.left - window.scrollX, e.pageY - canvasRect.top - window.scrollY)
        context.moveTo(canvas.width, canvas.height);
        context.lineTo(e.pageX - canvasRect.left - window.scrollX, e.pageY - canvasRect.top - window.scrollY)
        context.closePath();
        context.stroke();
    }
    
    canvas.onmouseleave = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

}