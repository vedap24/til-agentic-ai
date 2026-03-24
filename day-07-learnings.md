# Day 7: Agentic RAG & Tree Data Structures 🧠🤖

## 🎯 Key Takeaways

Today marked the completion of Week 1! We combined the tool-calling abilities from Day 4 with the vector search from Day 6 to build a true "Agent." In DSA, we transitioned from linear data structures to hierarchical ones.

### 1. Agentic RAG (The Ultimate Brain)
* **Agentic Routing:** Learned how LLMs autonomously decide *which* tool to use based on the `description` field provided in the tool's JSON schema. 
* **Multi-Tool Architecture:** Successfully provided the AI with multiple capabilities (a calculator and a vector database searcher) simultaneously.
* **Fallback Logic:** Implemented an `else` block to handle standard conversational queries where no tools are required, ensuring the agent remains a natural conversationalist while possessing advanced capabilities.

### 2. DSA Application (LeetCode 104 - Maximum Depth of Binary Tree)
* **Hierarchical Data:** Explored `Tree` data structures, which branch out top-to-bottom using `left` and `right` pointers, mirroring real-world hierarchical data (unlike the linear `next` pointer in Linked Lists).
* **Recursion:** Mastered the elegant use of recursive functions to traverse branches and calculate the maximum depth by continually breaking the problem down into smaller sub-problems.