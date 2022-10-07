export class SubChannel {
  constructor(
    id,
    channelName,
    created_by_user_id,
    membersIds,
    masterChannelId
  ) {
    this.id = id;
    this.channelName = channelName;
    this.created_by_user_id = created_by_user_id;
    this.membersIds = membersIds;
    this.masterChannelId = masterChannelId;
  }
}
