# Day 2: Taming the LLM - JSON Parsing and Prompting 🛠️

**Date:** March 18, 2026

## 📝 Today I Learned (TIL)

1. **Why Agents Need JSON:**
   LLMs are inherently chatty. However, in an Agentic workflow, the AI needs to communicate with other software (like databases or APIs). Software cannot read conversational English; it requires structured data. Today, I learned how to force an LLM to output pure JSON.

2. **The Output Parser Technique:**
   By combining a strict System Prompt ("You MUST respond ONLY in valid JSON format") with the API's `response_format={"type": "json_object"}`, I successfully extracted structured entities (Name, Age, Location) from unstructured user text. 

3. **DSA Connection (Two Pointers):**
   I solved the Valid Palindrome problem using the Two Pointers technique. This O(n) approach is highly memory-efficient for scanning strings from both ends. Understanding efficient string manipulation is crucial because LLM inputs and outputs are fundamentally just large strings of text.

## 🎯 Key Takeaway
Prompt Engineering is less about "talking" to the AI and more about "constraining" it. Setting boundaries (like enforcing JSON) is what turns a chatbot into a functional backend worker.