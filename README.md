# Challenge Board

## data schema
```
User {
  id
  createdAt
  name
  email
  password
  avatarUrl
  role [admin, student, teacher]
  [Questions]
}

Challenge {
  id
  createdAt
  title
  description
  videoUrl
  User
}

Question {
  id
  createdAt
  title
  body
  User
  [Answers]
}

Answer {
  id
  createdAt
  body
  User
}
```

## API

- `/api/v1/` - route prefix

### User
- `GET /user/:id` - get a user
- `POST /user` - create a user
- `DELETE /user/:id` - delete a user


### Challenge
- `GET /challenge` - get all challenges
- `GET /challenge/:id` - get a challenge
- `POST /challenge` - create a challenge
- `PUT /challenge/:id` - update a challenge
- `DELETE /challenge/:id` - delete a challenge


### Question
- `GET /question` - get all questions
- `GET /question/:id` - get a question
- `POST /question` - create a question
- `PUT /question/:id` - update a question
- `DELETE /question/:id` - delete a question


### Answer
- `GET /answer` - get all answers
- `GET /answer/:id` - get a answer
- `POST /answer` - create a answer
- `PUT /answer/:id` - update a answer
- `DELETE /answer/:id` - delete a answer

## User Interactions

- Sign Up
- Log In
- Sign Out
- CRUD Challenge
- CRUD Question
- CRUD Answer