export default (header, template) => {
  document.querySelector('.modal .head h3').textContent = header;
  document.querySelector('.modal .content').innerHTML = template;
};
