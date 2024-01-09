# Flask Sentiment Analysis Web Application

## Overview
This Flask web application provides a simple interface for sentiment analysis. Users can input text, and the app predicts the sentiment of the text using a pre-trained logistic regression model. The application is designed to be user-friendly and provides real-time sentiment predictions.

<img width="806" alt="image" src="https://github.com/PalashM9/FlaskApp_Sentiment_Analysis/assets/100582448/7433833f-80f5-4eb4-8505-7b074aa9c31f">

## Features
- Web interface for inputting text.
- Sentiment prediction using logistic regression.
- Use of TF-IDF vectorization for text processing.

## Running the Application
To run the application, use the following command in the terminal:

python app.py

This will start the Flask server, and the application will be accessible via a web browser at http://127.0.0.1:5000/.

## Usage
Navigate to http://127.0.0.1:5000/ in your web browser.
Enter the text you wish to analyze in the provided text box.
Click the 'Predict' button to see the sentiment analysis of the text.

## Code Description
app = Flask(__name__): Initializes the Flask application.
Model Loading: The TF-IDF vectorizer and logistic regression model are loaded using joblib.
predict_sentiment(text): This function takes text as input, processes it with the TF-IDF vectorizer, and then uses the logistic regression model to predict the sentiment.
@app.route('/'): The home route that renders the index.html template.
@app.route('/predict', methods=['POST']): The route that handles the prediction logic.

## Sentiment Classes
The application can predict the following sentiment classes:

Angry
Disgusted
Fear
Happy
Interested
Neutral
Sad
Surprised

## Requirements
Flask
Joblib
NumPy
