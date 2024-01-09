from flask import Flask, request, render_template
import joblib
import numpy as np

app = Flask(__name__)

# Load the model
vectorizer = joblib.load('tfidf_vectorizer.pkl')
logreg = joblib.load('logreg_model.pkl')

sentiment_classes = ['Angry', 'Disgusted', 'Fear', 'Happy', 'Interested', 'Neutral', 'Sad', 'Surprised']

def predict_sentiment(text):
    # Load the saved vectorizer and model

    # Transform the input text using the loaded vectorizer
    text_vector = vectorizer.transform([text])

    # Make a prediction
    prediction = logreg.predict(text_vector)

    return prediction[0]

def document_to_mean_vector(document, model, vector_size=100):
    vectors = [model.wv[word] for word in document if word in model.wv]

    if len(vectors) > 0:
        return np.mean(vectors, axis=0)
    else:
        return np.zeros(vector_size)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        text = request.form['text']
        print(text)
        predicted_class = predict_sentiment(text)
        print(f"The predicted sentiment class is: {predicted_class}")
        sentiment = sentiment_classes[predicted_class]
        print(sentiment)
        return render_template('index.html', sentiment=sentiment)

if __name__ == '__main__':
    app.run(debug=True)
