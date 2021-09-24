// import EventEmitter from "eventemitter3";

// export default class Application extends EventEmitter {
//   static get events() {
//     return {
//       READY: "ready",
//     };
//   }

//   constructor() {
//     super();
//     this.emojis = [];
//     this.banana = "🍌";
//     this.emit(Application.events.READY);
//   }
//   setEmojis(emojis) {
//     this.emojis = emojis;
//     const wrapper = document.querySelector('#emojis');
//     this.emojis.forEach(e => {
//       const emoji = document.createElement('div');
//       emoji.textContent = e;
//       wrapper.appendChild(emoji)
//     })
//   }

//   addBananas() {
//     const wrapper = document.querySelector('#emojis');
//     wrapper.innerHTML = '';
//     this.emojis.map(e => {
//       const paragraph = document.createElement('p');
//       paragraph.textContent = this.banana + e;
//       console.log(paragraph)
//       wrapper.appendChild(paragraph);
//     })
//   }
// }
import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";  
    this.emit(Application.events.READY);
    this.div = document.getElementById("emojis")
  }
  setEmojis(emojis) {
    this.emojis = emojis;

    this.removeAllChildNodes(this.div)
    
    this.emojis.forEach(emoji => {
      const p = document.createElement("p")
      p.textContent = emoji;
      this.div.appendChild(p)
    })
  }

  addBananas() {
   const monkeys = this.emojis.map(element => {
      return element += this.banana
    })

    this.setEmojis(monkeys)
  }

   removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
}
