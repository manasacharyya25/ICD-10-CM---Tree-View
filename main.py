from fastapi import FastAPI
from search import *

app = FastAPI()


@app.get("/icd/{code}")
async def root(code):
    return find_node(code)