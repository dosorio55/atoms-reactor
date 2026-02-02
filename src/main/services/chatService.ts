import { ChatGoogleGenerativeAI } from '@langchain/google-genai'
import { HumanMessage, AIMessage, BaseMessage } from '@langchain/core/messages'
import { config } from 'dotenv'

// Load environment variables FIRST before any other imports that might use them
config()

class ChatService {
  private model: ChatGoogleGenerativeAI | null = null
  private messageHistory: BaseMessage[] = []

  constructor() {
    this.initializeModel()
  }

  private initializeModel(): void {
    const apiKey = process.env.GEMINI_API_KEY

    if (!apiKey) {
      console.error('GEMINI_API_KEY not found in environment variables')
      return
    }

    try {
      this.model = new ChatGoogleGenerativeAI({
        model: 'gemini-2.5-flash',
        apiKey: apiKey
      })
      console.log('ChatService initialized successfully')
    } catch (error) {
      console.error('Failed to initialize ChatService:', error)
    }
  }

  async sendMessage(userMessage: string): Promise<string> {
    if (!this.model) {
      throw new Error('Chat model not initialized. Please check your GEMINI_API_KEY.')
    }

    try {
      // Add user message to history
      this.messageHistory.push(new HumanMessage(userMessage))

      // Get response from model with conversation history
      const response = await this.model.invoke(this.messageHistory)

      // Add AI response to history
      this.messageHistory.push(new AIMessage(response.content as string))

      return response.content as string
    } catch (error) {
      console.error('Error sending message:', error)
      throw new Error(
        `Failed to get response from AI: ${error instanceof Error ? error.message : 'Unknown error'}`
      )
    }
  }

  clearHistory(): void {
    this.messageHistory = []
    console.log('Chat history cleared')
  }

  getHistoryLength(): number {
    return this.messageHistory.length
  }
}

// Export singleton instance
export const chatService = new ChatService()
