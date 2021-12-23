from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from gnewsclient import gnewsclient

client = gnewsclient.NewsClient()

app = FastAPI()

origins = ["http://localhost", "http://localhost:8000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health():
    return {"status": "ok"}


@app.get("/news")
def get_news(topic: str = "Top Stories", page_size: int = 10):
    client.topic = topic
    client.max_results = page_size
    news = client.get_news()
    return {"news": news}


@app.get("/topics")
def get_topics():
    return {"topics": client.topics}
