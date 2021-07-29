from typing import Optional
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from sklearn import svm
import pandas as pd
import numpy as np

# Train classifier
train_set = pd.read_csv("./train-set.csv", usecols=["EMA_diff", "SMA_diff"])
train_label = pd.read_csv("./train-set.csv", usecols=["is_profitable"])
X = train_set.values.tolist()
y = train_label.values.tolist()
y = np.ravel(y)
clf = svm.SVC()
clf.fit(X, y)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/prediction")
def get_prediction(ema_diff: float, sma_diff: float):
    
    sample = [[ema_diff, sma_diff]]
    prediction = clf.predict(sample)

    return prediction[0]

@app.get("/")
def get_today_prediction():
    df = pd.read_csv("classification-dataset.csv", usecols=['EMA_diff', 'SMA_diff'])
    today = df.tail(1)
    sample = [[today['EMA_diff'][2774], today['SMA_diff'][2774]]]
    prediction = clf.predict(sample)
    return prediction[0]

@app.get("/prices")
def get_prices():
    df = pd.read_csv("bitcoin.csv", usecols=['Date', 'Close'])
    price_list = df.head(30).values.tolist()
    return price_list