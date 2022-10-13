export class Message {
  constructor(id, message_to_user_id, message_from_user_id, message) {
    this.id = id;
    this.message_to_user_id = message_to_user_id;
    this.message_from_user_id = message_from_user_id;
    this.message = message; // array of MessageContent
  }
}
export class MessageContent {
  constructor(id, to_user_id, from_user_id, message_content, date_send) {
    this.id = id;
    this.to_user_id = to_user_id;
    this.from_user_id = from_user_id;
    this.message_content = message_content;
    this.date_send = date_send;
  }
}
