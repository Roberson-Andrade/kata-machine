export default class MinHeap {
    public length: number;
    private data: number[];
    

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++; 
    }
    delete(): number {
        if(this.length === 0) return -1;

        const out = this.data[0];

        this.length--;

        if(this.length === 0) {
            this.data = [];
            return out;
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);

        return out;
    }

    private heapifyDown(idx: number): void {
        const leftIdx = this.left(idx);
        const rightIdx = this.right(idx);

        if(idx >= this.length || leftIdx >= this.length) {
            return;
        }

        const rightValue = this.data[rightIdx];
        const leftValue = this.data[leftIdx];
        const value = this.data[idx];

        if(leftValue > rightValue && value > rightValue) {
            this.data[idx] = rightValue;
            this.data[rightIdx] = value;
            this.heapifyDown(rightIdx)
        } else  if(rightValue > leftValue && value > leftValue) {
            this.data[idx] = leftValue;
            this.data[leftIdx] = value;
            this.heapifyDown(leftIdx)
        }
    }

    private heapifyUp(idx: number): void {
        if(idx === 0) {
            return;
        }

        const parentIdx = this.parent(idx)
        const parent = this.data[parentIdx]
        const value = this.data[idx];

        if(parent > value) {
            this.data[idx] = parent;
            this.data[parentIdx] = value;
            this.heapifyUp(parentIdx);
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private left(idx: number): number {
        return idx * 2 + 1;
    }

    private right(idx: number): number {
        return idx * 2 + 2;
    }
}