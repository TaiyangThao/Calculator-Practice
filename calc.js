let result = '';

function Result(value) {
    result += value;
    document.getElementById('result').value = result;
}

function ClearResult() {
    result = '';
    document.getElementById('result').value = result;
}

function Calculate() {
    try {
        result = eval(result);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}