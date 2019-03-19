# nest-samples-19-auth
### Auth example with NestJs
Taken from [docs](https://docs.nestjs.com/techniques/authentication)

### Install
```
nvm use 9 # or above
yarn install
yarn start
```

1. Open [localhost:3000/auth/token](http://localhost:3000/auth/token) to get a backdoor token. 
2. Using Postman, append header `Authorization`: `Bearer {token}` to `GET http://localhost:3000/auth/data`
