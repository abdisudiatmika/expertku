const NewComment = require("../../Domains/comments/entities/NewComment");

class AddCommentUseCase {
  constructor({ commentRepository, threadRepository }) {
    this._commentRepository = commentRepository;
    this._threadRepository = threadRepository;
  }

  async execute(useCasePayload) {
    await this._threadRepository.verifyAvailableThreadById(
      useCasePayload.threadId
    );
    const addComment = new AddComment(useCasePayload);
    return this._commentRepository.addComment(addComment);
  }
}
module.exports = AddCommentUseCase;
