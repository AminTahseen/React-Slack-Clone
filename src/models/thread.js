export class Thread {
  constructor(
    id,
    threadByUserId,
    channelId,
    threadContent,
    dateTimePosted,
    replyCount,
    reactionsCount
  ) {
    this.id = id;
    this.threadByUserId = threadByUserId;
    this.channelId = channelId;
    this.threadContent = threadContent;
    this.dateTimePosted = dateTimePosted;
    this.replyCount = replyCount;
    this.reactionsCount = reactionsCount;
  }
}
