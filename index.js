// Hieu ung khi cuon trang, Parallax effect
{
    window.addEventListener('scroll', function () {
        var scrolled = window.scrollY;
        var parallaxLayers = document.querySelectorAll('.parallax-layer');

        parallaxLayers.forEach(function (layer, index) {
            var speed = index * 0.5;
            var yPos = -(scrolled * speed);
            layer.style.transform = 'translate3d(0, ' + yPos + 'px, 0)';
        });
    });
}

// Xu ly Animation cho card-skew, Github
{
    const card = document.getElementById('myCard');
    const colorSpot = document.createElement('div');
    colorSpot.classList.add('color-spot');
    card.appendChild(colorSpot);

    card.addEventListener('mousemove', (event) => {
        const { clientX, clientY } = event;

        const cardRect = card.getBoundingClientRect();
        const cardWidth = card.offsetWidth;
        const cardHeight = card.offsetHeight;

        const mouseXPercentage = (clientX - cardRect.left) / cardWidth;
        const mouseYPercentage = (clientY - cardRect.top) / cardHeight;

        const colorR = Math.round(mouseXPercentage * 255);
        const colorG = Math.round(mouseYPercentage * 255);
        const colorB = Math.round((mouseXPercentage + mouseYPercentage) / 2 * 255);

        const color = `rgb(${colorR}, ${colorG}, ${colorB})`;

        colorSpot.style.display = 'block';
        colorSpot.style.backgroundColor = color;
        colorSpot.style.left = `${clientX - cardRect.left}px`;
        colorSpot.style.top = `${clientY - cardRect.top}px`;

        // Transform  
        const mouseXs = event.clientX;
        const mouseYs = event.clientY;
        // console.log(`X: ${mouseXs}, Y: ${mouseYs}`);

        const mouseX = event.clientX - card.offsetLeft;
        const mouseY = event.clientY - card.offsetTop;

        const centerX = cardWidth / 2;
        const centerY = cardHeight / 2;

        const rotateX = (mouseY - centerY) / cardHeight * 20;
        const rotateY = (mouseX - centerX) / cardWidth * 20;

        const translateX = (mouseX - centerX) / cardWidth * 10;
        const translateY = (mouseY - centerY) / cardHeight * 10;

        card.style.transform = `perspective(100000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px)`;
    });

    card.addEventListener('mouseleave', () => {
        colorSpot.style.backgroundColor = 'transparent';
        colorSpot.style.left = '-9999px';
        colorSpot.style.top = '-9999px';
        // Reset transform
        card.style.transform = 'none';
    });
}

// Text animation
{
    const typingText = document.querySelector('.typing-text');
    const textContent = typingText.textContent;
    typingText.textContent = '';

    let currentChar = 0;

    function type() {
        if (currentChar < textContent.length) {
            typingText.textContent += textContent.charAt(currentChar);
            currentChar++;
            // Set time
            setTimeout(type, .5);
        }
    }

    type();
}

// Chuyển đổi từ tệp Excel thành JSON
function excelToJson(file) {
    var reader = new FileReader();

    reader.onload = function (e) {
        var data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data, { type: 'array' });

        var result = {};

        workbook.SheetNames.forEach(function (sheetName) {
            var worksheet = workbook.Sheets[sheetName];
            var json = XLSX.utils.sheet_to_json(worksheet, { raw: true });
            result[sheetName] = json;
        });

        console.log(result); // In kết quả JSON ra console
        // Thực hiện các thao tác khác với dữ liệu JSON tại đây
    };

    reader.readAsArrayBuffer(file);
}

// Khi tệp được chọn
function handleFileSelect(event) {
    var files = event.target.files;
    var file = files[0];
    excelToJson(file);
}

// Test
