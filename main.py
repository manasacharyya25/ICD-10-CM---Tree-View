from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from search import *

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/icd/{code}")
async def root(code):
    return find_node(code)