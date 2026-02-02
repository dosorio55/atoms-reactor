# AI Chat Setup Guide

This document explains how to set up and use the AI chat feature powered by LangChain and Google Gemini.

## Prerequisites

1. Node.js and pnpm installed
2. Google Gemini API key

## Setup Instructions

### 1. Install Dependencies

```bash
pnpm install
```

This will install the following new dependencies:
- `@langchain/core` - Core LangChain functionality
- `@langchain/google-genai` - Google Gemini integration for LangChain
- `langchain` - Main LangChain library
- `dotenv` - Environment variable management

### 2. Configure API Key

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your Gemini API key:
   ```
   GEMINI_API_KEY=your-actual-api-key-here
   ```

3. Get your API key from: https://makersuite.google.com/app/apikey

### 3. Run the Application

```bash
pnpm dev
```

## Architecture

### Backend (Main Process)

- **[`src/main/services/chatService.ts`](src/main/services/chatService.ts)** - LangChain chat service that:
  - Initializes the Gemini model
  - Maintains conversation history
  - Handles message sending and responses

- **[`src/main/index.ts`](src/main/index.ts)** - IPC handlers:
  - `chat:sendMessage` - Sends user message to AI and returns response
  - `chat:clearHistory` - Clears conversation history

### IPC Bridge (Preload)

- **[`src/preload/index.ts`](src/preload/index.ts)** - Exposes chat API to renderer:
  - `window.api.chat.sendMessage(message: string)`
  - `window.api.chat.clearHistory()`

- **[`src/preload/index.d.ts`](src/preload/index.d.ts)** - TypeScript definitions for the API

### Frontend (Renderer)

- **[`src/renderer/src/pages/chats/Chats.tsx`](src/renderer/src/pages/chats/Chats.tsx)** - Chat UI that:
  - Displays conversation messages
  - Sends user input to backend via IPC
  - Handles loading states and errors

## Features

- ✅ Real-time AI chat powered by Google Gemini
- ✅ Conversation history maintained across messages
- ✅ Error handling with user-friendly messages
- ✅ Loading states during AI response
- ✅ Secure IPC communication between frontend and backend

## Troubleshooting

### "Chat model not initialized" Error

This means the `GEMINI_API_KEY` is not set or invalid. Check:
1. `.env` file exists in the project root
2. API key is correctly set in `.env`
3. Restart the application after adding the key

### TypeScript Errors

If you see TypeScript errors about missing modules, run:
```bash
pnpm install
```

### API Rate Limits

Google Gemini has rate limits. If you encounter rate limit errors:
- Wait a few moments before sending more messages
- Check your API quota at https://makersuite.google.com/

## Future Enhancements

- [ ] Add streaming responses for real-time typing effect
- [ ] Implement conversation persistence (save/load chats)
- [ ] Add support for multiple AI providers (OpenAI, Anthropic, etc.)
- [ ] Add system prompts and temperature controls
- [ ] Implement chat history management (clear, export)
