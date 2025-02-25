package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/yourusername/task-management-system/ai"
	"github.com/yourusername/task-management-system/auth"
	"github.com/yourusername/task-management-system/db"
	"github.com/yourusername/task-management-system/tasks"
	"github.com/yourusername/task-management-system/websocket"
)

func main() {
	//err := godotenv.Load()
	//if err != nil {
	//	log.Fatal("Error loading .env file")
	//}

	db.InitDB()

	r := gin.Default()

	r.POST("/login", auth.Login)
	r.POST("/register", auth.Register)

	authorized := r.Group("/")
	authorized.Use(auth.JWTMiddleware())
	{
		authorized.GET("/tasks", tasks.GetTasksHandler)
		authorized.POST("/tasks", tasks.CreateTaskHandler)
		authorized.PUT("/tasks/:id", tasks.UpdateTaskHandler)
		authorized.DELETE("/tasks/:id", tasks.DeleteTaskHandler)
		authorized.GET("/suggestions", ai.GetSuggestionsHandler)
	}

	r.GET("/ws", websocket.HandleWebSocket)

	port := os.Getenv("PORT")
	if port == "" {
		port = "10000"
	}
	log.Printf("Server starting on port %s", port)
	if err := http.ListenAndServe(":"+port, r); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}

	r.Run(":" + port)
}
