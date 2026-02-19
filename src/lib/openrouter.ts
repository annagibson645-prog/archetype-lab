
export interface ChatMessage {
    role: 'system' | 'user' | 'assistant';
    content: string;
}

export interface OpenRouterConfig {
    apiKey: string;
    model: string;
}

const DEFAULT_MODEL = 'openai/gpt-4o-mini';

export async function streamChat(
    messages: ChatMessage[],
    config: OpenRouterConfig,
    onChunk: (chunk: string) => void,
    onComplete: (fullText: string) => void,
    onError: (error: Error) => void
) {
    try {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${config.apiKey}`,
                'HTTP-Referer': window.location.origin, // Required by OpenRouter
                'X-Title': 'Archetype Lab'
            },
            body: JSON.stringify({
                model: config.model || DEFAULT_MODEL,
                messages: messages,
                stream: true
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || 'Failed to connect to OpenRouter');
        }

        if (!response.body) throw new Error('No response body');

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let fullText = '';

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value);
            const lines = chunk.split('\n');

            for (const line of lines) {
                if (line.startsWith('data: ') && line !== 'data: [DONE]') {
                    try {
                        const data = JSON.parse(line.slice(6));
                        const content = data.choices[0]?.delta?.content || '';
                        if (content) {
                            fullText += content;
                            onChunk(content);
                        }
                    } catch (e) {
                        console.warn('Error parsing stream chunk', e);
                    }
                }
            }
        }

        onComplete(fullText);

    } catch (error) {
        console.error('Chat Stream Error:', error);
        onError(error instanceof Error ? error : new Error('Unknown error'));
    }
}

export function getStoredConfig(): OpenRouterConfig | null {
    const key = localStorage.getItem('archetype_api_key');
    const model = localStorage.getItem('archetype_model') || DEFAULT_MODEL;

    if (!key) return null;
    return { apiKey: key, model };
}

export function saveConfig(apiKey: string, model: string = DEFAULT_MODEL) {
    localStorage.setItem('archetype_api_key', apiKey);
    localStorage.setItem('archetype_model', model);
}

export function clearConfig() {
    localStorage.removeItem('archetype_api_key');
    localStorage.removeItem('archetype_model');
}
