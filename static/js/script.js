function predictSentiment() {
    const userInput = document.getElementById('user-input').value;
    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `text=${encodeURIComponent(userInput)}`
    })
    .then(response => response.text())
    .then(htmlResponse => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlResponse, 'text/html');
        const sentiment = doc.getElementById('sentiment-result').textContent;
        console.log(sentiment); // Log the predicted sentiment
        highlightPredictedButton(sentiment);
    })
    .catch(error => console.error('Error:', error));
}

function highlightPredictedButton(predictedSentiment) {
    // Assuming sentiment_classes array matches the order of buttons
    const sentimentClasses = ['Angry', 'Disgusted', 'Fear', 'Happy', 'Interested', 'Neutral', 'Sad', 'Surprised'];
    const index = sentimentClasses.indexOf(predictedSentiment);

    // Remove highlighting from all buttons
    document.querySelectorAll('.sentiment-btn').forEach(btn => {
        btn.classList.remove('highlight');
    });

    // Highlight the predicted button
    if (index !== -1) {
        const predictedButton = document.getElementById(`class${index}`);
        if (predictedButton) {
            predictedButton.classList.add('highlight');
        }
    }
}
