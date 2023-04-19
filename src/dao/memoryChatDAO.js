const { normalizedData } = require('../normalize/normal')


class MemoryChatDAO { 

  constructor( chat ) {
      this.chat = chat
  }
  

  getAll() {
    return normalizedData(this.chat.chat)
  }
 

  async add( message ) {
    this.chat.chat.push({
        user: { 
          email: message.author.id,
          name: message.author.name,
          surmame: message.author.surname,
          age: message.author.age,
          nickname: message.author.nickname,
          avatar: message.author.avatar,
        },
        message: {
          timestamp: message.date,
          text: message.text
          } 
      })
    return
  }


}


module.exports = MemoryChatDAO