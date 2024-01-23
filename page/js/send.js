// 假设您有一个发送按钮和输入框
document.getElementById('sendBtn').addEventListener('click', function() {
    var inputElement = document.getElementById('chatInput');
    var message = inputElement.value;
    inputElement.value = '';

    // 调用发送消息的函数
    sendMessageToServer(message);
});

function sendMessageToServer(message) {
    fetch('https://tgbots.kenny9-ecd.workers.dev/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message })
    })
    .then(response => response.json())
    .then(data => {
        // 可以在此处处理从Telegram机器人返回的任何响应
        console.log(data);
    })
    .catch(error => console.error('Error:', error));
}