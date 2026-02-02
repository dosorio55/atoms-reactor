import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  chat: {
    sendMessage: async (
      message: string
    ): Promise<{ success: boolean; data?: string; error?: string }> => {
      return await ipcRenderer.invoke('chat:sendMessage', message)
    },
    sendMessageStream: (
      message: string,
      onChunk: (chunk: string) => void,
      onEnd: () => void,
      onError: (error: string) => void
    ): (() => void) => {
      const cleanup = (): void => {
        ipcRenderer.removeListener('chat:streamChunk', chunkListener)
        ipcRenderer.removeListener('chat:streamEnd', endListener)
        ipcRenderer.removeListener('chat:streamError', errorListener)
      }

      const chunkListener = (_event: Electron.IpcRendererEvent, chunk: string): void => onChunk(chunk)
      const endListener = (): void => {
        onEnd()
        cleanup()
      }
      const errorListener = (_event: Electron.IpcRendererEvent, error: string): void => {
        onError(error)
        cleanup()
      }

      ipcRenderer.on('chat:streamChunk', chunkListener)
      ipcRenderer.on('chat:streamEnd', endListener)
      ipcRenderer.on('chat:streamError', errorListener)

      ipcRenderer.send('chat:sendMessageStream', message)

      return cleanup
    },
    clearHistory: async (): Promise<{ success: boolean; error?: string }> => {
      return await ipcRenderer.invoke('chat:clearHistory')
    }
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
