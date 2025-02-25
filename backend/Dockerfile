FROM golang:1.23-alpine

WORKDIR /app
COPY backend/go.mod backend/go.sum ./
RUN go mod download
COPY backend/ .
RUN go build -o main .


ENV PORT=10000
EXPOSE $PORT

CMD ["./main"]
