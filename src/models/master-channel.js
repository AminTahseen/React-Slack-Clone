export class MasterChannel {
  constructor(id, channelName, created_by_user_id, membersIds) {
    this.id = id;
    this.channelName = channelName;
    this.created_by_user_id = created_by_user_id;
    this.membersIds = membersIds;
  }
}
