import React from 'react'
import {
  PaperClipIcon,
  PlusIcon,
  SparklesIcon,
  ArrowUpIcon,
  ChevronDownIcon
} from '@heroicons/react/24/solid'

interface ComposerToolbarProps {
  input: string
  isSending: boolean
  onSend: () => void
}

export function ComposerToolbar({
  input,
  isSending,
  onSend
}: ComposerToolbarProps): React.JSX.Element {
  return (
    <div className="chats__composerToolbar">
      <div className="chats__composerActions">
        <button className="chats__iconButton" type="button" aria-label="Attach file">
          <PaperClipIcon />
        </button>
        <button className="chats__iconButton" type="button" aria-label="Add tools">
          <PlusIcon />
        </button>
        <button className="chats__chip" type="button">
          <SparklesIcon />
          rag-v1
          <ChevronDownIcon />
        </button>
      </div>
      <button
        className="chats__sendButton"
        onClick={() => void onSend()}
        disabled={!input.trim() || isSending}
        type="button"
        aria-label="Send message"
      >
        <ArrowUpIcon />
      </button>
    </div>
  )
}
