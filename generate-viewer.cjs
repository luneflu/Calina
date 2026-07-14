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

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>Image Viewer</title>
    <style>
        body { font-family: sans-serif; background: #111; color: #fff; padding: 20px; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; }
        .card { border: 1px solid #333; padding: 10px; background: #222; border-radius: 8px; display: flex; flex-direction: column; align-items: center; }
        img { max-width: 100%; max-height: 200px; object-fit: cover; border-radius: 4px; }
        p { margin: 10px 0 0 0; font-size: 12px; word-break: break-all; text-align: center; }
    </style>
</head>
<body>
    <h1>Gallery Images (${allImages.length})</h1>
    <div class="grid">
        ${allImages.map(img => {
            const relPath = path.relative(__dirname, img).replace(/\\/g, '/');
            return `
                <div class="card">
                    <img src="${relPath}" />
                    <p>${relPath}</p>
                </div>
            `;
        }).join('')}
    </div>
</body>
</html>
`;

fs.writeFileSync('view-images.html', htmlContent);
console.log('view-images.html generated successfully.');
