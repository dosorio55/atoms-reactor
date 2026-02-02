import React, { useMemo, useRef, useState } from 'react'
import { Button, Card, CardContent } from '../../components/ui'
import { ComposerToolbar } from './ComposerToolbar'

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
  const [error, setError] = useState<string | null>(null)
  const [lastPrompt, setLastPrompt] = useState<string | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const maxTextareaRows = 5
  const maxTextareaHeight = useMemo(() => {
    const lineHeight = 20
    const verticalPadding = 18
    return lineHeight * maxTextareaRows + verticalPadding
  }, [maxTextareaRows])

  const resizeTextarea = (): void => {
    if (!textareaRef.current) return
    const el = textareaRef.current
    el.style.height = 'auto'
    const nextHeight = Math.min(el.scrollHeight, maxTextareaHeight)
    el.style.height = `${nextHeight}px`
    el.style.overflowY = el.scrollHeight > maxTextareaHeight ? 'auto' : 'hidden'
  }

  const handleSend = async (prompt?: string): Promise<void> => {
    const messageToSend = prompt || input.trim()
    if (!messageToSend || isSending) return

    setInput('')
    setError(null)
    requestAnimationFrame(() => resizeTextarea())

    const userMessage: ChatMessage = {
      id: `u_${Date.now()}`,
      role: 'user',
      content: messageToSend
    }

    setMessages((prev) => [...prev, userMessage])
    setLastPrompt(messageToSend)
    setIsSending(true)

    try {
      const response = await window.api.chat.sendMessage(messageToSend)

      if (response.success && response.data) {
        const assistantMessage: ChatMessage = {
          id: `a_${Date.now()}`,
          role: 'assistant',
          content: response.data
        }
        setMessages((prev) => [...prev, assistantMessage])
        return
      }

      setError('Something went wrong. Please try again.')
    } catch (err) {
      setError('Something went wrong. Please try again.')

      console.error(err)
    } finally {
      setIsSending(false)
    }
  }

  const handleRetry = (): void => {
    if (lastPrompt) {
      void handleSend(lastPrompt)
    }
  }

  const handleInputChange = (value: string): void => {
    setInput(value)
    setError(null)
    requestAnimationFrame(() => resizeTextarea())
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
        {isSending && (
          <div className="chats__messageRow chats__messageRow--assistant">
            <Card className="chats__bubble">
              <CardContent>
                <div className="chats__loading">
                  <span className="chats__loadingDot"></span>
                  <span className="chats__loadingDot"></span>
                  <span className="chats__loadingDot"></span>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
        {error && (
          <div className="chats__messageRow chats__messageRow--assistant">
            <Card className="chats__bubble chats__bubble--error">
              <CardContent>
                <div className="chats__errorContent">
                  <div className="chats__errorMessage">{error}</div>
                  <Button onClick={handleRetry} disabled={isSending} variant="secondary">
                    {isSending ? '...' : 'Retry'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      <div className="chats__composer">
        <div className="chats__composerCard">
          <textarea
            ref={textareaRef}
            className="chats__composerInput"
            placeholder="Send a message to the model..."
            value={input}
            onChange={(e) => handleInputChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                void handleSend()
              }
            }}
            rows={1}
          />
          <ComposerToolbar input={input} isSending={isSending} onSend={handleSend} />
        </div>
      </div>
    </div>
  )
}

export default Chats
