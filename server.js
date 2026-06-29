import express from 'express';
import cors from 'cors';
import Groq from 'groq-sdk';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// ✅ Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ⚠️ Paste your Groq API key below (get it free at console.groq.com)
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// ✅ Auth stub — stops "Cannot POST /api/auth/login" errors
app.post('/api/auth/login', (req, res) => {
  res.json({ token: null });
});

// ✅ Anthropic-style proxy — powered by Groq (no Anthropic key needed)
app.post('/api/anthropic', async (req, res) => {
  try {
    const { messages, max_tokens } = req.body;
    const response = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      max_tokens: max_tokens || 1000,
      messages: messages,
    });
    res.json(response);
  } catch (err) {
    console.error('Groq report error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Groq AI chatbot
app.post('/api/chat', async (req, res) => {
  const { messages, systemPrompt } = req.body;
  try {
    const response = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      max_tokens: 500,
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages
      ],
    });
    res.json({ reply: response.choices[0].message.content });
  } catch (err) {
    console.error('Groq error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log('✅ SAPS iLodge server running at http://localhost:3000');
  console.log('   Open http://localhost:3000 in your browser');
});
