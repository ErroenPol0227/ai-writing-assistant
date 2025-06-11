import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography, Stack, CircularProgress, Alert } from '@mui/material';
import { summarizeText } from '../api/ai';

const Editor: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSummarize = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await summarizeText(content);
      setSummary(result);
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <Card sx={{ maxWidth: 800, margin: 'auto', mt: 4 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>Write New Post</Typography>
        <Stack spacing={2}>
          <TextField
            label="Title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="Content"
            fullWidth
            multiline
            rows={10}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button variant="contained" onClick={handleSummarize} disabled={loading}>
            {loading ? <CircularProgress size={24} /> : 'Summarize'}
          </Button>

          {error && <Alert severity="error">{error}</Alert>}
          {summary && (
            <Card variant="outlined">
              <CardContent>
                <Typography variant="subtitle1" gutterBottom>Summary:</Typography>
                <Typography>{summary}</Typography>
              </CardContent>
            </Card>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Editor;
