function search() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const items = list.getElementsByTagName("li");

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const text = item.textContent.toLowerCase();

    if (text.includes(input)) {
      // input ko string text ma xa ki nai check gareko
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
}
