# Day 6: Advanced RAG (Embeddings) & Linked Lists 🧠🔢

## 🎯 Key Takeaways

Today's focus shifted from simple text matching to semantic understanding. We explored how AI actually "reads" and searches through massive datasets using mathematical representations, alongside mastering one of the most fundamental data structures in computer science.

### 1. Advanced RAG & Vector Search
* **Embeddings:** Learned that AI doesn't understand raw text. Instead, it converts text chunks into `embeddings`—high-dimensional lists of numbers (vectors) that capture the actual *meaning* and context of the words.
* **Vector Databases:** Understood the necessity of specialized databases (like ChromaDB, Pinecone) that store these vectors.
* **Semantic Search:** Executed similarity searches where the system finds relevant documents based on mathematical proximity (Cosine Similarity) rather than exact keyword matches. This allows the AI to match a query like "pet" to a document containing "dogs and puppies".

### 2. DSA Application (LeetCode 206 - Reverse Linked List)
* **Linked List Architecture:** Explored how data can be stored in non-contiguous memory using nodes. Each node contains data and a "next" pointer acting as a link to the subsequent node.
* **In-Place Reversal:** Mastered the logic of reversing a linked list without using extra memory ($O(1)$ space). 
* **Pointer Manipulation:** Safely updated node directions by utilizing a `temp` variable to hold the reference to the next node before overwriting the current node's pointer, ensuring the chain doesn't break.