function qs(arr: number[], low: number, high: number): void {
    if (low >= high) {
        return;
    }

    const partitionIdx = partition(arr, low, high);

    qs(arr, low, partitionIdx - 1);
    qs(arr, partitionIdx + 1, high);
}

function partition(arr: number[], low: number, high: number): number {
    let pivot = arr[high];

    let idx = low - 1;

    for (let i = low; i < high; i++) {
        if (arr[i] <= arr[high]) {
            idx++;

            const temp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = temp;
        }
    }

    idx++;

    arr[high] = arr[idx];
    arr[idx] = pivot;

    return idx;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
