const canvas = document.getElementById("gameBoard")
const context = canvas.getContext("2d")

context.rect(20, 20, 8, 8)
context.rect(20, 28, 8, 8)
context.fill()

context.strokeStyle = "white"
context.lineWidth = 1
context.strokeRect(20, 20, 8, 8)
context.strokeRect(20, 28, 8, 8)
context.stroke()
