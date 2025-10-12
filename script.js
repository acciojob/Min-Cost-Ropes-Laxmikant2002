function mincost(arr)
{ 
//write your code here
// return the min cost
	if (!arr || arr.length <= 1) return 0;
	// Use a min-heap (priority queue) for optimal performance
	class MinHeap {
		constructor(data = []) {
			this.heap = [];
			if (Array.isArray(data)) {
				for (const v of data) this.push(v);
			}
		}
		size() { return this.heap.length; }
		push(val) {
			this.heap.push(val);
			this._siftUp(this.heap.length - 1);
		}
		pop() {
			if (this.heap.length === 0) return undefined;
			const top = this.heap[0];
			const last = this.heap.pop();
			if (this.heap.length > 0) {
				this.heap[0] = last;
				this._siftDown(0);
			}
			return top;
		}
		_siftUp(idx) {
			const heap = this.heap;
			while (idx > 0) {
				const parent = Math.floor((idx - 1) / 2);
				if (heap[parent] <= heap[idx]) break;
				[heap[parent], heap[idx]] = [heap[idx], heap[parent]];
				idx = parent;
			}
		}
		_siftDown(idx) {
			const heap = this.heap;
			const n = heap.length;
			while (true) {
				let left = idx * 2 + 1;
				let right = idx * 2 + 2;
				let smallest = idx;
				if (left < n && heap[left] < heap[smallest]) smallest = left;
				if (right < n && heap[right] < heap[smallest]) smallest = right;
				if (smallest === idx) break;
				[heap[smallest], heap[idx]] = [heap[idx], heap[smallest]];
				idx = smallest;
			}
		}
	}

	const heap = new MinHeap(arr);
	let cost = 0;
	while (heap.size() > 1) {
		const a = heap.pop();
		const b = heap.pop();
		const s = a + b;
		cost += s;
		heap.push(s);
	}
	return cost;
  
}

module.exports=mincost;
