import React, { useMemo, useState } from 'react'
import { Button, Input, Card, CardContent } from '../../components/ui'

import './Chats.css'

type ChatRole = 'user' | 'assistant'

interface ChatMessage {
  id: string
  role: ChatRole
  content: string
}

function Chats(): React.JSX.Element {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      role: 'assistant',
      content: 'Hey! Ask me anything and I will help.'
    }
  ])
  const [input, setInput] = useState('')
  const [isSending, setIsSending] = useState(false)

  const replyTemplates = useMemo(
    () => [
      "Got it. Here's a quick approach:",
      'Here is a concise answer:',
      'Let’s break it down:',
      'Sure — here is what I would do:'
    ],
    []
  )

  const makeAssistantReply = (prompt: string): string => {
    const header = replyTemplates[Math.floor(Math.random() * replyTemplates.length)]
    const trimmed = prompt.trim()

    if (!trimmed) return 'Send a message and I will reply.'

    return `${header}\n\n${trimmed}\n\nIf you want, tell me what stack / constraints you have and I can tailor it.`
  }

  const handleSend = async (): Promise<void> => {
    const prompt = input.trim()
    if (!prompt || isSending) return

    setInput('')

    const userMessage: ChatMessage = {
      id: `u_${Date.now()}`,
      role: 'user',
      content: prompt
    }

    setMessages((prev) => [...prev, userMessage])
    setIsSending(true)

    await new Promise((resolve) => setTimeout(resolve, 450))

    const assistantMessage: ChatMessage = {
      id: `a_${Date.now()}`,
      role: 'assistant',
      content: makeAssistantReply(prompt)
    }

    setMessages((prev) => [...prev, assistantMessage])
    setIsSending(false)
  }

  return (
    <div className="chats">
      <div className="chats__messages">
        {messages.map((m) => (
          <div
            key={m.id}
            className={
              m.role === 'user'
                ? 'chats__messageRow chats__messageRow--user'
                : 'chats__messageRow chats__messageRow--assistant'
            }
          >
            <Card className="chats__bubble">
              <CardContent>
                <div className="chats__messageContent">{m.content}</div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <div className="chats__composer">
        <Input
          placeholder="Enter message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') void handleSend()
          }}
          fullWidth
        />
        <Button onClick={() => void handleSend()} disabled={!input.trim() || isSending}>
          {isSending ? '...' : 'Send'}
        </Button>
      </div>
    </div>
  )
}

export default Chats
