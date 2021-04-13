import instance from './baseApi';

/* GET */

export const getQuestion = async variables =>
  await instance.get(`/question/${variables.questionId}`);

export const getQuestions = async variables => {
  return await instance.get(`/question/challenge/${variables.challengePath}`);
};

/* POST */

export const createQuestion = async variables => {
  const newQuestion = { title: variables.title, body: variables.body };

  return await instance.post(
    `/question/create/${variables.challengePath}`,
    newQuestion
  );
};

export const updateQuestion = async (challengePath, title, body, id) =>
  await instance.post('/question/update', {
    challengePath,
    title,
    body,
    id
  });

export const deleteQuestion = async (challengePath, questionId) =>
  await instance.post('/question/delete-soft', { challengePath, questionId });
