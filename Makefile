build:
	docker build -t express-app .

run:
	docker run -d --name express-container -p 3001:3000 express-app

stop:
	docker stop express-container
	docker rm express-container
