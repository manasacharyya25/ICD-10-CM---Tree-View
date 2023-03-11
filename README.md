#COMMANDS 

## PIPENV
1. Install Package      :   pipenv install package
2. Activate Virtual Env :   pipenv shell
3. Run Script in Venv   :   pipenv run python myscript.py

## FAST API
1. FastAPI      : pipenv install fastapi
2. Server       : pipenv install "uvicorn[standard]"
3. Run Server   : uvicorn main:app --reload     ***(main: Script name, app: API Name)***
