# Day 4: Tool Calling Architecture & LIFO Stack Mechanics 🛠️

## 🎯 Key Takeaways

Today's focus was on giving the LLM "hands" by implementing Function Calling (Tool Calling), bridging the gap between text generation and programmatic execution. We also explored Last-In, First-Out (LIFO) data structures.

### 1. Architectural Foundation of Tool Calling
* **Function Definition:** Transitioned from pure prompt engineering to defining discrete Python `function` blocks that execute specific, deterministic tasks (e.g., mathematical calculations).
* **Tool Schema Generation:** Engineered a structured "Menu Card" using nested `dictionary` formats to map function names, descriptions, and required parameters, exposing our local capabilities to the LLM.
* **API Integration:** Passed the tool schema to the LLM utilizing the `tools` parameter during the initial API call.
* **Conditional Interception:** Implemented robust `if` logic to detect and intercept `tool_calls` from the AI's response stream.
* **Data Serialization:** Utilized the `json` module (`json.loads`) to deserialize stringified arguments from the LLM back into native Python dictionaries for local execution.
* **The 2-Step API Protocol:** Successfully handled the tool execution loop by using `append` to inject both the AI's tool request and the local function's execution result into the message history, followed by a **2nd API call** to allow the LLM to synthesize the final natural language response.

### 2. DSA Application (LeetCode 20 - Valid Parentheses)
* **LIFO Mechanics:** Explored the core concepts of Last-In, First-Out architecture using a `stack` data structure. 
* **State Mapping:** Utilized a dictionary to maintain strict key-value mappings between closing and opening brackets.
* **Algorithmic Implementation:** Processed continuous string streams using list appending for 'push' operations and the `pop` method to validate and resolve nested structures in $O(n)$ time complexity. This perfectly mirrors the nested execution flow of main programs calling sub-routines (tools).