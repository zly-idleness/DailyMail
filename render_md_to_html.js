const fs = require('fs');
const markdownIt = require('markdown-it');

// 创建 Markdown-it 实例
const md = new markdownIt();

// 读取 Markdown 文件内容
const markdownContent = fs.readFileSync('todo.md', 'utf-8');
const htmlContent = md.render(markdownContent);

// 基本样式
const css = `
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f4f4f9;
    color: #333;
    line-height: 1.6;
  }

  h1, h2, h3 {
    color: #333;
    border-bottom: 2px solid #ddd;
    padding-bottom: 10px;
    margin-top: 20px;
  }

  p, li {
    font-size: 16px;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: square;
    padding-left: 20px;
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .section {
    margin-bottom: 30px;
  }

  .todo-item {
    padding: 10px;
    margin-bottom: 8px;
    border-radius: 5px;
    background-color: #e8f0fe;
  }

  .highlight {
    color: #d9534f;
    font-weight: bold;
  }

  .quote {
    font-style: italic;
    color: #555;
    border-left: 4px solid #ddd;
    padding-left: 10px;
    margin: 20px 0;
  }
`;

// HTML 模板，包含转换后的内容和样式
const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daily Todo</title>
    <style>${css}</style>
</head>
<body>
    <div class="container">
        <h1>Daily Todos</h1>
        <div class="section">${htmlContent}</div>

        <h2>Weather & Quote</h2>
        <div class="section">
            <div class="weather">
                <!-- Weather content will be inserted here if needed -->
            </div>
            <div class="quote">
                <!-- Daily quote content will be inserted here if needed -->
            </div>
        </div>

        <h2>Reminders</h2>
        <div class="section highlight">
            <p>Don't forget to sleep early and complete your plans!</p>
        </div>
    </div>
</body>
</html>
`;

// 将生成的 HTML 内容写入文件
fs.writeFileSync('daily_email.html', htmlTemplate, 'utf-8');
console.log('HTML file has been generated: output.html');
