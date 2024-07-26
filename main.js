document.getElementById("loadData").addEventListener("click", function () {
  fetchData()
    .then((data) => renderTable(data))
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("result").innerHTML = "error occured:" + error;
    });
});
function fetchData() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  return new Promise((resolve, reject) => {
    fetch(url).then((response) => {
      if (!response.ok) {
        reject("Network response not ok:" + response.statusText);
      } else {
        resolve(response.json());
      }
    });
  });
}
function renderTable(data) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";
  let table = document.createElement("table");
  let header = document.createElement("tr");
  header.innerHTML = "<th>User-ID</th><th>ID</th><th>Title</th><th>Body</th>";
  table.appendChild(header);
  data.forEach((element) => {
    let row = document.createElement("tr");
    row.innerHTML = `<td>${element.userId}</td><td>${element.id}</td><td>${element.title}</td><td>${element.body}</td>`;
    table.appendChild(row);
  });
  /* data.forEach((element) => {
    let row = document.createElement("tr");
    row.innerHTML = `<td>${element.userId}</td><td>${element.id}</td><td>${element.title}</td><td>${element.body}</td>`;
    table.appendChild(row);
  });
  */

  resultDiv.appendChild(table);
}
