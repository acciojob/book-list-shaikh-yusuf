//your JS code here. If required.
function addBook() {
            var title = document.getElementById('title').value;
            var author = document.getElementById('author').value;
            var isbn = document.getElementById('isbn').value;

            var table = document.getElementById('book-list');
            var row = table.insertRow(table.rows.length);

            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);

            cell1.innerHTML = title;
            cell2.innerHTML = author;
            cell3.innerHTML = isbn;
            cell4.innerHTML = '<button class="delete" onclick="deleteRow(this)">Clear</button>';

            // Clear the form fields
            document.getElementById('title').value = '';
            document.getElementById('author').value = '';
            document.getElementById('isbn').value = '';
        }

        function deleteRow(btn) {
            var row = btn.parentNode.parentNode;
            row.parentNode.removeChild(row);
        }