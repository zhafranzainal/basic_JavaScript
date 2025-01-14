// Locate the table dynamically by finding the table class instead of specific table ID
const table = document.querySelector("table.table_head");

if (!table) {
    console.error("Table with the class 'table_head' not found.");
} else {
    // Get all rows from the table
    const rows = table.querySelectorAll("tr");

    // Extract table data into a 2D array
    const data = Array.from(rows).map(row => {
        const cells = row.querySelectorAll("td, th");
        return Array.from(cells).map(cell => cell.textContent.trim());
    });

    // Convert the 2D array into TSV (tab-separated values) format
    const tsv = data.map(row => row.join("\t")).join("\n");

    // Log the TSV data in the console
    console.log("Copy the following data and paste it into Excel:");
    console.log(tsv);
}
