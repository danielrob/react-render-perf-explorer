function pageLog(textToLog) {
  const pageLogNode = document.getElementById('page-log') || {};

  pageLogNode.innerText = (textToLog + '\n\n' + pageLogNode.innerText).replaceAll('.', '').slice(0, 400) + '...';
}

export { pageLog };
