# Day 3: Stateful Agents & Sliding Window Memory Architecture 🧠

## 🎯 Key Takeaways

Today's focus was on transitioning an LLM from a "stateless" system to a "stateful" agent by engineering a robust memory architecture, alongside optimizing temporal data using queue data structures.

### 1. Architectural Foundation of Agentic Memory
* **Data Structuring:** Engineered the conversation history utilizing a `List` of `Dictionaries`. This structure effectively maps structural roles (`user`, `assistant`) to their respective content payloads.
* **Continuous Execution Stream:** Implemented a continuous execution environment utilizing `while` loops to maintain an uninterrupted user-agent communication pipeline.
* **Context Preservation:** Leveraged the `append` method to dynamically inject new messages into the history array, ensuring the LLM retains full conversational context across iterations.

### 2. Algorithmic Optimization (Sliding Window & Token Management)
* **The Token Limit Problem:** Unbounded appending leads to context window overflow and API token limits. 
* **Queue-Based Resolution (FIFO):** Conceptualized a First-In, First-Out (FIFO) queue architecture to maintain a strict "sliding window" of memory.
* **$O(1)$ Time Complexity Optimization:** Transitioned from standard list operations (`pop(0)`), which execute in $O(n)$ time, to the highly optimized `collections.deque` structure. 
* **Implementation:** Utilized `popleft()` combined with logical `and` conditional operators to efficiently purge stale data in $O(1)$ time. 

### 3. DSA Application (LeetCode 933 - Number of Recent Calls)
Applied the exact same Sliding Window/Queue logic to process continuous temporal data streams. Successfully managed a 3000ms moving window using `deque`, demonstrating how the underlying mechanics of AI memory management map directly to standard algorithmic problem-solving.