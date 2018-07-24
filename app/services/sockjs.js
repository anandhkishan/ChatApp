import Service from '@ember/service';
import Evented from '@ember/object/evented';
const {run} = Ember;
export default Service.extend(Evented,{
  socket: null,
init() {
this._super();
let socket = new SockJS('http://192.168.73.253:8080/ws');
socket.addEventListener('message', run.bind(this, (event)=> {
this.trigger('messageReceived', event.data);
console.log(event.data);
}));
this.set('socket',socket);
},
sendInfo(message) {
this.get('socket').send(message);
}
});
