# Day 5: Basic RAG (Retrieval-Augmented Generation) & Binary Search 🧠📚

## 🎯 Key Takeaways

Today's focus was on solving the LLM "knowledge cutoff" and "hallucination" problems by giving the AI access to private data. We also explored highly efficient searching algorithms in DSA.

### 1. Architectural Foundation of Basic RAG

* **Data Ingestion:** Used Python's built-in `open()` function to read local private documents (`.txt` files) into memory.
* **Prompt Augmentation:** Utilized Python `f-strings` to dynamically inject the retrieved document text and the user's query into a single, comprehensive prompt.
* **Strict Context Boundary:** Engineered the prompt to force the LLM to answer *only* based on the provided context, eliminating hallucinations.
* **Scaling Strategy (Theory):** Acknowledged the token limit constraints of LLMs when dealing with massive documents. Learned the concept of **Chunking**—breaking large texts into smaller, manageable blocks to retrieve only the most relevant sections before passing them to the AI.

### 2. DSA Application (LeetCode 704 - Binary Search)

* **Logarithmic Efficiency:** Implemented a `binary` search algorithm to find target values in a sorted array in $O(\log n)$ time, vastly outperforming linear $O(n)$ searches.
* **Pointer Mechanics:** Maintained `left` and `right` pointers to continuously halve the search space based on comparisons with the middle element.
* **Precision Math:** Used Python's floor division operator (`//`) to calculate the exact integer index for the middle element, avoiding float errors during index lookups.
