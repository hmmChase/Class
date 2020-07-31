# Challenge Board

## [View Deployment](https://challenge-board.vercel.app/)

## [Trello board](https://trello.com/b/rBx6i0Lt/challenge-board)

## Functionality

- Authenticate via Discord OAuth
- Sign Out
- CRUD Challenges
- CRUD Questions
- CRUD Comments

## Element and Function Plan

- `-` = element
- `*` = function

### Index - Student View

- [View design comp](https://www.figma.com/proto/807vCWbzrJnxRRPmhN0KU4/ChallengeBoards?node-id=24%3A810&viewport=1073%2C482%2C0.5956040024757385&frame-preset-name=Desktop&scaling=min-zoom)

```text
body
  header
    - a.img.home
      * redirect to index
    - h1
    - a.img.user-avatar

  main
    section.challenge
      div.container.challenge
      - p.challenge-number
      - h2
      - embed.video
      - p.desc

      div.container.submit-project
      - p.label
      - h3
      - p.desc
      - button.submit.project
        * onClick
          * display submit-project modal

    section.questions
      - h2
      - button.submit.question
        * onClick
          * display post-question modal
      - ul.questions
        - li.question
          - span.author-name
          - span.date-created
          * if teacher commented
            - img.answered
          - p.question-title
          * if teacher commented
            - span.answer-count
          * if has comments
            - span.comment-count
          - a.view-question
            * onClick
              * display question-detail view
```

### Index - Teacher View

- [View design comp](https://www.figma.com/proto/807vCWbzrJnxRRPmhN0KU4/ChallengeBoards?node-id=62%3A4895&viewport=1073%2C482%2C0.5956040024757385&frame-preset-name=Desktop&scaling=min-zoom)

```text
...student view
difference:

  section.challenge
    div.container.view-submissions
    - p.label
    - h3
    - p.desc
    - button.view-submissions
      * not implemented for v1

    div.container.challenge
    - p.challenge-number
    - h2
    - embed.video
    - p.desc
```

### question-detail

```text
section.questions.detail
- p.label
- h3
- button.back
  * onClick
    * display section.questions

div.container.question
- span.author-name
- span.date-created
- p.question-title
- p.question-body
  * show <= 3 lines
  * if > 3 lines
    - button.show.more
      * onClick
        - p.question-body
        - button.show.less
          * onClick
            * show <= 3 lines

div.container.comments
- ul.comments
  - li.comment
    - span.author-name
    - span.time-created
    - span.date-created
    - p.comment-body

- input.text.comment
  - placeholder
  - img.submit.icon
```

### post-question modal

```text
- h3
- p.desc
- input.text.question-title
  - placholder
  - span.letter-count
- input.textarea.details
- button.cancel
  * onClick
    * close modal
- button.submit.post
  * onClick
    * make request to server
    * add question to store
    * close modal
```

### submit-project modal

```text
- h3
- p.desc
- input.text.github-link
  - placholder
- input.text.additional-link
  - placholder
    * optional
- input.textarea.comments
  - placholder
    * optional
- button.cancel
  * onClick
    * close modal
- button.submit.post
  * onClick
    * make request to server
    * add project to store
    * send email confirmation
    * display project-submitted modal
```

### project-submitted modal

```text
- h3
- p.message
- button.close
  * onClick
    * close modal
```

## Data Schema

```text
User {
  id
  createdAt
  name
  email
  password
  avatarUrl
  role [teacher, student]
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
  [Comments]
}

Comment {
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

### Comment

- `GET /comment` - get all comments
- `GET /comment/:id` - get a comment
- `POST /comment` - create a comment
- `PUT /comment/:id` - update a comment
- `DELETE /comment/:id` - delete a comment

## Future Features

- ablity to search questions
