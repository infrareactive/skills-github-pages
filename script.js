document.getElementById('export-btn').addEventListener('click', () => {
    if (logs.length === 0) {
        alert("No logs available to export.");
        return;
    }

    // Prepare CSV content
    let csvContent = "data:text/csv;charset=utf-8,Event ID,Timestamp,Status\n";
    logs.forEach((log, index) => {
        csvContent += `${index + 1},${log.time},REACTIVE_SUCCESS\n`;
    });

    // Create a virtual download link
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "system_logs.csv");
    document.body.appendChild(link);

    link.click(); // Trigger the download
    document.body.removeChild(link);
});

