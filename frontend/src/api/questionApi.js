import instance from './baseApi';

/* GET */

export const getQuestion = async variables =>
  await instance.get(`/question/${variables.questionId}`);

export const getQuestions = async variables =>
  await instance.get(`/question/challenge/${variables.challengePath}`);

/* POST */

export const createQuestion = async variables => {
  const newQuestion = { title: variables.title, body: variables.body };

  return await instance.post(
    `/question/create/${variables.challengePath}`,
    newQuestion
  );
};

export const updateQuestion = async variables =>
  await instance.post('/question/update', variables);

export const deleteQuestion = async variables =>
  await instance.post('/question/delete-soft', variables);
