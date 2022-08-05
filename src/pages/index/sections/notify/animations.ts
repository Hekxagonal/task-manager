import $ from 'jquery';

export const CallNotify = () => {
  $('#notifyModal').slideToggle(800, () => {
    $('#notifyContent').slideToggle();
  });

  console.log('notify');
};