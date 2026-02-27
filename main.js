// Publication filter
function filterPubs(tag, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.pub-card').forEach(item => {
    const tags = item.dataset.tags || '';
    item.style.display = (tag === 'all' || tags.includes(tag)) ? '' : 'none';
  });
}

// Mark active nav link based on current page
document.addEventListener('DOMContentLoaded', () => {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html') ||
        (page === 'index.html' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
});
