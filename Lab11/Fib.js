function fibonacci(n) {
    if (n <= 0) return [0];
    if (n === 1) return [0, 1];
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

function calculateFibonacci() {
    const input = document.getElementById("fibInput").value;
    const n = parseInt(input);
    if (!isNaN(n)) {
        const sequence = fibonacci(n);
        const lastFibNumber = sequence[sequence.length - 1];
        document.getElementById("fibSequence").textContent = "Fibonacci Sequence: " + sequence.join(", ");
        document.getElementById("lastFibNumber").textContent = "Last Fibonacci Number: " + lastFibNumber;
    } else {
        alert("Please enter a valid number.");
    }
}

function clearResults() {
    document.getElementById("fibSequence").textContent = "Fibonacci Sequence:";
    document.getElementById("lastFibNumber").textContent = "Last Fibonacci Number:";
}
