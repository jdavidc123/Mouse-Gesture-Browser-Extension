(() => {
    console.log(window);
    console.log(document);

    let initialX, initialY;

    window.addEventListener('dragstart', (e) => {
        initialX = e.clientX;
        initialY = e.clientY;
    })

    window.addEventListener('dragend', (e) => {
        let highlightedText = window.getSelection().toString();


        // Get the position of the mouse cursor relative to the viewport after the drag operation
        let finalX = e.clientX;
        let finalY = e.clientY;

        // Calculate the difference in coordinates
        let deltaX = finalX - initialX;
        let deltaY = finalY - initialY;

        // Determine the direction of the drag based on the difference in coordinates
        let direction;
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            direction = deltaX > 0 ?
                // SEARCHES GOOGLE IMAGES IF DRAGGED RIGHT,
                window.open(`https://google.com/search?q=${highlightedText}&tbm=isch`) :
                // SEARCHES GOOGLE VIDEOS IF DRAGGED LEFT,
                window.open(`https://google.com/search?q=${highlightedText}&tbm=vid`);
        } else {
            direction = deltaY > 0 ?
                // SEARCHES GOOGLE(REGULAR SEARCH) IF DRAGGED DOWN
                window.open(`https://google.com/search?q=${highlightedText}`) :
                //SEARCHES GOOGLE TRANSLATE IF DRAGGED UP
                window.open(`https://translate.google.com/?sl=auto&tl=en&text=${highlightedText}&op=translate`);
        }

        console.log(direction)
    })
})();