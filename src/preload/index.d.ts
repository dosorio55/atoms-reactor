import { ElectronAPI } from '@electron-toolkit/preload'

interface ChatAPI {
  sendMessage: (message: string) => Promise<{ success: boolean; data?: string; error?: string }>
  clearHistory: () => Promise<{ success: boolean; error?: string }>
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      chat: ChatAPI
    }
  }
}
