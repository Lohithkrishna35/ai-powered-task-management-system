package ai

import (
	"bytes"
	"encoding/json"
	"net/http"
	"os"
)

func GetTaskSuggestions(prompt string) (string, error) {
	apiKey := os.Getenv("OPENAI_API_KEY")
	url := "https://api.openai.com/v1/engines/davinci-codex/completions"

	requestBody, _ := json.Marshal(map[string]interface{}{
		"prompt":      prompt,
		"max_tokens":  100,
		"temperature": 0.7,
	})

	req, err := http.NewRequest("POST", url, bytes.NewBuffer(requestBody))
	if err != nil {
		return "", err
	}

	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+apiKey)

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	var result map[string]interface{}
	json.NewDecoder(resp.Body).Decode(&result)

	return result["choices"].([]interface{})[0].(map[string]interface{})["text"].(string), nil
}
