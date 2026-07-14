const fs = require('fs');

let html = `<!DOCTYPE html>
<html>
<head>
    <title>L2-L3 and Minggu Images</title>
    <style>
        body { font-family: sans-serif; background: #111; color: #fff; padding: 20px; }
        .section { margin-bottom: 40px; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px; }
        .card { background: #222; padding: 10px; border-radius: 8px; text-align: center; }
        img { max-width: 100%; height: 150px; object-fit: cover; border-radius: 4px; }
        p { font-size: 12px; margin-top: 8px; color: #aaa; }
    </style>
</head>
<body>
    <div class="section">
        <h2>16 Feb L2-L3 (1-15)</h2>
        <div class="grid">`;

for (let i = 1; i <= 15; i++) {
    html += `
            <div class="card">
                <img src="/galeri/16 feb L2-L3/l2_l3_${i}.webp" />
                <p>l2_l3_${i}.webp</p>
            </div>`;
}

html += `
        </div>
    </div>
    <div class="section">
        <h2>Minggu 15 Feb (1-15)</h2>
        <div class="grid">`;

for (let i = 1; i <= 15; i++) {
    html += `
            <div class="card">
                <img src="/galeri/minggu 15 feb/minggu_${i}.webp" />
                <p>minggu_${i}.webp</p>
            </div>`;
}

html += `
        </div>
    </div>
</body>
</html>`;

fs.writeFileSync('view-l2-l3-minggu.html', html);
console.log('Generated view-l2-l3-minggu.html');
