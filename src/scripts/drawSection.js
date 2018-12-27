export default (template) => {
  const section = document.querySelector('section');
  if (section) {
    document.querySelector('#content').removeChild(section);
  }
  const content = document.querySelector('#content');
  content.innerHTML = template;
};
