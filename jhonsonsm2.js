// Define job processing times
const jobs = [
    { name: 'A', M1: 3, M2: 13 },
    { name: 'B', M1: 5, M2: 7 },
    { name: 'C', M1: 9, M2: 8 },
    { name: 'D', M1: 11, M2: 2 },
    { name: 'E', M1: 10, M2: 10 },
    { name: 'F', M1: 6, M2: 5 },
    { name: 'G', M1: 8, M2: 9 },
    { name: 'H', M1: 7, M2: 4 },
    { name: 'I', M1: 11, M2: 12 },
];

// Function to find job sequence using Johnson's Rule
function johnsonsRule(jobs) {
    const n = jobs.length;
    const sequence = Array(n).fill(null);
    console.log('sequence', sequence);

    // Sort jobs based on processing time for Machine M1 and M2
    jobs.sort((a, b) => Math.min(a.M1, a.M2) - Math.min(b.M1, b.M2));

    let leftIndex = 0;
    let rightIndex = n - 1;

    for (let i = 0; i < n; i++) {
        if (jobs[i].M1 < jobs[i].M2) {
            sequence[leftIndex++] = jobs[i].name;
        } else {
            sequence[rightIndex--] = jobs[i].name;
        }
    }

    return sequence;
}


