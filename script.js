function showArticle(id) {
 document.querySelectorAll('article').forEach(a => a.classList.remove('active'));
 document.getElementById(id).classList.add('active');
 document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
 document.getElementById(id + 'Btn').classList.add('active');
}