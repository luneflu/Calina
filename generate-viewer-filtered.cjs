const fs = require('fs');
const path = require('path');

const galeriDir = path.join(__dirname, 'public', 'galeri');

function getFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getFiles(filePath));
        } else {
            const ext = path.extname(file).toLowerCase();
            if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
                results.push(filePath);
            }
        }
    });
    return results;
}

const allImages = getFiles(galeriDir);
const filteredImages = allImages.filter(img => {
    const name = path.basename(img).toLowerCase();
    return !name.includes('l2_l3_') &&
           !name.includes('minggu_') &&
           !name.includes('flagman') &&
           !name.includes('truk') &&
           !name.includes('peralatan') &&
           !name.includes('personel') &&
           !name.includes('kompresor');
});

console.log(`Filtered images count: ${filteredImages.length}`);

const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Filtered Gallery Images</title>
    <style>
        body { font-family: sans-serif; background: #111; color: #fff; padding: 20px; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px; }
        .card { background: #222; padding: 10px; border-radius: 8px; text-align: center; }
        img { max-width: 100%; height: 150px; object-fit: cover; border-radius: 4px; }
        p { font-size: 11px; word-break: break-all; margin-top: 8px; color: #aaa; }
    </style>
</head>
<body>
    <h1>Filtered Gallery Images (${filteredImages.length})</h1>
    <div class="grid">
        ${filteredImages.map(img => {
            const relPath = path.relative(path.join(__dirname, 'public'), img).replace(/\\/g, '/');
            return `
                <div class="card">
                    <img src="/${relPath}" />
                    <p>${path.basename(img)}</p>
                </div>
            `;
        }).join('')}
    </div>
</body>
</html>
`;

fs.writeFileSync('view-images-filtered.html', html);
console.log('Generated view-images-filtered.html');
