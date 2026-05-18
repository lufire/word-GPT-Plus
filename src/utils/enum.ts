const storagePrefix = 'wordGptPlusV2'

export const localStorageKey = {
  // common
  chatMode: `${storagePrefix}:chatMode`,
  api: `${storagePrefix}:api`,
  localLanguage: `${storagePrefix}:localLanguage`,
  replyLanguage: `${storagePrefix}:replyLanguage`,
  insertType: `${storagePrefix}:insertType`,
  useWordFormatting: `${storagePrefix}:useWordFormatting`,
  useSelectedText: `${storagePrefix}:useSelectedText`,
  agentMaxIterations: `${storagePrefix}:agentMaxIterations`,
  threadId: `${storagePrefix}:threadId`,
  // official api
  apiKey: `${storagePrefix}:apiKey`,
  model: `${storagePrefix}:model`,
  customModel: `${storagePrefix}:customModel`,
  customModels: `${storagePrefix}:customModels`,
  temperature: `${storagePrefix}:temperature`,
  maxTokens: `${storagePrefix}:maxTokens`,
  basePath: `${storagePrefix}:basePath`,
  // azure api
  azureAPIKey: `${storagePrefix}:azureAPIKey`,
  azureAPIEndpoint: `${storagePrefix}:azureAPIEndpoint`,
  azureDeploymentName: `${storagePrefix}:azureDeploymentName`,
  azureMaxTokens: `${storagePrefix}:azureMaxTokens`,
  azureTemperature: `${storagePrefix}:azureTemperature`,
  azureAPIVersion: `${storagePrefix}:azureAPIVersion`,
  // gemini api
  geminiAPIKey: `${storagePrefix}:geminiAPIKey`,
  geminiMaxTokens: `${storagePrefix}:geminiMaxTokens`,
  geminiTemperature: `${storagePrefix}:geminiTemperature`,
  geminiModel: `${storagePrefix}:geminiModel`,
  geminiCustomModel: `${storagePrefix}:geminiCustomModel`,
  geminiCustomModels: `${storagePrefix}:geminiCustomModels`,
  // ollama api
  ollamaEndpoint: `${storagePrefix}:ollamaEndpoint`,
  ollamaModel: `${storagePrefix}:ollamaModel`,
  ollamaTemperature: `${storagePrefix}:ollamaTemperature`,
  ollamaCustomModel: `${storagePrefix}:ollamaCustomModel`,
  ollamaCustomModels: `${storagePrefix}:ollamaCustomModels`,
  // groq api
  groqAPIKey: `${storagePrefix}:groqAPIKey`,
  groqTemperature: `${storagePrefix}:groqTemperature`,
  groqMaxTokens: `${storagePrefix}:groqMaxTokens`,
  groqModel: `${storagePrefix}:groqModel`,
  groqCustomModel: `${storagePrefix}:groqCustomModel`,
  groqCustomModels: `${storagePrefix}:groqCustomModels`,
  // proxy
  enableProxy: `${storagePrefix}:enableProxy`,
  proxy: `${storagePrefix}:proxy`,
  defaultSystemPrompt: `${storagePrefix}:defaultSystemPrompt`,
  defaultPrompt: `${storagePrefix}:defaultPrompt`,
  savedPrompts: `${storagePrefix}:savedPrompts`,
  customBuiltInPrompts: `${storagePrefix}:customBuiltInPrompts`,
  enabledWordTools: `${storagePrefix}:enabledWordTools`,
  enabledGeneralTools: `${storagePrefix}:enabledGeneralTools`,
} as const
