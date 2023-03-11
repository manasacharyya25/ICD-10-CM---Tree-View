import json

class Icd10Cm:
    def __init__(self, id: str, name: str, children):
        self.id, self.name, self.children = id, name, children
    
def find_node(code):
    with open("dataset.json") as user_file:
        parsed_json = json.load(user_file)

    outputList = []

    for node in parsed_json:
        icd = Icd10Cm(**node)
        codeStart = icd.id.split("-")[0]
        codeEnd = icd.id.split("-")[1]

        if code>=codeStart and code<=codeEnd:
            outputList.append(icd)
        else:
            icdFirstLevel = Icd10Cm(icd.id, icd.name, ["Loading.."])
            outputList.append(icdFirstLevel)
    return outputList


if __name__=="__main__":
    #outputStr = json.dumps([obj.__dict__ for obj in find_node("M00-M99")]) #find_node("M00-M99").toJSON()
    inputCode = "D65-D69"
    inputCodeStart = inputCode.split("-")[0]
    with open('data'+inputCode+'.json', 'w') as f:
        json.dump([obj.__dict__ for obj in find_node(inputCode)], f)
    