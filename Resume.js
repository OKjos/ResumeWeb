function handleResumeButtonClick() {
    const downloadLink = document.createElement('a');
    downloadLink.href = 'CodingResume.pdf';
    downloadLink.download = 'CodingResume.pdf';
    downloadLink.click();
}
