function toggleDarkMode() {
    // add the `dark-mode` class to your `<body>` tag
    document.body.classList.toggle('dark-mode')
    document.body.classList.toggle('light-mode')
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.classList.toggle('dark-mode');
        box.classList.toggle('light-mode');
    });
}