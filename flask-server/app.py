from flask import Flask, request, jsonify
import subprocess

app = Flask(__name__)

@app.route('/execute-python', methods=['POST'])
def execute_python():
    code = request.json['code']
    inputList = request.json['inputsList']
    results = []

    for input_data in inputList:
        try:
            result = subprocess.check_output(['python', '-c', code], input=input_data, text=True)
            results.append({'input': input_data, 'result': result})
        except subprocess.CalledProcessError as e:
            results.append({'input': input_data, 'error': str(e)})

    return jsonify(results)

@app.route('/evaluate-metrics', methods=['POST'])
def evaluate_metrics():
    code = request.json['code']
    pipelineResultsList = request.json['inputsList']
    results = []

    for pipelineResult in pipelineResultsList:
        try:
            score = subprocess.check_output(['python', '-c', code], input=pipelineResult, text=True)
            results.append({'input': pipelineResult, 'score': score})
        except subprocess.CalledProcessError as e:
            results.append({'input': pipelineResult, 'error': str(e)})

    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)
